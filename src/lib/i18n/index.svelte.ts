import { browser } from '$app/environment';

// Import message files
import enMessages from './messages/en.json';
import csMessages from './messages/cs.json';

// Type for nested message structure
type MessageValue = string | Record<string, any>;
type Messages = Record<string, MessageValue>;

// Available locales
export const locales = ['en', 'cs'] as const;
export type Locale = (typeof locales)[number];
export const baseLocale: Locale = 'en';

// Message storage
const messages: Record<Locale, Messages> = {
	en: enMessages as Messages,
	cs: csMessages as Messages,
};

// Cookie configuration
const LOCALE_COOKIE_NAME = 'locale';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Helper to get locale from cookie
function getCookieLocale(): Locale | null {
	if (!browser) return null;
	const match = document.cookie.match(new RegExp(`(^| )${LOCALE_COOKIE_NAME}=([^;]+)`));
	const cookieValue = match?.[2];
	if (cookieValue && locales.includes(cookieValue as Locale)) {
		return cookieValue as Locale;
	}
	return null;
}

// Helper to set locale cookie
function setLocaleCookie(locale: Locale): void {
	if (!browser) return;
	document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}`;
}

// Function to detect browser language preference
function getBrowserLocale(): Locale | null {
	if (!browser) return null;

	// Check navigator.language and navigator.languages
	const browserLangs: string[] = [];
	if (navigator.languages) {
		browserLangs.push(...navigator.languages);
	}
	if (navigator.language) {
		browserLangs.push(navigator.language);
	}

	// Extract base language codes and find a match
	for (const lang of browserLangs) {
		const baseLang = lang.split('-')[0].toLowerCase();
		if (locales.includes(baseLang as Locale)) {
			return baseLang as Locale;
		}
	}

	return null;
}

// Initialize locale with proper fallback chain
let initialLocale: Locale = baseLocale;
if (browser) {
	// 1. First check cookie
	const cookieLocale = getCookieLocale();
	if (cookieLocale) {
		initialLocale = cookieLocale;
	} else {
		// 2. Check browser preference
		const browserLocale = getBrowserLocale();
		if (browserLocale) {
			initialLocale = browserLocale;
			// Set cookie for next time
			setLocaleCookie(browserLocale);
		}
	}
	// Update HTML lang attribute to match detected locale
	document.documentElement.lang = initialLocale;
}

// Store the current locale as a reactive state
let currentLocale = $state<Locale>(initialLocale);

// Helper function to access nested properties using dot notation
function getNestedProperty(obj: any, path: string): any {
	return path.split('.').reduce((current: any, key: string) => current?.[key], obj);
}

// Template literal parser for parameterized messages
function parseTemplate(template: string, params: Record<string, any> = {}): string {
	if (!template || typeof template !== 'string') return template;

	return template.replace(/\{([^}]+)\}/g, (match, key) => {
		const value = params[key.trim()];
		return value !== undefined ? String(value) : match;
	});
}

// Simple cache for messages
const messageCache = new Map<string, string | ((params: Record<string, any>) => string)>();

// Type for the message accessor proxy - use index signature that returns string
type MessageAccessor = Record<string, string>;

// Create the message accessor that handles bracket notation
export const m: MessageAccessor = new Proxy({} as MessageAccessor, {
	get(target, key: string | symbol): string {
		// Handle special properties
		if (typeof key === 'symbol' || key === 'toJSON') {
			return '';
		}

		// Access currentLocale reactively
		const locale = currentLocale;
		const cacheKey = `${locale}.${key}`;

		// Check cache first
		const cached = messageCache.get(cacheKey);
		if (cached) {
			// If cached value is a function, call it with empty params for default
			return typeof cached === 'function' ? cached({}) : cached;
		}

		// Get the value from messages
		const value = getNestedProperty(messages[locale], key);

		if (typeof value === 'string') {
			// If it contains template parameters, store the function but return default string
			if (value.includes('{')) {
				const fn = (params: Record<string, any>) => parseTemplate(value, params);
				messageCache.set(cacheKey, fn);
				// Return the template string with empty placeholders for default display
				return parseTemplate(value, {});
			}
			// Otherwise return the string directly
			messageCache.set(cacheKey, value);
			return value;
		}

		// Return the key as fallback
		return String(key);
	},
});

// Function for parameterized messages
export function t(key: string, params: Record<string, any> = {}): string {
	const locale = currentLocale;
	const cacheKey = `${locale}.${key}`;

	// Check cache first
	const cached = messageCache.get(cacheKey);
	if (cached) {
		return typeof cached === 'function' ? cached(params) : cached;
	}

	// Get the value from messages
	const value = getNestedProperty(messages[locale], key);

	if (typeof value === 'string') {
		// If it contains template parameters, create and cache function
		if (value.includes('{')) {
			const fn = (templateParams: Record<string, any>) => parseTemplate(value, templateParams);
			messageCache.set(cacheKey, fn);
			return fn(params);
		}
		// Otherwise cache and return the string directly
		messageCache.set(cacheKey, value);
		return value;
	}

	// Return the key as fallback
	return key;
}

// Get current locale
export function getLocale(): Locale {
	return currentLocale;
}

// Set locale with cookie persistence
export function setLocale(locale: Locale): void {
	if (!locales.includes(locale)) {
		console.warn(`Locale "${locale}" is not available. Using base locale "${baseLocale}".`);
		locale = baseLocale;
	}

	currentLocale = locale;
	setLocaleCookie(locale);

	// Clear message cache to force re-evaluation
	messageCache.clear();

	// Update HTML lang attribute for better SEO and accessibility
	if (browser) {
		document.documentElement.lang = locale;
	}
}

import { browser } from '$app/environment';

// Import message files
import enMessages from './messages/en.json';
import csMessages from './messages/cs.json';

// Available locales
export const locales = ['en', 'cs'];
export const baseLocale = 'en';

// Message storage
const messages = {
	en: enMessages,
	cs: csMessages,
};

// Cookie configuration
const LOCALE_COOKIE_NAME = 'locale';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Helper to get locale from cookie
function getCookieLocale() {
	if (!browser) return null;
	const match = document.cookie.match(new RegExp(`(^| )${LOCALE_COOKIE_NAME}=([^;]+)`));
	return match?.[2];
}

// Helper to set locale cookie
function setLocaleCookie(locale) {
	if (!browser) return;
	document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}`;
}

// Function to detect browser language preference
function getBrowserLocale() {
	if (!browser) return null;

	// Check navigator.language and navigator.languages
	const browserLangs = [];
	if (navigator.languages) {
		browserLangs.push(...navigator.languages);
	}
	if (navigator.language) {
		browserLangs.push(navigator.language);
	}

	// Extract base language codes and find a match
	for (const lang of browserLangs) {
		const baseLang = lang.split('-')[0].toLowerCase();
		if (locales.includes(baseLang)) {
			return baseLang;
		}
	}

	return null;
}

// Initialize locale with proper fallback chain
let initialLocale = baseLocale;
if (browser) {
	// 1. First check cookie
	const cookieLocale = getCookieLocale();
	if (cookieLocale && locales.includes(cookieLocale)) {
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
let currentLocale = $state(initialLocale);

// Helper function to access nested properties using dot notation
function getNestedProperty(obj, path) {
	return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Template literal parser for parameterized messages
function parseTemplate(template, params = {}) {
	if (!template || typeof template !== 'string') return template;

	return template.replace(/\{([^}]+)\}/g, (match, key) => {
		const value = params[key.trim()];
		return value !== undefined ? String(value) : match;
	});
}

// Simple cache for messages
const messageCache = new Map();

// Create the message accessor that handles bracket notation
export const m = new Proxy(
	{},
	{
		get(target, key) {
			// Handle special properties
			if (typeof key === 'symbol' || key === 'toJSON') {
				return undefined;
			}

			// Access currentLocale reactively
			const locale = currentLocale;
			const cacheKey = `${locale}.${key}`;

			// Check cache first
			if (messageCache.has(cacheKey)) {
				return messageCache.get(cacheKey);
			}

			// Get the value from messages
			const value = getNestedProperty(messages[locale], key);

			if (typeof value === 'string') {
				// If it contains template parameters, return a function
				if (value.includes('{')) {
					const fn = params => parseTemplate(value, params);
					messageCache.set(cacheKey, fn);
					return fn;
				}
				// Otherwise return the string directly
				messageCache.set(cacheKey, value);
				return value;
			}

			return value;
		},
	}
);

// Get current locale
export function getLocale() {
	return currentLocale;
}

// Set locale with cookie persistence
export function setLocale(locale) {
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

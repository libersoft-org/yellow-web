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

// Initialize locale from cookie if in browser
let initialLocale = baseLocale;
if (browser) {
	const cookieLocale = getCookieLocale();
	if (cookieLocale && locales.includes(cookieLocale)) {
		initialLocale = cookieLocale;
	}
}

// Store the current locale as a reactive state
let currentLocale = $state(initialLocale);

// Helper function to access nested properties using dot notation
function getNestedProperty(obj, path) {
	return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Template literal parser (simplified version inspired by paraglide)
function parseTemplate(template, params = {}) {
	if (!template || typeof template !== 'string') return template;

	return template.replace(/\{([^}]+)\}/g, (match, key) => {
		const value = params[key.trim()];
		return value !== undefined ? String(value) : match;
	});
}

// Create a proxy that returns values directly or functions for parameterized messages
function createMessageProxy(locale) {
	const cache = new Map();

	return new Proxy(
		{},
		{
			get(target, prop) {
				// Handle Symbol properties
				if (typeof prop === 'symbol') {
					return undefined;
				}

				// Handle toJSON to prevent issues with JSON.stringify
				if (prop === 'toJSON') {
					return undefined;
				}

				// Check cache first
				const cacheKey = `${locale}.${prop}`;
				if (cache.has(cacheKey)) {
					return cache.get(cacheKey);
				}

				// Handle direct property access
				const value = getNestedProperty(messages[locale], prop);

				// If it's a string, check if it has template parameters
				if (typeof value === 'string') {
					// If the string contains template parameters, return a function
					if (value.includes('{')) {
						const fn = params => parseTemplate(value, params);
						cache.set(cacheKey, fn);
						return fn;
					}
					// Otherwise return the string directly
					cache.set(cacheKey, value);
					return value;
				}

				// If it's an object, create a nested proxy
				if (value && typeof value === 'object') {
					const nestedProxy = new Proxy(
						{},
						{
							get(_, nestedProp) {
								if (typeof nestedProp === 'symbol' || nestedProp === 'toJSON') {
									return undefined;
								}

								const fullPath = `${prop}.${nestedProp}`;
								const nestedCacheKey = `${locale}.${fullPath}`;

								if (cache.has(nestedCacheKey)) {
									return cache.get(nestedCacheKey);
								}

								const nestedValue = getNestedProperty(messages[locale], fullPath);

								// Handle strings with or without templates
								if (typeof nestedValue === 'string') {
									if (nestedValue.includes('{')) {
										const fn = params => parseTemplate(nestedValue, params);
										cache.set(nestedCacheKey, fn);
										return fn;
									}
									cache.set(nestedCacheKey, nestedValue);
									return nestedValue;
								}

								// Create another level of nesting if needed
								if (nestedValue && typeof nestedValue === 'object') {
									return new Proxy(
										{},
										{
											get(_, deepProp) {
												if (typeof deepProp === 'symbol' || deepProp === 'toJSON') {
													return undefined;
												}

												const deepPath = `${fullPath}.${deepProp}`;
												const deepCacheKey = `${locale}.${deepPath}`;

												if (cache.has(deepCacheKey)) {
													return cache.get(deepCacheKey);
												}

												const deepValue = getNestedProperty(messages[locale], deepPath);

												if (typeof deepValue === 'string') {
													if (deepValue.includes('{')) {
														const fn = params => parseTemplate(deepValue, params);
														cache.set(deepCacheKey, fn);
														return fn;
													}
													cache.set(deepCacheKey, deepValue);
													return deepValue;
												}

												return deepValue;
											},
										}
									);
								}

								return nestedValue;
							},
						}
					);

					cache.set(cacheKey, nestedProxy);
					return nestedProxy;
				}

				return value;
			},
		}
	);
}

// Create the message accessor that updates based on current locale
export const m = new Proxy(
	{},
	{
		get(target, prop) {
			// Access currentLocale reactively
			const locale = currentLocale;
			const proxy = createMessageProxy(locale);
			return proxy[prop];
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
}

// Helper to check if a string is a valid locale
export function isLocale(locale) {
	return locales.includes(locale);
}

// Extract locale from request (for SSR)
export function extractLocaleFromRequest(request) {
	// Try cookie first
	const cookieHeader = request.headers.get('cookie');
	if (cookieHeader) {
		const match = cookieHeader.match(new RegExp(`(^| )${LOCALE_COOKIE_NAME}=([^;]+)`));
		const cookieLocale = match?.[2];
		if (cookieLocale && locales.includes(cookieLocale)) {
			return cookieLocale;
		}
	}

	// Try Accept-Language header
	const acceptLanguage = request.headers.get('accept-language');
	if (acceptLanguage) {
		const languages = acceptLanguage
			.split(',')
			.map(lang => lang.split(';')[0].trim().toLowerCase())
			.map(lang => lang.split('-')[0]); // Get base language

		for (const lang of languages) {
			if (locales.includes(lang)) {
				return lang;
			}
		}
	}

	return baseLocale;
}

// Compatibility exports for paraglide migration
export const available_languages = locales;
export const base_locale = baseLocale;

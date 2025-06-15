import type { Handle } from '@sveltejs/kit';
import { extractLocaleFromRequest } from '$lib/i18n/index.svelte.js';

export const handle: Handle = async ({ event, resolve }) => {
	// Extract locale from request and make it available
	const locale = extractLocaleFromRequest(event.request);

	// Store locale in locals for server-side access
	event.locals.locale = locale;

	// Resolve the request
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%locale%', locale),
	});
};

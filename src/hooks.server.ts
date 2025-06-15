import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Simply pass through the request for static builds
	return resolve(event);
};

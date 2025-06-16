import type { Reroute } from '@sveltejs/kit';

// No URL-based routing needed for our simple cookie-based locale system
export const reroute: Reroute = ({ url }) => url.pathname;

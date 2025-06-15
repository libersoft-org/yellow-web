<script>
	import { m, getLocale, setLocale, locales } from '$lib/i18n/index.svelte.js';

	let currentLocale = $state(getLocale());

	function switchLocale() {
		const newLocale = currentLocale === 'en' ? 'cs' : 'en';
		setLocale(newLocale);
		currentLocale = newLocale;
	}
</script>

<div class="p-8">
	<h1 class="text-2xl mb-4">i18n Test Page</h1>

	<p class="mb-4">Current locale: <strong>{currentLocale}</strong></p>

	<button onclick={switchLocale} class="bg-blue-500 text-white px-4 py-2 rounded mb-4"> Switch Language </button>

	<div class="space-y-2">
		<p>Hero title: {m.hero.title}</p>
		<p>Hero subtitle: {m.hero.subtitle}</p>
		<p>About link: {m['footer.links.about']}</p>
		<p>Copyright: {m['footer.copyright']({ year: 2024 })}</p>
	</div>

	<div class="mt-4">
		<p>Available locales: {locales.join(', ')}</p>
	</div>
</div>

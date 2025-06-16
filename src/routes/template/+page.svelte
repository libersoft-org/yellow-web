<script>
	import { m } from '$lib/i18n/index.svelte.js';
	import Header from '@/components/Header/Header.svelte';
	import Form from '@/components/Form/Form.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import TextImage from '@/components/TextImage/TextImage.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import TextImageHighlighted from '@/components/TextImageHighlighted/TextImageHighlighted.svelte';
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title="TEMPLATE PAGE" />
	<div class="theme-container mx-auto py-10 md:py-20">
		<TextImage />
		<Form />
	</div>
	<TextImageHighlighted />
	<Footer />
</div>

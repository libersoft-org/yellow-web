<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import FAQ from '@/components/FAQ/FAQ.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import { m } from '$lib/i18n/index.svelte.js';
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['faq.heading']} />
	<div class="py-10 md:py-20">
		<FAQ />
	</div>
	<Footer />
</div>

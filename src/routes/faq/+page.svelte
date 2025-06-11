<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import FAQ from '@/components/FAQ/FAQ.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import { m } from '@paraglide/messages';
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['faq.heading']({})} backgroundImage="assets/images/hero-bg.png" />
	<div class="py-8 md:py-16">
		<FAQ />
	</div>
	<Footer />
</div>

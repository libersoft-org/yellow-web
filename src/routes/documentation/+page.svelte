<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import TextImage from '@/components/TextImage/TextImage.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import TextImageHighlighted from '@/components/TextImageHighlighted/TextImageHighlighted.svelte';
	import { m } from '@paraglide/messages';
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.documentation']({})} backgroundImage="assets/images/hero-bg.png" />
	<div class="py-8 md:py-16">
		<TextImage />
	</div>
	<TextImageHighlighted />
	<Footer />
</div>

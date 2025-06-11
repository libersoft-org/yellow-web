<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import { m } from '@paraglide/messages';
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.signup']()} backgroundImage="assets/images/hero-bg.png" />
	<!--
 <div class="theme-container mx-auto py-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div>
				<Text />
			</div>
		</div>
	</div>
 -->
	<Footer />
</div>

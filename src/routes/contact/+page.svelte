<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import { m } from '$lib/i18n/index.svelte.ts';
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.contact']} />
	<div class="theme-container mx-auto py-10 md:py-20">
		<div class="flex flex-col justify-items-center">
			<Text />
		</div>
	</div>
	<Footer />
</div>

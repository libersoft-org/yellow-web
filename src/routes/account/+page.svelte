<script>
	import { goto } from '$app/navigation';
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import Button from '@/theme/Button/Button.svelte';
	import { m } from '@paraglide/messages';
	import { Routes } from '@/utils/routes';
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.signup']()} backgroundImage="assets/images/hero-bg.png" />
	<div>{m['accounts.label']()}</div>
	<Button label={m['footer.links.contact']()} iconSize="xl" icon="download" theme="secondary" class="w-full md:w-auto" onclick={() => goto(Routes.contact())} />

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

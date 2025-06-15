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

	<div class="theme-container mx-auto py-10 md:py-20">
		<div class="flex flex-col items-center justify-center">
			<p class="mb-8 text-center max-w-[700px]">{m['accounts.label']()}</p>
			<Button label={m['footer.links.contact']()} iconSize="md" rightIcon="chevron" theme="secondary" class="w-full md:w-auto" onclick={() => goto(Routes.contact())} />
		</div>
	</div>
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

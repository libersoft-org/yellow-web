<script lang="ts">
	import Button from '@/theme/Button/Button.svelte';
	import { m } from '$lib/i18n/index.svelte.js';
	import svgBackground from './bg.svg?raw';
	import { Routes } from '@/utils/routes';
	import { goto } from '$app/navigation';
	interface Props {
		imageSrc?: string;
		backgroundImage?: string;
		heroText?: string;
	}
	let { imageSrc = 'assets/images/desktop.png', backgroundImage = 'assets/images/hero-pattern.webp', heroText }: Props = $props();
	// Use the translated description, but allow prop override
	const description = $derived(heroText || m['hero.description']);
</script>

{#snippet leftSide()}
	<div class="flex flex-col items-center justify-center">
		<h1 class="md:text-10xl lg:text-11xl mb-5 text-9xl font-bold md:mb-8 text-center">
			{@html m['hero.welcome']}
			<span class="theme-title-underline">{m['hero.app_name']}</span>
		</h1>
		<div class="theme-text-body1 text-400 mb-4.5 text-center md:mb-10 lg:mb-13">
			{m['hero.motto']}<br />
			{description}
		</div>
		<div class="flex flex-col md:flex-row">
			<Button
				iconSize="xl"
				icon="download"
				label={m['hero.download_button'] + ' ' + m['hero.app_name']}
				theme="secondary"
				class="mr-5 mb-5 w-full md:mb-0 md:w-auto"
				onclick={() => {
					goto(Routes.download());
				}}
			/>
			<Button
				iconSize="xl"
				icon="account"
				label={m['hero.create_account_button']}
				theme="primary"
				class="w-full md:w-auto"
				onclick={() => {
					goto(Routes.account());
				}}
			/>
		</div>
	</div>
{/snippet}
{#snippet rightSide()}
	<div class="mb-10 flex h-full items-center justify-center md:mb-0">
		<img src={imageSrc} alt={m['hero.app_alt_text']} class="h-auto max-w-100 w-full lg:w-auto lg:max-w-full" />
	</div>
{/snippet}
<div class="relative isolate mb-10 overflow-hidden bg-center pt-20.5 pb-8.5 md:mb-15 md:pt-28 md:pb-8 lg:mb-20 lg:pt-46 lg:pb-13 bg-[size:1024px_1024px]" style="background-image: url('{backgroundImage}'); ;">
	<div class="svg-bg absolute -top-2 right-0 hidden max-h-[758px] lg:flex" style:z-index="-1">
		{@html svgBackground}
	</div>
	<div class="theme-container relative mx-auto">
		<div class="flex flex-wrap">
			<div class="order-2 w-full lg:order-1 lg:w-2/5">
				{@render leftSide()}
			</div>
			<div class="order-1 w-full lg:order-2 lg:w-3/5">
				{@render rightSide()}
			</div>
		</div>
	</div>
	<div class="h-8 bg-gradient-to-b from-transparent via-white/70 to-white absolute bottom-0 left-0 right-0" style:z-index="-2"></div>
</div>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { Routes } from '@/utils/routes';
	import { m } from '$lib/i18n/index.svelte.ts';
	//import svgBackground from './bg.svg?raw';
	import Card from '@/theme/Card/Card.svelte';
	import Button from '@/theme/Button/Button.svelte';
</script>

<style>
	/*.svg-bg :global(svg) {
		width: 100%;
		height: auto;
	}*/
</style>

{#snippet feature({ title, icon, description }: { title: string; icon: string; description: string })}
	<div class="feature w-full md:h-full lg:h-auto">
		<Card {title} {icon} class="md:h-full lg:h-auto">
			{@html description}
		</Card>
	</div>
{/snippet}
<div class="relative mb-16 flex flex-col items-center justify-center md:mb-20 lg:mb-45">
	<div class="mb-4 text-center md:mb-8">
		<h2 class="theme-text-h2">
			{m['app_features.title_part1']} <span class="theme-title-underline">{m['app_features.title_part2']}</span><br />
			{m['app_features.title_part3']}
		</h2>
	</div>
	<div class="theme-container relative flex w-full flex-col items-center px-4 sm:px-6 lg:px-0">
		<div class="theme-gradient-radial-grey relative rounded-2xl px-3 pt-7.5 pb-16 md:pb-12 lg:px-0 lg:pt-12 lg:pb-16">
			<!-- 
					<div class="svg-bg margin-auto pointer-events-none absolute top-5 -z-10 hidden w-full lg:block">
				{@html svgBackground}
			</div>
			-->
			<div class="flex w-full flex-col justify-center gap-4 md:flex md:flex-row md:gap-10 md:px-[1.2rem] lg:px-[3rem]">
				<!-- Image container - 1/3 width -->
				<div class="-order-1 flex flex-1 flex-col items-center gap-5 md:order-none md:w-1/3">
					<div class="flex w-full max-w-[240px] justify-center md:max-w-full">
						<img alt={m['app_features.mobile_image_alt']} class="md:max-w-full" src="/assets/images/app-features-mobile.png" />
					</div>
				</div>
				<!-- Feature boxes container -->
				<div class="flex w-full flex-col gap-4 md:w-2/3 md:gap-6">
					{@render feature({
						title: m['app_features.features.messages.title'],
						icon: 'message',
						description: m['app_features.features.messages.description'],
					})}
					{@render feature({
						title: m['app_features.features.social.title'],
						icon: 'phone',
						description: m['app_features.features.social.description'],
					})}
					{@render feature({
						title: m['app_features.features.ecommerce.title'],
						icon: 'cart',
						description: m['app_features.features.ecommerce.description'],
					})}
					{@render feature({
						title: m['app_features.features.business.title'],
						icon: 'calendar',
						description: m['app_features.features.business.description'],
					})}
					{@render feature({
						title: m['app_features.features.entertainment.title'],
						icon: 'dice',
						description: m['app_features.features.entertainment.description'],
					})}
				</div>
			</div>
			<div class="absolute inset-x-0 -bottom-6 flex justify-center">
				<Button
					label={m['app_features.feature_button']}
					rightIcon="chevron"
					theme="secondary"
					onclick={() => {
						goto(Routes.features());
					}}
				/>
			</div>
		</div>
	</div>
</div>

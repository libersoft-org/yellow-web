<script lang="ts">
	import Card from '@/theme/Card/Card.svelte';
	import svgBackground from './bg.svg?raw';
	import Button from '@/theme/Button/Button.svelte';
	import { m } from '@paraglide/messages';
</script>

<style>
	.svg-bg :global(svg) {
		width: 100%;
		height: auto;
	}
</style>

{#snippet feature({ title, icon, description }: { title: string; icon: string; description: string })}
	<div
		class="feature
    w-full
    md:h-full lg:h-auto"
	>
		<Card {title} {icon} class="md:h-full lg:h-auto">
			{@html description}
		</Card>
	</div>
{/snippet}

<div
	class="relative
  mb-16 flex flex-col items-center
  justify-center md:mb-20 lg:mb-45"
>
	<div
		class="mb-4 text-center
    md:mb-8"
	>
		<h2 class="theme-text-h2">
			{m['app_features.title_part1']()} <span class="theme-title-underline">{m['app_features.title_part2']()}</span><br />
			{m['app_features.title_part3']()}
		</h2>
	</div>

	<div
		class="theme-container relative
    flex
    w-full flex-col items-center
    px-4 sm:px-6 lg:px-0"
	>
		<div
			class="theme-gradient-radial-grey relative
      rounded-2xl
      px-3
      pt-7.5 pb-16 md:pb-12 lg:bg-none lg:px-0 lg:py-0"
		>
			<div
				class="svg-bg margin-auto pointer-events-none
        absolute top-5 -z-10
        hidden
        w-full lg:block"
			>
				{@html svgBackground}
			</div>

			<div
				class="flex w-full flex-col justify-center gap-4
          md:grid md:grid-cols-2
          lg:flex lg:grid-cols-none lg:flex-row lg:gap-10 lg:px-[8rem]"
			>
				<div
					class="flex flex-1 flex-col
          gap-4 lg:max-w-[351px]
          lg:gap-6 lg:pt-19"
				>
					{@render feature({
						title: m['app_features.features.messages.title'](),
						icon: 'message',
						description: m['app_features.features.messages.description'](),
					})}
					{@render feature({
						title: m['app_features.features.ecommerce.title'](),
						icon: 'cart',
						description: m['app_features.features.ecommerce.description'](),
					})}
				</div>

				<div
					class="-order-1 flex
          flex-1 flex-col
          items-center gap-5
          md:col-span-2
          lg:order-none
          lg:max-w-[384px]"
				>
					<!-- Image -->
					<div
						class="flex w-full
              max-w-[240px] justify-center
              md:max-w-[320px]
              lg:col-span-1 lg:col-start-2
              lg:row-start-1 lg:block lg:max-w-[380px] lg:justify-start"
					>
						<img alt={m['app_features.mobile_image_alt']()} class="lg:max-w-full" src="/assets/images/app-features-mobile.png" />
					</div>

					{@render feature({
						title: m['app_features.features.social.title'](),
						icon: 'phone',
						description: m['app_features.features.social.description'](),
					})}
				</div>

				<div
					class="flex flex-1 flex-col
          gap-4 lg:max-w-[351px]
          lg:gap-6
          lg:pt-19"
				>
					{@render feature({
						title: m['app_features.features.business.title'](),
						icon: 'calendar',
						description: m['app_features.features.business.description'](),
					})}
					{@render feature({
						title: m['app_features.features.entertainment.title'](),
						icon: 'dice',
						description: m['app_features.features.entertainment.description'](),
					})}
				</div>
			</div>
			<div
				class="absolute
        inset-x-0 -bottom-6
        flex justify-center lg:-bottom-22"
			>
				<Button label={m['app_features.feature_button']()} rightIcon="chevron" theme="secondary" />
			</div>
		</div>
	</div>
</div>

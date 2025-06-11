<script lang="ts">
	import Box from '@/theme/Box/Box.svelte';
	import { Routes } from '@/utils/routes.ts';
	import { m } from '@paraglide/messages';

	// Structure for storing component data
	const features = [
		{
			boxNumber: 1,
			icon: 'network',
			link: '/',
			theme: 'secondary' as const,
		},
		{
			boxNumber: 2,
			icon: 'shield',
			link: '/',
			theme: 'secondary' as const,
		},
		{
			boxNumber: 3,
			icon: 'open-source',
			link: '/',
			theme: 'secondary' as const,
		},
		{
			boxNumber: 4,
			icon: 'cube',
			link: '/',
			theme: 'secondary' as const,
		},
		{
			boxNumber: 5,
			icon: 'wifi',
			link: '/',
			theme: 'secondary' as const,
		},
		{
			boxNumber: 6,
			icon: '',
			link: '/',
			theme: 'primary' as const,
			highlight: true,
		},
	];
</script>

<style>
	/* Styles can be removed since we're using Tailwind classes now */
</style>

<div class="mb-11 flex flex-col items-center justify-center md:mb-20 lg:mb-29">
	<div class="mb-6 text-center md:mb-10">
		<h2 class="theme-text-h2 mb-0.5">
			{m['app_characteristics.title_part1']()}
			<span class="theme-title-underline"> {m['app_characteristics.title_part2']()}</span>
		</h2>
		<div class="text-themeGray-400 text-xl">{m['app_characteristics.subtitle']()}</div>
	</div>
	<div class="theme-container relative flex flex-col items-center">
		<div class="grid w-full grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
			<div class="feature flex h-full">
				<Box title={m['app_characteristics.box1.title']()} icon="network" theme="secondary" footerType="link" footerLink={Routes.features()} description={m['app_characteristics.box1.description']()}></Box>
			</div>
			<div class="feature flex h-full">
				<Box title={m['app_characteristics.box2.title']()} icon="shield" theme="secondary" footerType="link" footerLink={Routes.features()} description={m['app_characteristics.box2.description']()}></Box>
			</div>
			<div class="feature flex h-full">
				<Box title={m['app_characteristics.box3.title']()} icon="open-source" theme="secondary" footerType="link" footerLink={Routes.features()} description={m['app_characteristics.box3.description']()}></Box>
			</div>
			<div class="feature flex h-full">
				<Box title={m['app_characteristics.box4.title']()} icon="cube" theme="secondary" footerType="link" footerLink={Routes.features()} description={m['app_characteristics.box4.description']()}></Box>
			</div>
			<div class="feature flex h-full">
				<Box title={m['app_characteristics.box5.title']()} icon="wifi" theme="secondary" footerType="link" footerLink={Routes.features()} description={m['app_characteristics.box5.description']()}></Box>
			</div>
			<div class="feature flex h-full">
				<Box title={m['app_characteristics.box6.title']()} class="w-full md:w-auto" theme="primary" footerType="button" footerLink={Routes.features()} footerText={m['app_characteristics.box6.button_text']()} description={m['app_characteristics.box6.description']()}></Box>
			</div>
		</div>
	</div>
</div>

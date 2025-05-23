<script lang="ts">
	import Icon from '@/theme/Icon/Icon.svelte';
	import Button from '@/theme/Button/Button.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title?: string;
		description?: string;
		icon?: string;
		theme?: 'primary' | 'secondary';
		footerSlot?: any;
		footerType?: 'link' | 'button';
		footerLink?: string;
		footerText?: string;
	}

	let {
		title,
		description,
		icon,
		theme = 'primary',
		footerSlot,
		footerType,
		footerLink = '#',
		footerText = 'Learn more',
		...restProps
	}: Props = $props();

	const showHeader = $derived(title || icon);
	const showFooter = $derived(footerType || footerSlot);
</script>

<div
	class={[
		'box flex relative flex-col px-8.5 pb-9 pt-4 pb-3 md:px-12 md:pb-9 md:pt-10 md:pb-3 lg:px-15 lg:pb-11 lg:pt-12.5 lg:pb-4 rounded-xl rounded-br-none drop-shadow-md h-full',
		theme === 'primary' ? 'text-themeGray-800 bg-gradient-to-t theme-gradient-yellow' : '',
		theme === 'secondary' ? 'text-white bg-themeGray-800' : '',
		restProps.class
	]}
>
	{#if showHeader}
		<div class="box-header flex gap-4 justify-between mb-2">
			{#if title}
				<div class="box-header__title theme-text-h5 mt-4">{@html title}</div>
			{/if}
		</div>
	{/if}
	<div
		class={[
			'box__body theme-text-body2 mb-3 md:mb-8.5',
			theme === 'primary' ? 'text-themeGray-800' : '',
			theme === 'secondary' ? 'text-themeGray-200' : '',
		]}
	>
		{#if description}
			{@html description}
		{/if}
	</div>

	{#if showFooter}
		<div class="box__footer mt-auto flex items-center justify-between">
			{#if footerSlot}
				{@render footerSlot()}
			{:else if footerType === 'link'}
				<a href={footerLink} class="flex items-center text-yellow-400">
					<Icon name="arrow" size="2xl" />
				</a>
			{:else if footerType === 'button'}
				<a href={footerLink}>
					<Button
						label={footerText || 'Learn more'}
						theme="secondary"
						rightIcon="chevron"
					/>
				</a>
			{/if}

			{#if icon}
				<div class="box-footer__icon text-themeYellow-600 md:absolute md:top-6.5 md:right-6.5">
					<Icon name={icon} size="6xl" />
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>

</style>

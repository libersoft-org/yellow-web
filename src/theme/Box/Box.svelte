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
		children?: any;
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
		children,
		...restProps
	}: Props = $props();

	const showHeader = $derived(title || icon);
	const showFooter = $derived(footerType || footerSlot);
</script>

<div
	class={[
		'box flex flex-col p-10 pt-4 rounded-xl rounded-br-none drop-shadow-md h-full',
		theme === 'primary' ? 'text-themeGray-800 bg-gradient-to-t theme-gradient-yellow' : '',
		theme === 'secondary' ? 'text-white bg-themeGray-800' : '',
		restProps.class
	]}
>
	{#if showHeader}
		<div class="box-header flex gap-4 justify-between mb-2">
			{#if title}
				<div class="box-header__title text-2xl font-bold mt-4">{title}</div>
			{/if}
			{#if icon}
				<div class="box-header__icon text-themeYellow-600 p-2">
					<Icon name={icon} />
				</div>
			{/if}
		</div>
	{/if}
	<div
		class={[
			'box__body text-sm',
			theme === 'primary' ? 'text-themeGray-800' : '',
			theme === 'secondary' ? 'text-themeGray-200' : '',
		]}
	>
		{#if children}
			{@render children()}
		{:else}
			{description || ''}
		{/if}
	</div>
	
	{#if showFooter}
		<div class="box__footer mt-4">
			{#if footerSlot}
				{@render footerSlot()}
			{:else if footerType === 'link'}
				<a href={footerLink} class="flex items-center text-yellow-400">
					<div class="w-4 h-4">
						<Icon name="arrow" size="md" />
					</div>
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
		</div>
	{/if}
</div>

<style>

</style>

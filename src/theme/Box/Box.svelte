<script lang="ts">
	import Icon from '@/theme/Icon/Icon.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title?: string;
		icon?: string;
		theme?: 'primary' | 'secondary';
		footerSlot?: any;
		children?: any;
	}

	let {
		title,
		icon,
		theme = 'primary',
		footerSlot,
		children,
		...restProps
	}: Props = $props();

	const showHeader = $derived(title || icon)
</script>

<div
	class={[
		'box flex flex-col p-10 pt-4 rounded-xl rounded-br-none drop-shadow-md',
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
				<div class="box-header__icon p-2">
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
		{@render children?.()}
	</div>
	{#if footerSlot}
		<div class="box__footer mt-4">
			{@render footerSlot?.()}
		</div>
	{/if}
</div>

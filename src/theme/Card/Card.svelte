<script lang="ts">
	import Icon from '@/theme/Icon/Icon.svelte';

	interface Props {
		title?: string;
		icon?: string;
		children?: any;
		headerSlot?: any;
		footerSlot?: any;
	}

	let {
		title,
		icon,
		headerSlot,
		footerSlot,
		children
	}: Props = $props();

	const showHeader = $derived(title || icon || headerSlot);
</script>

<div
	class="card drop-shadow-md flex flex-col px-8.5 py-7 bg-gradient-to-b rounded-xl theme-gradient-white border-t-4 border-t-themeYellow-600">
	{#if showHeader}
		<div class="card-header flex gap-4 items-center mb-2">
			{#if icon}
				<div
					class="card-header__icon bg-themeGray-800 flex items-center justify-center text-themeYellow-600 h-12 w-12 rounded-full p-1">
					<Icon name={icon} size="xl" class="" />
				</div>
			{/if}
			{#if title}
				<div class="card-header__title theme-text-h4">{title}</div>
			{/if}
			{@render headerSlot?.()}
		</div>
	{/if}
	<div class="card__body theme-text-body3 text-themeGray-400">
		{@render children?.()}
	</div>
	{#if footerSlot}
		<div class="card__footer mt-2">
			{@render footerSlot?.()}
		</div>
	{/if}
</div>

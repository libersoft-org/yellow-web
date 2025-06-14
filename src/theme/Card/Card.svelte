<script lang="ts">
	import Icon from '@/theme/Icon/Icon.svelte';

	interface Props {
		title?: string;
		icon?: string;
		class?: string;
		children?: any;
		headerSlot?: any;
		footerSlot?: any;
	}

	let { title, icon, class: className = '', headerSlot, footerSlot, children }: Props = $props();

	const showHeader = $derived(title || icon || headerSlot);
</script>

<div class="card theme-gradient-white border-t-themeYellow-600 flex flex-col rounded-xl border-t-4 bg-gradient-to-b px-8.5 py-7 drop-shadow-md {className}">
	{#if showHeader}
		<div class="card-header mb-2 flex items-center gap-4">
			{#if icon}
				<div
					class="card-header__icon
							bg-themeGray-800 text-themeYellow-800
							h-10 max-w-10 md:h-12 md:max-w-12 w-full
							flex items-center justify-center
							rounded-full p-1 md:p-2"
				>
					<Icon name={icon} size="md" lgSize="xl" />
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

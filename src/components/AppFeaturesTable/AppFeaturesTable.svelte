<script lang="ts">
	import { Routes } from '@/utils/routes';
	import { m } from '$lib/i18n/index.svelte.js';
	import svgBackground from './bg.svg?raw';
	import Table from '@/theme/Table/Table.svelte';
	import Icon from '@/theme/Icon/Icon.svelte';

	interface Cell {
		text: string;
		alignment?: 'left' | 'center' | 'right';
		isHeader?: boolean;
		className?: string;
		icon?: string;
		iconStatus?: 'success' | 'error' | 'warning';
	}

	interface Row {
		cells: Cell[];
	}

	interface LegendItem {
		icon: string;
		text: string;
		colorClass: string;
	}

	interface Props {
		title?: string;
		headers?: string[];
		rows?: Row[];
		imagePath?: string;
		showButton?: boolean;
		buttonLabel?: string;
		buttonLink?: string;
		legendItems?: LegendItem[];
	}

	let { title, headers, rows, imagePath = 'assets/images/fluid.png', buttonLabel, buttonLink = Routes.features(), legendItems }: Props = $props();

	// Use reactive derived values for translations
	// We need to access m[key] inside $derived to ensure reactivity
	const reactiveTitle = $derived(title || m['featuresTable.title']);
	const reactiveHeaders = $derived(headers || [m['featuresTable.table_header.feature'], m['featuresTable.table_header.implemented']]);
	const reactiveRows = $derived(
		rows || [
			{
				cells: [
					{ text: m['featuresTable.core.items.amtp'], alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
				],
			},
			{
				cells: [
					{ text: m['featuresTable.core.items.dmtp'], alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
				],
			},
			{
				cells: [
					{ text: m['featuresTable.core.items.server_modularity'], alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
				],
			},
			{
				cells: [
					{ text: m['featuresTable.core.items.client_modularity'], alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'warning', icon: 'check' },
				],
			},
			{
				cells: [
					{ text: m['featuresTable.core.items.client_encryption'], alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
				],
			},
			{
				cells: [
					{ text: m['featuresTable.core.items.client_e2e'], alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
				],
			},
		]
	);
	const reactiveButtonLabel = $derived(buttonLabel || m['featuresTable.button']);
	const reactiveLegendItems = $derived(
		legendItems || [
			{ icon: 'cross', text: m['featuresTable.status1'], colorClass: 'text-red-400' },
			{ icon: 'check', text: m['featuresTable.status2'], colorClass: 'text-green-500' },
			{ icon: 'check', text: m['featuresTable.status3'], colorClass: 'text-yellow-500' },
		]
	);

	function shouldShowOverlay(rows: Row[]) {
		return rows.length > 5;
	}
</script>

<style>
	.svg-bg :global(svg) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		top: 0;
		left: 0;
	}
</style>

{#snippet leftSide()}
	<div class="relative flex flex-col items-center justify-center">
		<div class="mb-4">
			<h2 class="theme-text-h2 relative z-10 text-center">
				<span class="theme-title-underline z-5">{reactiveTitle}</span>
			</h2>
		</div>
		<div class="table-container-wrapper relative mb-19 lg:mb-0">
			<Table rows={reactiveRows} headers={reactiveHeaders} showOverlay={shouldShowOverlay(reactiveRows)} overlayType="gray" class="max-w-[538px]" buttonLabel={reactiveButtonLabel} {buttonLink} isCollapsible={false} />
		</div>
	</div>
{/snippet}
{#snippet rightSide()}
	<div class="image-container flex flex-col items-center lg:items-start">
		<div class="relative order-2 w-full md:w-2/3 lg:order-1 lg:w-full">
			<img src={imagePath} alt="Yellow app features" class="max-w-full" />
		</div>
		<div class="legend order-1 mt-6 mb-3 flex flex-wrap justify-center gap-4 pl-4.5 sm:flex-row lg:order-2 lg:mb-0 lg:justify-start">
			{#each reactiveLegendItems as item}
				<div class="flex items-start gap-1 md:items-center">
					<span class={item.colorClass}>
						<Icon name={item.icon} size="sm" />
					</span>
					<span class="text-themeGray-600 text-xs">{item.text}</span>
				</div>
			{/each}
		</div>
	</div>
{/snippet}
<div class="app-features-table theme-container md::mb-20 mb-11 flex flex-col items-center justify-center lg:mb-29">
	<div class="bg-themeGray-120 relative rounded-xl lg:bg-transparent">
		<div class="svg-bg margin-auto absolute top-5 hidden max-h-[758px] w-full lg:flex" style:z-index="-1">
			{@html svgBackground}
		</div>
		<div class="py-6 md:px-10 md:py-14 lg:px-22 lg:py-21">
			<div class="flex flex-wrap">
				<div class="w-full w-full px-4 lg:w-4/9">
					{@render leftSide()}
				</div>
				<div class="w-full w-full px-4 lg:w-5/9">
					{@render rightSide()}
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import { Routes } from '@/utils/routes';
	import { m } from '@paraglide/messages';
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

	let {
		title = 'Features',
		headers = ['Feature', 'Implemented'],
		rows = [
			{
				cells: [
					{ text: 'AMTP protocol', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
				],
			},
			{
				cells: [
					{ text: 'DMTP protocol', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
				],
			},
			{
				cells: [
					{ text: 'Server - modularity', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
				],
			},
			{
				cells: [
					{ text: 'Client - modularity', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'warning', icon: 'check' },
				],
			},
			{
				cells: [
					{ text: 'Encrypted connection', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
				],
			},
			{
				cells: [
					{
						text: 'Client - encryption, signature and login keys management',
						alignment: 'left',
						isHeader: true,
					},
					{ text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
				],
			},
		],
		imagePath = 'assets/images/fluid.png',
		buttonLabel = m['featuresTable.button'](),
		buttonLink = Routes.features(),
		legendItems = [
			{ icon: 'cross', text: m['featuresTable.status1'](), colorClass: 'text-red-400' },
			{ icon: 'check', text: m['featuresTable.status2'](), colorClass: 'text-green-500' },
			{ icon: 'check', text: m['featuresTable.status3'](), colorClass: 'text-yellow-500' },
		],
	}: Props = $props();

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
	<div class="table-container relative flex flex-col items-center justify-center">
		<div class="mb-4">
			<h2 class="theme-text-h2 relative z-10 text-center">
				<span class="theme-title-underline z-5">{m['featuresTable.title']({})}</span>
			</h2>
		</div>
		<div class="table-container-wrapper relative mb-19 lg:mb-0">
			<Table {rows} {headers} showOverlay={shouldShowOverlay(rows)} overlayType="gray" class="max-w-[538px]" {buttonLabel} {buttonLink} />
		</div>
	</div>
{/snippet}
{#snippet rightSide()}
	<div class="image-container flex flex-col items-center lg:items-start">
		<div class="relative order-2 w-full md:w-2/3 lg:order-1 lg:w-full">
			<img src={imagePath} alt="Yellow app features" class="max-w-full" />
		</div>
		<div class="legend order-1 mt-6 mb-3 flex justify-center gap-4 pl-4.5 sm:flex-row lg:order-2 lg:mb-0 lg:justify-start">
			{#each legendItems as item}
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

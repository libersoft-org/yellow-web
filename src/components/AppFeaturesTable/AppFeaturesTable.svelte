<script lang="ts">
	import Table from '@/theme/Table/Table.svelte';
	import svgBackground from './bg.svg?raw';
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
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' }
				]
			},
			{
				cells: [
					{ text: 'DMTP protocol', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' }
				]
			},
			{
				cells: [
					{ text: 'Server - modularity', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' }
				]
			},
			{
				cells: [
					{ text: 'Client - modularity', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'warning', icon: 'check' }
				]
			},
			{
				cells: [
					{ text: 'Encrypted connection', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'success', icon: 'check' }
				]
			},
			{
				cells: [
					{ text: 'Client - encryption, signature and login keys management', alignment: 'left', isHeader: true },
					{ text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' }
				]
			}
		],
		imagePath = 'assets/images/fluid.png',
		buttonLabel = 'See all features',
		buttonLink = '/features',
		legendItems = [
			{ icon: 'cross', text: 'Not implemented', colorClass: 'text-red-400' },
			{ icon: 'check', text: 'Fully implemented', colorClass: 'text-green-500' },
			{ icon: 'check', text: 'Partially implemented', colorClass: 'text-yellow-500' }
		]
	}: Props = $props();

	function shouldShowOverlay(rows: Row[]) {
		return rows.length > 5;
	}

	function getTableContainerClass(rows: Row[]) {
		const baseClasses = 'bg-white rounded-2xl relative';
		return `${baseClasses}`;
	}
</script>

{#snippet leftSide()}
	<div class="table-container relative">
		<div class="mb-8">
			<h2 class="theme-text-h1 text-center"><span class="theme-title-underline">{title}</span></h2>
		</div>

		<div class={getTableContainerClass(rows)}>
			<Table
				rows={rows}
				headers={headers}
				showOverlay={shouldShowOverlay(rows)}
				overlayType="gray"
				buttonLabel={buttonLabel}
				buttonLink={buttonLink}
				customShadow={rows.length > 5 ? 'multi-side' : 'standard'}
			/>
		</div>
	</div>
{/snippet}

{#snippet rightSide()}
	<div class="image-container flex flex-col items-center justify-center">
		<div class="relative">
			<img src={imagePath} alt="Yellow app features" class="max-w-full" />
		</div>

		<div class="legend flex flex-col sm:flex-row gap-4 justify-center mt-6">
			{#each legendItems as item}
				<div class="flex items-center gap-2">
					<span class={item.colorClass}>
						<Icon name={item.icon} size="md" />
					</span>
					<span class="text-themeGray-600">{item.text}</span>
				</div>
			{/each}
		</div>
	</div>
{/snippet}

<div class="app-features-table theme-container flex flex-col items-center justify-center">
	<div class=" relative">
		<div class="svg-bg absolute margin-auto w-full top-5 max-h-[758px]" style:z-index="-1">
			{@html svgBackground}
		</div>

		<div class="px-10 py-21 px-25">
			<div class="flex flex-wrap">
				<div class="w-full lg:w-2/5 px-4">
					{@render leftSide()}
				</div>
				<div class="w-full lg:w-3/5 px-4">
					{@render rightSide()}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.svg-bg :global(svg) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		top: 0;
		left: 0;
	}

	.table-container {
		@apply flex flex-col;
	}
</style>

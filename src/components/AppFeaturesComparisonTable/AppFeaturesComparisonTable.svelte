<script lang="ts">
	import Table from '@/theme/Table/Table.svelte';
	import { Routes } from '@/utils/routes';
	import { m } from '@paraglide/messages';
	interface Cell {
		text?: string;
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
		subtitle?: string;
		headers?: string[];
		rows?: Row[];
		buttonLabel?: string;
		buttonLink?: string;
		isCollapsible?: boolean;
		showMaxHeight?: boolean;
		mobileColLeft?: string;
		mobileColRight?: string;
	}

	const check: Cell = { iconStatus: 'success', icon: 'check' };
	const cross: Cell = { iconStatus: 'error', icon: 'cross' };
	let {
		title = m['comparisonTable.title'](),
		subtitle = m['comparisonTable.subtitle'](),
		headers = [m['comparisonTable.table_headers.software'](), m['comparisonTable.table_headers.open_source'](), m['comparisonTable.table_headers.distributed'](), m['comparisonTable.table_headers.e2e'](), m['comparisonTable.table_headers.developed_by']()],
		rows = [
			{
				cells: [{ text: 'Yellow', isHeader: true }, check, check, check, { text: 'LiberSoft, Liberland' }],
			},
			{
				cells: [{ text: 'E-mail', isHeader: true }, { text: m['comparisonTable.table_description.some_software']() }, check, { text: m['comparisonTable.table_description.some_software']() }, { text: 'Jon Postel, Suzanne Sluizer, USA' }],
			},
			{
				cells: [{ text: 'WhatsApp', isHeader: true }, cross, cross, check, { text: 'Meta Platforms Inc., USA' }],
			},
			{
				cells: [{ text: 'Messages (RCS)', isHeader: true }, cross, { text: m['comparisonTable.table_description.mobile_operators']() }, check, { text: 'Google LLC, USA / GSM Association, UK' }],
			},
			{
				cells: [{ text: 'WeChat', isHeader: true }, cross, cross, cross, { text: 'Tencent Holdings Ltd., China' }],
			},
			{
				cells: [{ text: 'Facebook Messenger', isHeader: true }, cross, cross, cross, { text: 'Meta Platforms Inc., USA' }],
			},
		],
		buttonLabel = m['comparisonTable.button'](),
		buttonLink = Routes.comparison(),
		isCollapsible = true,
		showMaxHeight = true,
		mobileColLeft: mobileColLeft = m['comparisonTable.table_headers.software'](),
		mobileColRight: mobileColRight = m['comparisonTable.table_headers.features'](),
	}: Props = $props();
</script>

<style>
</style>

<div class="app-features-comparison-table mb-20 flex flex-col items-center justify-center md:mb-10 lg:mb-15">
	<div class="theme-container relative">
		<div class="px-4 pb-8 md:px-10 md:px-25 md:pb-15">
			<div class="mb-5 text-center">
				<h2 class="theme-text-h2 text-center">
					<span class="theme-title-underline">{title}</span><br />{subtitle}
				</h2>
			</div>
			<div class="table-container-wrapper relative">
				<Table {buttonLabel} {buttonLink} formatHeaders={true} formatNewlines={true} {headers} overlayType="white" {rows} showOverlay={rows.length > 5} class={showMaxHeight ? 'max-h-[538px]' : ''} {isCollapsible} {mobileColLeft} {mobileColRight} />
			</div>
		</div>
	</div>
</div>

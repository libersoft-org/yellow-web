<script lang="ts">
	import Table from '@/theme/Table/Table.svelte';
	import { Routes } from '@/utils/routes';
	import { m } from '$lib/i18n/index.svelte.js';
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
		showMargins?: boolean;
	}

	const check: Cell = { iconStatus: 'success', icon: 'check' };
	const cross: Cell = { iconStatus: 'error', icon: 'cross' };
	let { title, subtitle, headers, rows, buttonLabel, buttonLink = Routes.comparison(), isCollapsible = true, showMaxHeight = true, mobileColLeft, mobileColRight, showMargins = true }: Props = $props();

	// Use $derived for reactive default values
	const defaultTitle = $derived(m['comparisonTable.title']);
	const defaultSubtitle = $derived(m['comparisonTable.subtitle']);
	const defaultHeaders = $derived([m['comparisonTable.table_headers.software'], m['comparisonTable.table_headers.open_source'], m['comparisonTable.table_headers.distributed'], m['comparisonTable.table_headers.e2e'], m['comparisonTable.table_headers.developed_by']]);
	const defaultRows = $derived([
		{
			cells: [{ text: 'Yellow', isHeader: true }, check, check, check, { text: 'LiberSoft, Liberland' }],
		},
		{
			cells: [{ text: 'E-mail', isHeader: true }, { text: m['comparisonTable.table_description.some_software'] }, check, { text: m['comparisonTable.table_description.some_software'] }, { text: 'Jon Postel, Suzanne Sluizer, USA' }],
		},
		{
			cells: [{ text: 'WhatsApp', isHeader: true }, cross, cross, check, { text: 'Meta Platforms Inc., USA' }],
		},
		{
			cells: [{ text: 'Messages (RCS)', isHeader: true }, cross, { text: m['comparisonTable.table_description.mobile_operators'] }, check, { text: 'Google LLC, USA / GSM Association, UK' }],
		},
		{
			cells: [{ text: 'WeChat', isHeader: true }, cross, cross, cross, { text: 'Tencent Holdings Ltd., China' }],
		},
		{
			cells: [{ text: 'Facebook Messenger', isHeader: true }, cross, cross, cross, { text: 'Meta Platforms Inc., USA' }],
		},
	]);
	const defaultButtonLabel = $derived(m['comparisonTable.button']);
	const defaultMobileColLeft = $derived(m['comparisonTable.table_headers.software']);
	const defaultMobileColRight = $derived(m['comparisonTable.table_headers.features']);

	// Use the provided props or fall back to defaults
	const finalTitle = $derived(title || defaultTitle);
	const finalSubtitle = $derived(subtitle || defaultSubtitle);
	const finalHeaders = $derived(headers || defaultHeaders);
	const finalRows = $derived(rows || defaultRows);
	const finalButtonLabel = $derived(buttonLabel || defaultButtonLabel);
	const finalMobileColLeft = $derived(mobileColLeft || defaultMobileColLeft);
	const finalMobileColRight = $derived(mobileColRight || defaultMobileColRight);
</script>

<style>
</style>

<div class="app-features-comparison-table flex flex-col items-center justify-center {showMargins ? 'mb-20 md:mb-10 lg:mb-15' : ''}">
	<div class="theme-container relative">
		<div class="px-4 pb-8 md:px-10 md:px-25 md:pb-15">
			<div class="mb-5 text-center">
				<h2 class="theme-text-h2 text-center">
					<span class="theme-title-underline">{finalTitle}</span><br />{finalSubtitle}
				</h2>
			</div>
			<div class="table-container-wrapper relative">
				<Table buttonLabel={finalButtonLabel} {buttonLink} formatHeaders={true} formatNewlines={true} headers={finalHeaders} overlayType="white" rows={finalRows} showOverlay={finalRows.length > 5} class={showMaxHeight ? 'max-h-[538px]' : ''} {isCollapsible} mobileColLeft={finalMobileColLeft} mobileColRight={finalMobileColRight} />
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import Table from '@/theme/Table/Table.svelte';
	import { Routes } from '@/utils/routes';
	import { m } from '@paraglide/messages';
	interface Cell {
		text: string;
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
	}
	let {
		title = 'with other software',
		headers = ['Software', 'Open source', 'Distributed/decentralized', 'End-to-end encryption', 'Developed by'],
		rows = [
			{
				cells: [{ text: 'Yellow', isHeader: true }, { text: '', iconStatus: 'success', icon: 'check' }, { text: '', iconStatus: 'success', icon: 'check' }, { text: '', iconStatus: 'success', icon: 'check' }, { text: 'LiberSoft, Liberland' }],
			},
			{
				cells: [{ text: 'E-mail', isHeader: true }, { text: 'some software' }, { text: '', iconStatus: 'success', icon: 'check' }, { text: 'some software' }, { text: 'Jon Postel and Suzanne Sluizer, USA' }],
			},
			{
				cells: [{ text: 'WhatsApp', isHeader: true }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: '', iconStatus: 'success', icon: 'check' }, { text: 'Meta Platforms Inc., USA' }],
			},
			{
				cells: [{ text: 'Messages\n(RCS protocol)', isHeader: true }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: 'mobile operators' }, { text: 'in development' }, { text: 'Google LLC, USA / GSM Association, UK' }],
			},
			{
				cells: [{ text: 'WeChat', isHeader: true }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: 'Tencent Holdings Ltd., China' }],
			},
			{
				cells: [{ text: 'Facebook Messenger', isHeader: true }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: '', iconStatus: 'error', icon: 'cross' }, { text: 'Meta Platforms Inc., USA' }],
			},
		],
		buttonLabel = m['comparisonTable.button'](),
		buttonLink = Routes.comparison(),
	}: Props = $props();
</script>

<style>
</style>

<div class="app-features-comparison-table mb-20 flex flex-col items-center justify-center md:mb-10 lg:mb-15">
	<div class="theme-container relative">
		<div class="px-4 pb-8 md:px-10 md:px-25 md:pb-21">
			<div class="mb-5 text-center">
				<h2 class="theme-text-h2 text-center">
					<span class="theme-title-underline">{m['comparisonTable.title']()}</span><br />{m['comparisonTable.subtitle']()}
				</h2>
			</div>
			<div class="table-container-wrapper relative">
				<Table {buttonLabel} {buttonLink} formatHeaders={true} formatNewlines={true} {headers} overlayType="white" {rows} showOverlay={rows.length > 5} class="max-h-[538px]" />
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import Button from '@/theme/Button/Button.svelte';
	import Icon from '@/theme/Icon/Icon.svelte';
	import { goto } from '$app/navigation';

	interface Cell {
		text?: string;
		component?: any;
		props?: any;
		isHeader?: boolean;
		className?: string;
		icon?: string;
		iconStatus?: 'success' | 'error' | 'warning';
	}

	interface Row {
		cells: Cell[];
	}

	interface Props {
		children?: any;
		rows?: Row[];
		headers?: string[];
		formatHeaders?: boolean;
		formatNewlines?: boolean;
		rounded?: boolean;
		showOverlay?: boolean;
		overlayType?: 'gray' | 'white';
		// showButton?: boolean; // This prop seems unused based on shouldShowButton, but was in original
		buttonLabel?: string;
		buttonLink?: string;
		buttonTheme?: 'primary' | 'secondary';
		buttonRightIcon?: string;
		class?: string;
		isCollapsible?: boolean;
		mobileColLeft?: string;
		mobileColRight?: string;
	}

	let { children, rows = [], headers = [], formatHeaders = false, formatNewlines = false, rounded = true, showOverlay = false, overlayType = 'white', buttonLabel = 'See all', buttonLink = '#', buttonTheme = 'secondary', buttonRightIcon = 'chevron', class: className = '', isCollapsible = true, mobileColLeft: mobileColLeft = 'Name', mobileColRight: mobileColRight = 'Features' }: Props = $props();

	const shouldShowButton = $derived(buttonLabel && buttonLink && buttonLink !== '#');
	const shouldShowOverlay = $derived(shouldShowButton);

	function formatText(text: string) {
		if (!text) return '';
		if (formatNewlines) {
			text = text.replace(/\n/g, '<br>');
		}
		return text;
	}

	function formatHeaderText(text: string | { text: string; isHeader?: boolean }) {
		if (!text) return '';
		const textToFormat = typeof text === 'string' ? text : text.text;
		if (formatHeaders) {
			return textToFormat.replace(/\//g, '/<br>');
		}
		return textToFormat;
	}

	// State for accordion
	let activeAccordionItem = $state<number | null>(null);

	function toggleAccordion(index: number) {
		activeAccordionItem = activeAccordionItem === index ? null : index;
	}
</script>

<style>
	@reference "../../app.css";

	.table-container.has-overlay::after {
		content: '';
		@apply absolute right-0 -bottom-[30px] left-1/2 z-[1] h-[70px] w-[calc(100%+32px)] -translate-x-1/2 md:-bottom-[60px] md:h-[140px];
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 1) 35%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	}

	@media (max-width: 380px) {
		.table-container.has-overlay::after {
			width: 100%;
		}
	}

	/* Gray overlay type */
	:global(.table-container[data-overlay-type='gray'].has-overlay)::after {
		background: linear-gradient(to bottom, rgba(242, 243, 250, 0.3) 0%, rgba(242, 243, 250, 0.7) 20%, rgba(242, 243, 250, 0.8) 30%, rgba(242, 243, 250, 1) 35%);
	}

	.table :global {
		table {
			@apply w-full border-collapse lg:overflow-hidden;
		}

		/* --- DESKTOP STYLES (lg and up) --- */

		tbody tr th:first-child,
		thead tr th:first-child {
			@apply lg:pl-6;
		}

		tbody tr th:last-child,
		thead tr th:last-child {
			@apply lg:pr-6;
		}

		tbody tr :where(th, td),
		thead tr :where(td) {
			@apply pr-6 pl-6 lg:pr-0 lg:pl-0;
		}

		tbody tr td:last-child {
			@apply lg:pr-6;
		}

		tbody tr:last-child > :where(td, th) > .cell-wrapper {
			@apply lg:pb-10;
		}

		tbody tr:nth-child(even) :where(td, th) > .cell-wrapper {
			@apply lg:bg-themeGray-75;
		}

		tbody tr:not(:last-child) :where(td, th) > .cell-wrapper {
			@apply border-b-themeGray-150 border-b border-solid;
		}

		/* Status indicators */
		.status-success {
			@apply bg-[var(--color-themeGreen-100)] text-[var(--color-themeGreen-500)];
		}

		.status-error {
			@apply bg-[var(--color-themeRed-100)] text-[var(--color-themeRed-500)];
		}

		.status-warning {
			@apply bg-[var(--color-themeOrange-100)] text-[var(--color-themeOrange-500)];
		}

		.status-check .icon {
			@apply p-0;
		}

		/* --- MOBILE STYLES (below lg) --- */

		/* Header styling for mobile */
		.accordion-trigger {
			@apply cursor-pointer bg-white text-left;
		}

		.accordion-trigger .cell-wrapper {
			@apply flex justify-between;
		}

		/* Mobile accordion content styling */
		.accordion-content-cell {
			@apply align-top h-full;
		}

		.accordion-content-cell .cell-wrapper {
			@apply bg-themeGray-50 lg:bg-white grid grid-cols-[1fr_auto] items-center min-h-[43px] h-full gap-2;
		}

		@media (min-width: 1024px) {
			.accordion-content-cell .cell-wrapper {
				@apply grid-cols-1 justify-items-center;
			}
		}
	}

	/* Non-collapsible mode styles, clear the accordion styles */
	:global(.table-container[data-collapsible='false']) {
		/* Ensure full height chain */
		table {
			@apply h-full min-w-0 w-full;
		}

		tbody {
			@apply h-full;
		}

		tbody tr {
			@apply h-full;
		}

		/* Cell styling */
		tbody tr :where(td) {
			@apply h-full min-w-0;
		}

		tbody tr :where(td) .cell-wrapper {
			@apply justify-center h-full grid grid-cols-[1fr_auto] items-center justify-items-center min-h-[43px] gap-2;
		}

		tbody tr th .cell-wrapper {
			@apply justify-start h-full grid grid-cols-[1fr_auto] items-center min-h-[43px] gap-2;
			text-align: left;
		}

		@media (min-width: 1024px) {
			tbody tr :where(td) .cell-wrapper {
				@apply grid-cols-1 justify-items-center;
			}
			tbody tr th .cell-wrapper {
				@apply grid-cols-1 justify-items-start;
			}
		}

		/* Ensure content doesn't overflow on small screens */
		.cell-wrapper {
			@apply min-w-0;
		}

		.cell-wrapper > div {
			@apply min-w-0;
		}

		/* Apply desktop padding across all screen sizes */
		tbody tr :where(th, td) {
			@apply pr-0 pl-0;
		}

		tbody tr th:first-child,
		thead tr th:first-child {
			@apply pl-6;
		}

		tbody tr th:last-child,
		thead tr th:last-child {
			@apply pr-6;
		}

		tbody tr td:last-child {
			@apply pr-6;
		}

		/* Apply desktop background styles */
		tbody tr:nth-child(even) :where(td, th) > .cell-wrapper {
			@apply bg-themeGray-75;
		}

		tbody tr:not(:last-child) :where(td, th) > .cell-wrapper {
			@apply border-b-themeGray-150 border-b border-solid;
		}

		tbody tr:last-child > :where(td, th) > .cell-wrapper {
			@apply pb-10;
		}
	}
</style>

<div class="table-container relative flex flex-col rounded-3xl shadow-xl {className}" class:has-overlay={shouldShowOverlay} data-overlay-type={overlayType} data-collapsible={isCollapsible}>
	<div class={['table overflow-hidden rounded-3xl', rounded ? 'table--rounded' : '']}>
		<table class="w-full bg-white lg:h-[1px]">
			{#if headers.length > 0}
				<thead class="lg:table-header-group">
					<tr class={isCollapsible ? 'hidden lg:table-row' : 'table-row'}>
						{#each headers as header, headerIndex}
							<th class="theme-gradient-yellow text-themeGray-800 bg-gradient-to-t py-3 text-center text-base font-bold first:text-left lg:py-4.5">
								<div class="md:px-5.5 text-xs md:text-base lg:text-xl">
									{@html formatHeaderText(header)}
								</div>
							</th>
						{/each}
					</tr>
					{#if isCollapsible}
						<tr class="lg:hidden">
							<td class="theme-gradient-yellow text-themeGray-800 flex justify-between bg-gradient-to-t py-4.5 text-base font-bold">
								<div class="px-5.5">{mobileColLeft}</div>
								<div class="px-5.5">{mobileColRight}</div>
							</td>
						</tr>
					{/if}
				</thead>
			{/if}

			{#if rows.length > 0}
				<tbody class={isCollapsible ? 'block lg:table-row-group' : 'table-row-group'}>
					{#each rows as row, rowIndex}
						<tr class={isCollapsible ? 'block lg:table-row' : 'table-row'}>
							{#each row.cells as cell, columnIndex}
								{#if cell.isHeader}
									<th
										class={`
											${isCollapsible ? 'block lg:table-cell' : 'table-cell'}
											${isCollapsible ? (columnIndex === 0 ? 'accordion-trigger' : 'accordion-content-cell') : ''}
											${isCollapsible && columnIndex > 0 ? (activeAccordionItem === rowIndex ? 'block' : 'hidden') : ''}
											${isCollapsible ? 'lg:block' : ''}
											${cell.className || ''}
										`}
										onclick={() => {
											if (isCollapsible && columnIndex === 0) toggleAccordion(rowIndex);
										}}
										role={isCollapsible && columnIndex === 0 ? 'button' : undefined}
										tabindex={isCollapsible && columnIndex === 0 ? 0 : undefined}
										aria-expanded={isCollapsible && columnIndex === 0 ? activeAccordionItem === rowIndex : undefined}
										aria-controls={isCollapsible && columnIndex === 0 ? `accordion-content-panel-${rowIndex}` : undefined}
										id={isCollapsible ? (columnIndex === 0 ? `accordion-trigger-${rowIndex}` : columnIndex > 0 && activeAccordionItem === rowIndex ? `accordion-content-panel-${rowIndex}` : undefined) : undefined}
									>
										<div class="cell-wrapper flex h-full items-center py-3 text-sm lg:px-5.5 lg:py-4 lg:text-base">
											<div class="lg:text-md max-w-2/3 text-xs md:text-base lg:max-w-full">
												{#if cell.component}
													<!--<svelte:component this={cell.component} {...cell.props} />-->
													<cell.component {...cell.props} />
												{:else}
													{@html formatText(cell.text || '')}
												{/if}
											</div>
											{#if isCollapsible && columnIndex === 0}
												<span class="accordion-chevron ml-auto pr-1 lg:hidden">
													<Icon name="chevron" class={activeAccordionItem === rowIndex ? 'rotate-270' : 'rotate-90'} size="sm" />
												</span>
											{/if}
										</div>
									</th>
								{:else}
									<td
										class={`
											${isCollapsible ? 'accordion-content-cell block' : 'table-cell'}
											lg:table-cell
											${isCollapsible ? (activeAccordionItem === rowIndex ? 'block' : 'hidden') : ''}
											${isCollapsible ? 'lg:block' : ''}
											${cell.className || ''}
										`}
										id={isCollapsible && columnIndex === 0 && activeAccordionItem === rowIndex ? `accordion-content-panel-${rowIndex}` : undefined}
										aria-labelledby={isCollapsible && columnIndex === 0 ? `accordion-trigger-${rowIndex}` : undefined}
									>
										<div class="cell-wrapper flex h-full min-h-[43px] items-center justify-between py-2 lg:justify-center lg:px-5.5">
											{#if isCollapsible && headers[columnIndex]}
												<span class="text-themeGray-400 flex w-1/2 items-center text-xs font-medium md:w-full lg:hidden lg:text-sm">
													{headers[columnIndex]}
												</span>
											{/if}
											{#if cell.icon}
												<span class="status-check status-{cell.iconStatus} inline-flex h-6 w-6 items-center justify-center rounded-full text-sm lg:h-9 lg:w-9">
													<Icon name={cell.iconStatus === 'warning' ? 'check' : cell.icon} size="sm" lgSize="md" />
												</span>
											{:else if cell.component}
												<span class="text-themeGray-400 text-right text-xs md:text-center lg:text-sm">
													<!--<svelte:component this={cell.component} {...cell.props} />-->
													<cell.component {...cell.props} />
												</span>
											{:else}
												<span class="text-themeGray-400 text-right text-xs md:text-center lg:text-sm">
													{@html formatText(cell.text || '')}
												</span>
											{/if}
										</div>
									</td>
								{/if}
							{/each}
						</tr>
					{/each}
				</tbody>
			{/if}
		</table>
	</div>

	{#if shouldShowButton}
		<div class="w-full">
			<div class="absolute bottom-[-75px] left-1/2 z-10 flex h-[60px] w-full -translate-x-1/2 justify-center md:bottom-[-40px]">
				<Button label={buttonLabel} theme={buttonTheme} rightIcon={buttonRightIcon} onclick={() => goto(buttonLink)} />
			</div>
		</div>
	{/if}
</div>

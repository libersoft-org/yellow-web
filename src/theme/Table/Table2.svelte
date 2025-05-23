<script lang="ts">
	import Button from '@/theme/Button/Button.svelte';
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

	interface Props {
		children?: any;
		rows?: Row[];
		headers?: string[];
		formatHeaders?: boolean;
		formatNewlines?: boolean;
		rounded?: boolean;
		showOverlay?: boolean;
		overlayType?: 'gray' | 'white';
		customShadow?: 'standard' | 'multi-side' | 'none';
		// showButton?: boolean; // This prop seems unused based on shouldShowButton, but was in original
		buttonLabel?: string;
		buttonLink?: string;
		buttonTheme?: 'primary' | 'secondary';
		buttonRightIcon?: string;
	}

	let {
		children,
		rows = [],
		headers = [],
		formatHeaders = false,
		formatNewlines = false,
		rounded = true,
		showOverlay = false,
		overlayType = 'gray',
		customShadow = 'standard',
		buttonLabel = 'See all',
		buttonLink = '#',
		buttonTheme = 'secondary',
		buttonRightIcon = 'chevron'
	}: Props = $props();


	const shouldShowButton = $derived(buttonLabel && buttonLink && buttonLink !== '#');

	function getShadowClass(customShadow: string) {
		if (customShadow === 'multi-side') return 'shadow-top-left-right';
		if (customShadow === 'none') return '';
		return 'drop-shadow-md';
	}

	function getJustifyClass(alignment: 'left' | 'center' | 'right' = 'left') {
		if (alignment === 'center') return 'justify-center text-center';
		if (alignment === 'right') return 'justify-end text-right';
		return 'justify-start text-left';
	}

	function formatText(text: string) {
		if (!text) return '';
		if (formatNewlines) {
			text = text.replace(/\n/g, '<br>');
		}
		return text;
	}

	function formatHeaderText(text: string) {
		if (!text) return '';
		if (formatHeaders) {
			text = text.replace(/\//g, '/<br>');
		}
		return text;
	}

	// State for accordion
	let activeAccordionItem = $state<number | null>(null);

	function toggleAccordion(index: number) {
		activeAccordionItem = activeAccordionItem === index ? null : index;
	}
</script>

<div class={['table-container relative rounded-3xl', getShadowClass(customShadow)]}>
	<div class={['table overflow-hidden rounded-3xl', rounded ? 'table--rounded' : '']}>
		<table class="w-full md:h-[1px]">
			{#if headers.length > 0}
				<thead class="hidden md:table-header-group">
				<tr class="md:table-row">
					{#each headers as header, headerIndex}
						<th class="bg-gradient-to-t theme-gradient-yellow py-4.5 text-base font-bold text-themeGray-800">
							<div class="px-5.5">
								{@html formatHeaderText(header)}
							</div>
						</th>
					{/each}
				</tr>
				</thead>
			{/if}

			{#if rows.length > 0}
				<tbody class="block md:table-row-group">
				{#each rows as row, rowIndex}
					<tr class="block md:table-row">
						{#each row.cells as cell, columnIndex}
							{#if cell.isHeader}
								<th
									class={`
											block md:table-cell
											${columnIndex === 0 ? 'accordion-trigger' : 'accordion-content-cell'}
											${columnIndex > 0 ? (activeAccordionItem === rowIndex ? 'block' : 'hidden') : ''}
											md:block
											${cell.className || ''}
										`}
									onclick={() => { if (columnIndex === 0) toggleAccordion(rowIndex); }}
									role={columnIndex === 0 ? 'button' : undefined}
									tabindex={columnIndex === 0 ? 0 : undefined}
									aria-expanded={columnIndex === 0 ? (activeAccordionItem === rowIndex) : undefined}
									aria-controls={columnIndex === 0 ? `accordion-content-panel-${rowIndex}` : undefined}
									id={columnIndex === 0 ? `accordion-trigger-${rowIndex}` : (columnIndex > 0 && activeAccordionItem === rowIndex ? `accordion-content-panel-${rowIndex}` : undefined)}
								>

									<div
										class={`cell-wrapper text-sm md:text-base flex items-center px-5.5 py-4.5 h-full md:${getJustifyClass(cell.alignment)}`}>
										{@html formatText(cell.text)}
										{#if columnIndex === 0}
												<span class="accordion-chevron md:hidden ml-auto">
													<Icon name="chevron" class={activeAccordionItem === rowIndex ? 'rotate-90' : ''} size="sm" />
												</span>
										{/if}
									</div>
								</th>
							{:else}
								<td
									class={`
											block md:table-cell
											accordion-content-cell
											${activeAccordionItem === rowIndex ? 'block' : 'hidden'}
											md:block
											${cell.className || ''}
										`}
									id={columnIndex === 0 && activeAccordionItem === rowIndex ? `accordion-content-panel-${rowIndex}` : undefined}
									aria-labelledby={columnIndex === 0 ? `accordion-trigger-${rowIndex}` : undefined}
								>

									<div
										class="cell-wrapper flex justify-between items-center px-5.5 py-4 h-full md:{getJustifyClass(cell.alignment)}">
										{#if headers[columnIndex]}
                                                <span
																									class="flex items-center font-medium text-themeGray-500 text-sm md:hidden">
                                                    {headers[columnIndex]}
                                                </span>
										{/if}
										{#if cell.icon}
												<span class="status-check status-{cell.iconStatus}">
													<Icon name={cell.icon} size="xs" />
												</span>
										{:else}
											{@html formatText(cell.text)}
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

	{#if showOverlay}
		<div
			class={`absolute pointer-events-none h-32 w-[calc(100%+14px)] -mx-[7px] -bottom-[7px] ${overlayType === 'gray' ? 'bg-gradient-to-b from-transparent to-[#f2f3fa]' : 'bg-gradient-to-b from-[rgba(242,243,250,0)] to-white'}`}></div>
	{/if}

	{#if shouldShowButton}
		<div class="flex justify-center absolute bottom-0 left-0 right-0 z-10 md:pb-0 pb-4">
			<a href={buttonLink}>
				<Button label={buttonLabel} theme={buttonTheme} rightIcon={buttonRightIcon} />
			</a>
		</div>
	{/if}
</div>

<style>
    @reference "../../app.css";

    .table-container {
        @apply flex flex-col;
    }

    .shadow-top-left-right {
        box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
        -4px 0 6px -1px rgba(0, 0, 0, 0.1),
        4px 0 6px -1px rgba(0, 0, 0, 0.1);

    }

    .table :global {
        table {
            @apply w-full border-collapse md:overflow-hidden;
        }

        /* --- DESKTOP STYLES (md and up) --- */

        tbody tr th:first-child, thead tr th:first-child {
            @apply md:pl-6;
        }

        tbody tr td:last-child {
            @apply md:pr-4;
        }

        tbody tr:last-child > :where(td, th) > .cell-wrapper {
            @apply md:pb-20;
        }


        tbody tr:nth-child(even) :where(td, th) > .cell-wrapper {
            @apply md:bg-themeGray-75;
        }

        tbody tr:not(:last-child) :where(td, th) > .cell-wrapper {
            @apply border-b border-solid border-b-themeGray-150;
        }

        /* Status indicators */

        .status-check {
            @apply inline-flex items-center justify-center w-9 h-9 rounded-full text-sm;
        }

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

        /* --- MOBILE ACCORDION STYLES --- */
        @media (max-width: 767px) {

            tbody tr:last-child :where(td, th) > .cell-wrapper {
                @apply border-b border-b-themeGray-150;
            }

            tr:last-child {
                @apply mb-0;
            }

        }
    }
</style>

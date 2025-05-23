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
		showButton?: boolean;
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
		if (alignment === 'center') return 'justify-center';
		if (alignment === 'right') return 'justify-end';
		return 'justify-start';
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
</script>

<div class={['table-container relative', getShadowClass(customShadow)]}>
	<div class={['table ', rounded ? 'table--rounded' : '']}>
		<table class="w-full h-px">
			{#if headers.length > 0}
				<thead>
				<tr>
					{#each headers as header}
						<th>{@html formatHeaderText(header)}</th>
					{/each}
				</tr>
				</thead>
			{/if}

			{#if rows.length > 0}
				<tbody>
				{#each rows as row, rowIndex}
					<tr>
						{#each row.cells as cell, columnIndex}
							{#if cell.isHeader}
								<th class={cell.className || ''}>
									<div class="cell-wrapper flex items-center {getJustifyClass(cell.alignment)}">
										{@html formatText(cell.text)}
									</div>
								</th>
							{:else}
								<td>
									<div class="cell-wrapper flex items-center {getJustifyClass(cell.alignment)}">
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
			{:else}
				{@render children?.()}
			{/if}
		</table>
	</div>

	{#if showOverlay}
		<div
			class={`gradient-overlay gradient-overlay-${overlayType} absolute h-32 pointer-events-none bottom-[-7px]`}></div>
	{/if}

	{#if shouldShowButton}
		<div class="flex justify-center absolute bottom-0 left-0 right-0 z-10">
			<a href={buttonLink}>
				<Button label={buttonLabel} theme={buttonTheme} rightIcon={buttonRightIcon} />
			</a>
		</div>
	{/if}
</div>

<style>
    /* See https://tailwindcss.com/docs/functions-and-directives#reference-directive */
    @reference "../../app.css";

    .table-container {
        @apply flex flex-col;
    }

    .gradient-overlay {
        width: calc(100% + 14px);
        left: -7px;
        right: -7px;
    }

    .gradient-overlay-gray {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(242, 243, 250, 1) 60%);
    }

    .gradient-overlay-white {
        background: linear-gradient(to bottom, rgba(242, 243, 250, 0) 0%, rgba(255, 255, 255, 1) 60%);
    }

    .shadow-top-left-right {
        box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
        -4px 0 6px -1px rgba(0, 0, 0, 0.1),
        4px 0 6px -1px rgba(0, 0, 0, 0.1);
    }

    .table :global {
        /* Table */

        table {
            @apply w-full border-collapse;
            @apply overflow-hidden;
        }

        /* Head */

        thead th {
            @apply bg-gradient-to-t theme-gradient-yellow;
            @apply px-8 py-4.5;
            @apply text-base font-bold;
            @apply text-themeGray-800;
            @apply text-left;
        }

        .table--rounded :global(thead th:first-child) {
            @apply rounded-tl-2xl;
        }

        .table--rounded :global(thead th:last-child) {
            @apply rounded-tr-2xl;
        }

        /* Body */

        tbody tr th:first-child {
            @apply pl-8;
        }

        tbody tr td:last-child {
            @apply pr-4;
        }

        tbody tr:last-child :where(td, th) .cell-wrapper {
            @apply pb-20;
        }

        tbody th .cell-wrapper, tbody td .cell-wrapper {
            @apply px-4 py-4.5;
            @apply h-full;
        }

        tbody th {
            @apply font-bold;
            @apply text-left;
        }

        tbody td {
            @apply text-left;
        }

        tbody tr:nth-child(even) td .cell-wrapper, tbody tr:nth-child(even) th .cell-wrapper {
            @apply bg-themeGray-75;
        }

        tbody tr:not(:last-child) td .cell-wrapper, tbody tr:not(:last-child) th .cell-wrapper {
            @apply border-b border-b-themeGray-150;
        }

        /* Status indicators */

        .status-check {
            @apply inline-flex items-center justify-center;
            @apply w-9 h-9 rounded-full;
            @apply text-sm;
        }

        .status-success {
            @apply bg-[var(--color-themeGreen-100)];
            @apply text-[var(--color-themeGreen-500)];
        }

        .status-error {
            @apply bg-[var(--color-themeRed-100)];
            @apply text-[var(--color-themeRed-500)];
        }

        .status-warning {
            @apply bg-[var(--color-themeOrange-100)];
            @apply text-[var(--color-themeOrange-500)];
        }

        .status-check .icon {
            @apply p-0;
        }
    }
</style>

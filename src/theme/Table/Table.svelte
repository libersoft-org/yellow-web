<script lang="ts">
  import Button from '@/theme/Button/Button.svelte';
  import Icon from '@/theme/Icon/Icon.svelte';

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
  }

  let {
    children,
    rows = [],
    headers = [],
    formatHeaders = false,
    formatNewlines = false,
    rounded = true,
    showOverlay = true,
    overlayType = 'white',
    buttonLabel = 'See all',
    buttonLink = '#',
    buttonTheme = 'secondary',
    buttonRightIcon = 'chevron',
    class: className = ''
  }: Props = $props();

  const shouldShowButton = $derived(buttonLabel && buttonLink && buttonLink !== '#');

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

<div
  class="table-container relative flex flex-col rounded-3xl shadow-xl {className}"
  class:has-overlay={showOverlay}
  data-overlay-type={overlayType}
>
  <div class={['table overflow-hidden rounded-3xl', rounded ? 'table--rounded' : '']}>
    <table class="w-full lg:h-[1px]">
      {#if headers.length > 0}
        <thead class="lg:table-header-group">
          <tr class="hidden lg:table-row">
            {#each headers as header, headerIndex}
              <th
                class="theme-gradient-yellow text-themeGray-800 bg-gradient-to-t py-4.5 text-center text-base font-bold first:text-left"
              >
                <div class="px-5.5">
                  {@html formatHeaderText(header)}
                </div>
              </th>
            {/each}
          </tr>
          <tr class="lg:hidden">
            <th
              class="theme-gradient-yellow text-themeGray-800 flex justify-between bg-gradient-to-t py-4.5 text-base font-bold"
            >
              <div class="px-5.5">Name</div>
              <div class="px-5.5">Features</div>
            </th>
          </tr>
        </thead>
      {/if}

      {#if rows.length > 0}
        <tbody class="block lg:table-row-group">
          {#each rows as row, rowIndex}
            <tr class="block lg:table-row">
              {#each row.cells as cell, columnIndex}
                {#if cell.isHeader}
                  <th
                    class={`
											block lg:table-cell
											${columnIndex === 0 ? 'accordion-trigger' : 'accordion-content-cell'}
											${columnIndex > 0 ? (activeAccordionItem === rowIndex ? 'block' : 'hidden') : ''}
											lg:block
											${cell.className || ''}
										`}
                    onclick={() => {
                      if (columnIndex === 0) toggleAccordion(rowIndex);
                    }}
                    role={columnIndex === 0 ? 'button' : undefined}
                    tabindex={columnIndex === 0 ? 0 : undefined}
                    aria-expanded={columnIndex === 0 ? activeAccordionItem === rowIndex : undefined}
                    aria-controls={columnIndex === 0 ? `accordion-content-panel-${rowIndex}` : undefined}
                    id={columnIndex === 0
                      ? `accordion-trigger-${rowIndex}`
                      : columnIndex > 0 && activeAccordionItem === rowIndex
                        ? `accordion-content-panel-${rowIndex}`
                        : undefined}
                  >
                    <div class="cell-wrapper flex h-full items-center px-5.5 py-4.5 text-sm lg:text-base">
                      {@html formatText(cell.text)}
                      {#if columnIndex === 0}
                        <span class="accordion-chevron ml-auto lg:hidden">
                          <Icon name="chevron" class={activeAccordionItem === rowIndex ? 'rotate-90' : ''} size="sm" />
                        </span>
                      {/if}
                    </div>
                  </th>
                {:else}
                  <td
                    class={`
											accordion-content-cell block
											lg:table-cell
											${activeAccordionItem === rowIndex ? 'block' : 'hidden'}
											lg:block
											${cell.className || ''}
										`}
                    id={columnIndex === 0 && activeAccordionItem === rowIndex
                      ? `accordion-content-panel-${rowIndex}`
                      : undefined}
                    aria-labelledby={columnIndex === 0 ? `accordion-trigger-${rowIndex}` : undefined}
                  >
                    <div class="cell-wrapper flex h-full items-center justify-between px-5.5 py-2 lg:justify-center">
                      {#if headers[columnIndex]}
                        <span
                          class="text-themeGray-500 flex w-1/2 items-center text-xs font-medium md:w-full lg:hidden lg:text-sm"
                        >
                          {headers[columnIndex]}
                        </span>
                      {/if}
                      {#if cell.icon}
                        <span class="status-check status-{cell.iconStatus}">
                          <Icon name={cell.icon} size="md" />
                        </span>
                      {:else}
                        <span class="text-themeGray-400 text-right text-xs md:text-center lg:text-sm">
                          {@html formatText(cell.text)}
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
    <div class={`lg:pb-0'} absolute bottom-[-40px] left-1/2 z-10 flex h-[60px] -translate-x-1/2 justify-center pb-4`}>
      <a href={buttonLink}>
        <Button label={buttonLabel} theme={buttonTheme} rightIcon={buttonRightIcon} />
      </a>
    </div>
  {/if}
</div>

<style>
  @reference "../../app.css";

  .table-container.has-overlay::after {
    content: '';
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    height: 140px;
    width: calc(100% + 32px);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.7) 20%,
      rgba(255, 255, 255, 0.8) 30%,
      rgba(255, 255, 255, 1) 35%
    );
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    z-index: 1;
  }

  /* Gray overlay type */
  :global(.table-container[data-overlay-type='gray'].has-overlay)::after {
    background: linear-gradient(
      to bottom,
      rgba(242, 243, 250, 0.3) 0%,
      rgba(242, 243, 250, 0.7) 20%,
      rgba(242, 243, 250, 0.8) 30%,
      rgba(242, 243, 250, 1) 35%
    );
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

    tbody tr td:last-child {
      @apply lg:pr-4;
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

    .status-check {
      @apply inline-flex h-9 w-9 items-center justify-center rounded-full text-sm;
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

    /* --- MOBILE STYLES (below lg) --- */

    /* Header styling for mobile */
    .accordion-trigger {
      @apply cursor-pointer bg-white text-left;
    }

    .accordion-trigger .cell-wrapper {
      @apply flex justify-between;
    }

    /* Mobile accordion content styling  */
    .accordion-content-cell {
      @apply bg-themeGray-50;
    }
  }
</style>

<script lang="ts">
  import Table2 from '@/theme/Table/Table2.svelte';

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
    subtitle?: string;
    headers?: string[];
    rows?: Row[];
    buttonLabel?: string;
    buttonLink?: string;
  }

  let {
    title = 'with other software',
    headers = [
      'Software',
      'Open source',
      'Distributed/decentralized',
      'End-to-end encryption',
      'Developed by'
    ],
    rows = [
      {
        cells: [
          { text: 'Yellow', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
          { text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
          { text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
          { text: 'LiberSoft, Liberland', alignment: 'center' }
        ]
      },
      {
        cells: [
          { text: 'E-mail', alignment: 'left', isHeader: true },
          { text: 'some software', alignment: 'center' },
          { text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
          { text: 'some software', alignment: 'center' },
          { text: 'Jon Postel and Suzanne Sluizer, USA', alignment: 'center' }
        ]
      },
      {
        cells: [
          { text: 'WhatsApp', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
          { text: 'Meta Platforms Inc., USA', alignment: 'center' }
        ]
      },
      {
        cells: [
          { text: 'Messages\n(RCS protocol)', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: 'mobile operators', alignment: 'center' },
          { text: 'in development', alignment: 'center' },
          { text: 'Google LLC, USA / GSM Association, UK', alignment: 'center' }
        ]
      },
      {
        cells: [
          { text: 'WeChat', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: 'Tencent Holdings Ltd., China', alignment: 'center' }
        ]
      },
      {
        cells: [
          { text: 'Facebook Messenger', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: 'Meta Platforms Inc., USA', alignment: 'center' }
        ]
      }
    ],
    buttonLabel = 'See all comparsions',
    buttonLink = '/comparisons'
  }: Props = $props();
</script>

<div class="app-features-comparison-table flex flex-col items-center justify-center">
  <div class="theme-container relative">
    <div class="px-4 py-8 md:px-10 md:px-25 md:py-21">
      <div class="mb-8 text-center">
        <h2 class="theme-text-h2 text-left md:text-center">
          <span class="theme-title-underline">Comparison<br /></span><span
            class="text-lg md:text-2xl">{title}</span
          >
        </h2>
      </div>

      <div class="table-container-wrapper relative">
        <Table2
          {buttonLabel}
          {buttonLink}
          customShadow={rows.length > 5 ? 'multi-side' : 'standard'}
          formatHeaders={true}
          formatNewlines={true}
          {headers}
          overlayType="white"
          {rows}
          showOverlay={rows.length > 5}
        />
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

  .table-container-wrapper {
    @apply flex flex-col;
  }
</style>

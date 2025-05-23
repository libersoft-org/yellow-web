<script lang="ts">
  import Table from '@/theme/Table/Table.svelte';

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
          { text: 'LiberSoft, Liberland', alignment: 'left' }
        ]
      },
      {
        cells: [
          { text: 'E-mail', alignment: 'left', isHeader: true },
          { text: 'some software', alignment: 'center' },
          { text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
          { text: 'some software', alignment: 'center' },
          { text: 'Jon Postel and Suzanne Sluizer, USA', alignment: 'left' }
        ]
      },
      {
        cells: [
          { text: 'WhatsApp', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'success', icon: 'check' },
          { text: 'Meta Platforms Inc., USA', alignment: 'left' }
        ]
      },
      {
        cells: [
          { text: 'Messages\n(RCS protocol)', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: 'mobile operators', alignment: 'center' },
          { text: 'in development', alignment: 'center' },
          { text: 'Google LLC, USA / GSM Association, UK', alignment: 'left' }
        ]
      },
      {
        cells: [
          { text: 'WeChat', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: 'Tencent Holdings Ltd., China', alignment: 'left' }
        ]
      },
      {
        cells: [
          { text: 'Facebook Messenger', alignment: 'left', isHeader: true },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: '', alignment: 'center', iconStatus: 'error', icon: 'cross' },
          { text: 'Meta Platforms Inc., USA', alignment: 'left' }
        ]
      }
    ],
    buttonLabel = 'See all comparsions',
    buttonLink = '/comparisons'
  }: Props = $props();
</script>

<div class="app-features-comparison-table flex flex-col items-center justify-center">
  <div class="theme-container relative">
    <div class="px-10 px-25 py-21">
      <div class="mb-8 text-center">
        <h2 class="theme-text-h2">
          <span class="theme-title-underline">Comparison<br /></span>{title}
        </h2>
      </div>

      <div class="table-container-wrapper relative rounded-2xl bg-white">
        <Table
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

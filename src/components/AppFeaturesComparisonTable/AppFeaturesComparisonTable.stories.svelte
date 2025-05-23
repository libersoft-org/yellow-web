<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Site/AppFeaturesComparisonTable',
    component: AppFeaturesComparisonTable,
    tags: ['autodocs']
  });
</script>

<Story name="Default" />

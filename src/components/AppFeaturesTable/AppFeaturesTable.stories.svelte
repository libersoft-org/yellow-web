<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AppFeaturesTable from '@/components/AppFeaturesTable/AppFeaturesTable.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Site/AppFeaturesTable',
    component: AppFeaturesTable,
    tags: ['autodocs']
  });
</script>

<Story name="Default" />

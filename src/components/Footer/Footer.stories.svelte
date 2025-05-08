<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
	import Footer from '@/components/Footer/Footer.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Site/Footer',
    component: Footer,
		tags: ['autodocs'],
		args: {}
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">

</Story> 
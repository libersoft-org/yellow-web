<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Hero from '@/components/Hero/Hero.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Site/Hero',
		component: Hero,
		tags: ['autodocs'],
		args: {}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">

</Story>



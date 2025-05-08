<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import FAQ from '@/components/FAQ/FAQ.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Site/FAQ',
		component: FAQ,
		tags: ['autodocs']
	});
</script>

<Story name="Default" /> 
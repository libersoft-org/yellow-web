<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextImageHighlighted from './TextImageHighlighted.svelte';

	const { Story } = defineMeta({
		title: 'Components/TextImageHighlighted',
		component: TextImageHighlighted,
		tags: ['autodocs'],
	});
</script>

<Story name="Default" />

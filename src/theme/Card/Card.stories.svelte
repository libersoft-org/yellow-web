<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Card from '@/theme/Card/Card.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/Card',
		component: Card,
		tags: ['autodocs'],
		args: {
			title: 'Card Title',
			icon: 'download'
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">
	{#snippet children (args)}
		<Card {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
		</Card>
	{/snippet}
</Story>

<Story name="With footer">
	{#snippet children (args)}
		<Card {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
			{#snippet footerSlot ()}
				Footer rendered
			{/snippet}
		</Card>
	{/snippet}
</Story>


<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Box from '@/theme/Box/Box.svelte';
	import Icon from '@/theme/Icon/Icon.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/Box',
		component: Box,
		tags: ['autodocs'],
		args: {
			title: 'Box Title',
			icon: 'download',
		},
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary">
	{#snippet children(args)}
		<Box {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</Box>
	{/snippet}
</Story>

<Story args={{ theme: 'secondary' }} name="Secondary">
	{#snippet children(args)}
		<Box {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</Box>
	{/snippet}
</Story>

<Story args={{ theme: 'secondary' }} name="With footer">
	{#snippet children(args)}
		<Box {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
			{#snippet footerSlot()}
				<a href="#">
					<Icon name="arrow" size="md" />
				</a>
			{/snippet}
		</Box>
	{/snippet}
</Story>

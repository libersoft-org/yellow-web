<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { fn } from '@storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			backgroundColor: { control: 'color' },
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large'],
			},
		},
		args: {
			onClick: fn(),
		},
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story args={{ primary: true, label: 'Button' }} name="Primary" />

<Story args={{ label: 'Button' }} name="Secondary" />

<Story args={{ size: 'large', label: 'Button' }} name="Large" />

<Story args={{ size: 'small', label: 'Button' }} name="Small" />

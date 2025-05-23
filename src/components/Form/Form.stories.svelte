<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Form from '@/components/Form/Form.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/Form',
		component: Form,
		tags: ['autodocs'],
		args: {
			title: 'Formulář'
		}
	});
</script>

<!-- Default form -->
<Story name="Default" />

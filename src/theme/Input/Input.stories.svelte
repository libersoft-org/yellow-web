<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from '@/theme/Input/Input.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/Input',
		component: Input,
		tags: ['autodocs'],
		args: {
			placeholder: 'Enter text here'
		}
	});
</script>

<!-- Basic input -->
<Story name="Default" />

<!-- Input with label -->
<Story args={{
  label: 'Input Label'
}} name="With Label" />

<!-- Input with error message -->
<Story args={{
  label: 'Input Label',
  error: 'This field is required'
}} name="With Error" />

<!-- Input with custom styling -->
<Story args={{
  label: 'Custom Input',
  class: 'border-themeYellow-500 bg-themeYellow-50'
}} name="Custom Styling" />

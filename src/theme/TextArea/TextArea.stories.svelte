<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextArea from '@/theme/TextArea/TextArea.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/TextArea',
		component: TextArea,
		tags: ['autodocs'],
		args: {
			placeholder: 'Enter your message here'
		}
	});
</script>

<!-- Basic textarea -->
<Story name="Default" />

<!-- Textarea with label -->
<Story args={{
  label: 'Message'
}} name="With Label" />

<!-- Textarea with custom rows -->
<Story args={{
  label: 'Message',
  rows: 8
}} name="Custom Rows" />

<!-- Textarea with error message -->
<Story args={{
  label: 'Message',
  error: 'Please enter a valid message'
}} name="With Error" />

<!-- Textarea with custom styling -->
<Story args={{
  label: 'Custom TextArea',
  class: 'border-themeYellow-500 bg-themeYellow-50'
}} name="Custom Styling" />

<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import RadioButton from '@/theme/RadioButton/RadioButton.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/RadioButton',
		component: RadioButton,
		tags: ['autodocs'],
		args: {
			name: 'radioGroup',
			value: 'option1',
			checked: false
		}
	});
</script>

<!-- Basic radio button -->
<Story name="Default" />

<!-- Radio button with label -->
<Story args={{
  label: 'Option 1'
}} name="With Label" />

<!-- Checked radio button -->
<Story args={{
  label: 'Selected option',
  checked: true
}} name="Checked" />

<!-- Radio button with error -->
<Story args={{
  label: 'Option with error',
  error: 'Please select a valid option'
}} name="With Error" />

<!-- Radio button with custom styling -->
<Story args={{
  label: 'Custom styled radio',
  class: 'text-themeYellow-600'
}} name="Custom Styling" />

<!-- Radio button group example -->
<Story name="Radio Group">
	<div class="flex flex-col gap-2">
		<RadioButton
			checked={true}
			label="Option 1"
			name="exampleGroup"
			value="option1"
		/>
		<RadioButton
			label="Option 2"
			name="exampleGroup"
			value="option2"
		/>
		<RadioButton
			label="Option 3"
			name="exampleGroup"
			value="option3"
		/>
	</div>
</Story>

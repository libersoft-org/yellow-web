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
<Story name="With Label" args={{ 
  label: 'Option 1'
}} />

<!-- Checked radio button -->
<Story name="Checked" args={{ 
  label: 'Selected option',
  checked: true
}} />

<!-- Radio button with error -->
<Story name="With Error" args={{ 
  label: 'Option with error',
  error: 'Please select a valid option'
}} />

<!-- Radio button with custom styling -->
<Story name="Custom Styling" args={{ 
  label: 'Custom styled radio',
  class: 'text-themeYellow-600'
}} />

<!-- Radio button group example -->
<Story name="Radio Group">
  <div class="flex flex-col gap-2">
    <RadioButton 
      name="exampleGroup"
      value="option1"
      label="Option 1"
      checked={true}
    />
    <RadioButton 
      name="exampleGroup"
      value="option2"
      label="Option 2"
    />
    <RadioButton 
      name="exampleGroup"
      value="option3"
      label="Option 3"
    />
  </div>
</Story> 
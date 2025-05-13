<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CheckBox from '@/theme/CheckBox/CheckBox.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Theme/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    args: {
      checked: false
    }
  });
</script>

<!-- Basic checkbox -->
<Story name="Default" />

<!-- Checkbox with label -->
<Story name="With Label" args={{ 
  label: 'Accept terms and conditions'
}} />

<!-- Checked checkbox -->
<Story name="Checked" args={{ 
  label: 'Checked option',
  checked: true
}} />

<!-- Checkbox with error -->
<Story name="With Error" args={{ 
  label: 'Required field',
  error: 'This field is required'
}} />

<!-- Checkbox with custom styling -->
<Story name="Custom Styling" args={{ 
  label: 'Custom styled checkbox',
  class: 'text-themeYellow-600'
}} /> 
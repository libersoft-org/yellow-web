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
<Story name="With Label" args={{ 
  label: 'Input Label'
}} />

<!-- Input with error message -->
<Story name="With Error" args={{ 
  label: 'Input Label',
  error: 'This field is required'
}} />

<!-- Input with custom styling -->
<Story name="Custom Styling" args={{ 
  label: 'Custom Input',
  class: 'border-themeYellow-500 bg-themeYellow-50'
}} /> 
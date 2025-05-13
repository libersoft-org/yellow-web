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
<Story name="With Label" args={{ 
  label: 'Message'
}} />

<!-- Textarea with custom rows -->
<Story name="Custom Rows" args={{ 
  label: 'Message',
  rows: 8
}} />

<!-- Textarea with error message -->
<Story name="With Error" args={{ 
  label: 'Message',
  error: 'Please enter a valid message'
}} />

<!-- Textarea with custom styling -->
<Story name="Custom Styling" args={{ 
  label: 'Custom TextArea',
  class: 'border-themeYellow-500 bg-themeYellow-50'
}} /> 
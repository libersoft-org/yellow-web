<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SelectBox from '@/theme/SelectBox/SelectBox.svelte';

  // Sample options for the select box
  const sampleOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Theme/SelectBox',
    component: SelectBox,
    tags: ['autodocs'],
    args: {
      options: sampleOptions
    }
  });
</script>

<!-- Basic selectbox -->
<Story name="Default" />

<!-- SelectBox with label -->
<Story name="With Label" args={{ 
  label: 'Select an option'
}} />

<!-- SelectBox with error message -->
<Story name="With Error" args={{ 
  label: 'Select an option',
  error: 'Please select an option'
}} />

<!-- SelectBox with custom styling -->
<Story name="Custom Styling" args={{ 
  label: 'Custom SelectBox',
  class: 'border-themeYellow-500 bg-themeYellow-50'
}} />

<!-- SelectBox with many options -->
<Story name="Many Options" args={{ 
  label: 'Select from many options',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' }
  ]
}} /> 
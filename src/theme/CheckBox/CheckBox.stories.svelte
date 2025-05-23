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
<Story
  args={{
    label: 'Accept terms and conditions'
  }}
  name="With Label"
/>

<!-- Checked checkbox -->
<Story
  args={{
    label: 'Checked option',
    checked: true
  }}
  name="Checked"
/>

<!-- Checkbox with error -->
<Story
  args={{
    label: 'Required field',
    error: 'This field is required'
  }}
  name="With Error"
/>

<!-- Checkbox with custom styling -->
<Story
  args={{
    label: 'Custom styled checkbox',
    class: 'text-themeYellow-600'
  }}
  name="Custom Styling"
/>

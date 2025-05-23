<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '@/theme/Button/Button.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Theme/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
      label: 'Button'
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story args={{ theme: 'primary' }} name="Primary" />

<Story args={{ theme: 'primary', icon: 'download' }} name="Primary with Icon" />

<Story args={{ theme: 'primary', icon: 'download', class: 'text-2xl' }} name="Primary larger" />

<Story args={{ theme: 'secondary' }} name="Secondary" />

<Story args={{ theme: 'secondary', icon: 'download' }} name="Secondary with Icon" />

<Story args={{ theme: 'secondary', rightIcon: 'download' }} name="Secondary with right Icon" />

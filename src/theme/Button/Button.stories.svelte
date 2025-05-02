<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
	import Button from '@/theme/Button/Button.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Theme/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
			label: 'Button',
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ theme: 'primary', }} />

<Story name="Primary with Icon" args={{ theme: 'primary', icon: 'download' }} />

<Story name="Primary larger" args={{ theme: 'primary', icon: 'download', class: 'text-2xl' }} />

<Story name="Secondary" args={{ theme: 'secondary', }} />

<Story name="Secondary with Icon" args={{ theme: 'secondary', icon: 'download' }} />

<Story name="Secondary with right Icon" args={{ theme: 'secondary', rightIcon: 'download' }} />

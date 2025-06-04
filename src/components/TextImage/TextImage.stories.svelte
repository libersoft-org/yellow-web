<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TextImage from './TextImage.svelte';

  const { Story } = defineMeta({
    title: 'Components/TextImage',
    component: TextImage,
    tags: ['autodocs'],
    argTypes: {
      imagePosition: {
        control: { type: 'select' },
        options: ['left', 'right']
      },
      showImage: {
        control: { type: 'boolean' }
      }
    }
  });
</script>

<Story name="Default" />

<Story
  name="Image Right"
  args={{
    imagePosition: 'right'
  }}
/>

<Story
  name="Text Only"
  args={{
    showImage: false
  }}
/>

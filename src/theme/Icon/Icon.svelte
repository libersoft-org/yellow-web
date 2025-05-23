<script lang="ts" module>
  import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

  const sizeMap = {
    xs: 'max-w-2.5 max-h-2.5 w-2.5 h-2.5',
    sm: 'max-w-3 max-h-3 w-3 h-3',
    md: 'max-w-4 max-h-4 w-4 h-4',
    lg: 'max-w-4.5 max-h-4.5 w-4.5 h-4.5',
    xl: 'max-w-6 max-h-6 w-6 h-6',
    '2xl': 'max-w-6.5 max-h-6.5 w-6.5 h-6.5',
    '3xl': 'max-w-8 max-h-8 w-8 h-8',
    '4xl': 'max-w-8.5 max-h-8.5 w-8.5 h-8.5',
    '5xl': 'max-w-10 max-h-10 w-10 h-10',
    '6xl': 'max-w-12 max-h-12 w-12 h-12',
    '7xl': 'max-w-32 max-h-32 w-32 h-32',
    '8xl': 'max-w-36 max-h-36 w-36 h-36'
  };

  export type IconSizeMapType = keyof typeof sizeMap;

  export interface Props extends HTMLAttributes<HTMLDivElement> {
    name: string;
    basePath?: string;
    imgProps?: HTMLImgAttributes;
    size?: IconSizeMapType | number;
  }
</script>

<script lang="ts">
  let {
    name,
    basePath = '/assets/icons',
    size = 'md',
    ...restProps
  }: Props = $props();

  let svgContent = $state('');

  $effect(() => {
    // Determine if this is a public path or a source path
    const path = basePath.startsWith('/')
      ? basePath.replace(/^\//, '') // Remove leading slash for fetch
      : basePath;

    // Use fetch to get raw SVG content
    fetch(`/${path}/${name}.svg`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        svgContent = text;
      })
      .catch(error => {
        console.error(`Icon "${name}" not found:`, error);
        svgContent = '';
      });
  });

  const sizeClass = $derived(typeof size === 'string' ? sizeMap[size] : undefined);
</script>

<div
	{...restProps}
	class={['icon', restProps.class, sizeClass]}
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html svgContent}
</div>

<style>
    .icon :global(svg) {
        width: 100%;
        height: 100%;
    }
</style>

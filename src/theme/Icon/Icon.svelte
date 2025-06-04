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

  // Pre-generate responsive class maps
  const mdSizeMap = {
    xs: 'md:max-w-2.5 md:max-h-2.5 md:w-2.5 md:h-2.5',
    sm: 'md:max-w-3 md:max-h-3 md:w-3 md:h-3',
    md: 'md:max-w-4 md:max-h-4 md:w-4 md:h-4',
    lg: 'md:max-w-4.5 md:max-h-4.5 md:w-4.5 md:h-4.5',
    xl: 'md:max-w-6 md:max-h-6 md:w-6 md:h-6',
    '2xl': 'md:max-w-6.5 md:max-h-6.5 md:w-6.5 md:h-6.5',
    '3xl': 'md:max-w-8 md:max-h-8 md:w-8 md:h-8',
    '4xl': 'md:max-w-8.5 md:max-h-8.5 md:w-8.5 md:h-8.5',
    '5xl': 'md:max-w-10 md:max-h-10 md:w-10 md:h-10',
    '6xl': 'md:max-w-12 md:max-h-12 md:w-12 md:h-12',
    '7xl': 'md:max-w-32 md:max-h-32 md:w-32 md:h-32',
    '8xl': 'md:max-w-36 md:max-h-36 md:w-36 md:h-36'
  };

  const lgSizeMap = {
    xs: 'lg:max-w-2.5 lg:max-h-2.5 lg:w-2.5 lg:h-2.5',
    sm: 'lg:max-w-3 lg:max-h-3 lg:w-3 lg:h-3',
    md: 'lg:max-w-4 lg:max-h-4 lg:w-4 lg:h-4',
    lg: 'lg:max-w-4.5 lg:max-h-4.5 lg:w-4.5 lg:h-4.5',
    xl: 'lg:max-w-6 lg:max-h-6 lg:w-6 lg:h-6',
    '2xl': 'lg:max-w-6.5 lg:max-h-6.5 lg:w-6.5 lg:h-6.5',
    '3xl': 'lg:max-w-8 lg:max-h-8 lg:w-8 lg:h-8',
    '4xl': 'lg:max-w-8.5 lg:max-h-8.5 lg:w-8.5 lg:h-8.5',
    '5xl': 'lg:max-w-10 lg:max-h-10 lg:w-10 lg:h-10',
    '6xl': 'lg:max-w-12 lg:max-h-12 lg:w-12 lg:h-12',
    '7xl': 'lg:max-w-32 lg:max-h-32 lg:w-32 lg:h-32',
    '8xl': 'lg:max-w-36 lg:max-h-36 lg:w-36 lg:h-36'
  };

  export type IconSizeMapType = keyof typeof sizeMap;

  export interface Props extends HTMLAttributes<HTMLDivElement> {
    name: string;
    basePath?: string;
    imgProps?: HTMLImgAttributes;
    size?: IconSizeMapType | number;
    mdSize?: IconSizeMapType;
    lgSize?: IconSizeMapType;
  }
</script>

<script lang="ts">
  let { name, basePath = '/assets/icons', size = 'md', mdSize, lgSize, ...restProps }: Props = $props();

  let svgContent = $state('');
  $effect(() => {
    const path = basePath.startsWith('/') ? basePath.replace(/^\//, '') : basePath;

    fetch(`/${path}/${name}.svg`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        svgContent = text;
      })
      .catch((error) => {
        console.error(`Icon "${name}" not found:`, error);
        svgContent = '';
      });
  });

  const baseClasses = $derived(typeof size === 'string' ? sizeMap[size] : '');
  const mdClasses = $derived(mdSize ? mdSizeMap[mdSize] : '');
  const lgClasses = $derived(lgSize ? lgSizeMap[lgSize] : '');
</script>

<div {...restProps} class="icon {restProps.class || ''} {baseClasses} {mdClasses} {lgClasses}">
  {@html svgContent}
</div>

<style>
  .icon :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>

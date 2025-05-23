<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import Icon, { type Props as IconProps } from '@/theme/Icon/Icon.svelte';

  interface Props extends HTMLButtonAttributes {
    label: string;
    theme?: 'primary' | 'secondary';
    icon?: string | IconProps;
    rightIcon?: string | IconProps;
    iconSize?: IconProps['size'];
  }

  let {
    label,
    theme = 'primary',
    icon,
    rightIcon,
    iconSize = 'sm',
    ...restProps
  }: Props = $props();
</script>

{#snippet makeIcon(icon: string | IconProps)}
  <div class="button__icon">
    {#if typeof icon === 'string'}
      <Icon
        size={iconSize}
        name={icon}
        class={[theme === 'secondary' ? 'text-themeYellow-600' : '']}
      />
    {:else}
      <Icon {...icon} />
    {/if}
  </div>
{/snippet}

<button
  {...restProps}
  class={[
    'button',
    'cursor-pointer rounded-2xl rounded-tr-none px-4.5 py-4.5 font-bold drop-shadow-md md:px-7 md:py-3 lg:px-8.5 lg:py-3.5',
    theme === 'primary'
      ? 'text-secondary from-themeYellow-600 to-themeYellow-800 hover:from-themeYellow-400 hover:to-themeYellow-300 theme-button--primary bg-gradient-to-b hover:bg-gradient-to-b'
      : '',
    theme === 'secondary'
      ? 'from-themeGray-600 to-themeGray-800 hover:from-themeGray-500 hover:to-themeGray-700 bg-gradient-to-b text-white hover:bg-gradient-to-b'
      : '',
    restProps.class
  ]}
>
  <div class="button__inner flex items-center justify-center gap-3.5">
    {#if icon}
      {@render makeIcon(icon)}
    {/if}
    <div class="button__label text-sm md:text-base lg:text-lg">
      {label}
    </div>
    {#if rightIcon}
      {@render makeIcon(rightIcon)}
    {/if}
  </div>
</button>

<style>
</style>

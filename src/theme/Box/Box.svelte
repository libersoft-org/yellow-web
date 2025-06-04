<script lang="ts">
  import Icon from '@/theme/Icon/Icon.svelte';
  import Button from '@/theme/Button/Button.svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: string;
    theme?: 'primary' | 'secondary';
    footerSlot?: any;
    footerType?: 'link' | 'button';
    footerLink?: string;
    footerText?: string;
  }

  let {
    title,
    description,
    icon,
    theme = 'primary',
    footerSlot,
    footerType,
    footerLink = '#',
    footerText = 'Learn more',
    ...restProps
  }: Props = $props();

  const showHeader = $derived(title || icon);
  const showFooter = $derived(footerType || footerSlot);
</script>

<div
  class={[
    'box relative flex h-full flex-col rounded-xl rounded-br-none drop-shadow-xl',
    'px-8.5 pt-4 pb-9 md:px-12 md:pt-10 lg:px-15 lg:pt-12.5 lg:pb-4 lg:pb-11',
    theme === 'primary' ? 'text-themeGray-800 theme-gradient-yellow bg-gradient-to-t' : '',
    theme === 'secondary' ? 'bg-themeGray-800 text-white' : '',
    restProps.class
  ]}
>
  {#if showHeader}
    <div class="box-header mb-2 flex justify-between gap-4 md:mb-4.5">
      {#if title}
        <h3 class="box-header__title theme-text-h5 mt-4">{@html title}</h3>
      {/if}
    </div>
  {/if}
  <div
    class={[
      'box__body theme-text-body2',
      theme === 'primary' ? 'text-themeGray-800 mb-6.5 md:mb-10' : '',
      theme === 'secondary' ? 'text-themeGray-200 mb-4 md:mb-8.5' : ''
    ]}
  >
    {#if description}
      {@html description}
    {/if}
  </div>

  {#if showFooter}
    <div class="box__footer flex items-center justify-between">
      {#if footerSlot}
        {@render footerSlot()}
      {:else if footerType === 'link'}
        <a href={footerLink} class="flex items-center text-yellow-300">
          <Icon name="arrow" size="2xl" />
        </a>
      {:else if footerType === 'button'}
        <a href={footerLink}>
          <Button label={footerText || 'Learn more'} theme="secondary" rightIcon="chevron" />
        </a>
      {/if}

      {#if icon}
        <div class="box-footer__icon text-themeYellow-600 md:absolute md:top-6.5 md:right-6.5">
          <Icon name={icon} size="6xl" />
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
</style>

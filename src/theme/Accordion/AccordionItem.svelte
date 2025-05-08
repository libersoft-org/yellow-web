<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Icon from '@/theme/Icon/Icon.svelte';
  import { slide } from 'svelte/transition';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    title: string;
    open?: boolean;
    children?: any;
  }

  let { class: className = '', title, open = false, children, ...rest } = $props();
  let isOpen = $state(open);
</script>

<div class={`bg-themeGray-200 mb-4 rounded-lg p-4 ${className}`} {...rest}>
  <button
    class="flex w-full items-center justify-between py-4 text-left text-lg font-medium"
    on:click={() => (isOpen = !isOpen)}
    aria-expanded={isOpen}
  >
    <span>{title}</span>
    <Icon 
      name="plus" 
      class={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    />
  </button>
  {#if isOpen}
    <div class="pb-4 text-themeGray-300" transition:slide>
      {@render children?.()}
    </div>
  {/if}
</div> 
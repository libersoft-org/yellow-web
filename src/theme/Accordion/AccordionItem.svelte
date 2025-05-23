<script lang="ts">
  import Icon from '@/theme/Icon/Icon.svelte';
  import { slide } from 'svelte/transition';
  import { getContext } from 'svelte';

  interface Props {
    class?: string;
    title: string;
    open?: boolean;
    children?: any;
    id: string;
  }

  interface AccordionStore {
    activeId: string | null;
    toggle: (id: string) => void;
  }

  let { class: className = '', title, open = false, children, id }: Props = $props();

  const store = getContext<AccordionStore>('accordion-store');

  let isOpen = $state(false);

  $effect(() => {
    isOpen = store.activeId === id;
  });

  $effect(() => {
    if (open && !store.activeId) {
      store.toggle(id);
    }
  });

  function handleToggle() {
    store.toggle(id);
  }
</script>

<div
  class={`transition-background duration-400 ${isOpen ? 'theme-gradient-yellow bg-gradient-to-t' : 'theme-gradient-gray'} mb-4 flex items-center justify-between rounded-lg p-4 shadow-md ${className}`}
>
  <div class="flex-1 pr-4">
    <button
      aria-expanded={isOpen}
      class="w-full cursor-pointer text-left text-lg font-bold md:text-xl lg:text-2xl"
      onclick={handleToggle}
      type="button"
    >
      <span>{title}</span>
    </button>
    {#if isOpen}
      <div class="theme-text-body3 mt-2 pb-4" transition:slide>
        {@render children?.()}
      </div>
    {/if}
  </div>
  <div class="flex-shrink-0">
    <button
      class={`transition-background-color h-9 w-9 rounded-full p-2 duration-300 ${isOpen ? 'bg-themeGray-800' : 'bg-themeGray-300'} flex items-center justify-center text-white`}
      onclick={handleToggle}
      type="button"
    >
      <Icon class={`${isOpen ? '' : 'rotate-0'}`} name={isOpen ? 'cross' : 'plus'} />
    </button>
  </div>
</div>

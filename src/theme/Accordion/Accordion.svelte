<script lang="ts">
  import { setContext } from 'svelte';

  interface Props {
    class?: string;
    children?: any;
    defaultActive?: string[] | string | null;
  }

  let { class: className = '', children, defaultActive = null }: Props = $props();

  // Convert defaultActive to array if it's a string
  let activeIds = $state<string[]>(
    defaultActive ? (Array.isArray(defaultActive) ? defaultActive : [defaultActive]) : []
  );

  const store = {
    toggle(id: string) {
      if (activeIds.includes(id)) {
        activeIds = activeIds.filter((activeId) => activeId !== id);
      } else {
        activeIds = [...activeIds, id];
      }
    },

    isActive(id: string) {
      return activeIds.includes(id);
    }
  };

  setContext('accordion-store', store);
</script>

<div
  class={`mx-auto 
  max-w-[1000px] 
  ${className}`}
>
  {@render children?.()}
</div>

<script lang="ts">
  import { setContext } from 'svelte';

  interface Props {
    class?: string;
    children?: any;
    defaultActive?: string | null;
  }

  let { class: className = '', children, defaultActive = null }: Props = $props();

  let activeId = $state<string | null>(defaultActive);

  const store = {
    toggle(id: string) {
      activeId = activeId === id ? null : id;
    },

    get activeId() {
      return activeId;
    }
  };

  setContext('accordion-store', store);
</script>

<div class={`mx-auto max-w-[1000px] ${className}`}>
  {@render children?.()}
</div>

<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: any;
  }

  let { class: className = '', children, ...rest } = $props();
</script>

<div class={`mx-auto max-w-[1000px] ${className}`} {...rest}>
  {@render children?.()}
</div> 
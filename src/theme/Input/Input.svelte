<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    label?: string;
    error?: string;
  }

  let { label, error, placeholder, value = $bindable(''), ...restProps }: Props = $props();
</script>

<div class="mb-4">
  {#if label}
    <label class="text-themeGray-800 mb-1.5 block text-sm font-medium">{label}</label>
  {/if}
  <input
    {...restProps}
    class={[
      'w-full rounded-lg border bg-white px-4 py-3',
      error ? 'border-red-500' : 'border-themeGray-300',
      'focus:ring-themeYellow-600 focus:border-transparent focus:ring-2 focus:outline-none',
      restProps.class
    ]}
    {placeholder}
    {value}
  />
  {#if error}
    <p class="mt-1 text-sm text-red-500">{error}</p>
  {/if}
</div>

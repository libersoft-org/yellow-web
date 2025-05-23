<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLInputAttributes, 'type'> {
    label?: string;
    error?: string;
  }

  let { label, error, checked = $bindable(false), ...restProps }: Props = $props();
</script>

<div class="mb-2 flex items-center">
  <input
    {...restProps}
    {checked}
    class={[
      'border-themeGray-300 text-themeYellow-600 focus:ring-themeYellow-500 h-4 w-4 rounded',
      error ? 'border-red-500' : '',
      restProps.class
    ]}
    type="checkbox"
  />
  {#if label}
    <label class="text-themeGray-700 ml-2 text-sm">{label}</label>
  {/if}
</div>
{#if error}
  <p class="mt-1 text-sm text-red-500">{error}</p>
{/if}

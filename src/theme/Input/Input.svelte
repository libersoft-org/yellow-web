<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    label?: string;
    error?: string;
    id?: string;
  }

  let {
    label,
    error,
    placeholder,
    id = `input-${Math.random().toString(36).substring(2, 9)}`,
    value = $bindable(''),
    ...restProps
  }: Props = $props();
</script>

<div class="mb-4">
  {#if label}
    <label for={id} class="text-themeGray-800 mb-1.5 block text-xl font-medium">{label}</label>
  {/if}
  <input
    {id}
    {...restProps}
    class={[
      'w-full rounded-lg border-0 border-none bg-white px-4 py-3 drop-shadow-md',
      error ? 'border border-red-500' : '',
      'focus:border-0 focus:ring-0 focus:outline-none',
      restProps.class
    ]}
    {placeholder}
    {value}
  />
  {#if error}
    <p class="mt-1 text-sm text-red-500">{error}</p>
  {/if}
</div>

<script lang="ts">
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  interface Props extends HTMLTextareaAttributes {
    label?: string;
    error?: string;
    id?: string;
  }

  let {
    label,
    error,
    placeholder,
    rows = 4,
    id = `textarea-${Math.random().toString(36).substring(2, 9)}`,
    value = $bindable(''),
    ...restProps
  }: Props = $props();
</script>

<div class="mb-4">
  {#if label}
    <label for={id} class="text-themeGray-800 mb-1.5 block text-sm font-medium">{label}</label>
  {/if}
  <textarea
    {id}
    {...restProps}
    class={[
      'theme-gradient-white w-full rounded-lg border-0 border-none bg-gradient-to-t px-4 py-3 drop-shadow-md',
      error ? 'border border-red-500' : '',
      'focus:border-0 focus:ring-0 focus:outline-none',
      restProps.class
    ]}
    {placeholder}
    {rows}
    {value}
  ></textarea>
  {#if error}
    <p class="mt-1 text-sm text-red-500">{error}</p>
  {/if}
</div>

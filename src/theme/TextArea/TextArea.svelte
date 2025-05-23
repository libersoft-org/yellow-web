<script lang="ts">
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  interface Props extends HTMLTextareaAttributes {
    label?: string;
    error?: string;
  }

  let {
    label,
    error,
    placeholder,
    rows = 4,
    value = $bindable(''),
    ...restProps
  }: Props = $props();
</script>

<div class="mb-4">
	{#if label}
		<label class="block text-sm font-medium mb-1.5 text-themeGray-800">{label}</label>
	{/if}
	<textarea
		{...restProps}
		class={[
			'w-full py-3 px-4 border rounded-lg bg-white',
			error ? 'border-red-500' : 'border-themeGray-300',
			'focus:outline-none focus:ring-2 focus:ring-themeYellow-600 focus:border-transparent',
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

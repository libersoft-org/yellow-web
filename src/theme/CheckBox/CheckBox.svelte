<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLInputAttributes, 'type'> {
		label?: string;
		error?: string;
	}

	let {
		label,
		error,
		checked = $bindable(false),
		...restProps
	}: Props = $props();
</script>

<div class="mb-2 flex items-center">
	<input
		{...restProps}
		{checked}
		class={[
			'h-4 w-4 rounded border-themeGray-300 text-themeYellow-600 focus:ring-themeYellow-500',
			error ? 'border-red-500' : '',
			restProps.class
		]}
		type="checkbox"
	/>
	{#if label}
		<label class="ml-2 text-sm text-themeGray-700">{label}</label>
	{/if}
</div>
{#if error}
	<p class="mt-1 text-sm text-red-500">{error}</p>
{/if}

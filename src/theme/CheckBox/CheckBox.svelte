<script lang="ts">
	import { Checkbox, Label, useId } from 'bits-ui';
	import Icon from '@/theme/Icon/Icon.svelte';

	interface Props {
		checked?: boolean;
		indeterminate?: boolean;
		value?: string;
		disabled?: boolean;
		name?: string;
		required?: boolean;
		id?: string;
		label?: string;
		error?: string;
		class?: string;
	}

	let { checked = $bindable(false), indeterminate = $bindable(false), value, disabled = false, name, required = false, id = useId(), label, error, class: className = '' }: Props = $props();
</script>

<div class="items-r flex flex-col {className}">
	<div class="flex items-center">
		<Checkbox.Root
			bind:checked
			bind:indeterminate
			{value}
			{disabled}
			{name}
			{required}
			{id}
			class="theme-gradient-white text-themeYellow-600 peer 
			data-[state=checked]:bg-themeYellow-600 data-[state=indeterminate]:bg-themeYellow-600 
			inline-flex h-[20px] w-[20px]
			items-center justify-center rounded border  
			border-[#C09A05] bg-gradient-to-t drop-shadow-md focus:ring-0 focus:outline-none 
			data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 
			md:h-[27px] md:w-[27px]"
			aria-labelledby={label ? `${id}-label` : undefined}
			aria-invalid={error ? 'true' : undefined}
			aria-errormessage={error ? `${id}-error` : undefined}
		>
			{#snippet children({ checked, indeterminate })}
				<div
					class="inline-flex items-center justify-center
					text-black"
				>
					{#if indeterminate}
						<Icon name="minus" size="md" />
					{:else if checked}
						<Icon name="check" size="md" />
					{/if}
				</div>
			{/snippet}
		</Checkbox.Root>

		{#if label}
			<Label.Root
				for={id}
				id={`${id}-label`}
				class="text-themeGray-700 
				ml-2 
				text-base 
				peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{@html label}
			</Label.Root>
		{/if}
	</div>
	{#if error}
		<div id={`${id}-error`} class="text-themeRed-600 text-sm mt-1">
			{error}
		</div>
	{/if}
</div>

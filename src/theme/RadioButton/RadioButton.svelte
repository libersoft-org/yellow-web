<script lang="ts">
	import { RadioGroup, Label, useId } from 'bits-ui';

	interface Props {
		value: string;
		id?: string;
		label?: string;
		disabled?: boolean;
		name?: string;
		checked?: boolean;
		error?: string;
		class?: string;
	}

	let { value, id = useId(), label, disabled = false, name, checked = false, error, class: className = '' }: Props = $props();
	let isChecked = $state(checked);

	$effect(() => {
		isChecked = checked;
	});
</script>

<div class="flex flex-col {className}">
	<div class="flex items-center">
		<RadioGroup.Item
			{id}
			{value}
			{disabled}
			{name}
			class="theme-gradient-white text-themeYellow-600 peer inline-flex 
			h-[20px] w-[20px] 
			shrink-0 cursor-pointer rounded-full border 
			border-[#C09A05] 
			bg-gradient-to-t drop-shadow-md focus:ring-0
			focus:outline-none 
			data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 
			data-[state=checked]:border-[#C09A05] md:h-[27px] 
			md:w-[27px]"
			aria-labelledby={label ? `${id}-label` : undefined}
			aria-invalid={error ? 'true' : undefined}
			aria-errormessage={error ? `${id}-error` : undefined}
		>
			{#snippet children({ checked: isChecked })}
				<div
					class="flex
					h-full w-full
					items-center justify-center"
				>
					{#if isChecked}
						<div
							class="h-[8px] w-[8px] rounded-full bg-black
							md:h-[11px]
							md:w-[11px]"
						></div>
					{/if}
				</div>
			{/snippet}
		</RadioGroup.Item>

		{#if label}
			<Label.Root
				for={id}
				id={`${id}-label`}
				class="text-themeGray-700 
				ml-2 
				text-base 
				peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{label}
			</Label.Root>
		{/if}
	</div>
	{#if error}
		<div id={`${id}-error`} class="text-themeRed-600 text-sm mt-1">
			{error}
		</div>
	{/if}
</div>

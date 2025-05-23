<script lang="ts">
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import Icon from '@/theme/Icon/Icon.svelte';
	import { onMount } from 'svelte';

	export interface SelectOption {
		value: string;
		label: string;
		icon?: string;
	}

	interface Props extends HTMLSelectAttributes {
		label?: string;
		options: SelectOption[];
		error?: string;
		showIcons?: boolean;
	}

	let {
		label,
		options = [],
		error,
		value = $bindable(''),
		showIcons = true,
		...restProps
	}: Props = $props();

	// Find the currently selected option for displaying selected icon
	$effect(() => {
		selectedOption = options.find(option => option.value === value) || null;
	});

	let selectedOption: SelectOption | null = $state(null);
	let isOpen = $state(false);
	let selectContainer: HTMLDivElement;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(option: SelectOption) {
		value = option.value;
		isOpen = false;
	}

	// Close dropdown when clicking outside
	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectContainer && !selectContainer.contains(event.target as Node) && isOpen) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="mb-4">
	<div
		bind:this={selectContainer}
		class="relative"
	>
		<!-- Hidden select for form submission -->
		<select
			{...restProps}
			class="sr-only"
			style="display: none;"
			{value}>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>

		<!-- Custom select display -->
		<button
			aria-expanded={isOpen}
			aria-haspopup="listbox"
			class={[
				'relative flex items-center w-full py-3 px-4 border-0 rounded-lg bg-white cursor-pointer',
				error ? 'border-red-500' : 'border-themeGray-300',
				'hover:border-themeYellow-600 transition-colors duration-200',
				isOpen ? 'ring-2 ring-themeYellow-600 border-transparent' : '',
				'text-left', // Ensure text alignment is left
				restProps.class
			]}
			onclick={toggleDropdown}
			type="button"
		>
			{#if showIcons && selectedOption?.icon}
				<div class="flex-shrink-0 mr-2 text-themeGray-700">
					<Icon name={selectedOption.icon} size="sm" />
				</div>
			{/if}

			<div class="flex-grow text-themeGray-800">
				{selectedOption?.label || 'Select an option'}
			</div>

			<div class="flex-shrink-0 ml-2 text-themeGray-700 transition-transform duration-200" class:rotate-90={isOpen}>
				<Icon name="chevron" size="sm" />
			</div>
		</button>

		<!-- Dropdown options -->
		{#if isOpen}
			<div
				class="absolute z-10 w-full mt-1 bg-white border border-themeGray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
				role="listbox"
			>
				{#each options as option}
					<button
						type="button"
						class={[
							'w-full py-2 px-4 cursor-pointer flex items-center hover:bg-themeGray-100 text-left',
							option.value === value ? 'bg-themeGray-100 font-medium' : ''
						]}
						onclick={() => selectOption(option)}
						role="option"
						aria-selected={option.value === value}
					>
						{#if showIcons && option.icon}
							<div class="flex-shrink-0 mr-3 text-themeGray-700">
								<Icon name={option.icon} size="md" />
							</div>
						{/if}
						<div>{option.label}</div>
					</button>
				{/each}
			</div>
		{/if}
	</div>

	{#if error}
		<p class="mt-1 text-sm text-red-500">{error}</p>
	{/if}
</div>

<script lang="ts">
	import Icon from '@/theme/Icon/Icon.svelte';
	import { slide } from 'svelte/transition';
	import { getContext } from 'svelte';

	interface Props {
		class?: string;
		title: string;
		open?: boolean;
		children?: any;
		id: string;
	}

	interface AccordionStore {
		isActive: (id: string) => boolean;
		toggle: (id: string) => void;
	}

	let { class: className = '', title, open = false, children, id }: Props = $props();

	const store = getContext<AccordionStore>('accordion-store');

	let isOpen = $state(false);
	let initializedOpen = $state(false);

	// Track if the accordion item is active
	$effect(() => {
		isOpen = store.isActive(id);
	});

	// Handle initial open state
	$effect(() => {
		if (open && !initializedOpen) {
			initializedOpen = true;
			if (!isOpen) {
				store.toggle(id);
			}
		}
	});

	function handleToggle() {
		store.toggle(id);
	}
</script>

<button
	type="button"
	aria-expanded={isOpen}
	onclick={handleToggle}
	class={`transition-background 
    mb-4 flex w-full 
    cursor-pointer items-center 
    justify-between 
    rounded-xl 
    px-5.5 py-5.5 
    text-left shadow-md
    duration-400 md:px-10 
    ${isOpen ? 'theme-gradient-yellow bg-gradient-to-t' : 'theme-gradient-gray'} 
    ${className}`}
>
	<div
		class="flex-1
    pr-4"
	>
		<h3
			class="w-full
      text-left text-lg font-bold md:text-xl lg:text-2xl"
		>
			{title}
		</h3>
		{#if isOpen}
			<div class="theme-text-body3 mt-2 max-w-4xl pr-4 not-last:pb-4" transition:slide>
				{@render children?.()}
			</div>
		{/if}
	</div>
	<div class="flex-shrink-0">
		<div
			class="bg-themeGray-800 transition-background-color flex
        h-9 w-9
        items-center
        justify-center
        rounded-full
        p-2
        text-white duration-300"
		>
			<Icon class={`${isOpen ? '' : 'rotate-0'}`} name={isOpen ? 'cross' : 'plus'} />
		</div>
	</div>
</button>

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
    activeId: string | null;
    toggle: (id: string) => void;
  }

  let { class: className = '', title, open = false, children, id }: Props = $props();

  const store = getContext<AccordionStore>('accordion-store');

  let isOpen = $state(false);

  $effect(() => {
    isOpen = store.activeId === id;
  });

  $effect(() => {
    if (open && !store.activeId) {
      store.toggle(id);
    }
  });

  function handleToggle() {
    store.toggle(id);
  }
</script>

<div
	class={`transition-background duration-400 ${isOpen ? 'bg-gradient-to-t theme-gradient-yellow' : 'theme-gradient-gray'} mb-4 rounded-lg flex justify-between items-center p-4 shadow-md ${className}`}>
	<div class="flex-1 pr-4">
		<button
			aria-expanded={isOpen}
			class="w-full text-left text-lg md:text-xl lg:text-2xl font-bold cursor-pointer"
			onclick={handleToggle}
			type="button"
		>
			<span>{title}</span>
		</button>
		{#if isOpen}
			<div class="pb-4 mt-2 theme-text-body3" transition:slide>
				{@render children?.()}
			</div>
		{/if}
	</div>
	<div class="flex-shrink-0">
		<button
			class={`transition-background-color duration-300 h-9 w-9 p-2 rounded-full ${isOpen ? 'bg-themeGray-800' : 'bg-themeGray-300'} text-white flex items-center justify-center`}
			onclick={handleToggle}
			type="button"
		>
			<Icon
				class={`${isOpen ? "" : "rotate-0"}`}
				name={isOpen ? "cross" : "plus"}
			/>
		</button>
	</div>
</div>

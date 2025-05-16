<script lang="ts">
	import Icon from '@/theme/Icon/Icon.svelte';
	import Dropdown from '@/theme/Dropdown/Dropdown.svelte';
	import { createDropdownHandlers } from '@/utils/dropdown';
	import type { Action } from 'svelte/action';

	interface Props {
		label: string;
		href: string;
		active?: boolean;
		subItems?: Array<{label: string, href: string}>;
	}

	let { label, href, active, subItems = [] }: Props = $props();

	const hasChildren = $derived(subItems.length > 0)
	let isMobile = $state(false);

	let headerItemRef: HTMLElement;
	let buttonRef: HTMLElement;
	let show = $state(false);

	// Check if mobile view on mount and on resize
	const checkMobile = () => {
		// Use viewport width instead of inner width for more reliable measurement
		isMobile = document.documentElement.clientWidth < 1024;
	};

	// Initialize dropdown handlers
	let handlers: ReturnType<typeof createDropdownHandlers>;
	let onEnter = $state<() => void>(() => {});
	let onLeave = $state<(e: PointerEvent) => void>((e: PointerEvent) => {});
	let bindFloatingRef = $state<Action<HTMLElement>>(() => ({}));

	$effect(() => {
		if (!headerItemRef) return;
		
		// Initialize dropdown handlers with our utility
		handlers = createDropdownHandlers({
			isOpen: show,
			setIsOpen: (value) => {
				show = value;
			},
			isMobile,
			containerRef: headerItemRef
		});
		
		// Make direct references for template usage
		onEnter = handlers.onEnter;
		onLeave = handlers.onLeave;
		bindFloatingRef = handlers.bindFloatingRef;
	});

	$effect(() => {
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			checkMobile();
			window.addEventListener('resize', checkMobile);
			return () => window.removeEventListener('resize', checkMobile);
		}
	});

	const onClick = (e: MouseEvent) => {
		if (hasChildren && isMobile) {
			e.preventDefault();
			show = !show;
		}
	};
</script>

<style>
	/* Remove border-radius on mobile but keep it on larger screens */
	:global(.header-item .theme-button--primary) {
		border-radius: 0;
	}
	
	@media (min-width: 1024px) {
		:global(.header-item .theme-button--primary) {
			border-radius: 0.75rem;
			border-top-right-radius: 0;
		}
	}

	/* Ensure text color stays gray on hover */
	:global(.header-item a:hover) {
		color: #4B5563; /* text-gray-700 equivalent */
	}

	@media (min-width: 1024px) {
		:global(.header-item :where(a:hover, a:focus, a:active)) {
			color: #4B5563; /* text-gray-700 equivalent */
		}
	}

	/* Mobile dropdown styling */
	:global(.header-item .mobile-dropdown) {
		position: relative !important;
		width: 100% !important;
		left: auto !important;
		top: auto !important;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease-in-out, opacity 0.2s;
	}

	:global(.header-item .mobile-dropdown.open) {
		max-height: 500px; /* Adjust as needed */
	}
	
	
</style>

<li bind:this={headerItemRef} class="header-item relative w-full lg:w-auto border-b border-themeGray-500 lg:border-b-0" onpointerenter={onEnter} onpointerleave={onLeave}>
	<a
		bind:this={buttonRef}
		class="text-white font-medium border-b-2 border-transparent lg:font-bold lg:text-gray-700 py-3.5 lg:py-2 px-8 lg:px-4 hover:theme-button--primary flex items-center gap-1 text-base lg:text-md"
		class:theme-button--primary={active || show}
		href={href}
		onclick={onClick}
	>
		<div>{label}</div>
		{#if hasChildren}
			<span class="pl-1">
				<Icon name="chevron" size="xs" class={show && isMobile ? "rotate-180" : "rotate-90"} />
			</span>
		{/if}
	</a>
	{#if hasChildren && subItems.length > 0}
		<Dropdown {show} {isMobile} referenceElement={buttonRef}>
			{#snippet children()}
				<ul class="dropdown-menu min-w-[100px] space-y-2">
					{#each subItems as item}
						<li class="mb-0">
							<a href={item.href} class="block px-1 py-1 hover:underline font-xs">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			{/snippet}
		</Dropdown>
	{/if}
</li>

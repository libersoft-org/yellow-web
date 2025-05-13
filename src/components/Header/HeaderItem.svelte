<script lang="ts">
	import { autoPlacement, autoUpdate, computePosition, offset, shift } from '@floating-ui/dom';
	import Icon from '@/theme/Icon/Icon.svelte';
	import { createDropdownHandlers } from '@/utils/dropdown';

	interface Props {
		label: string;
		href: string;
		active?: boolean;
		children?: any;
	}

	let { label, href, active, children }: Props = $props();

	const hasChildren = $derived(Boolean(children))
	let isMobile = $state(false);

	let headerItemRef: HTMLElement;
	let buttonRef: HTMLElement;
	let floatingRef = $state<HTMLElement | null>(null);
	let show = $state(false);

	let autoPlacementCleanup: ReturnType<typeof handleFloatingUI>;

	// Check if mobile view on mount and on resize
	const checkMobile = () => {
		// Use viewport width instead of inner width for more reliable measurement
		isMobile = document.documentElement.clientWidth < 1024;
	};

	// Initialize dropdown handlers
	let handlers: ReturnType<typeof createDropdownHandlers>;
	let onEnter: () => void;
	let onLeave: (e: PointerEvent) => void;
	let bindFloatingRef: ReturnType<typeof createDropdownHandlers>['bindFloatingRef'];

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
		({ onEnter, onLeave, bindFloatingRef } = handlers);
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

	const handleFloatingUI = () => {
		if (!buttonRef || !floatingRef || isMobile) {
			return;
		}
		const autoUpdateCleanUp = autoUpdate(buttonRef, floatingRef, () => {
			computePosition(buttonRef, floatingRef!, {
				middleware: [
					autoPlacement({
						alignment: 'start',
						allowedPlacements: ['bottom-start', 'bottom-end'],
						padding: 4,
					}),
					shift(),
					offset(8),
				],
			}).then(({ x, y }) => {
				Object.assign(floatingRef!.style, {
					left: `${x}px`,
					top: `${y}px`,
				});
			});
		});
		
		return () => {
			if (autoUpdateCleanUp) {
				autoUpdateCleanUp();
			}
		};
	};

	$effect(() => {
		if (show) {
			autoPlacementCleanup = handleFloatingUI();
		}
		else {
			if (autoPlacementCleanup) {
				autoPlacementCleanup();
			}
		}
	});
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
		class="text-white font-medium lg:font-bold lg:text-gray-700 py-3.5 lg:py-2 px-8 lg:px-4 hover:theme-button--primary flex items-center gap-1 text-lg lg:text-base"
		class:theme-button--primary={active || show}
		href={href}
		onclick={onClick}
	>
		<div>{label}</div>
		{#if hasChildren}
			<Icon name="chevron" size="sm" class={show && isMobile ? "rotate-180" : "rotate-90"} />
		{/if}
	</a>
	{#if hasChildren && children}
		<div
			class={[
				"transition-opacity duration-200 header-item__dropdown bg-gradient-to-t theme-gradient-white lg:rounded-lg lg:shadow-lg z-1",
				isMobile ? "mobile-dropdown" : "theme-floating",
				show ? 'opacity-100 open' : 'opacity-0 pointer-events-none',
			]}
			use:bindFloatingRef
		>
			<div class="dropdown-content p-4">
				{@render children?.()}
			</div>
		</div>
	{/if}
</li>

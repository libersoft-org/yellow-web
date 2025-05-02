<script lang="ts">
	import { autoPlacement, autoUpdate, computePosition, offset, shift } from '@floating-ui/dom';
	import Icon from '@/theme/Icon/Icon.svelte';

	interface Props {
		label: string;
		href: string;
		active?: boolean;
		children?: any;
	}

	let { label, href, active, children }: Props = $props();

	const hasChildren = $derived(Boolean(children))

	let headerItemRef: HTMLElement;
	let buttonRef: HTMLElement;
	let floatingRef = $state<HTMLElement>();
	let show = $state(false);

	let autoPlacementCleanup: ReturnType<typeof handleFloatingUI>;

	const onClick = () => {
		console.log('click');
		show = !show;
	};

	const handleOutsideClick = (e: MouseEvent) => {
		if (floatingRef && !floatingRef.contains(e.target as Node) && !buttonRef.contains(e.target as Node)) {
			show = false;
			document.removeEventListener('click', handleOutsideClick);
		}
	};

	const handleFloatingUI = () => {
		if (!buttonRef || !floatingRef) {
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
		document.addEventListener('click', handleOutsideClick);
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

	let leaveInterval: NodeJS.Timeout;

	const onEnter = (/* e: PointerEvent */) => {
		if (leaveInterval) {
			clearTimeout(leaveInterval);
		}

		show = true;
	}

	const onLeave = (e: PointerEvent) => {
		if (e?.pointerType === 'touch') {
			return
		}

		if (leaveInterval) {
			clearTimeout(leaveInterval);
		}

		leaveInterval = setTimeout(() => {
			show = false;
		}, 200);
	}
</script>

<li bind:this={headerItemRef} class="header-item relative" onpointerenter={onEnter} onpointerleave={onLeave}>
	<a
		bind:this={buttonRef}
		class="font-bold text-gray-700 py-2 px-4 hover:theme-button--primary flex items-center gap-1"
		class:theme-button--primary={active || show}
		href={href}
		onclick={onClick}
	>
		<div>{label}</div>
		{#if hasChildren}
			<Icon name="chevron" size="sm" class="rotate-90" />
		{/if}
	</a>
	{#if hasChildren && children}
		<div
			bind:this={floatingRef}
			class={[
				"transition-opacity duration-200 header-item__dropdown theme-floating bg-gradient-to-t theme-gradient-white p-4 rounded-lg shadow-lg z-1",
				show ? 'opacity-100' : 'opacity-0 pointer-events-none',
			]}
		>
			{@render children?.()}
		</div>
	{/if}
</li>

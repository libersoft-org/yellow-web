<script lang="ts">
	import { autoUpdate, computePosition, offset, shift } from '@floating-ui/dom';

	interface Props {
		show: boolean;
		isMobile: boolean;
		referenceElement?: HTMLElement | null; // The element to position relative to
		children?: any;
	}

	let {
		show = false,
		isMobile = false,
		referenceElement = null,
		children
	}: Props = $props();

	let dropdownRef: HTMLElement;
	let cleanupAutoUpdate: (() => void) | undefined;

	// Setup floating UI when shown and reference element exists
	$effect(() => {
		// Clean up previous instance if exists
		if (cleanupAutoUpdate) {
			cleanupAutoUpdate();
			cleanupAutoUpdate = undefined;
		}

		// Only setup positioning if we have both elements and dropdown is visible
		if (show && referenceElement && dropdownRef && !isMobile) {
			// Setup auto-update to reposition on scroll/resize
			cleanupAutoUpdate = autoUpdate(referenceElement!, dropdownRef, () => {
				computePosition(referenceElement!, dropdownRef, {
					middleware: [
						shift(),
						offset(8)
					]
				}).then(({ x, y }) => {
					Object.assign(dropdownRef.style, {
						left: `${x}px`,
						top: `${y}px`
					});
				});
			});
		}

		// Clean up on component unmount
		return () => {
			if (cleanupAutoUpdate) {
				cleanupAutoUpdate();
			}
		};
	});
</script>

<div
	bind:this={dropdownRef}
	class={[
		"transition-opacity duration-200 dropdown bg-gradient-to-t theme-gradient-white lg:rounded-lg lg:shadow-lg",
		isMobile ? "mobile-dropdown" : "theme-floating-dropdown",
		show ? 'opacity-100 open' : 'opacity-0 pointer-events-none',

	]}
>
	<div class="dropdown-content relative py-2.5 px-4">
		<div class="absolute left-1/2 -top-2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 rounded-sm"></div>
		{@render children?.()}
	</div>
</div>

<style>

</style>


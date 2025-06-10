<script lang="ts">
	import { autoUpdate, computePosition, offset, shift, flip, inline } from '@floating-ui/dom';

	interface Props {
		show: boolean;
		isMobile: boolean;
		referenceElement?: HTMLElement | null; // The element to position relative to
		children?: any;
		class?: string; // Add class property
	}

	let { show = false, isMobile = false, referenceElement = null, children, class: className = '' }: Props = $props();

	let dropdownRef: HTMLElement;

	// Setup floating UI when shown and reference element exists
	$effect(() => {
		// Only setup positioning if we have both elements and dropdown is visible
		if (show && referenceElement && dropdownRef && !isMobile) {
			// Setup auto-update to reposition on scroll/resize
			const cleanup = autoUpdate(referenceElement!, dropdownRef, () => {
				computePosition(referenceElement!, dropdownRef, {
					placement: 'bottom',
					middleware: [offset(8), flip(), shift({ padding: 5 })],
				}).then(({ y }) => {
					// For horizontal positioning, we'll center the dropdown under the reference element using CSS
					// Position the dropdown - CSS transform will handle the horizontal centering
					// Adding 11px offset to account for the arrow/carrot
					Object.assign(dropdownRef.style, {
						top: `${y + 10}px`,
					});
				});
			});

			return cleanup; // Svelte 5 will automatically call this function when the effect needs to be cleaned up
		}
	});
</script>

<style>
</style>

<div bind:this={dropdownRef} class={['dropdown theme-gradient-white absolute left-1/2 z-50 -translate-x-1/2 transform bg-gradient-to-t transition-opacity duration-200 lg:rounded-lg lg:shadow-lg', isMobile ? 'mobile-dropdown' : 'theme-floating-dropdown', show ? 'open opacity-100' : 'pointer-events-none opacity-0', className]}>
	<div class="dropdown-content relative px-4 py-2.5">
		<div class="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 rounded-sm bg-white"></div>
		{@render children?.()}
	</div>
</div>

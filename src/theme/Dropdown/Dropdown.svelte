<script lang="ts">
  import { autoUpdate, computePosition, offset, shift } from '@floating-ui/dom';

  interface Props {
    show: boolean;
    isMobile: boolean;
    referenceElement?: HTMLElement | null; // The element to position relative to
    children?: any;
  }

  let { show = false, isMobile = false, referenceElement = null, children }: Props = $props();

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
          middleware: [shift(), offset(8)]
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
    'dropdown theme-gradient-white bg-gradient-to-t transition-opacity duration-200 lg:rounded-lg lg:shadow-lg',
    isMobile ? 'mobile-dropdown' : 'theme-floating-dropdown',
    show ? 'open opacity-100' : 'pointer-events-none opacity-0'
  ]}
>
  <div class="dropdown-content relative px-4 py-2.5">
    <div class="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 rounded-sm bg-white"></div>
    {@render children?.()}
  </div>
</div>

<style>
</style>

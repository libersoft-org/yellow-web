<script lang="ts">
  import Icon from '@/theme/Icon/Icon.svelte';
  import Dropdown from '@/theme/Dropdown/Dropdown.svelte';
  import { createDropdownHandlers } from '@/utils/dropdown';
  import type { Action } from 'svelte/action';

  interface Props {
    label: string;
    href: string;
    active?: boolean;
    subItems?: Array<{ label: string; href: string }>;
  }

  let { label, href, active, subItems = [] }: Props = $props();

  const hasChildren = $derived(subItems.length > 0);
  let isMobile = $state(false);

  let headerItemRef = $state<HTMLElement | null>(null);
  let buttonRef = $state<HTMLElement | null>(null);
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

<li
  bind:this={headerItemRef}
  class="header-item border-themeGray-500 relative flex w-full flex-wrap items-center border-b lg:w-auto lg:border-b-0"
  onpointerenter={onEnter}
  onpointerleave={onLeave}
>
  <a
    bind:this={buttonRef}
    class="lg:hover:theme-button--primary lg:text-md flex w-full items-center gap-1 border-b-2 border-transparent px-8 py-3.5 text-base font-medium text-white lg:w-auto lg:px-4 lg:py-2 lg:font-bold lg:text-gray-700"
    class:theme-button--primary={!isMobile && (active || show)}
    {href}
    onclick={onClick}
  >
    <div>{label}</div>
    {#if hasChildren}
      <span class="pl-1">
        <Icon name="chevron" size="xs" class={show && isMobile ? 'rotate-270' : 'rotate-90'} />
      </span>
    {/if}
  </a>
  {#if hasChildren && subItems.length > 0}
    <Dropdown {show} {isMobile} referenceElement={buttonRef}>
      {#snippet children()}
        <ul class="dropdown-menu min-w-[100px] space-y-2">
          {#each subItems as item}
            <li class="mb-0">
              <a href={item.href} class="font-xs block px-1 py-1 hover:underline">
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      {/snippet}
    </Dropdown>
  {/if}
</li>

<style>
  /* Mobile dropdown styling */
  :global(.header-item .mobile-dropdown) {
    position: static !important;
    width: 100% !important;
    left: auto !important;
    top: auto !important;
    max-height: 0;
    overflow: hidden;
    translate: 0 0;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.2s;
  }

  :global(.header-item .mobile-dropdown.open) {
    max-height: 500px;
  }
</style>

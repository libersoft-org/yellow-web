<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { createDropdownHandlers } from '@/utils/dropdown';
  import SelectBox from '@/theme/SelectBox/SelectBox.svelte';
  import Button from '@/theme/Button/Button.svelte';
  import Icon from '@/theme/Icon/Icon.svelte';
  import Dropdown from '@/theme/Dropdown/Dropdown.svelte';
  import { m } from '@paraglide/messages';
  import { getLocale, setLocale } from '@paraglide/runtime';

  interface Props {}

  let {}: Props = $props();

  // Create event dispatcher to notify parent component
  const dispatch = createEventDispatcher<{
    openModal: boolean;
  }>();

  console.log('getLocale', getLocale());

  let currentLanguage = $state(getLocale());
  let isOpen = $state(false);
  let isMobileMenuOpen = $state(false);
  let isMobile = $state(false);
  let languageSwitcherRef: HTMLDivElement;
  let buttonRef: HTMLElement;
  let languagePanelRef: HTMLDivElement;

  // Initialize dropdown handlers reference - we'll set this up after DOM elements are available
  let handlers: ReturnType<typeof createDropdownHandlers>;
  let toggleDropdown: (e: MouseEvent) => void;
  let closeDropdown: () => void;
  let onEnter: () => void;
  let onLeave: (e: PointerEvent) => void;

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'cs', name: 'Czech' }
  ];

  // Format languages for SelectBox - show all languages and ensure we have at least one option
  const getSelectOptions = () => {
    // Always include all languages to ensure we have at least one option
    return languages.map((lang) => ({
      value: lang.code,
      label: lang.name,
      icon: 'country/' + lang.code
    }));
  };

  let selectOptions = $state(getSelectOptions());

  // Check if mobile view on mount and on resize
  const checkMobile = () => {
    // Use viewport width for more reliable measurement
    isMobile = document.documentElement.clientWidth < 1024;
  };

  function selectLanguage(langCode: 'en' | 'cs') {
    currentLanguage = langCode;
    closeDropdown();
  }

  $effect(() => {
    // update paraglide runtime locale (will cause browser refresh)
    setLocale(currentLanguage);
  });

  // Handle overflow and dispatch events when mobile menu state changes
  const handleMobileMenuToggle = (isOpen: boolean) => {
    // Notify parent component to show/hide overlay
    dispatch('openModal', isOpen);

    // Prevent scrolling when mobile menu is open
    if (browser) {
      document.body.style.overflow = isOpen ? 'hidden' : '';

      // Add/remove class for language panel
      if (isOpen) {
        document.body.classList.add('language-panel-open');
      } else {
        document.body.classList.remove('language-panel-open');
      }
    }
  };

  function closeMobileMenu() {
    isMobileMenuOpen = false;
    handleMobileMenuToggle(false);
  }

  const currentLanguageData = $derived(
    languages.find((lang) => lang.code === currentLanguage) || languages[0]
  );

  // Initialize handlers once we have DOM reference
  $effect(() => {
    if (!languageSwitcherRef) return;

    // Initialize dropdown handlers with our utility
    handlers = createDropdownHandlers({
      isOpen,
      setIsOpen: (value) => {
        isOpen = value;
      },
      isMobile,
      containerRef: languageSwitcherRef,
      toggleCallback: (newIsOpen) => {
        if (isMobile) {
          isMobileMenuOpen = !isMobileMenuOpen;
          handleMobileMenuToggle(isMobileMenuOpen);
        }
      },
      closeCallback: () => {
        if (isMobile && isMobileMenuOpen) {
          isMobileMenuOpen = false;
          handleMobileMenuToggle(false);
        }
      }
    });

    // Make direct references for template usage
    ({ toggleDropdown, closeDropdown, onEnter, onLeave } = handlers);
  });

  // Handle initial check and resize events
  onMount(() => {
    if (browser && typeof document !== 'undefined') {
      checkMobile();
      window.addEventListener('resize', checkMobile);

      return () => {
        window.removeEventListener('resize', checkMobile);
        // Clean up overflow
        document.body.style.overflow = '';
        // Remove language panel class
        document.body.classList.remove('language-panel-open');
      };
    }
  });
</script>

<div
  bind:this={languageSwitcherRef}
  class="language-switcher relative"
  onpointerenter={onEnter}
  onpointerleave={onLeave}
>
  <button bind:this={buttonRef} class="flex cursor-pointer items-center" onclick={toggleDropdown}>
    <Icon class="rounded-full" name={'country/' + currentLanguage} size="4xl" />
  </button>

  <!-- Desktop dropdown menu -->
  {#if !isMobile}
    <Dropdown show={isOpen} {isMobile} referenceElement={buttonRef}>
      {#snippet children()}
        <div class="relative overflow-hidden whitespace-nowrap">
          {#each languages.filter((lang) => lang.code !== currentLanguage) as language}
            <button
              class="flex w-full cursor-pointer items-center text-sm hover:underline"
              onclick={() => selectLanguage(language.code as 'en' | 'cs')}
            >
              <Icon name={'country/' + language.code} size="2xl" class="mr-3 rounded-full" />
              <span class="whitespace-nowrap">{language.name}</span>
            </button>
          {/each}
        </div>
      {/snippet}
    </Dropdown>
  {/if}
</div>

<!-- Mobile Language Switcher Panel -->
<div
  bind:this={languagePanelRef}
  class="bg-themeYellow-600 language-panel fixed right-0 left-0 z-50 rounded-t-2xl p-5"
  style="bottom: {isMobileMenuOpen ? '0' : '-100%'}"
>
  <div onclick={(e) => e.stopPropagation()} role="none">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-themeGray-800 text-xl font-bold">{m['language.choose_your_language']()}</h3>
      <button
        aria-label="Close language selector"
        class="text-themeGray-800 hover:bg-opacity-20 rounded-full p-2 transition-colors hover:bg-white"
        onclick={closeMobileMenu}
      >
        <Icon class="h-4 w-4 rotate-180" name="cross" size="sm" />
      </button>
    </div>

    <div class="mb-6">
      <!-- Use the imported SelectBox component -->
      <SelectBox
        bind:value={currentLanguage}
        class="rounded-xl bg-white shadow-md"
        label="Select Language"
        options={selectOptions}
      />
    </div>
  </div>
</div>

<style>
  .language-switcher {
    user-select: none;
  }

  .language-panel {
    transition: bottom 0.3s ease-in-out;
    pointer-events: auto !important; /* Ensure panel can receive clicks */
  }
</style>

<script lang="ts">
import { onMount } from 'svelte';
import { browser } from '$app/environment';
import { createDropdownHandlers } from '@/utils/dropdown';
import { createEventDispatcher } from 'svelte';
import SelectBox from '@/theme/SelectBox/SelectBox.svelte';
import Button from '@/theme/Button/Button.svelte';
import Icon from '@/theme/Icon/Icon.svelte';
import { autoPlacement, autoUpdate, computePosition, offset, shift } from '@floating-ui/dom';

interface Props {
  defaultLanguage?: 'en' | 'cz';
}

let { 
  defaultLanguage = 'en'
}: Props = $props();

// Create event dispatcher to notify parent component
const dispatch = createEventDispatcher<{
  openModal: boolean;
}>();

let currentLanguage = $state(defaultLanguage);
let isOpen = $state(false);
let isMobileMenuOpen = $state(false);
let isMobile = $state(false);
let languageSwitcherRef: HTMLDivElement;
let buttonRef: HTMLElement;
let languagePanelRef: HTMLDivElement;
let dropdownRef: HTMLElement | null = null;
let selectedLanguage = $state<'en' | 'cz'>('en');
let autoPlacementCleanup: ReturnType<typeof handleFloatingUI>;

// Initialize dropdown handlers reference - we'll set this up after DOM elements are available
let handlers: ReturnType<typeof createDropdownHandlers>;
let toggleDropdown: (e: MouseEvent) => void;
let closeDropdown: () => void;
let onEnter: () => void;
let onLeave: (e: PointerEvent) => void;

// Initialize selectedLanguage and keep it in sync with currentLanguage
$effect(() => {
  selectedLanguage = currentLanguage;
});

const languages = [
  { code: 'en', name: 'English' },
  { code: 'cz', name: 'Czech' }
];

// Format languages for SelectBox - show all languages and ensure we have at least one option
const getSelectOptions = () => {
  // Always include all languages to ensure we have at least one option
  return languages.map(lang => ({
    value: lang.code,
    label: lang.name,
    icon: lang.code
  }));
};

let selectOptions = $state(getSelectOptions());

// Check if mobile view on mount and on resize
const checkMobile = () => {
  // Use viewport width for more reliable measurement
  isMobile = document.documentElement.clientWidth < 1024;
};

function selectLanguage(langCode: 'en' | 'cz') {
  currentLanguage = langCode;
  closeDropdown();
}

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

// Make sure currentLanguageData updates reactively
$effect(() => {
  currentLanguageData = languages.find(lang => lang.code === currentLanguage) || languages[0];
});

let currentLanguageData = $state(
  languages.find(lang => lang.code === currentLanguage) || languages[0]
);

// Handle language change when saving
function saveLanguageSelection() {
  // Update the current language from the select dropdown
  currentLanguage = selectedLanguage;
  
  // Force refresh of language data
  currentLanguageData = languages.find(lang => lang.code === currentLanguage) || languages[0];
  
  // Close the mobile menu
  closeMobileMenu();
}

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

// Handle floating UI positioning for the dropdown
const handleFloatingUI = () => {
  if (!buttonRef || !dropdownRef || isMobile) {
    return;
  }
  
  const autoUpdateCleanUp = autoUpdate(buttonRef, dropdownRef!, () => {
    computePosition(buttonRef, dropdownRef!, {
      middleware: [
        autoPlacement({
          alignment: 'end',
          allowedPlacements: ['bottom-end', 'top-end'],
          padding: 4,
        }),
        shift(),
        offset(8),
      ],
    }).then(({ x, y }) => {
      Object.assign(dropdownRef!.style, {
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

// Effect to handle floating UI when dropdown is open
$effect(() => {
  if (isOpen && !isMobile) {
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
  /* 
   * Desktop dropdown styling 
   */
  
  .language-switcher {
    user-select: none;
  }
  
  .language-panel {
    transition: bottom 0.3s ease-in-out;
    pointer-events: auto !important; /* Ensure panel can receive clicks */
  }
  
</style>

<div 
  bind:this={languageSwitcherRef}
  class="language-switcher relative" 
  onpointerenter={onEnter}
  onpointerleave={onLeave}
>
  <button 
    bind:this={buttonRef}
    class="flex items-center cursor-pointer"
    onclick={toggleDropdown}
  >
    <Icon 
      name={currentLanguage} 
      size="md"
      class="rounded-full"
    />
  </button>

  <!-- Desktop dropdown menu -->
  {#if !isMobile}
    <div 
      bind:this={dropdownRef}
      class={[
        "lang-dropdown pt-2 theme-floating-dropdown",
        isOpen 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 pointer-events-none transform translate-y-5'
      ]}
    >
      <div class="relative bg-gradient-to-t theme-gradient-white rounded-xl shadow-md min-w-27.5 whitespace-nowrap">
        <!-- Dropdown content -->
        <div class="relative z-10 overflow-hidden rounded-xl bg-white">
          {#each languages.filter(lang => lang.code !== currentLanguage) as language}
            <button
              class="flex items-center w-full px-4 py-2 text-sm cursor-pointer hover:bg-themeGray-100"
              onclick={() => selectLanguage(language.code as 'en' | 'cz')}
            >
              <Icon 
                name={language.code} 
                size="md"
                class="rounded-full mr-3"
              />
              <span class="whitespace-nowrap">{language.name}</span>
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- Mobile Language Switcher Panel -->
<div 
  bind:this={languagePanelRef}
  class="fixed left-0 right-0 bg-themeYellow-600 rounded-t-2xl p-5 z-50 language-panel"
  style="bottom: {isMobileMenuOpen ? '0' : '-100%'}"
>
  <div role="none" onclick={(e) => e.stopPropagation()}>
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold text-themeGray-800">Choose your language</h3>
      <button 
        class="text-themeGray-800 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        onclick={closeMobileMenu}
        aria-label="Close language selector"
      >
        <Icon name="cross" size="sm" class="rotate-180 w-4 h-4" />
      </button>
    </div>
    
    <div class="mb-6">
      <!-- Use the imported SelectBox component -->
      <SelectBox
        label="Select Language"
        options={selectOptions}
        bind:value={selectedLanguage}
        class="bg-white rounded-xl shadow-md"
      />
    </div>
    
    <!-- Use the themed Button component -->
    <Button
      label="Save and continue"
      theme="secondary"
      rightIcon="chevron"
      onclick={saveLanguageSelection}
    />
  </div>
</div>

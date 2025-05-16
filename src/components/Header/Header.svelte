<script lang="ts">
import HeaderItem from '@/components/Header/HeaderItem.svelte';
import LanguageSwitcher from '@/components/Header/LanguageSwitcher.svelte';
import { browser } from '$app/environment';
import { onMount } from 'svelte';

interface Props {
	zIndex?: number;
}

let {
	zIndex = 50,
}: Props = $props();

let isMobileMenuOpen = $state(false);
let languageModalOpen = $state(false);
let navRef: HTMLElement;
let menuToggleRef: HTMLElement;
let outsideClickHandler: ((e: MouseEvent) => void) | null = null;

// Navigation items array
const navItems = [
  { 
    label: 'About', 
    href: '/', 
    hasChildren: true, 
    subItems: [
      { label: 'Our Company', href: '/about/company' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'Our Mission', href: '/about/mission' },
      { label: 'Our History', href: '/about/history' }
    ]
  },
  { label: 'Download', href: '/' },
  { label: 'Comparsion', href: '/' },
  { label: 'Documentation', href: '/' },
  { label: 'FAQ', href: '/' },
  { label: 'Contact', href: '/' },
  { label: 'Create free account', href: '/', highlighted: true }
];

function toggleMobileMenu(e: MouseEvent) {
  e.stopPropagation(); // Prevent event from bubbling up
  
  // Toggle the state
  isMobileMenuOpen = !isMobileMenuOpen;
  
  // Prevent scrolling when mobile menu is open
  if (browser) {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    
    // Set up or remove outside click handler based on menu state
    if (isMobileMenuOpen) {
      // Remove any existing handler
      if (outsideClickHandler) {
        document.removeEventListener('click', outsideClickHandler);
      }
      
      // Create new handler with a delay to avoid the current click
      setTimeout(() => {
        outsideClickHandler = (event: MouseEvent) => {
          // Only handle clicks when menu is open
          if (!isMobileMenuOpen) return;
          
          // Skip if clicking the menu toggle button itself
          if (menuToggleRef && menuToggleRef.contains(event.target as Node)) return;
          
          // Close menu if clicking outside the navigation
          if (navRef && !navRef.contains(event.target as Node)) {
            closeMobileMenu();
          }
        };
        
        document.addEventListener('click', outsideClickHandler);
      }, 10);
    } else if (outsideClickHandler) {
      document.removeEventListener('click', outsideClickHandler);
      outsideClickHandler = null;
    }
  }
}

function closeMobileMenu() {
  if (!isMobileMenuOpen) return;
  
  isMobileMenuOpen = false;
  if (browser) {
    document.body.style.overflow = '';
    if (outsideClickHandler) {
      document.removeEventListener('click', outsideClickHandler);
      outsideClickHandler = null;
    }
  }
}

// Clean up on component destroy
onMount(() => {
  return () => {
    if (browser) {
      // Clean up all event listeners and state
      if (outsideClickHandler) {
        document.removeEventListener('click', outsideClickHandler);
        outsideClickHandler = null;
      }
      document.body.style.overflow = '';
    }
  };
});
</script>

{#snippet navigationMenu()}
	<nav 
		bind:this={navRef}
		id="mobile-menu"
		class="bg-themeGray-800 h-full lg:h-auto fixed top-14 lg:static lg:bg-transparent transition-all duration-450 ease-in-out w-[304px] lg:w-auto z-50" 
		class:left-0={isMobileMenuOpen} 
		class:left-[-100%]={!isMobileMenuOpen} 
		class:lg:left-auto={true}
		aria-hidden={!isMobileMenuOpen}
	>
		<div class="lg:pl-12 p-0 h-full flex lg:items-center">
			<ul class="flex flex-col lg:flex-row lg:gap-4 w-full">
				{#each navItems as item}
					{#if item.hasChildren}
						<HeaderItem label={item.label} href={item.href} subItems={item.subItems} />
					{:else}
						<HeaderItem label={item.label} href={item.href} />
					{/if}
				{/each}
			</ul>
		</div>
	</nav>
	
	<!-- Mobile menu overlay - no click handler, handled by document click listener -->
	{#if isMobileMenuOpen || languageModalOpen}
		<div 
			class="lg:hidden fixed inset-0 bg-black opacity-30 transition-opacity duration-300 z-40 top-14 overlay"
			onclick={(e) => {
				// Close appropriate menus
				if (languageModalOpen) {
					languageModalOpen = false;
				}
				if (isMobileMenuOpen) {
					closeMobileMenu();
				}
			}}
		></div>
	{/if}
{/snippet}

<div 
	class="header flex flex-col max-w-[1440px] mx-auto fixed top-0 left-0 right-0 lg:min-h-22s lg:border-t-4 border-themeYellow-600 bg-gradient-to-t theme-gradient-yellow lg:theme-gradient-white lg:rounded-bl-2xl lg:rounded-br-2xl shadow-md"
	style="z-index: {zIndex};"
>
	<!-- Header Top Row -->
	<div class="flex justify-between h-full">
		
		<div class="header__logo bg-gradient-to-t theme-gradient-yellow px-4 lg:px-8 py-2 lg:py-4 lg:rounded-bl-2xl w-full max-w-[179px] lg:max-w-[326px]">
			<img width="208" height="58" src="/assets/images/yellow-logo.svg" alt="Yellow Logo" />
		</div>

		{@render navigationMenu()}
		
		
		<div class="flex items-center pr-6 lg:pr-12">
			<LanguageSwitcher 
				defaultLanguage="en" 
				on:openModal={(e) => languageModalOpen = e.detail}
			/>
			
			<!-- Mobile Menu Toggle Button - Only visible below lg screens -->
			<button 
				bind:this={menuToggleRef}
				class="lg:hidden ml-4 p-2 bg-themeGray-800 rounded-md drop-shadow-md mobile-menu-toggle"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
				aria-expanded={isMobileMenuOpen}
				aria-controls="mobile-menu"
			>
				{#if isMobileMenuOpen}
					<!-- X icon when menu is open -->
					<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				{:else}
					<!-- Hamburger icon when menu is closed -->
					<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</div>

<style>
	/*.header__logo {
		clip-path: ellipse(275px 195px at 5% 5%);
		width: 326px;
	}*/
	
	/* Overlay behavior with language panel open */
	:global(body.language-panel-open) .overlay {
		pointer-events: none; /* Allow clicks to pass through when language panel is open */
	}
	
	.overlay {
		pointer-events: auto; /* Default: catch clicks */
	}
</style>
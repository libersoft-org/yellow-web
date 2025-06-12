<script lang="ts">
	import { onMount } from 'svelte';
	import { Routes } from '@/utils/routes';
	import { browser } from '$app/environment';
	import { m } from '@paraglide/messages';
	import HeaderItem from '@/components/Header/HeaderItem.svelte';
	import LanguageSwitcher from '@/components/Header/LanguageSwitcher.svelte';
	import Icon from '@/theme/Icon/Icon.svelte';

	interface Props {
		zIndex?: number;
	}
	let { zIndex = 50 }: Props = $props();
	let isMobileMenuOpen = $state(false);
	let languageModalOpen = $state(false);
	let navRef: HTMLElement;
	let menuToggleRef: HTMLElement;
	let outsideClickHandler: ((e: MouseEvent) => void) | null = null;
	// Navigation items array using Routes factory functions
	const navItems = [
		{
			label: m['footer.links.about'](),
			href: Routes.home(),
			hasChildren: true,
			subItems: [
				{ label: m['footer.links.about'](), href: Routes.home() },
				{ label: m['footer.links.features'](), href: Routes.features() },
				{ label: m['footer.links.comparison'](), href: Routes.comparison() },
			],
		},
		{ label: m['footer.links.download'](), href: Routes.download() },
		{ label: m['footer.links.documentation'](), href: Routes.template() },
		{ label: m['footer.links.faq'](), href: Routes.faq() },
		{ label: m['footer.links.contact'](), href: Routes.contact() },
		{ label: m['footer.links.signup'](), href: Routes.account(), highlighted: true },
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
				if (outsideClickHandler) document.removeEventListener('click', outsideClickHandler);
				// Create new handler with a delay to avoid the current click
				setTimeout(() => {
					outsideClickHandler = (event: MouseEvent) => {
						// Only handle clicks when menu is open
						if (!isMobileMenuOpen) return;
						// Skip if clicking the menu toggle button itself
						if (menuToggleRef && menuToggleRef.contains(event.target as Node)) return;
						// Close menu if clicking outside the navigation
						if (navRef && !navRef.contains(event.target as Node)) closeMobileMenu();
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

<style>
	.header__logo {
		clip-path: ellipse(275px 195px at 5% 5%);
		width: 326px;
	}

	/* Overlay behavior with language panel open */
	:global(body.language-panel-open) .overlay {
		pointer-events: none; /* Allow clicks to pass through when language panel is open */
	}

	.overlay {
		pointer-events: auto; /* Default: catch clicks */
	}
</style>

{#snippet navigationMenu()}
	<nav bind:this={navRef} id="mobile-menu" class="bg-themeGray-800 fixed top-13.5 z-50 h-full w-[304px] transition-all duration-450 ease-in-out lg:static lg:h-auto lg:w-auto lg:bg-transparent" class:left-0={isMobileMenuOpen} class:left-[-100%]={!isMobileMenuOpen} class:lg:left-auto={true} aria-hidden={!isMobileMenuOpen}>
		<div class="flex h-full p-0 lg:items-center lg:pl-12">
			<ul class="flex w-full flex-col lg:flex-row lg:gap-2">
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
		<button
			type="button"
			tabindex="0"
			aria-label="Close menu"
			class="overlay fixed inset-0 top-13.5 z-40 border-0 bg-black opacity-30 transition-opacity duration-300 lg:hidden"
			onclick={e => {
				// Close appropriate menus
				if (languageModalOpen) languageModalOpen = false;
				if (isMobileMenuOpen) closeMobileMenu();
			}}
			onkeydown={e => {
				if (e.key === 'Enter' || e.key === 'Escape') {
					if (languageModalOpen) languageModalOpen = false;
					if (isMobileMenuOpen) closeMobileMenu();
				}
			}}
		></button>
	{/if}
{/snippet}

<div class="header lg:min-h-22s border-themeYellow-600 theme-gradient-yellow lg:theme-gradient-white fixed top-0 right-0 left-0 mx-auto flex max-w-[1440px] flex-col bg-gradient-to-t shadow-md lg:rounded-br-2xl lg:rounded-bl-2xl lg:border-t-4" style="z-index: {zIndex};">
	<!-- Header Top Row -->
	<div class="flex h-full justify-between">
		<a href="/" class="header__logo theme-gradient-yellow w-full max-w-[179px] bg-gradient-to-t px-4 py-2 lg:max-w-[326px] lg:rounded-bl-2xl lg:px-8 lg:py-4">
			<img alt="Yellow Logo" height="58" src="/assets/images/yellow-logo.svg" width="208" />
		</a>
		{@render navigationMenu()}
		<div class="flex items-center pr-6 lg:pr-12">
			<LanguageSwitcher openModal={(value: boolean) => (languageModalOpen = value)} />
			<!-- Mobile Menu Toggle Button - Only visible below lg screens -->
			<button aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen} aria-label="Toggle menu" bind:this={menuToggleRef} class="bg-themeGray-800 mobile-menu-toggle ml-4 rounded-md p-2 drop-shadow-md lg:hidden" onclick={toggleMobileMenu}>
				<div class="relative h-6 w-6">
					{#if isMobileMenuOpen}
						<!-- X icon when menu is open -->
						<Icon name="cross" size="xl" class="text-white" />
					{:else}
						<!-- Hamburger icon when menu is closed -->
						<Icon name="hamburger" size="xl" class="text-white" />
					{/if}
				</div>
			</button>
		</div>
	</div>
</div>

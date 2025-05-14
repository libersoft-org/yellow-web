<script lang="ts">
	import Icon from '@/theme/Icon/Icon.svelte';
	import Link from '@/theme/Link/Link.svelte';

	type PositionType = 'static' | 'sticky' | 'fixed';

	interface LinkItem {
		label: string;
		href: string;
		icon?: string;
		iconSize?: 'sm' | 'md' | 'lg';
	}

	interface LinkSection {
		title: string;
		links: LinkItem[];
	}

	interface SocialLink {
		icon: string;
		href: string;
		label: string;
	}

	interface Props {
		position?: PositionType;
		zIndex?: number;
		contactEmail?: string;
		socialLinks?: SocialLink[];
		mainLinks?: LinkItem[];
		copyright?: string;
	}

	const currentYear = new Date().getFullYear();

	let {
		contactEmail = 'info@libersoft.org',
		socialLinks = [
			{ icon: 'open-source', href: 'https://github.com/yellow', label: 'GitHub Page' },
			{ icon: 'message', href: 'https://t.me/yellow', label: 'Telegram Chat Group' },
			{ icon: 'message', href: 'https://t.me/yellow-announcements', label: 'Telegram Announcements' },
			{ icon: 'message', href: 'https://facebook.com/yellow', label: 'Facebook Group' },
			{ icon: 'open-source', href: 'https://linkedin.com/company/yellow', label: 'LinkedIn' }
		],
		mainLinks = [
			{ label: 'About', href: '/about' },
			{ label: 'Features', href: '/features' },
			{ label: 'Download', href: '/download' },
			{ label: 'Comparsion', href: '/comparsion' },
			{ label: 'Documentation', href: '/documentation' },
			{ label: 'FAQ', href: '/faq' },
			{ label: 'Contact', href: '/contact' },
			{ label: 'Create free account', href: '/signup' }
		],
		copyright = `Copyright © ${currentYear} Yellow | All Rights Reserved`
	}: Props = $props();
</script>

{#snippet contactSection()}
	<div class="footer-contact font-bold text-white flex flex-col items-center justify-center mb-7.5">
		<div class="flex items-center gap-6.5">
			<h2 class="text-[45px]">Get in touch</h2>
			<a href="mailto:{contactEmail}" class="hover:text-themeYellow-400 text-[20px] transition-colors underline duration-200 flex items-center gap-2">
				<span class="text-themeYellow-600">
					<Icon name="envelope" size="xl" />
				</span>
				<span>{contactEmail}</span>
			</a>
		</div>
	</div>
{/snippet}

{#snippet socialLinksSection()}
	<div class="footer-social flex flex-wrap justify-center gap-x-16 gap-y-6 mb-8 py-6 border-b border-t border-themeGray-600">
		{#each socialLinks as social, i}
			<Link
				href={social.href}
				label={social.label}
				icon={social.icon}
				iconWrapperClass="text-themeYellow-600 flex items-center justify-center rounded-full p-2 border-1 border-themeYellow-600 h-9 w-9"
				target="_blank"
				rel="noopener noreferrer"
				class="text-white gap-3 text-[17px] hover:text-themeYellow-400 {i !== 0 ? 'border-l border-themeGray-600 pl-8' : ''}"
			/>
		{/each}
	</div>
{/snippet}

{#snippet navigationLinksSection()}
	<div class="footer-nav flex justify-center mb-8 pb-8">
		<ul class="flex flex-wrap gap-x-6 gap-y-2">
			{#each mainLinks as link, i}
				<li class="px-2 flex items-center">
					<Link
						href={link.href}
						label={link.label}
						icon="chevron"
						iconSize="sm"
						iconWrapperClass="text-themeYellow-600"
						class="text-white"
					/>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

{#snippet copyrightSection()}
	<div class="footer-copyright flex justify-center">
		<div class="bg-white rounded-tl-2xl rounded-tr-2xl text-center px-14 py-6 w-fit">
			<span class="text-themeGray-800 text-sm font-normal">{copyright}</span>
		</div>
	</div>
{/snippet}

<footer 
	class="footer w-full bg-themeGray-800 pt-8 border-t border-themeGray-200 font-normal">
	<div class="footer-content theme-container mx-auto px-7.5">
		<!-- Contact Section -->
		{@render contactSection()}
		
		<!-- Social Links -->
		{@render socialLinksSection()}
		
		<!-- Navigation Links -->
		{@render navigationLinksSection()}
		
		<!-- Copyright -->
		{@render copyrightSection()}
	</div>
</footer>

<style>
</style> 
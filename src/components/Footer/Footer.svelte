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
      { icon: 'message', href: 'https://t.me/yellow', label: 'Telegram <br class="hidden md:block"> Chat Group' },
      {
        icon: 'message',
        href: 'https://t.me/yellow-announcements',
        label: 'Telegram <br class="hidden md:block"> Announcements'
      },
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

{#snippet contactSection ()}
	<div class="footer-contact font-bold text-white flex flex-col items-center justify-center mb-10">
		<div class="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-6.5">
			<h2 class="theme-text-h2">Get in touch</h2>
			<a href="mailto:{contactEmail}"
				 class="text-xl transition-colors hover:no-underline underline inline-flex duration-200 flex items-center gap-2">
				<div class="text-themeYellow-600">
					<Icon name="envelope" size="xl" />
				</div>
				<span class="lg:text-xl md:text-md text-xs">{contactEmail}</span>
			</a>
		</div>
	</div>
{/snippet}

{#snippet socialLinksSection ()}
	<div
		class="footer-social order-last md:order-first flex flex-wrap lg:grid lg:grid-cols-5 md:justify-items-center mb-12.5 md:py-6 md:border-b md:border-t md:border-themeGray-600">
		{#each socialLinks as social, i}
			<Link
				href={social.href}
				label={social.label}
				icon={social.icon}
				iconWrapperClass="text-themeYellow-600 flex items-center justify-center rounded-full p-2 border-1 border-themeYellow-600 h-9 w-9"
				target="_blank"
				rel="noopener noreferrer"
				class="text-themeYellow-600 gap-3 text-xs md:text-md flex items-center md:justify-center hover:text-themeYellow-400 px-0 md:px-8 lg:px-10 w-full  {i !== 0 ? 'lg:border-l lg:border-themeGray-600' : ''}"
			/>
		{/each}
	</div>
{/snippet}

{#snippet navigationLinksSection ()}
	<div class="footer-nav flex justify-center mb-5 pb-8">
		<ul class="flex flex-wrap gap-x-6 gap-y-2">
			{#each mainLinks as link, i}
				<li class="px-2 flex items-center md:w-fit w-full">
					<Link
						href={link.href}
						label={link.label}
						icon="chevron"
						iconSize="sm"
						iconWrapperClass="text-themeYellow-600"
						class="text-themeYellow-600 text-xs md:text-md"
					/>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

{#snippet copyrightSection ()}
	<div class="footer-copyright flex justify-center">
		<div
			class="bg-white md:rounded-tl-2xl md:rounded-tr-2xl text-center px-7.5 md:px-10 lg:px-14 py-4.5 md:py-6 w-full  md:w-fit">
			<span class="text-themeGray-800 text-xs md:text-sm font-normal">{copyright}</span>
		</div>
	</div>
{/snippet}

<footer
	class="footer w-full bg-themeGray-800 pt-10 border-t border-themeGray-200 font-normal">
	<div class="footer-content theme-container mx-aut px-7.5">
		<!-- Contact Section -->
		{@render contactSection()}

		<!-- Social Links -->
		<div class="flex justify-between md:flex-row md:block">
			{@render socialLinksSection()}
			{@render navigationLinksSection()}
		</div>

	</div>
	<!-- Copyright -->
	{@render copyrightSection()}
</footer>

<style>
</style>

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
      {
        icon: 'message',
        href: 'https://t.me/yellow',
        label: 'Telegram <br class="hidden md:block"> Chat Group'
      },
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

{#snippet contactSection()}
  <div class="footer-contact mb-10 flex flex-col items-center justify-center font-bold text-white">
    <div class="flex flex-col flex-wrap items-center justify-center gap-2 md:flex-row md:gap-6.5">
      <h2 class="theme-text-h2">Get in touch</h2>
      <a
        href="mailto:{contactEmail}"
        class="flex inline-flex items-center gap-2 text-xl underline transition-colors duration-200 hover:no-underline"
      >
        <div class="text-themeYellow-600">
          <Icon name="envelope" size="xl" />
        </div>
        <span class="md:text-md text-xs lg:text-xl">{contactEmail}</span>
      </a>
    </div>
  </div>
{/snippet}

{#snippet socialLinksSection()}
  <div
    class="footer-social md:border-themeGray-600 order-last mb-12.5 flex flex-wrap md:order-first md:justify-items-center md:border-t md:border-b md:py-6 lg:grid lg:grid-cols-5"
  >
    {#each socialLinks as social, i}
      <Link
        href={social.href}
        label={social.label}
        icon={social.icon}
        iconWrapperClass="text-themeYellow-600 flex items-center justify-center rounded-full p-2 border-1 border-themeYellow-600 h-9 w-9"
        target="_blank"
        rel="noopener noreferrer"
        class="text-themeYellow-600 md:text-md hover:text-themeYellow-400 flex w-full items-center gap-3 px-0 text-xs md:justify-center md:px-8 lg:px-10  {i !==
        0
          ? 'lg:border-themeGray-600 lg:border-l'
          : ''}"
      />
    {/each}
  </div>
{/snippet}

{#snippet navigationLinksSection()}
  <div class="footer-nav mb-5 flex justify-center pb-8">
    <ul class="flex flex-wrap gap-x-6 gap-y-2">
      {#each mainLinks as link, i}
        <li class="flex w-full items-center px-2 md:w-fit">
          <Link
            href={link.href}
            label={link.label}
            icon="chevron"
            iconSize="sm"
            iconWrapperClass="text-themeYellow-600"
            class="text-themeYellow-600 md:text-md text-xs"
          />
        </li>
      {/each}
    </ul>
  </div>
{/snippet}

{#snippet copyrightSection()}
  <div class="footer-copyright flex justify-center">
    <div
      class="w-full bg-white px-7.5 py-4.5 text-center md:w-fit md:rounded-tl-2xl md:rounded-tr-2xl md:px-10 md:py-6 lg:px-14"
    >
      <span class="text-themeGray-800 text-xs font-normal md:text-sm">{copyright}</span>
    </div>
  </div>
{/snippet}

<footer class="footer bg-themeGray-800 border-themeGray-200 w-full border-t pt-10 font-normal">
  <div class="footer-content theme-container mx-aut px-7.5">
    <!-- Contact Section -->
    {@render contactSection()}

    <!-- Social Links -->
    <div class="flex justify-between md:block md:flex-row">
      {@render socialLinksSection()}
      {@render navigationLinksSection()}
    </div>
  </div>
  <!-- Copyright -->
  {@render copyrightSection()}
</footer>

<style>
</style>

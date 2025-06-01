<script lang="ts">
  import Icon from '@/theme/Icon/Icon.svelte';
  import Link from '@/theme/Link/Link.svelte';
  import { m } from '@paraglide/messages';

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
    contactEmail = m['footer.contact.email']({}),
    socialLinks = [
      { icon: 'open-source', href: 'https://github.com/yellow', label: m['footer.social.github']({}) },
      {
        icon: 'message',
        href: 'https://t.me/yellow',
        label: m['footer.social.telegram_chat']({})
      },
      {
        icon: 'message',
        href: 'https://t.me/yellow-announcements',
        label: m['footer.social.telegram_announcements']({})
      },
      { icon: 'message', href: 'https://facebook.com/yellow', label: m['footer.social.facebook']({}) },
      { icon: 'open-source', href: 'https://linkedin.com/company/yellow', label: m['footer.social.linkedin']({}) }
    ],
    mainLinks = [
      { label: m['footer.links.about']({}), href: '/about' },
      { label: m['footer.links.features']({}), href: '/features' },
      { label: m['footer.links.download']({}), href: '/download' },
      { label: m['footer.links.comparison']({}), href: '/comparsion' },
      { label: m['footer.links.documentation']({}), href: '/documentation' },
      { label: m['footer.links.faq']({}), href: '/faq' },
      { label: m['footer.links.contact']({}), href: '/contact' },
      { label: m['footer.links.signup']({}), href: '/signup' }
    ],
    copyright = m['footer.copyright']({ year: currentYear })
  }: Props = $props();
</script>

{#snippet contactSection()}
  <div
    class="footer-contact
    border-themeGray-600 mb-7.5 flex flex-col
    items-center justify-center
    border-b pb-7.5
    font-bold text-white
    md:mb-10 md:pb-0"
  >
    <div
      class="flex flex-col flex-wrap items-center justify-center
      gap-2 md:flex-row md:gap-6.5"
    >
      <h2 class="theme-text-h2">{m['footer.contact.title']({})}</h2>
      <a
        href="mailto:{contactEmail}"
        class="flex inline-flex items-center
          gap-2
          text-xl
          underline transition-colors duration-200 hover:no-underline"
      >
        <div
          class="text-themeYellow-600
          mr-2"
        >
          <Icon name="envelope" size="5xl" />
        </div>
        <span class="md:text-md text-xs lg:text-xl">{contactEmail}</span>
      </a>
    </div>
  </div>
{/snippet}

{#snippet socialLinksSection()}
  <div
    class="footer-social
      md:border-themeGray-600 order-last flex w-1/2 flex-col flex-wrap
      md:order-first md:mb-12.5
      md:w-full md:flex-row
      md:flex-wrap md:gap-y-6
      md:border-t
      md:border-b md:py-6 lg:justify-center
      lg:gap-y-0"
  >
    {#each socialLinks as social, i}
      <Link
        href={social.href}
        label={social.label}
        icon={social.icon}
        iconWrapperClass="flex items-center justify-center 
          rounded-full 
          p-2 
          h-9 w-9 
          border-1 border-themeYellow-600 
          text-themeYellow-600"
        textClass="text-themeGray-200 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
        class="md:text-md text-themeYellow-600 
          hover:text-themeYellow-400 lg:border-themeGray-600 flex
          w-full 
          items-center gap-3 px-0 pb-3 text-xs md:w-[33.33%] md:pr-4
          md:pb-0 lg:w-1/5 
          lg:justify-center lg:px-4 
          lg:px-8 
          lg:pb-3 {i === 0 ? 'lg:border-l-0' : 'lg:border-l'}"
      />
    {/each}
  </div>
{/snippet}

{#snippet navigationLinksSection()}
  <div
    class="footer-nav
    mb-5 flex
    w-1/2 justify-center
    pb-8 md:w-full"
  >
    <ul
      class="flex flex-wrap
      gap-x-6 gap-y-2"
    >
      {#each mainLinks as link, i}
        <li
          class="flex w-full
          items-center px-2
          pb-2 md:w-fit md:pb-0"
        >
          <Link
            href={link.href}
            label={link.label}
            icon="chevron"
            iconSize="sm"
            iconWrapperClass="text-themeYellow-600"
            textClass="text-themeGray-200 hover:text-white"
            class="md:text-md text-themeYellow-600 
              text-xs"
          />
        </li>
      {/each}
    </ul>
  </div>
{/snippet}

{#snippet copyrightSection()}
  <div
    class="footer-copyright
    flex justify-center"
  >
    <div
      class="w-full bg-white
        px-7.5 py-4.5 text-center md:w-fit md:rounded-tl-2xl
        md:rounded-tr-2xl
        md:px-10
        md:py-6 lg:px-14"
    >
      <span
        class="text-themeGray-800 text-xs
        font-normal
        md:text-sm">{copyright}</span
      >
    </div>
  </div>
{/snippet}

<footer
  class="footer
  border-themeGray-200
  bg-themeGray-800
  w-full border-t
  pt-10
  font-normal"
>
  <div
    class="footer-content theme-container
    mx-aut
    px-7.5"
  >
    <!-- Contact Section -->
    {@render contactSection()}

    <!-- Social Links -->
    <div
      class="flex flex-row
      md:block md:flex-row"
    >
      {@render socialLinksSection()}
      {@render navigationLinksSection()}
    </div>
  </div>
  <!-- Copyright -->
  {@render copyrightSection()}
</footer>

<style>
</style>

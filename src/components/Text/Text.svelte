<script lang="ts">
  import Link from '@/theme/Link/Link.svelte';

  export let blockTitle = 'Výrazný textový blok v2';
  const title = 'Liberland Software Foundation';

  const address = ['Liberty Street 1', 'Liberty City', 'LL-00001 Liberland'];
  const organizationId = 'LLC230002';

  const contactTitle = 'Get in touch';
  const contactEmail = 'info@libersoft.org';

  const links = [
    { label: 'Github Page', icon: 'github', href: 'https://github.com/yellow' },
    { label: 'Telegram Chat Group', icon: 'telegram', href: 'https://t.me/yellow' },
    {
      label: 'Telegram Announcements',
      icon: 'telegram',
      href: 'https://t.me/yellow-announcements'
    },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/yellow' },
    { label: 'Facebook Group', icon: 'facebook', href: 'https://facebook.com/yellow' }
  ];
</script>

{#snippet headerSnippet()}
  <h2 class="mb-6 text-8xl font-bold">{blockTitle}</h2>
{/snippet}

{#snippet cardHeaderSnippet()}
  <div class="card-block__header px-6 pt-5 lg:px-15 lg:py-4">
    <h3 class="text-center text-4xl font-medium md:text-5xl lg:text-6xl">{title}</h3>
  </div>
{/snippet}

{#snippet leftColumnSnippet()}
  <div class="w-full lg:flex-1">
    <div class="mb-2 text-xl font-bold">Address</div>
    <div class="text-md mb-4">
      {#each address as line}
        <div>{line}</div>
      {/each}
    </div>
    <div class="text-md mb-6">Organization ID: {organizationId}</div>

    <div class="mb-2 text-6xl font-medium">{contactTitle}</div>
    <a
      href="mailto:{contactEmail}"
      class="text-themeGray-800 hover:text-themeYellow-400 inline-flex items-center gap-2 text-xl font-bold underline"
    >
      <svg class="text-themeYellow-400 h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path
          d="M2.25 6.75l8.954 6.716a2.25 2.25 0 002.592 0L22.75 6.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
      <span>{contactEmail}</span>
    </a>
  </div>
{/snippet}

{#snippet rightColumnSnippet()}
  <div class="flex w-full flex-col gap-3 lg:flex-1">
    {#each links as link}
      <Link
        href={link.href}
        label={link.label}
        icon={link.icon}
        iconWrapperClass="bg-themeYellow-600 rounded-full p-2 flex items-center justify-center h-8 w-8"
        class="hover:text-themeYellow-400 text-md font-medium"
        target="_blank"
        rel="noopener noreferrer"
      />
    {/each}
  </div>
{/snippet}

{#snippet contentSnippet()}
  <div class="card-block__body px-6 pt-1 md:px-15 md:pb-10">
    <div class="flex flex-col gap-8 lg:flex-row lg:gap-16">
      {@render leftColumnSnippet()}
      {@render rightColumnSnippet()}
    </div>
  </div>
{/snippet}

{#snippet shadowSvgSnippet()}
  <div class="mb-6 flex w-full justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="674" height="48" viewBox="0 0 674 48" fill="none">
      <rect
        width="19"
        height="674"
        transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 16)"
        fill="url(#paint0_linear_264_1282)"
      />
      <rect x="590" width="84" height="48" fill="url(#paint1_linear_264_1282)" />
      <rect width="84" height="48" transform="matrix(-1 0 0 1 84 0)" fill="url(#paint2_linear_264_1282)" />
      <defs>
        <linearGradient id="paint0_linear_264_1282" x1="0" y1="337" x2="19" y2="337" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EAECF7" stop-opacity="0.65" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_264_1282" x1="590" y1="24" x2="674" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient id="paint2_linear_264_1282" x1="0" y1="24" x2="84" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  </div>
{/snippet}

<div class="mx-auto mb-12 max-w-7xl px-4">
  {@render headerSnippet()}

  <div class="rounded-3xl bg-white shadow-lg">
    {@render cardHeaderSnippet()}
    {@render shadowSvgSnippet()}
    {@render contentSnippet()}
  </div>
</div>

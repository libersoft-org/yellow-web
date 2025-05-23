<script lang="ts">
  import Box from '@/theme/Box/Box.svelte';

  type Feature = {
    title: string;
    description: string;
    icon: string;
    link: string;
    theme: 'primary' | 'secondary';
    highlight?: boolean;
    buttonText?: string;
  };

  const features: Feature[] = [
    {
      title: 'Distributed and decentralized network',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit semper dalarect lacus vel facilisis volutpat est velitcm.',
      icon: 'network',
      link: '/',
      theme: 'secondary'
    },
    {
      title: 'Privacy and security',
      description:
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque volutpat sapien vitae sodales eleifend. Pellentesque habitant morbi.',
      icon: 'shield',
      link: '/',
      theme: 'secondary'
    },
    {
      title: 'Open source',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit semper dalarect lacus vel facilisis volutpat est velitcm.',
      icon: 'open-source',
      link: '/',
      theme: 'secondary'
    },
    {
      title: 'Modularity',
      description:
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque volutpat sapien vitae sodales eleifend. Pellentesque habitant morbi.',
      icon: 'cube',
      link: '/',
      theme: 'secondary'
    },
    {
      title: 'Smart home <br> integration',
      description:
        'Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong> semper dalarect lacus vel facilisis volutpat est velitcm.',
      icon: 'wifi',
      link: '/',
      theme: 'secondary'
    },
    {
      title: 'Take your experience to the next level',
      description: 'with our all-in-one app',
      icon: '',
      link: '/',
      theme: 'primary',
      highlight: true,
      buttonText: 'Explore more'
    }
  ];
</script>

<div class="app-features flex flex-col items-center justify-center">
  <div class="mb-10 text-center">
    <h2 class="theme-text-h2 mb-3">
      Key <span class="theme-title-underline">characteristics</span>
    </h2>
    <div class="text-themeGray-400 text-xl">Cutting edge technology!</div>
  </div>
  <div class="theme-container relative flex flex-col items-center">
    <div class="grid w-full grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {#each features as feature}
        <div class="feature flex h-full">
          <Box
            title={feature.title}
            icon={feature.icon}
            theme={feature.theme}
            footerType={feature.theme === 'secondary' ? 'link' : 'button'}
            footerLink={feature.link}
            footerText={feature.buttonText}
            description={feature.description}
          ></Box>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Styles can be removed since we're using Tailwind classes now */
</style>

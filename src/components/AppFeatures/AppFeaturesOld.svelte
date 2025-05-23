<script lang="ts">
  import Card from '@/theme/Card/Card.svelte';
  import svgBackground from './bg.svg?raw';
  import Button from '@/theme/Button/Button.svelte';

  // Define position type
  type Position = { column: number; row: number };

  // Grid positions for LG screens - in same order as features
  const featurePositions: Position[] = [
    { column: 1, row: 4 }, // Messages
    { column: 1, row: 15 }, // E-commerce
    { column: 2, row: 23 }, // Social media
    { column: 3, row: 4 }, // Business tools
    { column: 3, row: 15 } // Entertainment
  ];

  const features = [
    {
      title: 'Messages',
      icon: 'message',
      description:
        'Innovative messaging with unlimited files, widgets, multipart messages, and more.'
    },
    {
      title: 'E-commerce',
      icon: 'cart',
      description:
        'Smart-contract wallet enables payments, purchases, donations, crowdfunding, and more.'
    },
    {
      title: 'Social media',
      icon: 'phone',
      description:
        'Advanced social features: video channels, forum, newsfeed, stories, events, and more.'
    },
    {
      title: 'Business tools',
      icon: 'calendar',
      description: 'Calendar and Tasks help businesses organize, share, and boost productivity.'
    },
    {
      title: 'Entertainment',
      icon: 'dice',
      description:
        'Last but not least, the platform also provides fun features such as dating and video games.'
    }
  ];
</script>

<div class="app-features mb-16 flex flex-col items-center justify-center md:mb-26">
  <div class="mb-8 text-center">
    <h2 class="theme-text-h2">
      One app, <span class="theme-title-underline">one account,</span><br />
      for everything you need!
    </h2>
  </div>
  <div class="theme-container relative flex w-full flex-col items-center px-4 sm:px-6 lg:px-0">
    <div class="svg-bg margin-auto pointer-events-none absolute top-5 -z-10 max-h-[642px] w-full">
      {@html svgBackground}
    </div>

    <div
      class="app-features-layout flex w-full
					max-w-md flex-col items-center space-y-8
					md:grid md:max-w-3xl md:grid-cols-2 md:items-start md:gap-6
					md:space-y-0 md:px-14 lg:max-w-[calc(380px*3+2*1.5rem)] lg:grid-cols-3
					lg:grid-rows-[repeat(28,1.2rem)]
					lg:gap-x-6
					lg:gap-y-0"
    >
      <!-- Image -->
      <div
        class="flex w-full max-w-[380px] justify-center
						md:col-span-2 md:row-start-1 md:justify-center
						lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:justify-start"
      >
        <img
          alt="App Features Mobile"
          class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          src="/assets/images/app-features-mobile.png"
        />
      </div>

      {#each features as feature, index}
        <div
          class="flex w-full justify-center
							md:justify-self-center
							lg:col-[var(--col)]
              				lg:row-[var(--row)]
							lg:justify-self-auto"
          style="--col: {featurePositions[index].column}; --row: {featurePositions[index].row};"
        >
          <div class="feature w-full">
            <Card title={feature.title} icon={feature.icon}>
              {feature.description}
            </Card>
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-16 flex justify-center md:mt-2 lg:mt-1">
      <Button label="See all features" rightIcon="chevron" theme="secondary" />
    </div>
  </div>
</div>

<style>
  .svg-bg :global(svg) {
    width: 100%;
    height: auto;
  }
</style>

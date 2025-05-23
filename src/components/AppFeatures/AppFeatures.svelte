<script lang="ts">
  import Card from '@/theme/Card/Card.svelte';
  import svgBackground from './bg.svg?raw';
  import Button from '@/theme/Button/Button.svelte';

  interface Feature {
    title: string;
    icon: string; // or a component/function if it's not a string
    description: string;
  }
</script>

{#snippet feature({ title, icon, description }: Feature)}
  <div class="feature w-full">
    <Card {title} {icon}>
      {@html description}
    </Card>
  </div>
{/snippet}

<div class="app-features relative mb-20 flex flex-col items-center justify-center lg:mb-50">
  <div class="mb-8 text-center">
    <h2 class="theme-text-h2">
      One app, <span class="theme-title-underline">one account,</span><br />
      for everything you need!
    </h2>
  </div>

  <div class="theme-container relative flex w-full flex-col items-center px-4 sm:px-6 lg:px-0">
    <div class="svg-bg margin-auto pointer-events-none absolute top-5 -z-10 hidden w-full lg:block">
      {@html svgBackground}

      <div class="absolute inset-x-0 -bottom-6 mt-16 flex justify-center md:mt-2 lg:mt-1">
        <Button label="See all features" rightIcon="chevron" theme="secondary" />
      </div>
    </div>

    <div
      class="app-features-layout flex w-full flex-col justify-center gap-4 md:px-[8rem] lg:flex-row lg:gap-10"
    >
      <div class="flex flex-1 flex-col gap-4 lg:max-w-[351px] lg:gap-8 lg:pt-20">
        {@render feature({
          title: 'Messages',
          icon: 'message',
          description:
            'Innovative messaging with unlimited files, widgets, multipart messages, and more.'
        })}
        {@render feature({
          title: 'E-commerce',
          icon: 'cart',
          description:
            'Smart-contract wallet enables payments, purchases, donations, crowdfunding, and more.'
        })}
      </div>

      <div class="-order-1 flex flex-1 flex-col items-center gap-8 lg:order-none lg:max-w-[384px]">
        <!-- Image -->
        <div
          class="flex w-full max-w-[380px] justify-center md:col-span-2 md:row-start-1
						md:hidden md:justify-center lg:col-span-1
						lg:col-start-2 lg:row-start-1 lg:block lg:justify-start"
        >
          <img
            alt="App Features Mobile"
            class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
            src="/assets/images/app-features-mobile.png"
          />
        </div>

        {@render feature({
          title: 'Social media',
          icon: 'phone',
          description:
            'Advanced social features: video channels, forum, newsfeed, stories, events, and more.'
        })}
      </div>

      <div class="flex flex-1 flex-col gap-4 lg:max-w-[351px] lg:gap-8 lg:pt-20">
        {@render feature({
          title: 'Business tools',
          icon: 'calendar',
          description: 'Calendar and Tasks help businesses organize, share, and boost productivity.'
        })}
        {@render feature({
          title: 'Entertainment',
          icon: 'dice',
          description:
            'Last but not least, the platform also provides fun features such as dating and video games.'
        })}
      </div>
    </div>
  </div>
</div>

<style>
  .svg-bg :global(svg) {
    width: 100%;
    height: auto;
  }
</style>

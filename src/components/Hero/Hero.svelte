<script lang="ts">
  import Button from '@/theme/Button/Button.svelte';

  interface Props {
    imageSrc?: string;
    backgroundImage?: string;
    heroText?: string;
  }

  let {
    imageSrc = 'assets/images/desktop.png',
    backgroundImage = 'assets/images/hero-bg.png',
    heroText = 'Experience the freedom of decentralized world. Lorem ipsum dolor sit amet consecetur adipiscing elit. In nunc velit, tincidunt eu finibus vitae, condimentum at magna.'
  }: Props = $props();
</script>

{#snippet leftSide()}
  <div class="flex flex-col items-center justify-center">
    <h1 class="theme-text-h1 mb-8">
      Welcome <br class="hidden md:block" /> to <span class="theme-title-underline">Yellow</span>
    </h1>
    <div class="theme-text-body1 mb-13 text-center">
      {heroText}
    </div>
    <div class="flex">
      <Button
        iconSize="xl"
        icon="download"
        label="Download Yellow"
        theme="secondary"
        class="mr-5"
      />
      <Button iconSize="xl" icon="account" label="Create free account" theme="primary" />
    </div>
  </div>
{/snippet}

{#snippet rightSide()}
  <div class="mb-10 flex h-full items-center justify-center md:mb-0">
    <img src={imageSrc} alt="Yellow app on multiple devices" class="h-auto max-w-full" />
  </div>
{/snippet}

<div
  class="relative isolate mb-20 bg-cover bg-center pt-24.5 pb-9 md:pt-35 md:pb-8 lg:pt-46 lg:pb-13"
  style="background-image: url('{backgroundImage}')"
>
  <div class="theme-container relative mx-auto">
    <div class="flex flex-wrap">
      <div class="order-2 w-full lg:order-1 lg:w-2/5">
        {@render leftSide()}
      </div>
      <div class="order-1 w-full lg:order-2 lg:w-3/5">
        {@render rightSide()}
      </div>
    </div>
  </div>
</div>

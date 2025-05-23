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

{#snippet leftSide ()}
	<div class="flex flex-col justify-center items-center">
		<h1 class="theme-text-h1 mb-8">
			Welcome <br class="hidden md:block"> to <span class="theme-title-underline">Yellow</span>
		</h1>
		<div class="theme-text-body1 text-center mb-13">
			{heroText}
		</div>
		<div class="flex">
			<Button iconSize="xl" icon="download" label="Download Yellow" theme="secondary" class="mr-5" />
			<Button iconSize="xl" icon="account" label="Create free account" theme="primary" />
		</div>
	</div>
{/snippet}

{#snippet rightSide ()}
	<div class="flex justify-center items-center h-full mb-10 md:mb-0">
		<img src={imageSrc} alt="Yellow app on multiple devices" class="max-w-full h-auto" />
	</div>
{/snippet}

<div class="relative mb-20 pt-24.5 pb-9 md:pt-35 md:pb-8 lg:pt-46 lg:pb-13 bg-cover bg-center isolate"
		 style="background-image: url('{backgroundImage}')">
	<div class="theme-container mx-auto relative">
		<div class="flex flex-wrap">
			<div class="w-full lg:w-2/5 order-2 lg:order-1">
				{@render leftSide()}
			</div>
			<div class="w-full lg:w-3/5 order-1 lg:order-2">
				{@render rightSide()}
			</div>
		</div>
	</div>
</div>

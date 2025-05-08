<script lang="ts">
import Button from '@/theme/Button/Button.svelte';

interface Props {
  imageSrc?: string;
  backgroundImage?: string;
}

let { 
  imageSrc = '/assets/images/hero-devices.png',
  backgroundImage = 'src/assets/images/hero-bg.png'
}: Props = $props();
</script>

{#snippet leftSide()}
	<div class="flex flex-col justify-center items-center">
		<div class="theme-text-h1 mb-10">
			Welcome <br /> to <span class="theme-title-underline">Yellow</span>
		</div>
		<div class="theme-text-body1 text-center mb-10">
			Experience the freedom of decentralized world. Lorem ipsum dolor sit amet consecetur adipiscing elit. In nunc velit, tincidunt eu finibus vitae, condimentum at magna.		</div>
		<div class="flex">
			<Button icon="download" label="Download Yellow" theme="secondary" class="mr-4" />
			<Button icon="download" label="Create free account" theme="primary" class="mr-4" />
		</div>
	</div>
{/snippet}

{#snippet rightSide()}
	<div class="flex justify-center items-center h-full">
		<img src={imageSrc} alt="Yellow app on multiple devices" class="max-w-full h-auto" />
	</div>
{/snippet}

<div class="relative mb-20 pt-40 pb-16 bg-cover bg-center isolate" style="background-image: url('{backgroundImage}')">
	<div class="theme-container mx-auto relative">
		<div class="flex flex-wrap">
			<div class="w-full lg:w-2/5">
				{@render leftSide()}
			</div>
			<div class="w-full lg:w-3/5">
				{@render rightSide()}
			</div>
		</div>
	</div>
</div>

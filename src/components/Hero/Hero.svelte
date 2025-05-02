<script lang="ts">

import Header from '@/components/Header/Header.svelte';
import Button from '@/theme/Button/Button.svelte';
</script>

{#snippet leftSide()}
	<div class="flex flex-col justify-center items-center">
		<div class="theme-text-h1 mb-10">
			Welcome <br /> to <span class="theme-title-underline">Yellow</span>
		</div>
		<div class="theme-text-body1 text-center mb-10">
			Experience the freedom of decentralized world. Lorem ipsum dolor sit amet consecetur adipiscing elit. In nunc velit, tincidunt eu finibus vitae, condimentum at magna.
		</div>
		<div class="flex">
			<Button icon="download" label="Download Yellow" theme="secondary" class="mr-4" />
			<Button icon="download" label="Create free account" theme="primary" class="mr-4" />
		</div>
	</div>
{/snippet}

{#snippet rightSide()}
right
{/snippet}

<div class="hero">
	<div class="container mx-auto">
		<Header />
		<div class="flex">
			<div class="w-2/5">
				{@render leftSide()}
			</div>
			<div class="w-3/5">
				{@render rightSide()}
			</div>
		</div>
	</div>
</div>

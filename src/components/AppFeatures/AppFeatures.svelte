<script lang="ts">
import Card from '@/theme/Card/Card.svelte';
import svgBackground from './bg.svg?raw'
import Button from '@/theme/Button/Button.svelte';

</script>

{#snippet feature()}
	<div class="feature max-w-[350px]">
		<Card title="Test" icon="download">
			fsdfsd sdff sdf sdf sdf <br />
			fsdfsd sdff sdf sdf sdf <br />
		</Card>
	</div>
{/snippet}

<div class="app-features flex flex-col items-center justify-center">
	<div class="text-center mb-8">
		<h2 class="theme-text-h2">
			One app, <span class="theme-title-underline">one account,</span><br />
			for everything you need!
		</h2>
	</div>
	<div class="theme-container relative flex flex-col items-center">
		<div class="svg-bg absolute margin-auto w-full top-5 max-h-[642px]" style:z-index="-1">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html svgBackground}
		</div>
		<div class="app-features-gríd gap-x-6">
			<div style:grid-column="1" style:grid-row="3">
				{@render feature()}
			</div>
			<div style:grid-column="1" style:grid-row="9">
				{@render feature()}
			</div>
			<div style:grid-column="2" style:grid-row="1">
				<img src="/assets/images/app-features-mobile.png" />
			</div>
			<div style:grid-column="2" style:grid-row="12">
				{@render feature()}
			</div>
			<div style:grid-column="3" style:grid-row="3">
				{@render feature()}
			</div>
			<div style:grid-column="3" style:grid-row="9">
				{@render feature()}
			</div>
		</div>
		<div class="flex justify-center">
			<Button label="See all features" theme="secondary" rightIcon="chevron" />
		</div>
	</div>
</div>

<style>
	.app-features-gríd {
			display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(20, minmax(0, 32px));
			max-width: calc(350px * 3);
	}

	.svg-bg :global(svg) {
			width: 100%;
			height: auto;
	}
</style>

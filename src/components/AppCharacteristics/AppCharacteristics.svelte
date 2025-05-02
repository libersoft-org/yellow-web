<script lang="ts">
import Button from '@/theme/Button/Button.svelte';
import Box from '@/theme/Box/Box.svelte';

</script>

{#snippet characteristic()}
	<div class="feature">
		<Box title="Test" icon="download" theme="secondary">
			fsdfsd sdff sdf sdf sdf <br />
			fsdfsd sdff sdf sdf sdf <br />
		</Box>
	</div>
{/snippet}

<div class="app-features flex flex-col items-center justify-center">
	<div class="text-center mb-8">
		<h2 class="theme-text-h2 mb-4">
			Key <span class="theme-title-underline">characteristics</span>
		</h2>
		<div class="theme-text-h4">
			Cutting edge technology!
		</div>
	</div>
	<div class="theme-container relative flex flex-col items-center">
		<div class="app-features-gríd gap-6 w-full">
			{@render characteristic()}
			{@render characteristic()}
			{@render characteristic()}
			{@render characteristic()}
			{@render characteristic()}
			{@render characteristic()}
		</div>
	</div>
</div>

<style>
	.app-features-gríd {
			display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
	}
</style>

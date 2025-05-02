<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Typography from '@/theme/Typography/Typography.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/Typography',
		component: Typography,
		tags: ['autodocs'],
		args: {}
	});
</script>

{#snippet badge(infos)}
	<div class="flex gap-2 mb-2">
		{#each infos as info (info)}
			<div class="border-1 py-0.5 px-1.5 rounded-md bg-gray-100 first:text-blue-800 text-xs font-semibold">
				{info}
			</div>
		{/each}
	</div>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">
	{@render badge(['theme-text-h1', 'h1'])}
	<div class="mb-8">
		<h1 class="theme-text-h1">Title ok but <br /> nice <span class="theme-title-underline">with underline</span></h1>
	</div>
	{@render badge(['theme-text-h2', 'h2'])}
	<div class="mb-8">
		<h2 class="theme-text-h2">Title ok but <br /> nice <span class="theme-title-underline">with underline</span></h2>
	</div>
	{@render badge(['theme-text-h3', 'h3'])}
	<div class="mb-8">
		<h3 class="theme-text-h3">Title ok but <br /> nice <span class="theme-title-underline">with underline</span></h3>
	</div>
	{@render badge(['theme-text-h4', 'h4'])}
	<div class="mb-8">
		<h4 class="theme-text-h4">Title ok but <br /> nice <span class="theme-title-underline">with underline</span></h4>
	</div>
	{@render badge(['theme-text-h5', 'h5'])}
	<div class="mb-8">
		<h5 class="theme-text-h5">Title ok but <br /> nice <span class="theme-title-underline">with underline</span></h5>
	</div>
	{@render badge(['theme-text-h6', 'h6'])}
	<div class="mb-8">
		<h6 class="theme-text-h6">Title ok but <br /> nice <span class="theme-title-underline">with underline</span></h6>
	</div>
	{@render badge(['theme-text-body1'])}
	<div class="mb-8">
		<h6 class="theme-text-body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</h6>
	</div>
	{@render badge(['theme-text-body2'])}
	<div class="mb-8">
		<h6 class="theme-text-body2">Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</h6>
	</div>
</Story>



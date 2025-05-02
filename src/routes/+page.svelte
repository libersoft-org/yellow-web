<script>
import Button from '@/theme/Button/Button.svelte';
import Card from '@/theme/Card/Card.svelte';
import AppFeatures from '@/components/AppFeatures/AppFeatures.svelte';
import AppCharacteristics from '@/components/AppCharacteristics/AppCharacteristics.svelte';
</script>

<div class="">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
	<div class="container mx-auto">
		<Button label="button" />
		<Button theme="secondary" label="button" />

		<div class="">
			<h1 class="theme-text-h1">Title ok but <br /> <span class="theme-title-underline">with underline</span></h1>
			<h1 class="theme-text-h2">Title ok but <br /> <span class="theme-title-underline">with underline</span></h1>
			<h1 class="theme-text-h3">Title ok but <br /> <span class="theme-title-underline">with underline</span></h1>
		</div>
	</div>

	<Card title="tetasd" icon="download">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
	</Card>

	<AppFeatures />

	<AppCharacteristics />
</div>

<style>
</style>

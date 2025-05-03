<script>
import Hero from '@/components/Hero/Hero.svelte';
import AppFeatures from '@/components/AppFeatures/AppFeatures.svelte';
import AppCharacteristics from '@/components/AppCharacteristics/AppCharacteristics.svelte';
import Header from '@/components/Header/Header.svelte';
</script>

<div>
	<Header position="fixed" width="theme-container" />
	<Hero />
	<AppFeatures />
	<AppCharacteristics />
</div>

<style>
</style>

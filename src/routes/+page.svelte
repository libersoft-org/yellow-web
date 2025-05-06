<script>
import Header from '@/components/Header/Header.svelte';
import Hero from '@/components/Hero/Hero.svelte';
import AppFeatures from '@/components/AppFeatures/AppFeatures.svelte';
import AppCharacteristics from '@/components/AppCharacteristics/AppCharacteristics.svelte';
import AppFeaturesTable from '@/components/AppFeaturesTable/AppFeaturesTable.svelte';
import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
</script>

<div>
	<Header position="fixed" width="theme-container" />
	<Hero />
	<AppFeatures />
	<AppCharacteristics />
	<AppFeaturesTable />
	<AppFeaturesComparisonTable />
</div>

<style>
</style>

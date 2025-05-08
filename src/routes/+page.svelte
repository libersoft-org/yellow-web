<script>
import Header from '@/components/Header/Header.svelte';
import Footer from '@/components/Footer/Footer.svelte';
import Hero from '@/components/Hero/Hero.svelte';
import AppFeatures from '@/components/AppFeatures/AppFeatures.svelte';
import AppCharacteristics from '@/components/AppCharacteristics/AppCharacteristics.svelte';
import AppFeaturesTable from '@/components/AppFeaturesTable/AppFeaturesTable.svelte';
import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
import TextImage from '@/components/TextImage/TextImage.svelte';
import Text from '@/components/Text/Text.svelte';
import FAQ from '@/components/FAQ/FAQ.svelte';
</script>

<div>
	<Header position="fixed" width="theme-container" />
	<Hero />
	<AppFeatures />
	<AppCharacteristics />
	<AppFeaturesTable />
	<AppFeaturesComparisonTable />
	<TextImage />
	<Text />
	<FAQ />
	<Footer />
</div>

<style>
</style>

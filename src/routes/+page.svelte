<script>
  import Header from '@/components/Header/Header.svelte';
  import Footer from '@/components/Footer/Footer.svelte';
  import Hero from '@/components/Hero/Hero.svelte';
  import AppFeatures from '@/components/AppFeatures/AppFeatures.svelte';
  import AppCharacteristics from '@/components/AppCharacteristics/AppCharacteristics.svelte';
  import AppFeaturesTable from '@/components/AppFeaturesTable/AppFeaturesTable.svelte';
  import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
  import TextImageHighlighted from '@/components/TextImageHighlighted/TextImageHighlighted.svelte';
</script>

<div>
  <Header zIndex={100} />
  <Hero />
  <AppFeatures />
  <AppCharacteristics />
  <AppFeaturesTable />
  <AppFeaturesComparisonTable />
  <Footer />
</div>

<style>
</style>

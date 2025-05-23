<script>
  import Header from '@/components/Header/Header.svelte';
  import Footer from '@/components/Footer/Footer.svelte';
  import Hero from '@/components/Hero/Hero.svelte';
  import AppFeatures from '@/components/AppFeatures/AppFeatures.svelte';
  import AppCharacteristics from '@/components/AppCharacteristics/AppCharacteristics.svelte';
  import AppFeaturesTable2 from '@/components/AppFeaturesTable/AppFeaturesTable2.svelte';
  import TextImage from '@/components/TextImage/TextImage.svelte';
  import FAQ from '@/components/FAQ/FAQ.svelte';
  import Form from '@/components/Form/Form.svelte';
</script>

<div>
  <Header zIndex={100} />
  <Hero />
  <AppFeatures />
  <AppCharacteristics />
  <AppFeaturesTable2 />
  <TextImage />

  <div class="theme-container mx-auto py-12">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <Form />
      </div>
      <div></div>
    </div>
  </div>

  <FAQ />
  <Footer />
</div>

<style>
</style>

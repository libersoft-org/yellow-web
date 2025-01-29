<script>
 import '../app.css';
 import { pages, product } from '../app.js';
 import { page } from '$app/state';
 import Header from '../components/header.svelte';
 let { children } = $props();
</script>

<style>
 :root {
  --shadow: 0 0 20px rgba(0, 0, 0, 0.4);
 }

 .app {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: #aaa;
  background: url('/img/background.webp') repeat #eee;
  background-size: 400px;
 }

 .page {
  width: 1200px;
  max-width: 100%;
  background-color: #fff;
  box-shadow: var(--shadow);
 }

 .page .content {
  padding: 20px;
  height: calc(100% - 112px);
  overflow: auto;
 }
</style>

<svelte:head>
 <title>{product} - {pages.filter(item => item.route === page.url.pathname)?.[0]?.title || 'Page not found'}</title>
</svelte:head>
<div class="app">
 <div class="page">
  <Header />
  <div class="content">
   {@render children()}
  </div>
 </div>
</div>
<!--
  <Menu bind:showMenu={isMenuOpen} />
  <MenuBar bind:isMenuOpen />
 -->
<!--<Modal body={Wizard} bind:show={showWelcomeWizard} params={wizardData} />-->

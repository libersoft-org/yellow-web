<script>
 import { pages, product } from '../app.js';
 import { page } from '$app/state';
 import { goto } from '$app/navigation';
 import BaseButton from './base-button.svelte';
 import Menu from './menu.svelte';
 let isMenuOpen = false;

 function clickLogo() {
  goto('/');
 }

 function clickMenu() {
  isMenuOpen = true;
 }
</script>

<style>
 .header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 40px;
  height: 50px;
  background-color: #fd1;
  border: 1px solid #aaa;
  border-radius: 0 0 20px 20px;
  box-shadow: var(--shadow);
 }

 a {
  color: #000;
 }

 .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
 }

 .logo .image img {
  width: 40px;
  height: 40px;
 }

 .logo .text {
  font-size: 25px;
  font-weight: bold;
 }

 .menu {
  display: flex;
  align-items: center;
 }

 .menu .item {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 10px;
  transition: background-color 0.5s ease;
 }

 .menu .item:hover {
  background-color: #ec0;
 }

 .menu .item.active {
  font-weight: bold;
  background-color: #db0;
 }

 .menu-mobile {
  display: none;
  padding: 10px;
 }

 .menu-mobile img {
  display: flex;
  width: 30px;
  height: 30px;
 }

 @media (max-width: 1100px) {
  .menu {
   display: none;
  }

  .menu-mobile {
   display: block;
  }
 }
</style>

<div class="header">
 <BaseButton onClick={clickMenu}>
  <div class="menu-mobile">
   <img src="img/menu.svg" alt="Menu" />
  </div>
 </BaseButton>
 <BaseButton onClick={clickLogo}>
  <div class="logo">
   <div class="image"><img src="img/logo.svg" alt={product} /></div>
   <div class="text">{product}</div>
  </div>
 </BaseButton>
 <div class="menu">
  {#each pages as p}
   <a href={p.route} target={p.route.startsWith('http://') || p.route.startsWith('https://') ? '_blank' : ''}>
    <div class="item {p.route === page.url.pathname && 'active'}">{p.title}</div>
   </a>
  {/each}
 </div>
</div>
<Menu bind:showMenu={isMenuOpen} />

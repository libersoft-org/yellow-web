<script>
 import { pages, product } from '../app.js';
 import { page } from '$app/state';
 import { goto } from '$app/navigation';
 import BaseButton from './base-button.svelte';
 //let isMenuOpen = false;

 function clickLogo() {
  goto('/');
 }

 function clickMenu() {
  console.log('Menu clicked');
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
  text-decoration: none;
  color: #000;
 }

 .logo {
  font-size: 25px;
  font-weight: bold;
  flex: 1;
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
 <div class="menu-mobile">
  <BaseButton onClick={clickMenu}>
   <img src="img/menu.svg" alt="Menu" />
  </BaseButton>
 </div>
 <BaseButton onClick={clickLogo}>
  <div class="logo">{product}</div>
 </BaseButton>
 <div class="menu">
  {#each pages as p}
   <a href={p.route}>
    <div class="item {p.route === page.url.pathname && 'active'}">{p.title}</div>
   </a>
  {/each}
 </div>
</div>

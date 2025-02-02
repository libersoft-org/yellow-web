<script>
 import { page } from '$app/state';
 import { goto } from '$app/navigation';
 import { pages, product } from '../app.js';
 import BaseButton from './base-button.svelte';
 import Item from './menu-item.svelte';
 export let showMenu = false;

 function clickMenuClose() {
  showMenu = false;
 }

 function clickItem(route) {
  goto(route);
  clickMenuClose();
 }
</script>

<style>
 .overlay {
  z-index: 999;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
 }

 .overlay.open {
  display: block;
 }

 .menu {
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 250px;
  max-width: 100%;
  height: 100%;
  background-color: #222;
  color: #fff;
  box-shadow: var(--shadow);
  transform: translateX(-100%);
  transition:
   transform 0.3s ease,
   visibility 0s 0.3s;
  visibility: hidden;
 }

 .menu.open {
  transform: translateX(0);
  transition:
   transform 0.3s ease,
   visibility 0s;
  visibility: visible;
 }

 .top {
  display: flex;
  border-bottom: 1px solid #444;
  padding: 10px 40px;
 }

 .top .close {
  display: flex;
  padding: 10px;
 }

 .top .close img {
  width: 30px;
  height: 30px;
 }

 .footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  text-align: center;
  color: #000;
  border-top: 1px solid #da0;
  background-color: #fd1;
 }

 .footer .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 18px;
  font-weight: bold;
 }

 .footer .logo img {
  width: 20px;
  height: 20px;
 }
</style>

{#if showMenu}
 <div class="overlay open" role="none" onclick={clickMenuClose}></div>
{/if}
<div class="menu {showMenu ? 'open' : ''}">
 <div>
  <div class="top">
   <BaseButton onClick={clickMenuClose}>
    <div class="close">
     <img src="img/close.svg" alt="X" />
    </div>
   </BaseButton>
  </div>
  {#each pages as p}
   <a href={p.route}>
    <Item title={p.title} active={p.route === page.url.pathname ? true : false} onClick={() => clickItem(p.route)} />
   </a>
  {/each}
 </div>
 <div class="footer">
  <BaseButton onClick={() => clickItem('/')}>
   <div class="logo">
    <div><img src="img/logo.svg" alt={product} /></div>
    <div>{product}</div>
   </div>
  </BaseButton>
 </div>
</div>

<script>
 import { pages, product } from '../app.js';
 import { page } from '$app/state';
</script>

<style>
 .header {
  display: flex;
  align-items: center;
  padding: 10px 40px;
  height: 50px;
  background-color: #fd1;
  border-radius: 0 0 20px 20px;
  box-shadow: var(--shadow);
 }

 .logo {
  font-size: 25px;
  font-weight: bold;
  flex: 1;
 }

 .menu {
  display: flex;
  gap: 20px;
 }
</style>

<div class="header">
 <div class="logo">{product}</div>
 <div class="menu">
  {#each pages as p}
   <a href={p.route}>
    <div class="item {p.route === page.url.pathname && 'bold'}">{p.title}</div>
   </a>
  {/each}
 </div>
</div>

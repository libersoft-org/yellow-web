<script>
 import BaseButton from './base-button.svelte';
 export let img;
 export let title;
 export let active = false;
 export let onClick;
</script>

<style>
 .item {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #333;
 }

 .item.active {
  background-color: #444;
 }

 .item:hover {
  background-color: #333;
 }

 .item .title {
  color: #fff;
  font-weight: bold;
 }

 .item img {
  width: 24px;
  height: 24px;
 }
</style>

<BaseButton {onClick}>
 <div class="item {active && 'active'}">
  {#if img}
   <img src={img} alt={title} />
  {/if}
  {#if title}
   <div class="title">{title}</div>
  {/if}
 </div>
</BaseButton>

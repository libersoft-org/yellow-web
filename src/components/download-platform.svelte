<script>
 import BaseButton from './base-button.svelte';
 export let img;
 export let name;
 export let link = '';

 function openLink(link) {
  window.open(link, '_blank');
 }
</script>

<style>
 .button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border: 1px solid #888;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
 }

 .button:hover {
  transform: scale(1.1);
 }

 img {
  width: 50px;
 }
</style>

<BaseButton onClick={() => openLink(link)}>
 <div class="button">
  {#if img}
   <img src={img} alt={name} />
  {/if}
  {#if name}
   <div class="bold">{name}</div>
  {/if}
 </div>
</BaseButton>

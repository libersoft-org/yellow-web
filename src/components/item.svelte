<script>
 import BaseButton from './base-button.svelte';
 export let img;
 export let label;
 export let link = '';
 export let width = '100px';
 export let background = '#fff';
 export let color = '#000';
 export let hover = false;

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
  text-align: center;
  padding: 10px;
  border: 1px solid #888;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
 }

 .hover:hover {
  transform: scale(1.15);
 }

 img {
  width: 50px;
 }
</style>

<BaseButton onClick={() => openLink(link)}>
 <div class="button {hover ? 'hover' : ''}" style:width style:background-color={background}>
  {#if img}
   <img src={img} alt={label} />
  {/if}
  {#if label}
   <div class="bold" style:color>{label}</div>
  {/if}
 </div>
</BaseButton>

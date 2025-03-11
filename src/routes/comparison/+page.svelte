<script>
 import { onMount } from 'svelte';
 import Table from '../../components/table.svelte';
 import Thead from '../../components/table-thead.svelte';
 import TheadTr from '../../components/table-thead-tr.svelte';
 import Th from '../../components/table-thead-th.svelte';
 import Tbody from '../../components/table-tbody.svelte';
 import TbodyTr from '../../components/table-tbody-tr.svelte';
 import Td from '../../components/table-tbody-td.svelte';
 let comparison = [];

 onMount(async () => {
  comparison = JSON.parse(await (await fetch('comparison.json', { headers: { 'cache-control': 'no-cache' } })).text());
 });
</script>

<style>
 .icon {
  width: 20px;
  height: 20px;
 }
</style>

<h1>Comparison with other software</h1>
<div>Please note that some information in tables below might not be up to date.</div>
{#if comparison}
 {#each comparison as c}
  <h2>{c.title}</h2>
  <Table>
   <Thead>
    <TheadTr>
     <Th>Software</Th>
     {#each c.columns as column}
      <Th center={true}>{column}</Th>
     {/each}
    </TheadTr>
   </Thead>
   <Tbody>
    {#each Object.entries(c.rows) as [key, values]}
     <TbodyTr>
      <Td><div class="bold">{key}</div></Td>
      {#each values as value}
       {#if value === 0 || value === 1}
        <Td center={true}><img class="icon" src="img/{value === 0 ? 'no' : 'yes'}.svg" alt={value === 0 ? 'No' : 'Yes'} /></Td>
       {:else}
        <Td center={true}>{value}</Td>
       {/if}
      {/each}
     </TbodyTr>
    {/each}
   </Tbody>
  </Table>
 {/each}
{/if}

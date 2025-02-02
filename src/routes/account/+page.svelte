<script>
 import { product } from '../../app.js';
 import { goto } from '$app/navigation';
 import BaseButton from '../../components/base-button.svelte';
 import Table from '../../components/table.svelte';
 import Thead from '../../components/table-thead.svelte';
 import TheadTr from '../../components/table-thead-tr.svelte';
 import Th from '../../components/table-thead-th.svelte';
 import Tbody from '../../components/table-tbody.svelte';
 import TbodyTr from '../../components/table-tbody-tr.svelte';
 import Td from '../../components/table-tbody-td.svelte';
 let providers = [
  {
   name: 'LiberSoft',
   link: 'https://libersoft.org/',
   modules: ['Messages', 'Profile', 'Wallet'],
  },
 ];
</script>

<h1>Create your free account</h1>
<div>You can create your free {product} account by choosing one of the following free AMTP account providers:</div>
<br />
<Table>
 <Thead>
  <TheadTr>
   <Th>Provider</Th>
   <Th>Modules</Th>
  </TheadTr>
 </Thead>
 <Tbody>
  {#each providers as p}
   <TbodyTr>
    <Td><BaseButton onClick={() => window.open(p.link, '_blank')}><span class="link">{p.name}</span></BaseButton></Td>
    <Td>{p.modules.join(', ')}</Td>
   </TbodyTr>
  {/each}
 </Tbody>
</Table>
<br />
If you'd like to add your free account server to this table, please <BaseButton onClick={() => goto('/contact', '_blank')}><span class="link">contact us</span></BaseButton>.

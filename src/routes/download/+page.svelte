<script>
 import { product } from '../../app.js';
 import BaseButton from '../../components/base-button.svelte';
 import Table from '../../components/table.svelte';
 import Thead from '../../components/table-thead.svelte';
 import TheadTr from '../../components/table-thead-tr.svelte';
 import Th from '../../components/table-thead-th.svelte';
 import Tbody from '../../components/table-tbody.svelte';
 import TbodyTr from '../../components/table-tbody-tr.svelte';
 import Td from '../../components/table-tbody-td.svelte';
 let download = [
  {
   name: product + ' (web version)',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-client/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-client/',
    },
   ],
  },
  {
   name: product + ' (native version - desktop and mobile)',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-client-native/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-client-native/',
    },
   ],
  },
  {
   name: product + ' Admin',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-admin/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-admin/',
    },
   ],
  },
  {
   name: product + ' Server',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-server/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-server/',
    },
   ],
  },
  {
   name: product + ' Server - Module Messages',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-server-module-messages/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-server-module-messages/',
    },
   ],
  },
  {
   name: product + ' Server - Common libraries',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-server-common/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-server-common/',
    },
   ],
  },
  {
   name: product + ' Sticker Server',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-sticker-server/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-sticker-server/',
    },
   ],
  },
  {
   name: product + ' Registration',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-registration/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-registration/',
    },
   ],
  },
  {
   name: product + ' Website',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/yellow-web/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/yellow-web/',
    },
   ],
  },
  {
   name: 'Realtime Console',
   links: [
    {
     name: 'Source Codes',
     url: 'https://github.com/libersoft-org/realtime-console/archive/refs/heads/main.zip',
    },
    {
     name: 'GitHub page',
     url: 'https://github.com/libersoft-org/realtime-console/',
    },
   ],
  },
 ];
</script>

<h1>Download</h1>
<Table>
 <Thead>
  <TheadTr>
   <Th>Name</Th>
   <Th>Links</Th>
  </TheadTr>
 </Thead>
 <Tbody>
  {#each download as d}
   <TbodyTr>
    <Td><span class="bold">{d.name}</span></Td>
    <Td>
     {#each d.links as l}
      <BaseButton onClick={() => window.open(l.url, '_blank')}><div class="link">{l.name}</div></BaseButton>
     {/each}
    </Td>
   </TbodyTr>
  {/each}
 </Tbody>
</Table>

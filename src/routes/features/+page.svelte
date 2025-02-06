<script>
 import Table from '../../components/table.svelte';
 import Thead from '../../components/table-thead.svelte';
 import TheadTr from '../../components/table-thead-tr.svelte';
 import Th from '../../components/table-thead-th.svelte';
 import Tbody from '../../components/table-tbody.svelte';
 import TbodyTr from '../../components/table-tbody-tr.svelte';
 import Td from '../../components/table-tbody-td.svelte';
 const state = [
  {
   name: 'Not implemented',
   icon: 'no.svg',
  },
  {
   name: 'Fully implemented',
   icon: 'yes.svg',
  },
  {
   name: 'Partially implemented',
   icon: 'part.svg',
  },
 ];
 const core = [
  {
   name: 'AMTP protocol',
   implemented: 2,
  },
  {
   name: 'DMTP protocol',
   implemented: 0,
  },
  {
   name: 'Server - modularity',
   implemented: 1,
  },
  {
   name: 'Client - modularity',
   implemented: 0,
  },
  {
   name: 'Encrypted connection',
   implemented: 1,
  },
  {
   name: 'Client - encryption, signature and login keys management',
   implemented: 0,
  },
  {
   name: 'Client - end-to-end encryption',
   implemented: 0,
  },
  {
   name: 'Client - multilanguage support',
   implemented: 0,
  },
  {
   name: 'Web admin',
   implemented: 1,
  },
 ];
 const modules = [
  {
   name: 'Messages',
   features: [
    {
     name: 'One-on-one chat',
     implemented: 1,
    },
    {
     name: 'Group chat',
     implemented: 0,
    },
    {
     name: 'News groups',
     implemented: 0,
    },
    {
     name: 'Multipart messages',
     implemented: 1,
    },
    {
     name: 'File transfer - server stored',
     implemented: 1,
    },
    {
     name: 'File transfer - peer-to-peer',
     implemented: 1,
    },
    {
     name: 'Emojis',
     implemented: 1,
    },
    {
     name: 'Animated stickers',
     implemented: 1,
    },
    {
     name: 'Gifs',
     implemented: 1,
    },
    {
     name: 'Reactions',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
    {
     name: 'Contact blocking',
     implemented: 0,
    },
    {
     name: 'Chat topics',
     implemented: 0,
    },
    {
     name: 'Conversation groups (family, work etc.)',
     implemented: 0,
    },
    {
     name: 'Message translations',
     implemented: 0,
    },
    {
     name: 'Widgets',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Profiles',
   features: [
    {
     name: 'User info',
     implemented: 0,
    },
    {
     name: 'Image gallery',
     implemented: 0,
    },
    {
     name: 'Following',
     implemented: 0,
    },
    {
     name: 'Privacy settings',
     implemented: 0,
    },
    {
     name: 'Blocking',
     implemented: 0,
    },
    {
     name: 'Top public profiles',
     implemented: 0,
    },
    {
     name: 'Other modules content',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Contacts',
   features: [
    {
     name: 'Contact management',
     implemented: 0,
    },
    {
     name: 'Contact groups',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
    {
     name: 'Import and export',
     implemented: 0,
    },
    {
     name: 'Identity connection with phone numbers',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Calls',
   features: [
    {
     name: 'Audio calls',
     implemented: 0,
    },
    {
     name: 'Video calls',
     implemented: 0,
    },
    {
     name: 'Screen sharing and remote control',
     implemented: 0,
    },
    {
     name: 'Call history',
     implemented: 0,
    },
    {
     name: 'Call recording',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Conference',
   features: [
    {
     name: 'Conference calls',
     implemented: 0,
    },
    {
     name: 'Moderation',
     implemented: 0,
    },
    {
     name: 'Screen sharing and remote control',
     implemented: 0,
    },
    {
     name: 'Conference recording',
     implemented: 0,
    },
    {
     name: 'Chat and file sending',
     implemented: 0,
    },
    {
     name: 'Interconnection with callendar',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Wallet',
   features: [
    {
     name: 'Sending and receiving cryptocurrencies',
     implemented: 2,
    },
    {
     name: 'Multiple blockchain support (EVM compatible)',
     implemented: 1,
    },
    {
     name: 'Tokens',
     implemented: 0,
    },
    {
     name: 'NFTs',
     implemented: 0,
    },
    {
     name: 'Password protection',
     implemented: 0,
    },
    {
     name: 'Seed and key management',
     implemented: 1,
    },
    {
     name: 'Import and export',
     implemented: 0,
    },
    {
     name: 'Trezor HW wallet support',
     implemented: 0,
    },
    {
     name: 'Ledger HW wallet support',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Newsfeed and stories',
   features: [
    {
     name: 'Newsfeed posts management',
     implemented: 0,
    },
    {
     name: 'Comments',
     implemented: 0,
    },
    {
     name: 'Reactions',
     implemented: 0,
    },
    {
     name: 'Following',
     implemented: 0,
    },
    {
     name: 'Sharing',
     implemented: 0,
    },
    {
     name: 'Stories',
     implemented: 0,
    },
    {
     name: 'Top newsfeeds',
     implemented: 0,
    },
    {
     name: 'Other modules interconnectivity',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Video',
   features: [
    {
     name: 'Video channels',
     implemented: 0,
    },
    {
     name: 'Reels',
     implemented: 0,
    },
    {
     name: 'Live streams',
     implemented: 0,
    },
    {
     name: 'Following',
     implemented: 0,
    },
    {
     name: 'Top channels',
     implemented: 0,
    },
    {
     name: 'Donations',
     implemented: 0,
    },
    {
     name: 'Paid videos',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Events',
   features: [
    {
     name: 'Event management',
     implemented: 0,
    },
    {
     name: 'Comments',
     implemented: 0,
    },
    {
     name: 'Reactions',
     implemented: 0,
    },
    {
     name: 'Privacy settings',
     implemented: 0,
    },
    {
     name: 'Map',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
    {
     name: 'Top public events',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Forum',
   features: [
    {
     name: 'Forums, threads and posts',
     implemented: 0,
    },
    {
     name: 'Forum management for moderators',
     implemented: 0,
    },
    {
     name: 'Privacy settings',
     implemented: 0,
    },
    {
     name: 'Reactions',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
    {
     name: 'Top forums',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Map',
   features: [
    {
     name: 'World map',
     implemented: 0,
    },
    {
     name: 'Points of interest',
     implemented: 0,
    },
    {
     name: 'Own points of interests management',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
    {
     name: 'Top places',
     implemented: 0,
    },
   ],
  },
  {
   name: 'E-shops',
   features: [
    {
     name: 'Buy stuff',
     implemented: 0,
    },
    {
     name: 'Own e-shops management',
     implemented: 0,
    },
    {
     name: 'Top e-shops',
     implemented: 0,
    },
    {
     name: 'Rating',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Marketplace',
   features: [
    {
     name: 'Buy and sell stuff',
     implemented: 0,
    },
    {
     name: 'Auctions',
     implemented: 0,
    },
    {
     name: 'Filters and search',
     implemented: 0,
    },
    {
     name: 'Rating',
     implemented: 0,
    },
    {
     name: 'Escrow agents',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Donations',
   features: [
    {
     name: 'Sending donation',
     implemented: 0,
    },
    {
     name: 'Own donation campaigns management',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
    {
     name: 'Top donations',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Crowdfunding',
   features: [
    {
     name: 'Contribution in crowdfunding campaigns',
     implemented: 0,
    },
    {
     name: 'Own crowdfunding campaigns management',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
    {
     name: 'Top crowdfunding campaigns',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Calendar',
   features: [
    {
     name: 'Calendar management',
     implemented: 0,
    },
    {
     name: 'Privacy settings',
     implemented: 0,
    },
    {
     name: 'Calendar sharing',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Tasks',
   features: [
    {
     name: 'Dashboard and task management',
     implemented: 0,
    },
    {
     name: 'Comments',
     implemented: 0,
    },
    {
     name: 'Priorities',
     implemented: 0,
    },
    {
     name: 'Task sharing',
     implemented: 0,
    },
   ],
  },
  {
   name: 'File sharing',
   features: [
    {
     name: 'Download and upload to IPFS storage',
     implemented: 0,
    },
    {
     name: 'Audio and video player',
     implemented: 0,
    },
    {
     name: 'Categories',
     implemented: 0,
    },
    {
     name: 'Rating',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Virtual chat',
   features: [
    {
     name: 'Chat in virtual world',
     implemented: 0,
    },
    {
     name: 'Private places',
     implemented: 0,
    },
    {
     name: 'Character adjustment',
     implemented: 0,
    },
    {
     name: 'Interaction with items',
     implemented: 0,
    },
    {
     name: 'Blocking',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Dating',
   features: [
    {
     name: 'Profile with gallery',
     implemented: 0,
    },
    {
     name: 'Filters & user search',
     implemented: 0,
    },
    {
     name: 'Messages',
     implemented: 0,
    },
    {
     name: 'People nearby',
     implemented: 0,
    },
    {
     name: 'Match game',
     implemented: 0,
    },
    {
     name: 'Live map',
     implemented: 0,
    },
    {
     name: 'Contact management',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Games',
   features: [
    {
     name: 'Games list',
     implemented: 0,
    },
    {
     name: 'Games publishing',
     implemented: 0,
    },
    {
     name: 'Paid games sale',
     implemented: 0,
    },
    {
     name: 'Search',
     implemented: 0,
    },
   ],
  },
  {
   name: 'Media feed',
   features: [
    {
     name: 'News management',
     implemented: 0,
    },
   ],
  },
 ];
</script>

<style>
 h2 {
  border: 1px solid #da0;
  background-color: #fd1;
 }

 h3 {
  border: 1px solid #aa9;
  background-color: #ffe;
 }

 h2,
 h3 {
  padding: 10px;
  border-radius: 10px;
 }
 .icon {
  display: flex;
  justify-content: center;
 }

 .icon img {
  width: 20px;
  height: 20px;
 }

 .symbols {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #888;
  background-color: #ddd;
 }

 .symbols .item {
  display: flex;
  gap: 5px;
 }

 .symbols .item .image img {
  width: 20px;
  height: 20px;
 }
</style>

<h1>Software features</h1>

<h2>Symbol description</h2>
<div class="symbols">
 {#each state as s}
  <div class="item">
   <div class="image"><img src="img/{s.icon}" alt={s.name} /></div>
   <div class="description">{s.name}</div>
  </div>
 {/each}
</div>

<h2>Core</h2>
<Table>
 <Thead>
  <TheadTr>
   <Th>Feature</Th>
   <Th center={true}>Implemented</Th>
  </TheadTr>
 </Thead>
 <Tbody>
  {#each core as c}
   <TbodyTr>
    <Td><span class="bold">{c.name}</span></Td>
    <Td>
     <div class="icon">
      <img src="img/{state[c.implemented].icon}" alt={state[c.implemented].name} />
     </div>
    </Td>
   </TbodyTr>
  {/each}
 </Tbody>
</Table>

<h2>Modules</h2>
{#each modules as m}
 <h3>{m.name}</h3>
 <Table>
  <Thead>
   <TheadTr>
    <Th>Feature</Th>
    <Th center={true}>Implemented</Th>
   </TheadTr>
  </Thead>
  <Tbody>
   {#each m.features as f}
    <TbodyTr>
     <Td><span class="bold">{f.name}</span></Td>
     <Td>
      <div class="icon">
       <img src="img/{state[f.implemented].icon}" alt={state[f.implemented].name} />
      </div>
     </Td>
    </TbodyTr>
   {/each}
  </Tbody>
 </Table>
{/each}

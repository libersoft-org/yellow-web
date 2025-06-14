<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
	import { m } from '@paraglide/messages';

	function convertModulesToTables(modulesData, stateData) {
		return modulesData.map(module => {
			const headers = ['Feature', 'Status'];
			const rows = module.features.map(feature => {
				const statusIcon = getStatusIcon(feature.implemented, stateData);
				return {
					cells: [{ text: feature.name }, statusIcon],
				};
			});

			return {
				title: module.name,
				headers,
				rows,
			};
		});
	}

	function convertCoreToTable(coreData, stateData) {
		const headers = ['Feature', 'Status'];
		const rows = coreData.map(feature => {
			const statusIcon = getStatusIcon(feature.implemented, stateData);
			return {
				cells: [{ text: feature.name }, statusIcon],
			};
		});

		return {
			title: 'Core Features',
			headers,
			rows,
		};
	}

	function getStatusIcon(implemented, stateData) {
		switch (implemented) {
			case 0:
				return { iconStatus: 'error', icon: 'cross' };
			case 1:
				return { iconStatus: 'success', icon: 'check' };
			case 2:
				return { iconStatus: 'warning', icon: 'warning' };
			default:
				return { text: 'Unknown' };
		}
	}
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
			implemented: 2,
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
		{
			name: 'Public account registration',
			implemented: 0,
		},
		{
			name: 'Desktop app',
			implemented: 0,
		},
		{
			name: 'Mobile app',
			implemented: 0,
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

	const coreTable = convertCoreToTable(core, state);
	const moduleTables = convertModulesToTables(modules, state);
	const allTables = [coreTable, ...moduleTables];
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.features']()} backgroundImage="assets/images/hero-bg.png" />
	<div class="theme-container mx-auto py-10 md:py-20">
		{#each allTables as table, index}
			<div class={index > 0 ? 'mt-16' : ''}>
				<AppFeaturesComparisonTable title={table.title} subtitle="" headers={table.headers} rows={table.rows} buttonLabel="" buttonLink="" />
			</div>
		{/each}
	</div>
	<Footer />
</div>

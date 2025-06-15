<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
	import Icon from '@/theme/Icon/Icon.svelte';
	import { m } from '@paraglide/messages';

	function convertModulesToTables(modulesData, stateData) {
		return modulesData.map(module => {
			const headers = ['Feature', 'Status'].map(text => ({ text, isHeader: true }));
			const rows = module.features.map(feature => {
				const statusIcon = getStatusIcon(feature.implemented, stateData);
				return {
					cells: [{ text: feature.name, isHeader: true }, statusIcon],
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
		const headers = ['Feature', 'Status'].map(text => ({ text, isHeader: true }));
		const rows = coreData.map(feature => {
			const statusIcon = getStatusIcon(feature.implemented, stateData);
			return {
				cells: [{ text: feature.name, isHeader: true }, statusIcon],
			};
		});

		return {
			title: m['featuresTable.titles.core_features'](),
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

	const legendItems = [
		{ icon: 'cross', text: m['featuresTable.status1'](), colorClass: 'text-red-400' },
		{ icon: 'check', text: m['featuresTable.status2'](), colorClass: 'text-green-500' },
		{ icon: 'check', text: m['featuresTable.status3'](), colorClass: 'text-yellow-500' },
	];

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
			name: m['featuresTable.titles.messages'](),
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
			name: m['featuresTable.titles.profiles'](),
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
			name: m['featuresTable.titles.contacts'](),
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
			name: m['featuresTable.titles.calls'](),
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
			name: m['featuresTable.titles.conference'](),
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
			name: m['featuresTable.titles.wallet'](),
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
			name: m['featuresTable.titles.newsfeed_stories'](),
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
			name: m['featuresTable.titles.video'](),
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
			name: m['featuresTable.titles.events'](),
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
			name: m['featuresTable.titles.forum'](),
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
			name: m['featuresTable.titles.map'](),
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
			name: m['featuresTable.titles.eshops'](),
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
			name: m['featuresTable.titles.marketplace'](),
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
			name: m['featuresTable.titles.donations'](),
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
			name: m['featuresTable.titles.crowdfunding'](),
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
			name: m['featuresTable.titles.calendar'](),
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
			name: m['featuresTable.titles.tasks'](),
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
			name: m['featuresTable.titles.file_sharing'](),
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
			name: m['featuresTable.titles.virtual_chat'](),
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
			name: m['featuresTable.titles.dating'](),
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
			name: m['featuresTable.titles.games'](),
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
			name: m['featuresTable.titles.media'](),
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
	<div class="theme-container relative mx-auto py-10 md:py-20">
		<div class="text-center mb-10 max-w-[800px] mx-auto">{m['comparisonTable.disclaimer']()}</div>
		{#if allTables.length > 0}
			<div class="flex flex-col gap-8">
				<div class="flex justify-center flex-wrap gap-4">
					{#each legendItems as item}
						<div class="flex items-center gap-2">
							<div class="flex items-center justify-center">
								<Icon name={item.icon} class={item.colorClass} size="sm" mdSize="xl" />
							</div>
							<span class="text-themeGray-600 text-xs">{item.text}</span>
						</div>
					{/each}
				</div>
				{#each allTables as table}
					<AppFeaturesComparisonTable title={table.title} subtitle="" headers={table.headers} rows={table.rows} buttonLabel="" buttonLink="" isCollapsible={false} showMaxHeight={false} />
				{/each}
			</div>
		{/if}
	</div>

	<Footer />
</div>

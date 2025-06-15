<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
	import { m } from '$lib/i18n/index.svelte.js';
	import Icon from '@/theme/Icon/Icon.svelte';

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
			title: m['featuresTable.core.title'],
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
		{ icon: 'cross', text: m['featuresTable.status1'], colorClass: 'text-red-400' },
		{ icon: 'check', text: m['featuresTable.status2'], colorClass: 'text-green-500' },
		{ icon: 'check', text: m['featuresTable.status3'], colorClass: 'text-yellow-500' },
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
	// Make data reactive by using $derived
	const core = $derived([
		{
			name: m['featuresTable.core.items.amtp'],
			implemented: 2,
		},
		{
			name: m['featuresTable.core.items.dmtp'],
			implemented: 0,
		},
		{
			name: m['featuresTable.core.items.server_modularity'],
			implemented: 1,
		},
		{
			name: m['featuresTable.core.items.client_modularity'],
			implemented: 2,
		},
		{
			name: m['featuresTable.core.items.encrypted_connection'],
			implemented: 1,
		},
		{
			name: m['featuresTable.core.items.client_encryption'],
			implemented: 0,
		},
		{
			name: m['featuresTable.core.items.client_e2e'],
			implemented: 0,
		},
		{
			name: m['featuresTable.core.items.client_multilanguage'],
			implemented: 0,
		},
		{
			name: m['featuresTable.core.items.web_admin'],
			implemented: 1,
		},
		{
			name: m['featuresTable.core.items.public_registration'],
			implemented: 0,
		},
		{
			name: m['featuresTable.core.items.desktop_app'],
			implemented: 2,
		},
		{
			name: m['featuresTable.core.items.mobile_app'],
			implemented: 2,
		},
	]);
	const modules = $derived([
		{
			name: m['featuresTable.messages.title'],
			features: [
				{
					name: m['featuresTable.messages.items.one_on_one'],
					implemented: 1,
				},
				{
					name: m['featuresTable.messages.items.group_chat'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.news'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.multipart'],
					implemented: 1,
				},
				{
					name: m['featuresTable.messages.items.file_server'],
					implemented: 1,
				},
				{
					name: m['featuresTable.messages.items.file_p2p'],
					implemented: 1,
				},
				{
					name: m['featuresTable.messages.items.emojis'],
					implemented: 1,
				},
				{
					name: m['featuresTable.messages.items.stickers'],
					implemented: 1,
				},
				{
					name: m['featuresTable.messages.items.gifs'],
					implemented: 1,
				},
				{
					name: m['featuresTable.messages.items.reactions'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.search'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.block'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.topics'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.conversation_groups'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.translations'],
					implemented: 0,
				},
				{
					name: m['featuresTable.messages.items.widgets'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.profiles.title'],
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
			name: m['featuresTable.contacts.title'],
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
			name: m['featuresTable.calls.title'],
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
			name: m['featuresTable.conference.title'],
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
			name: m['featuresTable.wallet.title'],
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
			name: m['featuresTable.newsfeed_stories.title'],
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
			name: m['featuresTable.video.title'],
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
			name: m['featuresTable.events.title'],
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
			name: m['featuresTable.forum.title'],
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
			name: m['featuresTable.map.title'],
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
			name: m['featuresTable.eshops.title'],
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
			name: m['featuresTable.marketplace.title'],
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
			name: m['featuresTable.donations.title'],
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
			name: m['featuresTable.crowdfunding.title'],
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
			name: m['featuresTable.calendar.title'],
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
			name: m['featuresTable.tasks.title'],
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
			name: m['featuresTable.file_sharing.title'],
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
			name: m['featuresTable.virtual_chat.title'],
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
			name: m['featuresTable.dating.title'],
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
			name: m['featuresTable.games.title'],
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
			name: m['featuresTable.media.title'],
			features: [
				{
					name: 'News management',
					implemented: 0,
				},
			],
		},
	]);

	// Use $derived to make these reactive
	const coreTable = $derived(convertCoreToTable(core, state));
	const moduleTables = $derived(convertModulesToTables(modules, state));
	const allTables = $derived([coreTable, ...moduleTables]);
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.features']} backgroundImage="assets/images/hero-bg.png" />
	<div class="theme-container relative mx-auto py-10 md:py-20">
		<div class="text-center mb-10 max-w-[800px] mx-auto">{m['comparisonTable.disclaimer']}</div>
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

<script lang="ts">
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
	import { m } from '$lib/i18n/index.svelte';
	import Icon from '@/theme/Icon/Icon.svelte';

	interface Feature {
		name: string;
		implemented: number;
	}

	interface Module {
		name: string;
		features: Feature[];
	}

	interface StateItem {
		name: string;
		icon: string;
	}

	type StateData = StateItem[];

	interface Cell {
		text?: string;
		isHeader?: boolean;
		iconStatus?: 'success' | 'error' | 'warning';
		icon?: string;
	}

	interface Row {
		cells: Cell[];
	}

	interface TableData {
		title: string;
		headers: Cell[];
		rows: Row[];
	}

	function convertModulesToTables(modulesData: Module[]): TableData[] {
		return modulesData.map(module => {
			const headers = [m['featuresTable.table_headers.feature'], m['featuresTable.table_headers.status']].map(text => ({ text, isHeader: true }));
			const rows = module.features.map(feature => {
				const statusIcon = getStatusIcon(feature.implemented);
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

	function convertCoreToTable(coreData: Feature[]): TableData {
		const headers = [m['featuresTable.table_headers.feature'], m['featuresTable.table_headers.status']].map(text => ({ text, isHeader: true }));
		const rows = coreData.map(feature => {
			const statusIcon = getStatusIcon(feature.implemented);
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

	function getStatusIcon(implemented: number): Cell {
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

	const legendItems = $derived([
		{ icon: 'cross', text: m['featuresTable.status1'], colorClass: 'text-red-400' },
		{ icon: 'check', text: m['featuresTable.status2'], colorClass: 'text-green-500' },
		{ icon: 'check', text: m['featuresTable.status3'], colorClass: 'text-yellow-500' },
	]);

	const state = $derived([
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
	]);
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
					implemented: 1,
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
					name: m['featuresTable.profiles.items.user_info'],
					implemented: 0,
				},
				{
					name: m['featuresTable.profiles.items.gallery'],
					implemented: 0,
				},
				{
					name: m['featuresTable.profiles.items.follow'],
					implemented: 0,
				},
				{
					name: m['featuresTable.profiles.items.privacy'],
					implemented: 0,
				},
				{
					name: m['featuresTable.profiles.items.blocking'],
					implemented: 0,
				},
				{
					name: m['featuresTable.profiles.items.top_profiles'],
					implemented: 0,
				},
				{
					name: m['featuresTable.profiles.items.modules'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.contacts.title'],
			features: [
				{
					name: m['featuresTable.contacts.items.management'],
					implemented: 0,
				},
				{
					name: m['featuresTable.contacts.items.groups'],
					implemented: 0,
				},
				{
					name: m['featuresTable.contacts.items.search'],
					implemented: 0,
				},
				{
					name: m['featuresTable.contacts.items.import_export'],
					implemented: 0,
				},
				{
					name: m['featuresTable.contacts.items.phone_numbers'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.calls.title'],
			features: [
				{
					name: m['featuresTable.calls.items.audio'],
					implemented: 0,
				},
				{
					name: m['featuresTable.calls.items.video'],
					implemented: 0,
				},
				{
					name: m['featuresTable.calls.items.screen_sharing'],
					implemented: 0,
				},
				{
					name: m['featuresTable.calls.items.history'],
					implemented: 0,
				},
				{
					name: m['featuresTable.calls.items.recording'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.conference.title'],
			features: [
				{
					name: m['featuresTable.conference.items.calls'],
					implemented: 0,
				},
				{
					name: m['featuresTable.conference.items.moderation'],
					implemented: 0,
				},
				{
					name: m['featuresTable.conference.items.screen_sharing'],
					implemented: 0,
				},
				{
					name: m['featuresTable.conference.items.recording'],
					implemented: 0,
				},
				{
					name: m['featuresTable.conference.items.chat_file'],
					implemented: 0,
				},
				{
					name: m['featuresTable.conference.items.calendar'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.wallet.title'],
			features: [
				{
					name: m['featuresTable.wallet.items.sending_receiving'],
					implemented: 1,
				},
				{
					name: m['featuresTable.wallet.items.blockchains'],
					implemented: 1,
				},
				{
					name: m['featuresTable.wallet.items.tokens'],
					implemented: 1,
				},
				{
					name: m['featuresTable.wallet.items.nfts'],
					implemented: 1,
				},
				{
					name: m['featuresTable.wallet.items.password'],
					implemented: 0,
				},
				{
					name: m['featuresTable.wallet.items.seed'],
					implemented: 1,
				},
				{
					name: m['featuresTable.wallet.items.import_export'],
					implemented: 1,
				},
				{
					name: m['featuresTable.wallet.items.trezor'],
					implemented: 1,
				},
				{
					name: m['featuresTable.wallet.items.ledger'],
					implemented: 1,
				},
			],
		},
		{
			name: m['featuresTable.newsfeed_stories.title'],
			features: [
				{
					name: m['featuresTable.newsfeed_stories.items.newsfeed'],
					implemented: 0,
				},
				{
					name: m['featuresTable.newsfeed_stories.items.comments'],
					implemented: 0,
				},
				{
					name: m['featuresTable.newsfeed_stories.items.reactions'],
					implemented: 0,
				},
				{
					name: m['featuresTable.newsfeed_stories.items.follow'],
					implemented: 0,
				},
				{
					name: m['featuresTable.newsfeed_stories.items.sharing'],
					implemented: 0,
				},
				{
					name: m['featuresTable.newsfeed_stories.items.stories'],
					implemented: 0,
				},
				{
					name: m['featuresTable.newsfeed_stories.items.top'],
					implemented: 0,
				},
				{
					name: m['featuresTable.newsfeed_stories.items.other_modules'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.video.title'],
			features: [
				{
					name: m['featuresTable.video.items.channels'],
					implemented: 0,
				},
				{
					name: m['featuresTable.video.items.reels'],
					implemented: 0,
				},
				{
					name: m['featuresTable.video.items.streams'],
					implemented: 0,
				},
				{
					name: m['featuresTable.video.items.follow'],
					implemented: 0,
				},
				{
					name: m['featuresTable.video.items.top'],
					implemented: 0,
				},
				{
					name: m['featuresTable.video.items.donations'],
					implemented: 0,
				},
				{
					name: m['featuresTable.video.items.paid'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.events.title'],
			features: [
				{
					name: m['featuresTable.events.items.management'],
					implemented: 0,
				},
				{
					name: m['featuresTable.events.items.comments'],
					implemented: 0,
				},
				{
					name: m['featuresTable.events.items.reactions'],
					implemented: 0,
				},
				{
					name: m['featuresTable.events.items.privacy'],
					implemented: 0,
				},
				{
					name: m['featuresTable.events.items.map'],
					implemented: 0,
				},
				{
					name: m['featuresTable.events.items.search'],
					implemented: 0,
				},
				{
					name: m['featuresTable.events.items.top'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.forum.title'],
			features: [
				{
					name: m['featuresTable.forum.items.forums'],
					implemented: 0,
				},
				{
					name: m['featuresTable.forum.items.management'],
					implemented: 0,
				},
				{
					name: m['featuresTable.forum.items.privacy'],
					implemented: 0,
				},
				{
					name: m['featuresTable.forum.items.reactions'],
					implemented: 0,
				},
				{
					name: m['featuresTable.forum.items.search'],
					implemented: 0,
				},
				{
					name: m['featuresTable.forum.items.top'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.map.title'],
			features: [
				{
					name: m['featuresTable.map.items.world'],
					implemented: 0,
				},
				{
					name: m['featuresTable.map.items.points'],
					implemented: 0,
				},
				{
					name: m['featuresTable.map.items.own_points'],
					implemented: 0,
				},
				{
					name: m['featuresTable.map.items.search'],
					implemented: 0,
				},
				{
					name: m['featuresTable.map.items.top'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.eshops.title'],
			features: [
				{
					name: m['featuresTable.eshops.items.buy'],
					implemented: 0,
				},
				{
					name: m['featuresTable.eshops.items.management'],
					implemented: 0,
				},
				{
					name: m['featuresTable.eshops.items.top'],
					implemented: 0,
				},
				{
					name: m['featuresTable.eshops.items.rating'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.marketplace.title'],
			features: [
				{
					name: m['featuresTable.marketplace.items.buy_sell'],
					implemented: 0,
				},
				{
					name: m['featuresTable.marketplace.items.auctions'],
					implemented: 0,
				},
				{
					name: m['featuresTable.marketplace.items.filters'],
					implemented: 0,
				},
				{
					name: m['featuresTable.marketplace.items.rating'],
					implemented: 0,
				},
				{
					name: m['featuresTable.marketplace.items.escrow'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.donations.title'],
			features: [
				{
					name: m['featuresTable.donations.items.send'],
					implemented: 0,
				},
				{
					name: m['featuresTable.donations.items.management'],
					implemented: 0,
				},
				{
					name: m['featuresTable.donations.items.search'],
					implemented: 0,
				},
				{
					name: m['featuresTable.donations.items.top'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.crowdfunding.title'],
			features: [
				{
					name: m['featuresTable.crowdfunding.items.contribution'],
					implemented: 0,
				},
				{
					name: m['featuresTable.crowdfunding.items.management'],
					implemented: 0,
				},
				{
					name: m['featuresTable.crowdfunding.items.search'],
					implemented: 0,
				},
				{
					name: m['featuresTable.crowdfunding.items.top'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.calendar.title'],
			features: [
				{
					name: m['featuresTable.calendar.items.management'],
					implemented: 0,
				},
				{
					name: m['featuresTable.calendar.items.privacy'],
					implemented: 0,
				},
				{
					name: m['featuresTable.calendar.items.sharing'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.tasks.title'],
			features: [
				{
					name: m['featuresTable.tasks.items.dashboard'],
					implemented: 0,
				},
				{
					name: m['featuresTable.tasks.items.comments'],
					implemented: 0,
				},
				{
					name: m['featuresTable.tasks.items.priorities'],
					implemented: 0,
				},
				{
					name: m['featuresTable.tasks.items.sharing'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.file_sharing.title'],
			features: [
				{
					name: m['featuresTable.file_sharing.items.download_upload'],
					implemented: 0,
				},
				{
					name: m['featuresTable.file_sharing.items.player'],
					implemented: 0,
				},
				{
					name: m['featuresTable.file_sharing.items.categories'],
					implemented: 0,
				},
				{
					name: m['featuresTable.file_sharing.items.rating'],
					implemented: 0,
				},
				{
					name: m['featuresTable.file_sharing.items.search'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.virtual_chat.title'],
			features: [
				{
					name: m['featuresTable.virtual_chat.items.chat'],
					implemented: 0,
				},
				{
					name: m['featuresTable.virtual_chat.items.places'],
					implemented: 0,
				},
				{
					name: m['featuresTable.virtual_chat.items.character'],
					implemented: 0,
				},
				{
					name: m['featuresTable.virtual_chat.items.interaction'],
					implemented: 0,
				},
				{
					name: m['featuresTable.virtual_chat.items.blocking'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.dating.title'],
			features: [
				{
					name: m['featuresTable.dating.items.profile'],
					implemented: 0,
				},
				{
					name: m['featuresTable.dating.items.filters'],
					implemented: 0,
				},
				{
					name: m['featuresTable.dating.items.people'],
					implemented: 0,
				},
				{
					name: m['featuresTable.dating.items.match'],
					implemented: 0,
				},
				{
					name: m['featuresTable.dating.items.map'],
					implemented: 0,
				},
				{
					name: m['featuresTable.dating.items.contacts'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.games.title'],
			features: [
				{
					name: m['featuresTable.games.items.list'],
					implemented: 0,
				},
				{
					name: m['featuresTable.games.items.publishing'],
					implemented: 0,
				},
				{
					name: m['featuresTable.games.items.paid'],
					implemented: 0,
				},
				{
					name: m['featuresTable.games.items.search'],
					implemented: 0,
				},
			],
		},
		{
			name: m['featuresTable.media.title'],
			features: [
				{
					name: m['featuresTable.media.items.list'],
					implemented: 0,
				},
				{
					name: m['featuresTable.media.items.management'],
					implemented: 0,
				},
			],
		},
	]);

	// Use $derived to make these reactive
	const coreTable = $derived(convertCoreToTable(core));
	const moduleTables = $derived(convertModulesToTables(modules));
	const allTables = $derived([coreTable, ...moduleTables]);
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.features']} />
	<div class="theme-container relative mx-auto py-10 md:py-20">
		<div class="text-center mb-10 max-w-[800px] mx-auto">{m['comparisonTable.disclaimer']}</div>
		{#if allTables.length > 0}
			<div class="flex flex-col">
				<div class="flex justify-center flex-wrap gap-4 mb-5">
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
					<AppFeaturesComparisonTable title={table.title} subtitle="" headers={table.headers.map(h => h.text || '')} rows={table.rows} buttonLabel="" buttonLink="" isCollapsible={false} showMaxHeight={false} showMargins={false} />
				{/each}
			</div>
		{/if}
	</div>

	<Footer />
</div>

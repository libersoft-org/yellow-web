<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
	import { m } from '$lib/i18n/index.svelte.js';

	function convertComparisonData(comparisonSections) {
		return comparisonSections.map(section => {
			const headers = ['Software', ...section.columns];
			const rows = Object.entries(section.rows).map(([software, values]) => {
				const cells = [{ text: software, isHeader: true }, ...values.map(value => convertValueToCell(value))];
				return { cells };
			});

			return {
				title: section.title,
				headers,
				rows,
			};
		});
	}

	function convertValueToCell(value) {
		if (value === 1) return { iconStatus: 'success', icon: 'check' };
		else if (value === 0) return { iconStatus: 'error', icon: 'cross' };
		else return { text: String(value) };
	}
	const comparison = [
		{
			title: m['comparisonTable.headers.transparency.title'],
			columns: [m['comparisonTable.headers.transparency.columns.open'], m['comparisonTable.headers.transparency.columns.decentralization'], m['comparisonTable.headers.transparency.columns.e2e'], m['comparisonTable.headers.transparency.columns.developed_by']],
			rows: {
				Yellow: [1, 1, 1, 'LiberSoft, Liberland'],
				'E-mail': [m['comparisonTable.table_description.some_software'], 1, m['comparisonTable.table_description.some_software'], 'Jon Postel, Suzanne Sluizer, USA'],
				WhatsApp: [0, 0, 1, 'Meta Platforms Inc., USA'],
				'Messages (RCS)': [0, m['comparisonTable.table_description.mobile_operators'], 1, 'Google LLC, USA / GSM Association, UK'],
				WeChat: [0, 0, 0, 'Tencent Holdings Ltd., China'],
				'Facebook Messenger': [0, 0, 0, 'Meta Platforms Inc., USA'],
				Telegram: [m['comparisonTable.table_description.client_apps_only'], 0, m['comparisonTable.table_description.optional'], 'Telegram Group, UK'],
				QQ: [0, 0, 0, 'Tencent Holdings Ltd., China'],
				iMessage: [0, 0, 1, 'Apple Inc., USA'],
				SnapChat: [0, 0, 0, 'Snap Inc., USA'],
				Kik: [0, 0, 0, 'MediaLab AI Inc., France'],
				Discord: [0, 0, 0, 'Discord Inc., USA'],
				Viber: [0, 0, 1, 'Rakuten, Japan'],
				imo: [0, 0, m['comparisonTable.table_description.optional'], 'PageBites Inc., USA'],
				LINE: [0, 0, 1, 'Line Corporation, Japan'],
				Zalo: [0, 0, 0, 'Zalo Group, Vietnam'],
				KakaoTalk: [0, 0, m['comparisonTable.table_description.optional'], 'Kakao Corp., South Korea'],
				Signal: [1, 0, 1, 'Signal Foundation, USA'],
				Threema: [m['comparisonTable.table_description.client_apps_only'], 0, 1, 'Threema GmbH, Switzerland'],
				'Element (Matrix protocol)': [1, 1, 1, 'The Matrix.org Foundation CIC, UK'],
			},
		},
		{
			title: m['comparisonTable.headers.messaging.title'],
			columns: [m['comparisonTable.headers.messaging.columns.im'], m['comparisonTable.headers.messaging.columns.rich'], m['comparisonTable.headers.messaging.columns.multipart'], m['comparisonTable.headers.messaging.columns.templates'], m['comparisonTable.headers.messaging.columns.translations'], m['comparisonTable.headers.messaging.columns.audio'], m['comparisonTable.headers.messaging.columns.video']],
			rows: {
				Yellow: [1, 1, 1, 1, 1, 1, 1],
				'E-mail': [0, 1, 1, m['comparisonTable.table_description.some_software'], 0, 0, 0],
				WhatsApp: [1, 0, 0, 0, 0, 1, 1],
				Telegram: [1, 0, 0, 0, 0, 1, 1],
				SnapChat: [1, 0, 0, 0, 0, 1, 1],
				Signal: [1, 0, 0, 0, 0, 1, 0],
				Element: [1, 0, 0, 0, 0, 1, 0],
				Facebook: [1, 0, 0, 0, 1, 1, 0],
				Instagram: [1, 0, 0, 0, 0, 1, 0],
				YouTube: [0, 0, 0, 0, 0, 0, 0],
				TikTok: [1, 0, 0, 0, 0, 0, 0],
			},
		},
		{
			title: m['comparisonTable.headers.storage.title'],
			columns: [m['comparisonTable.headers.storage.columns.large_files'], m['comparisonTable.headers.storage.columns.p2p'], m['comparisonTable.headers.storage.columns.sharing']],
			rows: {
				Yellow: [1, 1, 1],
				'E-mail': [0, 0, 0],
				WhatsApp: [0, 0, 0],
				Telegram: [m['comparisonTable.table_description.2gb'], 0, 0],
				SnapChat: [0, 0, 0],
				Signal: [0, 0, 0],
				Element: [0, 0, 0],
				Facebook: [0, 0, 0],
				Instagram: [0, 0, 0],
				YouTube: [0, 0, 0],
				TikTok: [0, 0, 0],
			},
		},
		{
			title: m['comparisonTable.headers.telephony.title'],
			columns: [m['comparisonTable.headers.telephony.columns.audio'], m['comparisonTable.headers.telephony.columns.video_calls'], m['comparisonTable.headers.telephony.columns.video_conference']],
			rows: {
				Yellow: [1, 1, 1],
				'E-mail': [0, 0, 0],
				WhatsApp: [1, 1, m['comparisonTable.table_description.group_calls']],
				Telegram: [1, 1, m['comparisonTable.table_description.group_calls']],
				SnapChat: [1, 1, m['comparisonTable.table_description.group_calls']],
				Signal: [1, 1, m['comparisonTable.table_description.group_calls']],
				Element: [1, 1, m['comparisonTable.table_description.group_calls']],
				Facebook: [1, 1, m['comparisonTable.table_description.group_calls']],
				Instagram: [1, 1, m['comparisonTable.table_description.group_calls']],
				YouTube: [0, 0, 0],
				TikTok: [0, 0, 0],
			},
		},
		{
			title: m['comparisonTable.headers.social.title'],
			columns: [m['comparisonTable.headers.social.columns.newsfeed'], m['comparisonTable.headers.social.columns.stories'], m['comparisonTable.headers.social.columns.forum'], m['comparisonTable.headers.social.columns.events']],
			rows: {
				Yellow: [1, 1, 1, 1],
				'E-mail': [0, 0, 0, 0],
				WhatsApp: [0, 1, 0, 0],
				Telegram: [0, 1, 0, 0],
				SnapChat: [0, 1, 0, 0],
				Signal: [0, 0, 0, 0],
				Element: [0, 0, 1, 0],
				Facebook: [1, 1, 0, 1],
				Instagram: [m['comparisonTable.table_description.images_only'], 1, 0, 0],
				YouTube: [m['comparisonTable.table_description.video_only'], 0, 0, 0],
				TikTok: [0, 0, 0, 0],
			},
		},
		{
			title: m['comparisonTable.headers.video.title'],
			columns: [m['comparisonTable.headers.video.columns.channels'], m['comparisonTable.headers.video.columns.reels'], m['comparisonTable.headers.video.columns.live'], m['comparisonTable.headers.video.columns.paid']],
			rows: {
				Yellow: [1, 1, 1, 1],
				'E-mail': [0, 0, 0, 0],
				WhatsApp: [0, 0, 0, 0],
				Telegram: [0, 0, 0, 0],
				SnapChat: [0, 1, 0, 0],
				Signal: [0, 0, 0, 0],
				Element: [0, 0, 0, 0],
				Facebook: [1, 1, 1, 0],
				Instagram: [0, 1, 1, 0],
				YouTube: [1, 1, 1, 1],
				TikTok: [0, 1, 1, 0],
			},
		},
		{
			title: m['comparisonTable.headers.ecommerce.title'],
			columns: [m['comparisonTable.headers.ecommerce.columns.marketplace'], m['comparisonTable.headers.ecommerce.columns.auctions'], m['comparisonTable.headers.ecommerce.columns.eshops'], m['comparisonTable.headers.ecommerce.columns.food'], m['comparisonTable.headers.ecommerce.columns.donations'], m['comparisonTable.headers.ecommerce.columns.crowdfunding'], m['comparisonTable.headers.ecommerce.columns.payments']],
			rows: {
				Yellow: [1, 1, 1, 1, 1, 1, 1],
				'E-mail': [0, 0, 0, 0, 0, 0, 0],
				WhatsApp: [0, 0, 0, 0, 0, 0, 0],
				Telegram: [0, 0, 0, 0, 0, 0, 0],
				SnapChat: [0, 0, 0, 0, 0, 0, 0],
				Signal: [0, 0, 0, 0, 0, 0, 0],
				Element: [0, 0, 0, 0, 0, 0, 0],
				Facebook: [1, 0, 0, 0, m['comparisonTable.table_description.charities'], 0, 0],
				Instagram: [0, 0, 0, 0, 0, 0, 0],
				YouTube: [0, 0, 0, 0, 0, 0, 0],
				TikTok: [0, 0, 0, 0, 0, 0, 0],
			},
		},
		{
			title: m['comparisonTable.headers.business.title'],
			columns: [m['comparisonTable.headers.business.columns.calendar'], m['comparisonTable.headers.business.columns.tasks']],
			rows: {
				Yellow: [1, 1],
				'E-mail': [m['comparisonTable.table_description.some_software'], m['comparisonTable.table_description.some_software']],
				WhatsApp: [0, 0],
				Telegram: [0, 0],
				SnapChat: [0, 0],
				Signal: [0, 0],
				Element: [0, 0],
				Facebook: [0, 0],
				Instagram: [0, 0],
				YouTube: [0, 0],
				TikTok: [0, 0],
			},
		},
		{
			title: m['comparisonTable.headers.other.title'],
			columns: [m['comparisonTable.headers.other.columns.media'], m['comparisonTable.headers.other.columns.maps'], m['comparisonTable.headers.other.columns.dating'], m['comparisonTable.headers.other.columns.games']],
			rows: {
				Yellow: [1, 1, 1, 1],
				'E-mail': [0, 0, 0, 0],
				WhatsApp: [0, 0, 0, 0],
				Telegram: [0, 0, 0, 0],
				SnapChat: [0, 1, 0, 1],
				Signal: [0, 0, 0, 0],
				Element: [0, 0, 0, 0],
				Facebook: [0, 0, 1, 1],
				Instagram: [0, 0, 0, 0],
				YouTube: [0, 0, 0, 0],
				TikTok: [0, 0, 0, 0],
			},
		},
	];

	const convertedSections = convertComparisonData(comparison);
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.comparison']} />
	<div class="theme-container mx-auto py-10 md:py-20">
		<div class="text-center mb-10">{m['comparisonTable.disclaimer']}</div>
		<div class="flex flex-col">
			{#each convertedSections as section}
				<AppFeaturesComparisonTable title={section.title} subtitle="" headers={section.headers} rows={section.rows} buttonLabel="" buttonLink="" showMaxHeight={false} showMargins={false} />
			{/each}
		</div>
	</div>

	<Footer />
</div>

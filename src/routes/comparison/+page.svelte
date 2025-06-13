<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import AppFeaturesComparisonTable from '@/components/AppFeaturesComparisonTable/AppFeaturesComparisonTable.svelte';
	import { m } from '@paraglide/messages';

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
		if (value === 1) {
			return { iconStatus: 'success', icon: 'check' };
		} else if (value === 0) {
			return { iconStatus: 'error', icon: 'cross' };
		} else {
			return { text: String(value) };
		}
	}
	const comparison = [
		{
			title: 'Transparency, network and security',
			columns: ['Open source', 'Distributed / decentralized', 'End-to-end encryption', 'Developed by'],
			rows: {
				Yellow: [1, 1, 1, 'LiberSoft, Liberland'],
				'E-mail': ['some software', 1, 'some software', 'Jon Postel and Suzanne Sluizer, USA'],
				WhatsApp: [0, 0, 1, 'Meta Platforms Inc., USA'],
				'Messages (RCS protocol)': [0, 'mobile operators only', 'in development', 'Google LLC, USA / GSM Association, UK'],
				WeChat: [0, 0, 0, 'Tencent Holdings Ltd., China'],
				'Facebook Messenger': [0, 0, 0, 'Meta Platforms Inc., USA'],
				Telegram: ['client apps only', 0, 'optional', 'Telegram Group, UK'],
				QQ: [0, 0, 0, 'Tencent Holdings Ltd., China'],
				iMessage: [0, 0, 1, 'Apple Inc., USA'],
				SnapChat: [0, 0, 'snaps only', 'Snap Inc., USA'],
				Kik: [0, 0, 0, 'MediaLab AI Inc., France'],
				Discord: [0, 0, 0, 'Discord Inc., USA'],
				Viber: [0, 0, 1, 'Rakuten, Japan'],
				imo: [0, 0, 'optional', 'PageBites Inc., USA'],
				LINE: [0, 0, 1, 'Line Corporation, Japan'],
				Zalo: [0, 0, 0, 'Zalo Group, Vietnam'],
				KakaoTalk: [0, 0, 'optional', 'Kakao Corp., South Korea'],
				Signal: [1, 0, 1, 'Signal Foundation, USA'],
				Threema: ['client apps only', 0, 1, 'Threema GmbH, Switzerland'],
				'Element (Matrix protocol)': [1, 1, 1, 'The Matrix.org Foundation CIC, UK'],
			},
		},
		{
			title: 'Instant messaging',
			columns: ['Instant messages', 'Rich text', 'Multipart messages', 'Templates', 'Translations', 'Voice messages', 'Video messages'],
			rows: {
				Yellow: [1, 1, 1, 1, 1, 1, 1],
				'E-mail': [0, 1, 1, 'Thunderbird extension', 0, 0, 0],
				WhatsApp: [1, 0, 0, 0, 0, 1, 1],
				Telegram: [1, 0, 0, 0, 0, 1, 1],
				SnapChat: [1, 0, 0, 0, 0, 1, 'Snaps'],
				Signal: [1, 0, 0, 0, 0, 1, 0],
				Element: [1, 0, 0, 0, 0, 1, 0],
				Facebook: [1, 0, 0, 0, 'In newsfeed only', 1, 0],
				Instagram: [1, 0, 0, 0, 0, 1, 0],
				YouTube: [0, 0, 0, 0, 0, 0, 0],
				TikTok: [1, 0, 0, 0, 0, 0, 0],
			},
		},
		{
			title: 'Data storage and file transfer',
			columns: ['Large files', 'Peer-to-peer transfer', 'File sharing'],
			rows: {
				Yellow: [1, 1, 1],
				'E-mail': [0, 0, 0],
				WhatsApp: [0, 0, 0],
				Telegram: ['2 GB free / 4 GB premium', 0, 0],
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
			title: 'Telephony',
			columns: ['Audio calls', 'Video calls', 'Video conference'],
			rows: {
				Yellow: [1, 1, 1],
				'E-mail': [0, 0, 0],
				WhatsApp: [1, 1, 'Group calls'],
				Telegram: [1, 1, 'Group calls'],
				SnapChat: [1, 1, 'Group calls'],
				Signal: [1, 1, 'Group calls'],
				Element: [1, 1, 'Group calls'],
				Facebook: [1, 1, 'Group calls'],
				Instagram: [1, 1, 'Group calls'],
				YouTube: [0, 0, 0],
				TikTok: [0, 0, 0],
			},
		},
		{
			title: 'Social media',
			columns: ['News feed', 'Stories', 'Forum', 'Events'],
			rows: {
				Yellow: [1, 1, 1, 1],
				'E-mail': [0, 0, 0, 0],
				WhatsApp: [0, 1, 0, 0],
				Telegram: [0, 1, 0, 0],
				SnapChat: [0, 1, 0, 0],
				Signal: [0, 0, 0, 0],
				Element: [0, 0, 1, 0],
				Facebook: [1, 1, 0, 1],
				Instagram: ['Images only', 1, 0, 0],
				YouTube: ['Video only', 0, 0, 0],
				TikTok: [0, 0, 0, 0],
			},
		},
		{
			title: 'Video',
			columns: ['Channels', 'Reels', 'Live streams', 'Paid video'],
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
				YouTube: [1, 1, 'Big channels only', 1],
				TikTok: [0, 1, 1, 0],
			},
		},
		{
			title: 'E-commerce',
			columns: ['Marketplace', 'Auctions', 'E-shops', 'Food Delivery', 'Donations', 'Crowdfunding', 'Crypto payments'],
			rows: {
				Yellow: [1, 1, 1, 1, 1, 1, 1],
				'E-mail': [0, 0, 0, 0, 0, 0, 0],
				WhatsApp: [0, 0, 0, 0, 0, 0, 0],
				Telegram: [0, 0, 0, 'Durger King template', 0, 0, 0],
				SnapChat: [0, 0, 0, 0, 0, 0, 0],
				Signal: [0, 0, 0, 0, 0, 0, 0],
				Element: [0, 0, 0, 0, 0, 0, 0],
				Facebook: [1, 0, 0, 0, 'Selected charities only', 0, 0],
				Instagram: [0, 0, 0, 0, 0, 0, 0],
				YouTube: [0, 0, 0, 0, 0, 0, 0],
				TikTok: [0, 0, 0, 0, 0, 0, 0],
			},
		},
		{
			title: 'Business tools',
			columns: ['Calendar', 'Tasks'],
			rows: {
				Yellow: [1, 1],
				'E-mail': ['Some software', 'Some software'],
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
			title: 'Other',
			columns: ['Media feed', 'Maps', 'Dating', 'Games'],
			rows: {
				Yellow: [1, 1, 1, 1],
				'E-mail': [0, 0, 0, 0],
				WhatsApp: [0, 0, 0, 0],
				Telegram: [0, 0, 0, 0],
				SnapChat: [0, 1, 'Quick Add feature', 1],
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
	<SimpleHero title={m['footer.links.comparison']()} backgroundImage="assets/images/hero-bg.png" />

	<div class="theme-container mx-auto py-12">
		{#each convertedSections as section}
			<AppFeaturesComparisonTable title={section.title} subtitle="" headers={section.headers} rows={section.rows} buttonLabel="" buttonLink="" />
		{/each}
	</div>

	<Footer />
</div>

<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import Table from '@/theme/Table/Table.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import Links from '@/components/Links/Links.svelte';
	import { m } from '$lib/i18n/index.svelte';
	// Make headers and rows reactive
	const headers = $derived([m['download.table_header.software'], m['download.table_header.links']]);
	const rows = $derived([
		{
			cells: [
				{ text: m['hero.app_name'] + ' (' + m['download.table_cells.web_version'] + ')', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-client/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-client', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' (' + m['download.table_cells.native_version'] + ')', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-client-native/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-client-native', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' Admin', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-admin/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-admin', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' Server', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-server/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-server', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' Sticker Server', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-sticker-server/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-sticker-server', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' GIF Server', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-gif-server/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-gif-server', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' Registration Server', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-registration-server/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-registration-server', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' Registration Client', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-registration-client/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-registration-client', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' Web', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-web/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-web', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: m['hero.app_name'] + ' Documentation', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/yellow-documentation/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/yellow-documentation', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
		{
			cells: [
				{ text: 'Realtime Console', alignment: 'left', isHeader: true },
				{
					component: Links,
					props: {
						links: [
							{ title: m['download.download'], url: 'https://github.com/libersoft-org/realtime-console/archive/refs/heads/main.zip' },
							{ title: m['download.source'], url: 'https://github.com/libersoft-org/realtime-console', theme: 'secondary' },
						],
					},
					alignment: 'center',
				},
			],
		},
	]);
</script>

<style>
</style>

<Header zIndex={100} />
<SimpleHero title={m['footer.links.download']} />
<div class="theme-container mx-auto py-10 md:py-20">
	<div class="flex flex-col items-center justify-center">
		<p class="mb-5 max-w-[700px] text-center">
			{m['hero.app_name'] + ' ' + m['download.disclaimer']}
		</p>
		<Table {rows} {headers} class="max-w-[700px]" isCollapsible={false} />
	</div>
	<!--
  <div class="theme-container mx-auto py-12">
   <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <div>
     <Text />
    </div>
   </div>
  </div>
 -->
</div>
<Footer />

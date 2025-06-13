<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import Table from '@/theme/Table/Table.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import { m } from '@paraglide/messages';
	let headers = [m['download.table_header.software'](), m['download.table_header.links']()];
	let rows = [
		{
			cells: [
				{ text: m['hero.app_name']() + ' (' + m['download.table_cells.web_version']() + ')', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-client/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-client" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' (' + m['download.table_cells.native_version']() + ')', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-client-native/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-client-native" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' Admin', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-admin/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-admin" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-server/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-server" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' Sticker Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-sticker-server/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-sticker-server" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' GIF Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-gif-server/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-gif-server" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' Registration Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-registration-server/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-registration-server" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' Registration Client', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-registration-client/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-registration-client" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' Web', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-web/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-web" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: m['hero.app_name']() + ' Documentation', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-documentation/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/yellow-documentation" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Realtime Console', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/realtime-console/archive/refs/heads/main.zip" target="_blank">' + m['download.download']() + '</a><br /><a href="https://github.com/libersoft-org/realtime-console" target="_blank">' + m['download.source']() + '</a>', alignment: 'center' },
			],
		},
	];
</script>

<style>
</style>

<Header zIndex={100} />
<SimpleHero title={m['footer.links.download']()} backgroundImage="assets/images/hero-bg.png" />
<div class="relative mb-16 flex flex-col items-center justify-center md:mb-20 lg:mb-45">
	<div class="mb-4 text-center md:mb-8">
		<div class="m-2">
			{m['hero.app_name']() + ' ' + m['download.disclaimer']()}
		</div>
		<Table {rows} {headers} class="max-w-[700px]" />
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
</div>
<Footer />

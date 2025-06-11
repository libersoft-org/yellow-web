<script>
	import Header from '@/components/Header/Header.svelte';
	import Footer from '@/components/Footer/Footer.svelte';
	import Table from '@/theme/Table/Table.svelte';
	//import Text from '@/components/Text/Text.svelte';
	import SimpleHero from '@/components/SimpleHero/SimpleHero.svelte';
	import { m } from '@paraglide/messages';
	let headers = ['Software', 'Links'];
	let rows = [
		{
			cells: [
				{ text: 'Yellow (web version)', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-client/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-client" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow (native version - desktop and mobile)', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-client-native/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-client-native" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow Admin', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-admin/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-admin" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-server/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-server" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow Sticker Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-sticker-server/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-sticker-server" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow GIF Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-gif-server/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-gif-server" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow Registration Server', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-registration-server/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-registration-server" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow Registration Client', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-registration-client/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-registration-client" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow Website', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-web/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-web" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Yellow Documentation', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/yellow-documentation/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/yellow-documentation" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
		{
			cells: [
				{ text: 'Realtime Console', alignment: 'left', isHeader: true },
				{ text: '<a href="https://github.com/libersoft-org/realtime-console/archive/refs/heads/main.zip" target="_blank">Download</a><br /><a href="https://github.com/libersoft-org/realtime-console" target="_blank">Source code</a>', alignment: 'center' },
			],
		},
	];
</script>

<style>
</style>

<div>
	<Header zIndex={100} />
	<SimpleHero title={m['footer.links.download']()} backgroundImage="assets/images/hero-bg.png" />
	<Table {rows} {headers} class="max-w-[538px]" />
	<!--
 <div class="theme-container mx-auto py-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div>
				<Text />
			</div>
		</div>
	</div>
 -->
	<Footer />
</div>

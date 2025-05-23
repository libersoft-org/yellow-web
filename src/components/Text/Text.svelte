<script lang="ts">
	import Link from '@/theme/Link/Link.svelte';

	const title = 'Liberland Software Foundation';

	const address = [
		'Liberty Street 1',
		'Liberty City',
		'LL-00001 Liberland',
		'Organization ID: LLC230002'
	];

	const contactTitle = 'Get in touch';
	const contactEmail = 'info@libersoft.org';

	const links = [
		{ label: 'Github Page', icon: 'github', href: 'https://github.com/yellow' },
		{ label: 'Telegram Chat Group', icon: 'telegram', href: 'https://t.me/yellow' },
		{ label: 'Telegram Announcements', icon: 'telegram', href: 'https://t.me/yellow-announcements' },
		{ label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/yellow' },
		{ label: 'Facebook Group', icon: 'facebook', href: 'https://facebook.com/yellow' }
	];
</script>

{#snippet headerSnippet ()}
	<div class="text-center text-2xl md:text-3xl font-bold mb-6">{title}</div>
	<div class="border-t border-themeGray-200 mb-6"></div>
{/snippet}

{#snippet leftSnippet ()}
	<div class="flex-1 min-w-[220px]">
		<div class="font-bold mb-2">Address</div>
		<div class="mb-4">
			{#each address.slice(0, 3) as line}
				<div>{line}</div>
			{/each}
		</div>
		<div class="mb-6 text-xs text-themeGray-600">{address[3]}</div>
		<div class="font-bold mb-2">{contactTitle}</div>
		<a href="mailto:{contactEmail}"
			 class="inline-flex items-center gap-2 text-themeGray-800 hover:text-themeYellow-400 underline font-bold">
			<svg class="w-6 h-6 text-themeYellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path
					d="M2.25 6.75l8.954 6.716a2.25 2.25 0 002.592 0L22.75 6.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
			</svg>
			<span>{contactEmail}</span>
		</a>
	</div>
{/snippet}

{#snippet rightSnippet ()}
	<div class="flex-1 min-w-[220px] flex flex-col gap-3">
		{#each links as link}
			<Link href={link.href} label={link.label} icon={link.icon} iconWrapper={true}
						class="text-themeGray-800 hover:text-themeYellow-400 font-bold" target="_blank" rel="noopener noreferrer" />
		{/each}
	</div>
{/snippet}

<div class="theme-container m-auto mb-12">
	<div class="bg-white rounded-3xl shadow-lg p-8 md:p-12">
		{@render headerSnippet()}
		<div class="flex flex-col md:flex-row gap-8 md:gap-16">
			{@render leftSnippet()}
			{@render rightSnippet()}
		</div>
	</div>
</div>

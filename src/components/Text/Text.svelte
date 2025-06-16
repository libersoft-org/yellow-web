<script lang="ts">
	import Link from '@/theme/Link/Link.svelte';
	import Icon from '@/theme/Icon/Icon.svelte';
	import { m } from '$lib/i18n/index.svelte';
	// Make all translations reactive
	const blockTitle = $derived(m['text.block_title']);
	const title = $derived(m['text.organization_title']);
	const address = $derived([m['text.address.line1'], m['text.address.line2'], m['text.address.line3']]);
	const organizationId = $derived(m['text.organization_id_value']);
	const contactTitle = $derived(m['text.contact_title']);
	const contactEmail = $derived(m['text.contact_email']);
	const links = $derived([
		{ label: m['text.links.github'], icon: 'github', href: 'https://github.com/libersoft-org/yellow-documentation' },
		{ label: m['text.links.telegram_chat'], icon: 'telegram', href: 'https://t.me/libersoft' },
		{ label: m['text.links.telegram_announcements'], icon: 'telegram', href: 'https://t.me/libersoft_ann' },
		{ label: m['text.links.linkedin'], icon: 'linkedin', href: 'https://www.linkedin.com/company/libersoft-org/' },
		{ label: m['text.links.facebook'], icon: 'facebook', href: 'https://www.facebook.com/groups/libersoft' },
	]);
</script>

{#snippet cardHeaderSnippet()}
	<div class="card-block__header px-10 pt-7 pb-4 lg:px-15">
		<h3 class="text-center text-4xl font-medium md:text-5xl lg:text-6xl">{title}</h3>
	</div>
{/snippet}
{#snippet leftColumnSnippet()}
	<div class="w-full lg:flex-1">
		<h4 class="mb-2 text-xl font-bold">{m['text.address.title']}</h4>
		<div class="text-md mb-5">
			{#each address as line, i (i)}
				<div class="text-themeGray-400 text-base">{line}</div>
			{/each}
		</div>
		<div class="text-md text-themeGray-400 mb-7">
			<strong>{m['text.organization_id']}</strong>
			{organizationId}
		</div>
		<h3 class="text-6xl font-medium">{contactTitle}</h3>
		<a href="mailto:{contactEmail}" class="inline-flex items-center gap-2 text-xl font-bold underline hover:no-underline">
			<span class="text-themeYellow-800">
				<Icon name="envelope" size="5xl" />
			</span>
			<span class="text-themeGray-800 inline-block pt-1">{contactEmail}</span>
		</a>
	</div>
{/snippet}
{#snippet rightColumnSnippet()}
	<div class="flex w-full flex-col gap-3 lg:flex-1">
		{#each links as link, i (i)}
			<Link href={link.href} label={link.label} icon={link.icon} iconWrapperClass="flex items-center justify-center h-8.5 w-8.5 mr-2 p-2 rounded-full theme-gradient-yellow bg-gradient-to-bl text-black" class="text-md text-themeGray-400" target="_blank" rel="noopener noreferrer" />
		{/each}
	</div>
{/snippet}
{#snippet contentSnippet()}
	<div class="card-block__body px-6 pt-1 pb-10 md:px-10 lg:px-14">
		<div class="flex flex-col gap-8 lg:flex-row lg:gap-16">
			{@render leftColumnSnippet()}
			{@render rightColumnSnippet()}
		</div>
	</div>
{/snippet}
{#snippet shadowSvgSnippet()}
	<div class="flex w-full justify-center">
		<svg xmlns="http://www.w3.org/2000/svg" width="674" height="48" viewBox="0 0 674 48" fill="none">
			<rect width="19" height="674" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 16)" fill="url(#paint0_linear_264_1282)" />
			<rect x="590" width="84" height="48" fill="url(#paint1_linear_264_1282)" />
			<rect width="84" height="48" transform="matrix(-1 0 0 1 84 0)" fill="url(#paint2_linear_264_1282)" />
			<defs>
				<linearGradient id="paint0_linear_264_1282" x1="0" y1="337" x2="19" y2="337" gradientUnits="userSpaceOnUse">
					<stop stop-color="#EAECF7" stop-opacity="0.65" />
					<stop offset="1" stop-color="white" />
				</linearGradient>
				<linearGradient id="paint1_linear_264_1282" x1="590" y1="24" x2="674" y2="24" gradientUnits="userSpaceOnUse">
					<stop stop-color="white" stop-opacity="0" />
					<stop offset="1" stop-color="white" />
				</linearGradient>
				<linearGradient id="paint2_linear_264_1282" x1="0" y1="24" x2="84" y2="24" gradientUnits="userSpaceOnUse">
					<stop stop-color="white" stop-opacity="0" />
					<stop offset="1" stop-color="white" />
				</linearGradient>
			</defs>
		</svg>
	</div>
{/snippet}
<div class="mx-auto mb-6 max-w-full px-0 md:mb-8 md:px-4 lg:mb-12">
	<div class="theme-shadow-soft rounded-3xl bg-white">
		{@render cardHeaderSnippet()}
		{@render shadowSvgSnippet()}
		{@render contentSnippet()}
	</div>
</div>

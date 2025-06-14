<script lang="ts">
	import Button from '../../theme/Button/Button.svelte';
	interface Props {
		links: Array<{
			title: string;
			url: string;
			theme?: 'primary' | 'secondary';
		}>;
	}
	let { links, ...restProps }: Props = $props();

	function openLink(url: string) {
		window.open(url, '_blank');
	}
</script>

<style>
	.links-container {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>

<div class="links-container">
	{#each links as link, index}
		<Button {...restProps} data-testid="link-{index}" label={link.title} iconSize="xl" icon="download" theme={link.theme ? link.theme : 'primary'} class="w-full md:w-auto" onclick={() => openLink(link.url)} />
	{/each}
</div>

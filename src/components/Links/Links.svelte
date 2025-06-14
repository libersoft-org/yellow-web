<script>
	export let links = [];
	export let separator = true;
</script>

<style>
	.links-container {
		display: inline-block;
	}
</style>

<div class="links-container">
	{#each links as link, index}
		<a href={link.url} target="_blank" data-testid="link-{index}">{link.title}</a>
		{#if separator && index < links.length - 1}
			<br />
		{/if}
	{/each}
</div>

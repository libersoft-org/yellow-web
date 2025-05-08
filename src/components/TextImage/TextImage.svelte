<script lang="ts">
	// Local variables for demo content
	const textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla ex in nisi molestie fringilla. Integer finibus dolor sapien, a venenatis sapien porttitor ut. Mauris non metus tincidunt, ornare turpis ac, accumsan dolor. Quisque non leo sit amet lorem vulputate vulputate sed quis dui. Fusce eleifend convallis nulla quis molestie. Cras rutrum nisl neque.`;
	const imagePath = '/assets/images/your-image.png';
	const imageAlt = 'Screenshot';
	const title = 'Výrazný textový blok';
	const imageRight = false;
</script>

{#snippet textContentSnippet()}
	<div class="flex-1 mb-8 md:mb-0 md:mr-8">
		<h2 class="font-bold text-2xl md:text-3xl mb-4">{title}</h2>
		<p class="text-base md:text-lg text-themeGray-800">{textContent}</p>
	</div>
{/snippet}

{#snippet imageContentSnippet()}
	<div class="flex-1 flex justify-center">
		<img src={imagePath} alt={imageAlt} class="max-w-full h-auto rounded-xl shadow-md" />
	</div>
{/snippet}

<div class="theme-container m-auto mb-12">
    <div class="text-image-wrapper flex flex-col md:flex-row items-center justify-between rounded-3xl py-10 px-20" style="background: radial-gradient(ellipse at 50% 50%, #F8F9FF 0%, #EAECF7 100%);">
        {#if !imageRight}
            {@render textContentSnippet()}
            {@render imageContentSnippet()}
        {:else}
            {@render imageContentSnippet()}
            {@render textContentSnippet()}
        {/if}
    </div>
</div>

<style>
	.text-image-wrapper {
		/* If you have a theme utility for the gradient, use it here instead */
	}
</style> 
<script lang="ts">
	interface Props {
		title: string;
		backgroundImage?: string;
	}

	let { title, backgroundImage = 'assets/images/hero-pattern.webp' }: Props = $props();
</script>

<style>
</style>

<div class="relative isolate bg-center pt-25 lg:pt-34 pb-12 bg-[size:400px] bg-[position:0_0] bg-repeat md:bg-repeat-x" style="background-image: url('{backgroundImage}');">
	<div class="theme-container relative mx-auto">
		<div class="flex flex-wrap justify-center">
			<div class="w-full">
				<h1 class="theme-text-h1 text-center">
					<span class="theme-title">{title}</span>
				</h1>
			</div>
		</div>
	</div>
	<div class="h-8 bg-gradient-to-b from-transparent via-white/70 to-white absolute bottom-0 left-0 right-0"></div>
</div>

<script lang="ts">
	interface Props {
		title: string;
		backgroundImage?: string;
	}

	let { title, backgroundImage = 'assets/images/hero-bg.png' }: Props = $props();
</script>

<div class="relative isolate bg-cover bg-center pt-34 pb-12" style="background-image: url('{backgroundImage}')">
	<div class="theme-container relative mx-auto">
		<div class="flex flex-wrap justify-center">
			<div class="w-full">
				<h1 class="theme-text-h1 text-center">
					<span class="theme-title">{title}</span>
				</h1>
			</div>
		</div>
	</div>
</div>

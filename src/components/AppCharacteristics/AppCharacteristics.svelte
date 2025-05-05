<script lang="ts">
import Button from '@/theme/Button/Button.svelte';
import Box from '@/theme/Box/Box.svelte';

type Feature = {
	title: string;
	description: string;
	icon: string;
	link: string;
	theme: 'primary' | 'secondary';
	highlight?: boolean;
	buttonText?: string;
};

const features: Feature[] = [
	{
	title: "Distributed and decentralized network",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit semper dalarect lacus vel facilisis volutpat est velitcm.",
	icon: "network",
	link: "/",
	theme: "secondary"
	},
	{
	title: "Privacy and security",
	description: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque volutpat sapien vitae sodales eleifend. Pellentesque habitant morbi.",
	icon: "shield",
	link: "/",
	theme: "secondary"
	},
	{
	title: "Open source",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit semper dalarect lacus vel facilisis volutpat est velitcm.",
	icon: "open-source",
	link: "/",
	theme: "secondary"
	},
	{
	title: "Modularity",
	description: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque volutpat sapien vitae sodales eleifend. Pellentesque habitant morbi.",
	icon: "cube",
	link: "/",
	theme: "secondary"
	},
	{
	title: "Smart home integration",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit semper dalarect lacus vel facilisis volutpat est velitcm.",
	icon: "wifi",
	link: "/",
	theme: "secondary"
	},
	{
	title: "Take your experience to the next level",
	description: "with our all-in-one app",
	icon: "",
	link: "/",
	theme: "primary",
	highlight: true,
	buttonText: "Explore more"
	}
];

</script>

<div class="app-features flex flex-col items-center justify-center">
	<div class="text-center mb-8">
		<h2 class="theme-text-h2 mb-4">
			Key <span class="theme-title-underline">characteristics</span>
		</h2>
		<div class="theme-text-h4">
			Cutting edge technology!
		</div>
	</div>
	<div class="theme-container relative flex flex-col items-center">
		<div class="app-features-grid gap-6 w-full">
			{#each features as feature}
				<div class="feature h-full flex">
					<Box 
						title={feature.title} 
						icon={feature.icon} 
						theme={feature.theme}
						footerType={feature.theme === "secondary" ? "link" : "button"}
						footerLink={feature.link}
						footerText={feature.buttonText}
					>
						{feature.description}
					</Box>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.app-features-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-template-rows: repeat(2, minmax(0, 1fr));
	}
</style>
	
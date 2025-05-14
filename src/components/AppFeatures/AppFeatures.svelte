<script lang="ts">
	import Card from '@/theme/Card/Card.svelte';
	import svgBackground from './bg.svg?raw'
	import Button from '@/theme/Button/Button.svelte';

	// Define position type
	type Position = { column: number; row: number };
	
	// Grid positions for LG screens - in same order as features
	const featurePositions: Position[] = [
		{ column: 1, row: 3 },  // Messages
		{ column: 1, row: 9 },  // E-commerce
		{ column: 2, row: 12 }, // Social media
		{ column: 3, row: 3 },  // Business tools
		{ column: 3, row: 9 }   // Entertainment
	];
	
	const features = [
	  {
		title: "Messages",
		icon: "message",
		description: "Innovative messaging with unlimited files, widgets, multipart messages, and more."
	  },
	  {
		title: "E-commerce",
		icon: "cart",
		description: "Smart-contract wallet enables payments, purchases, donations, crowdfunding, and more."
	  },
	  {
		title: "Social media",
		icon: "phone",
		description: "Advanced social features: video channels, forum, newsfeed, stories, events, and more."
	  },
	  {
		title: "Business tools",
		icon: "calendar",
		description: "Calendar and Tasks help businesses organize, share, and boost productivity."
	  },
	  {
		title: "Entertainment",
		icon: "dice",
		description: "Last but not least, the platform also provides fun features such as dating and video games."
	  }
	];
</script>

<div class="app-features flex flex-col items-center justify-center mb-16 md:mb-26">
	<div class="text-center mb-8">
		<h2 class="theme-text-h2">
			One app, <span class="theme-title-underline">one account,</span><br />
			for everything you need!
		</h2>
	</div>
	<div class="theme-container relative flex flex-col items-center w-full px-4 sm:px-6 lg:px-0">
		<div class="svg-bg absolute margin-auto w-full top-5 max-h-[642px] -z-10 pointer-events-none">
			{@html svgBackground}
		</div>

		<div class="app-features-layout w-full
					flex flex-col items-center space-y-8
					md:grid md:grid-cols-2 md:gap-6 md:space-y-0 md:items-start
					lg:grid-cols-3 lg:grid-rows-[repeat(16,32px)] lg:gap-x-6 lg:gap-y-0
					max-w-md
					md:max-w-3xl
					lg:max-w-[calc(350px*3+2*1.5rem)]">

			<!-- Image -->
			<div class="w-full flex justify-center
						md:col-span-2 md:row-start-1 md:justify-center 
						lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:justify-start">
				<img src="/assets/images/app-features-mobile.png" alt="App Features Mobile" class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full" />
			</div>

			{#each features as feature, index}
				<div class="w-full flex justify-center
							md:justify-self-center
							lg:col-[var(--col)]
              				lg:row-[var(--row)]
							lg:justify-self-auto"
							style="--col: {featurePositions[index].column}; --row: {featurePositions[index].row};">
				  <div class="feature max-w-[350px] w-full">
					<Card title={feature.title} icon={feature.icon}>
					  {feature.description}
					</Card>
				  </div>
				</div>
			{/each}
		</div>

		<div class="flex justify-center mt-12 md:mt-16">
			<Button label="See all features" theme="secondary" rightIcon="chevron" />
		</div>
	</div>
</div>

<style>
	.svg-bg :global(svg) {
		width: 100%;
		height: auto;
	}
</style>
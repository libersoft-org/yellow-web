<script lang="ts">
import Card from '@/theme/Card/Card.svelte';
import svgBackground from './bg.svg?raw'
import Button from '@/theme/Button/Button.svelte';

const features = [
  {
    title: "Messages",
    icon: "message",
    description: "Innovative messaging with unlimited files, widgets, multipart messages, and more.",
    position: { column: 1, row: 3 }
  },
  {
    title: "E-commerce",
    icon: "cart",
    description: "Smart-contract wallet enables payments, purchases, donations, crowdfunding, and more.",
    position: { column: 1, row: 9 }
  },
  {
    title: "Social media",
    icon: "phone",
    description: "Advanced social features: video channels, forum, newsfeed, stories, events, and more.",
    position: { column: 2, row: 12 }
  },
  {
    title: "Business tools",
    icon: "calendar",
    description: "Calendar and Tasks help businesses organize, share, and boost productivity.",
    position: { column: 3, row: 3 }
  },
  {
    title: "Entertainment",
    icon: "dice",
    description: "Last but not least, the platform also provides fun features such as dating and video games.",
    position: { column: 3, row: 9 }
  }
];
</script>

<div class="app-features flex flex-col items-center justify-center mb-26">
	<div class="text-center mb-8">
		<h2 class="theme-text-h2">
			One app, <span class="theme-title-underline">one account,</span><br />
			for everything you need!
		</h2>
	</div>
	<div class="theme-container relative flex flex-col items-center">
		<div class="svg-bg absolute margin-auto w-full top-5 max-h-[642px]" style:z-index="-1">
			{@html svgBackground}
		</div>
		<div class="app-features-gríd gap-x-6">
			<div style:grid-column="2" style:grid-row="1">
				<img src="/assets/images/app-features-mobile.png" />
			  </div>
		
			  {#each features as feature}
				<div style:grid-column="{feature.position.column}" style:grid-row="{feature.position.row}">
				  <div class="feature max-w-[350px]">
					<Card title={feature.title} icon={feature.icon}>
					  {feature.description}
					</Card>
				  </div>
				</div>
			  {/each}
		</div>
		<div class="flex justify-center">
			<Button label="See all features" theme="secondary" rightIcon="chevron" />
		</div>
	</div>
</div>

<style>
	.app-features-gríd {
			display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(20, minmax(0, 32px));
			max-width: calc(350px * 3);
	}

	.svg-bg :global(svg) {
			width: 100%;
			height: auto;
	}
</style>

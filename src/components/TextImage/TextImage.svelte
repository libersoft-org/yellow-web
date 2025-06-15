<script lang="ts">
	import Link from '../../theme/Link/Link.svelte';
	interface Props {
		title?: string;
		textContent?: string[];
		imagePath?: string;
		imageAlt?: string;
		imagePosition?: 'left' | 'right';
		showImage?: boolean;
		showBulletList?: boolean;
	}
	let { title = 'Paragraphs and image layout', textContent = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla ex in nisi molestie fringilla. Integer finibus dolor sapien, a venenatis sapien porttitor ut. Mauris non metus tincidunt, ornare turpis ac, accumsan dolor. Quisque non leo sit amet lorem vulputate vulputate sed quis dui.', 'Etiam lorem lacus, mattis eu cursus tempus, convallis et libero. Ut eget bibendum purus. Aliquam molestie, lacus in ullamcorper lobortis, ipsum est condimentum lorem, a auctor orci velit at nulla. Morbi accumsan pulvinar sapien vitae maximus. Aliquam porta sit amet odio vel condimentum. Morbi et augue eget enim vulputate auctor. Ut porta nibh, gravida quam et elementum nec, ornare a velit. Mauris elit quam, ultricies sit amet lectus eius, molestie congue nisi. Ut egestas diam justo, eu pretium magna vestibulum a. In vehicula, est quis mattis lobortis, elit ipsum posuere ipsum, non lobortis lorem, porttitor auctor nisl.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla ex in nisi molestie fringilla. Integer finibus dolor sapien, a venenatis sapien porttitor ut. Mauris non metus tincidunt, ornare turpis ac, accumsan dolor.'], imagePath = '/assets/images/textImage.png', imageAlt = 'Phone Screenshot', imagePosition = 'left', showImage = true, showBulletList = true }: Props = $props();
	// Bullet list content converted to array structure
	const bulletItems = [
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			subItems: [],
		},
		{
			text: 'Vestibulum fringilla ex in nisi molestie.',
			subItems: ['Integer finibus dolor sapien, a venenatis sapien porttitor ut.', 'Mauris non metus tincidunt, ornare turpis.', 'Donec sollicitudin consectetur purus.'],
		},
		{
			text: 'Suspendisse eget semper leo.',
			subItems: [],
		},
		{
			text: 'Cras vitae feugiat turpis.',
			subItems: [],
		},
		{
			text: 'Etiam suscipit viverra consequat.',
			subItems: [],
		},
		{
			text: 'Mauris et est lectus in hendrerit ante ac felis blandit.',
			subItems: [],
		},
	];
</script>

<div class="mx-auto my-12 max-w-7xl px-4">
	<h2 class="theme-text-h3 mb-5 text-center font-bold md:mb-8 md:text-left">{title}</h2>
	<div class="flex flex-col items-start gap-5 md:flex-row md:gap-7 lg:gap-10" class:md:flex-row-reverse={imagePosition === 'right'}>
		<!-- Image Content (only shown if showImage is true) -->
		{#if showImage}
			<div class="lg:max-w-auto mr-auto ml-auto w-full max-w-[500px] md:max-w-[320px]lg:flex-none lg:flex-shrink-0">
				<img src={imagePath} alt={imageAlt} class="h-auto w-full rounded-lg drop-shadow-md" />
			</div>
		{/if}
		<!-- Text Content -->
		<div class="w-full md:flex-1">
			<p class="theme-text-body1 text-themeGray-700 mb-4 font-bold">
				{@html textContent[0]}
			</p>
			<p class="theme-text-body3 text-themeGray-400 mb-4">
				{@html textContent[1]}
			</p>
			<p class="theme-text-body3 text-themeGray-400 mb-4">
				{@html textContent[2]}
			</p>
			<div class="mt-2 mb-6 flex flex-wrap gap-2">
				<Link href="https://yellow.libersoft.org" label="Link underlined" textClass="text-themeGray-800 text-base font-medium" class="text-themeYellow-800" underlined={true} />
				<Link href="https://yellow.libersoft.org" label="Link underlined" textClass="text-themeGray-800 text-base font-medium" class="text-themeGray-800" underlined={true} />
				<Link href="https://yellow.libersoft.org" label="Link" textClass="text-themeGray-800 text-base font-medium" class="text-themeYellow-800" />
				<Link href="https://yellow.libersoft.org" label="Link with icon" icon="envelope" iconSize="md" iconWrapperClass="bg-themeYellow-800 text-themeGray-800 rounded-full p-2" textClass="text-themeGray-800 text-base font-medium" class="text-themeYellow-800" />
			</div>
			{#if showBulletList}
				<ul class="theme-bullet-list md:text-md text-themeGray-700 mt-6 mb-8 text-sm font-medium lg:text-lg">
					{#each bulletItems as item, i}
						<li>
							{item.text}
							{#if item.subItems.length > 0}
								<ul class="md:text-md text-themeGray-400 text-xs font-normal">
									{#each item.subItems as subItem, j}
										<li>{subItem}</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>

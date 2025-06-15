<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Link from '@/theme/Link/Link.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/Link',
		component: Link,
		tags: ['autodocs'],
		args: {
			href: '#',
			label: 'Link',
		},
	});
</script>

<!-- Basic link -->
<Story name="Default" />

<!-- Link with icon -->
<Story args={{ icon: 'download' }} name="With Icon" />

<!-- Link with icon wrapper -->
<Story
	args={{
		icon: 'download',
		iconWrapperClass: 'bg-themeGray-700 rounded-full p-2',
	}}
	name="With Icon Wrapper"
/>

<!-- Link with custom icon class -->
<Story
	args={{
		icon: 'download',
		iconClass: 'text-themeYellow-500',
	}}
	name="With Custom Icon Class"
/>

<!-- Link with different icon sizes -->
<Story name="Icon Sizes">
	<div class="flex flex-col gap-4">
		<Link href="#" icon="download" iconSize="sm" label="Small Icon" />
		<Link href="#" icon="download" iconSize="md" label="Medium Icon" />
		<Link href="#" icon="download" iconSize="lg" label="Large Icon" />
	</div>
</Story>

<!-- Link with external target -->
<Story
	args={{
		href: 'https://example.com',
		label: 'External Link',
		icon: 'open-source',
		iconWrapperClass: 'bg-themeGray-700 rounded-full p-2',
		target: '_blank',
		rel: 'noopener noreferrer',
	}}
	name="External Link"
/>

<!-- Link with custom styling -->
<Story
	args={{
		class: 'text-themeYellow-500 hover:text-themeYellow-600 font-bold',
		icon: 'download',
		iconWrapperClass: 'bg-themeYellow-100 rounded-full p-2',
		iconClass: 'text-themeYellow-600',
	}}
	name="Custom Styling"
/>

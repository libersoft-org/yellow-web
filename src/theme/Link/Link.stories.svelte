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
		}
	});
</script>

<!-- Basic link -->
<Story name="Default" />

<!-- Link with icon -->
<Story name="With Icon" args={{ icon: 'download' }} />

<!-- Link with icon wrapper -->
<Story name="With Icon Wrapper" args={{ 
	icon: 'download',
	iconWrapper: true,
	iconWrapperClass: 'bg-themeGray-700 rounded-full p-2'
}} />

<!-- Link with custom icon class -->
<Story name="With Custom Icon Class" args={{ 
	icon: 'download',
	iconWrapper: true,
	iconClass: 'text-themeYellow-500'
}} />

<!-- Link with different icon sizes -->
<Story name="Icon Sizes">
	<div class="flex flex-col gap-4">
		<Link href="#" label="Small Icon" icon="download" iconSize="sm" />
		<Link href="#" label="Medium Icon" icon="download" iconSize="md" />
		<Link href="#" label="Large Icon" icon="download" iconSize="lg" />
	</div>
</Story>

<!-- Link with external target -->
<Story name="External Link" args={{ 
	href: 'https://example.com',
	label: 'External Link',
	icon: 'open-source',
	iconWrapper: true,
	target: '_blank',
	rel: 'noopener noreferrer'
}} />

<!-- Link with custom styling -->
<Story name="Custom Styling" args={{ 
	class: 'text-themeYellow-500 hover:text-themeYellow-600 font-bold',
	icon: 'download',
	iconWrapper: true,
	iconWrapperClass: 'bg-themeYellow-100 rounded-full p-2',
	iconClass: 'text-themeYellow-600'
}} /> 
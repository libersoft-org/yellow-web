<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Icon from '@/theme/Icon/Icon.svelte';

	// Load all SVG files from the icon directory
	const icons = import.meta.glob('../../assets/icons/*.svg', { query: '?raw', import: 'default' });

	// Extract icon names (without path and .svg)
	const iconNames = Object.keys(icons).map(path =>
		path.split('/').pop().replace('.svg', '')
	);

	const { Story } = defineMeta({
		title: 'Theme/Icon',
		component: Icon,
		tags: ['autodocs'],
		args: {
			basePath: '../../assets/icons',
		}
	});
</script>

{#snippet iconBox(iconName, title, props)}
	<div style="display: flex; flex-direction: column; align-items: center;">
		<Icon name={iconName} size="lg" {...props} />
		<span style="margin-top: 0.5rem; font-size: 0.8rem;">{title}</span>
	</div>
{/snippet}

<Story name="Default">
	<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
		{#each iconNames as name (name)}
			{@render iconBox(name, name)}
		{/each}
	</div>
</Story>

<Story name="Rotate">
	<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
		{@render iconBox('chevron', 'rotate-0', {class: 'rotate-0'})}
		{@render iconBox('chevron', 'rotate-90', {class: 'rotate-90'})}
		{@render iconBox('chevron', 'rotate-180', {class: 'rotate-180'})}
		{@render iconBox('chevron', 'rotate-270', {class: 'rotate-270'})}
	</div>
</Story>

<Story name="Color">
	<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
		{@render iconBox('chevron', 'text-red-300', {class: 'text-red-300'})}
		{@render iconBox('chevron', 'text-yellow-300', {class: 'text-yellow-300'})}
		{@render iconBox('chevron', 'text-blue-300', {class: 'text-blue-300'})}
		{@render iconBox('chevron', 'text-green-300', {class: 'text-green-300'})}
	</div>
</Story>

<Story name="Sizes">
	<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
		{@render iconBox('chevron', '2xl', {size: '2xl'})}
		{@render iconBox('chevron', 'xl', {size: 'xl'})}
		{@render iconBox('chevron', 'lg', {size: 'lg'})}
		{@render iconBox('chevron', 'md', {size: 'md'})}
		{@render iconBox('chevron', 'sm', {size: 'sm'})}
		{@render iconBox('chevron', 'xs', {size: 'xs'})}
	</div>
</Story>

<script lang="ts" module>
	import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

	const sizeMap = {
		xs: 'max-w-4 max-h-4 w-4 h-4',
		sm: 'max-w-6 max-h-6 w-6 h-6',
		md: 'max-w-8 max-h-8 w-8 h-8',
		lg: 'max-w-10 max-h-10 w-10 h-10',
		xl: 'max-w-12 max-h-12 w-12 h-12',
		'2xl': 'max-w-14 max-h-14 w-14 h-14',
		'3xl': 'max-w-16 max-h-16 w-16 h-16',
		'4xl': 'max-w-20 max-h-20 w-20 h-20',
		'5xl': 'max-w-24 max-h-24 w-24 h-24',
		'6xl': 'max-w-28 max-h-28 w-28 h-28',
		'7xl': 'max-w-32 max-h-32 w-32 h-32',
		'8xl': 'max-w-36 max-h-36 w-36 h-36',
	}

	export type IconSizeMapType = keyof typeof sizeMap;

	export interface Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
		basePath?: string
		imgProps?: HTMLImgAttributes;
		size?: IconSizeMapType | number
	}
</script>

<script lang="ts">
	let {
		name,
		basePath = '/src/assets/icons',
		size = 'md',
		...restProps
	}: Props = $props();

	let svgContent = $state('')

	$effect(() => {
		// Determine if this is a public path or a source path
		const path = basePath.startsWith('/') 
			? basePath.replace(/^\//, '') // Remove leading slash for fetch
			: basePath;
		
		// Use fetch to get raw SVG content
		fetch(`/${path}/${name}.svg`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(text => {
				svgContent = text;
			})
			.catch(error => {
				console.error(`Icon "${name}" not found:`, error);
				svgContent = "";
			});
	})

	const sizeClass = $derived(typeof size === 'string' ? sizeMap[size] : undefined)
</script>

<div
	{...restProps}
	class={['icon', 'p-1', restProps.class, sizeClass]}
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html svgContent}
</div>

<style>
.icon :global(svg) {
	width: 100%;
	height: 100%;
}
</style>

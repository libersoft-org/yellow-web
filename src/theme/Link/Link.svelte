<script lang="ts">
	import Icon from '../Icon/Icon.svelte';

	interface Props {
		href: string;
		label: string;
		icon?: string;
		iconSize?: 'sm' | 'md' | 'lg';
		iconWrapperClass?: string;
		iconClass?: string;
		class?: string;
		target?: string;
		rel?: string;
	}

	let {
		href,
		label,
		icon,
		iconSize = 'md',
		iconWrapperClass = 'bg-themeGray-700 rounded-full p-2',
		iconClass = 'text-themeYellow-500',
		class: className = 'text-themeGray-200 hover:text-themeYellow-400 transition-colors duration-200 font-normal',
		target,
		rel
	}: Props = $props();
</script>

<a
	aria-label={label}
	class="flex items-center {className} gap-1.5 group"
	{href}
	{rel}
	{target}
>
	{#if icon}
		<span class={iconWrapperClass}>
			<Icon name={icon} size={iconSize} class={iconClass} />
		</span>
	{/if}
	<span class="inline-block relative">
		<span class="text-white">{@html label}</span>
		<span
			class="absolute left-0 bottom-[-5px] w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
	</span>
</a>

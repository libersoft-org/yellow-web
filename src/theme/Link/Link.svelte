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
	{href}
	class="flex items-center {className}"
	{target}
	{rel}
	aria-label={label}
>
	{#if icon}
		<span class={iconWrapperClass}>
			<Icon name={icon} size={iconSize} class={iconClass} />
		</span>
	{/if}
	<span>{label}</span>
</a> 
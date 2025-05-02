<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import Icon, {type Props as IconProps} from '@/theme/Icon/Icon.svelte';

	interface Props extends HTMLButtonAttributes {
		label: string;
		theme?: 'primary' | 'secondary';
		icon?: string | IconProps;
		rightIcon?: string | IconProps;
	}

	let {
		label,
		theme = 'primary',
		icon,
		rightIcon,
		...restProps
	}: Props = $props();
</script>

{#snippet makeIcon(icon)}
	<div class="button__icon">
		{#if typeof icon === 'string'}
			<Icon
				size="sm"
				name={icon}
				class={[
					theme === 'secondary' ? 'text-themeYellow-600' : '',
				]}
			/>
		{:else}
			<Icon {...icon} />
		{/if}
	</div>
{/snippet}

<button
	{...restProps}
	class={[
		'button',
		'font-bold py-3 px-5 rounded-2xl rounded-tr-none cursor-pointer drop-shadow-md',
		theme === 'primary' ? 'text-secondary bg-gradient-to-b from-themeYellow-600 to-themeYellow-800' : '',
		theme === 'secondary' ? 'text-white bg-gradient-to-b from-themeGray-600 to-themeGray-800' : '',
		restProps.class
	]}
>
	<div class="button__inner flex gap-3 items-center justify-center">
		{#if icon}
			{@render makeIcon(icon)}
		{/if}
		<div class="button__label">
			{label}
		</div>
		{#if rightIcon}
			{@render makeIcon(rightIcon)}
		{/if}
	</div>
</button>

<script lang="ts">
  import Icon from '../Icon/Icon.svelte';

  interface Props {
    href: string;
    label: string;
    icon?: string;
    iconSize?: 'sm' | 'md' | 'lg';
    iconWrapperClass?: string;
    iconClass?: string;
    textClass?: string;
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
    textClass = '',
    class: className = 'text-themeGray-200 hover:text-themeYellow-400 transition-colors duration-200 font-normal',
    target,
    rel
  }: Props = $props();
</script>

<a aria-label={label} class="flex items-center {className} group gap-1.5" {href} {rel} {target}>
  {#if icon}
    <span class={iconWrapperClass}>
      <Icon name={icon} size={iconSize} class={iconClass} />
    </span>
  {/if}
  <span class="relative inline-block">
    <span class={`${textClass}`}>{@html label}</span>
    <span class="absolute bottom-[-5px] left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"
    ></span>
  </span>
</a>

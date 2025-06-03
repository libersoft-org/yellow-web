<script lang="ts">
  import Icon, { type IconSizeMapType } from '../Icon/Icon.svelte';

  interface Props {
    href: string;
    label: string;
    icon?: string;
    iconSize?: IconSizeMapType;
    mdIconSize?: IconSizeMapType;
    lgIconSize?: IconSizeMapType;
    iconWrapperClass?: string;
    iconClass?: string;
    textClass?: string;
    class?: string;
    target?: string;
    rel?: string;
    underlined?: boolean;
  }

  let {
    href,
    label,
    icon,
    iconSize = 'md',
    mdIconSize,
    lgIconSize,
    iconWrapperClass = 'bg-themeGray-700 rounded-full p-2',
    iconClass = 'text-themeYellow-500',
    textClass = '',
    class: className = 'text-themeGray-200 hover:text-themeYellow-400 transition-colors duration-200 font-normal',
    target,
    rel,
    underlined = false
  }: Props = $props();
</script>

<a aria-label={label} class="flex items-center {className} group gap-1.5" {href} {rel} {target}>
  {#if icon}
    <span class={iconWrapperClass}>
      <Icon name={icon} size={iconSize} mdSize={mdIconSize} lgSize={lgIconSize} class={iconClass} />
    </span>
  {/if}
  <span class="relative inline-block leading-snug">
    <span class={`${textClass} leading-snug`}>{@html label}</span>
    {#if underlined}
      <!-- Default: Underlined with hover effect to remove underline -->
      <span class="absolute top-[100%] left-0 h-[2px] w-full bg-current transition-all duration-300 group-hover:w-0"
      ></span>
    {:else}
      <!-- Non-underlined with hover effect to add underline -->
      <span class="absolute top-[100%] left-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"
      ></span>
    {/if}
  </span>
</a>

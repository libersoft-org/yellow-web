<script lang="ts">
  import { RadioGroup } from 'bits-ui';

  interface Props {
    value?: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    orientation?: 'vertical' | 'horizontal';
    class?: string;
    children?: any;
  }

  let {
    value = $bindable(''),
    name,
    disabled = false,
    required = false,
    orientation = 'vertical',
    class: className = '',
    children
  }: Props = $props();
</script>

<RadioGroup.Root
  bind:value
  {name}
  {disabled}
  {required}
  {orientation}
  class={`flex 
    ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} 
    gap-2 
    ${className}`}
>
  {@render children?.()}
</RadioGroup.Root>

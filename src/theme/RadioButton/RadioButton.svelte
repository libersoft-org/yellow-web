<script lang="ts">
  import { RadioGroup, Label, useId } from 'bits-ui';

  interface Props {
    value: string;
    id?: string;
    label?: string;
    disabled?: boolean;
  }

  let { value, id = useId(), label, disabled = false }: Props = $props();
</script>

<div class="flex items-center">
  <RadioGroup.Item
    {id}
    {value}
    {disabled}
    class="theme-gradient-white text-themeYellow-600 peer inline-flex h-[27px] w-[27px] shrink-0 cursor-pointer rounded-full border border-[#C09A05] bg-gradient-to-t drop-shadow-md transition-all duration-150 ease-in-out focus:ring-0 focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:border-[#C09A05]"
    aria-labelledby={label ? `${id}-label` : undefined}
  >
    {#snippet children({ checked })}
      <div class="flex h-full w-full items-center justify-center">
        {#if checked}
          <div class="h-[11px] w-[11px] rounded-full bg-black"></div>
        {/if}
      </div>
    {/snippet}
  </RadioGroup.Item>

  {#if label}
    <Label.Root
      for={id}
      id={`${id}-label`}
      class="text-themeGray-700 ml-2 text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </Label.Root>
  {/if}
</div>

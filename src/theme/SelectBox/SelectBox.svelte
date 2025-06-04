<script lang="ts">
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import { Select } from 'bits-ui';
  import Icon from '@/theme/Icon/Icon.svelte';

  export interface SelectOption {
    value: string;
    label: string;
    icon?: string;
    disabled?: boolean;
  }

  interface Props {
    label?: string;
    options: SelectOption[];
    error?: string;
    showIcons?: boolean;
    value?: string;
    class?: string;
    id?: string;
    name?: string;
  }

  let {
    label,
    options = [],
    error,
    value = $bindable(''),
    showIcons = true,
    class: className = '',
    id,
    name
  }: Props = $props();

  // Track open state
  let open = $state(false);

  // Handle value change from Select component
  function handleValueChange(newValue: string) {
    value = newValue;
  }

  // Get the currently selected option
  const selectedLabel = $derived(value ? options.find((option) => option.value === value)?.label : 'Select an option');
</script>

<div class="mb-4">
  <Select.Root
    type="single"
    onValueChange={handleValueChange}
    {value}
    items={options}
    onOpenChange={(isOpen) => (open = isOpen)}
  >
    <Select.Trigger
      class={[
        'theme-gradient-white relative flex w-full cursor-pointer items-center rounded-lg bg-gradient-to-t px-4 py-3 text-left drop-shadow-md',
        error ? 'border border-red-500' : '',
        'hover:border-themeYellow-600 transition-colors duration-200',
        className
      ]}
      aria-label={label || 'Select an option'}
      {id}
      {name}
    >
      {#if showIcons && value && options.find((o) => o.value === value)?.icon}
        <div class="text-themeGray-700 mr-2 flex-shrink-0">
          <Icon name={options.find((o) => o.value === value)?.icon || ''} size="lg" />
        </div>
      {/if}
      <div class="text-themeGray-800 flex-grow">
        {selectedLabel}
      </div>
      <div class="text-themeGray-700 ml-2 flex-shrink-0 transition-transform duration-200" class:rotate-90={open}>
        <Icon name="chevron" size="sm" />
      </div>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content
        class="border-themeGray-300 z-50 max-h-60 min-w-[var(--bits-select-anchor-width)] rounded-lg border bg-white px-1 py-1 shadow-lg"
        sideOffset={4}
      >
        <Select.Viewport class="p-1">
          {#each options as option}
            <Select.Item
              class="hover:bg-themeGray-100 flex w-full cursor-pointer items-center px-4 py-2 text-left text-sm"
              value={option.value}
              label={option.label}
              disabled={option.disabled}
            >
              {#snippet children({ selected })}
                {#if showIcons && option.icon}
                  <div class="text-themeGray-700 mr-3 flex-shrink-0">
                    <Icon name={option.icon} size="lg" />
                  </div>
                {/if}
                <div>{option.label}</div>
                {#if selected}
                  <div class="ml-auto">
                    <Icon name="check" size="sm" />
                  </div>
                {/if}
              {/snippet}
            </Select.Item>
          {/each}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>

  {#if error}
    <p class="mt-1 text-sm text-red-500">{error}</p>
  {/if}
</div>

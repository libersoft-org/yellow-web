<script lang="ts">
  import Button from '@/theme/Button/Button.svelte';
  import SelectBox from '@/theme/SelectBox/SelectBox.svelte';
  import CheckBox from '@/theme/CheckBox/CheckBox.svelte';
  import RadioGroup from '@/theme/RadioGroup/RadioGroup.svelte';
  import RadioButton from '@/theme/RadioButton/RadioButton.svelte';
  import Input from '@/theme/Input/Input.svelte';
  import TextArea from '@/theme/TextArea/TextArea.svelte';

  let { title = 'Formulář' } = $props();

  let inputValue = $state('');
  let textareaValue = $state('');
  let selectValue = $state('');
  let radioValue = $state('option1');
  let consentValue = $state(false);

  // Select options
  const selectOptions = [
    { value: 'option1', label: 'Lorem ipsum' },
    { value: 'option2', label: 'Dolor sit amet' },
    { value: 'option3', label: 'Consectetur adipiscing' }
  ];

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log('Form submitted', {
      input: inputValue,
      textarea: textareaValue,
      select: selectValue,
      radioOption: radioValue,
      consent: consentValue
    });
  }
</script>

<div class="bg-themeYellow-600 mx-auto max-w-md rounded-xl p-6 drop-shadow-md">
  <h2 class="mb-6 text-2xl font-bold">{title}</h2>

  <form onsubmit={handleSubmit}>
    <!-- Input -->
    <Input id="formInput" bind:value={inputValue} placeholder="Enter your text here" label="Input" />

    <!-- Textarea -->
    <TextArea
      id="formTextarea"
      bind:value={textareaValue}
      placeholder="Enter your message here"
      rows={5}
      label="Textarea"
    />

    <!-- SelectBox using our new Bits UI component -->
    <div class="mb-4">
      <label for="formSelect" class="text-themeGray-800 mb-1.5 block text-sm font-medium">Selectbox</label>
      <SelectBox
        id="formSelect"
        bind:value={selectValue}
        options={selectOptions}
        showIcons={false}
        label="Select an option"
      />
    </div>

    <!-- Radio Buttons using RadioGroup and RadioButton -->
    <div class="mb-4">
      <fieldset>
        <legend class="text-themeGray-800 mb-1.5 block text-sm font-medium">Options</legend>
        <RadioGroup bind:value={radioValue} name="radioOptions">
          <RadioButton value="option1" label="Option 1" />
          <RadioButton value="option2" label="Option 2" />
        </RadioGroup>
      </fieldset>
    </div>

    <!-- Checkbox using our new Bits UI component -->
    <div class="mb-4">
      <CheckBox
        id="consentCheckbox"
        bind:checked={consentValue}
        label={`Souhlasím se zpracováním <a href="/" class="underline hover:no-underline">osobních údajů</a>`}
        name="consent"
      />
    </div>

    <div class="mt-6 flex justify-center">
      <Button label="Odeslat zprávu" rightIcon="chevron" iconSize="sm" type="submit" theme="secondary" />
    </div>
  </form>
</div>

<script lang="ts">
  import Button from '@/theme/Button/Button.svelte';
  import SelectBox from '@/theme/SelectBox/SelectBox.svelte';
  import CheckBox from '@/theme/CheckBox/CheckBox.svelte';
  import RadioGroup from '@/theme/RadioGroup/RadioGroup.svelte';
  import RadioButton from '@/theme/RadioButton/RadioButton.svelte';
  import Input from '@/theme/Input/Input.svelte';
  import TextArea from '@/theme/TextArea/TextArea.svelte';
  import { m } from '@paraglide/messages';

  let { title = m['form.title']({}) } = $props();

  let inputValue = $state('');
  let textareaValue = $state('');
  let selectValue = $state('');
  let radioValue = $state('option1');
  let consentValue = $state(false);

  // Select options
  const selectOptions = [
    { value: 'option1', label: m['form.select.options.option1']({}) },
    { value: 'option2', label: m['form.select.options.option2']({}) },
    { value: 'option3', label: m['form.select.options.option3']({}) }
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

<div
  class="mx-auto
  w-full"
>
  <h2
    class="mb-6
    text-2xl
    font-bold"
  >
    {title}
  </h2>
  <div
    class="bg-themeYellow-600 w-full
    max-w-[620px]
    rounded-xl p-6 drop-shadow-md
    md:p-10
    lg:p-12.5"
  >
    <form onsubmit={handleSubmit}>
      <!-- Input -->
      <Input
        id="formInput"
        bind:value={inputValue}
        placeholder={m['form.input.placeholder']({})}
        label={m['form.input.label']({})}
      />

      <!-- Textarea -->
      <TextArea
        id="formTextarea"
        bind:value={textareaValue}
        placeholder={m['form.textarea.placeholder']({})}
        rows={5}
        label={m['form.textarea.label']({})}
      />

      <!-- SelectBox using our new Bits UI component -->
      <div class="mb-4">
        <label
          for="formSelect"
          class="text-themeGray-800
          mb-1.5
          block
          text-xl
          font-medium">{m['form.select.label']({})}</label
        >
        <SelectBox
          id="formSelect"
          bind:value={selectValue}
          options={selectOptions}
          showIcons={false}
          label={m['form.select.placeholder']({})}
        />
      </div>

      <!-- Radio Buttons using RadioGroup and RadioButton -->
      <div class="mb-4">
        <fieldset>
          <legend
            class="text-themeGray-800
            mb-1.5
            block
            text-xl
            font-medium">{m['form.radio.label']({})}</legend
          >
          <RadioGroup bind:value={radioValue} name="radioOptions" orientation="horizontal">
            <RadioButton value="option1" label={m['form.radio.option1']({})} />
            <RadioButton value="option2" label={m['form.radio.option2']({})} />
          </RadioGroup>
        </fieldset>
      </div>

      <!-- Checkbox using our new Bits UI component -->
      <div class="mb-4">
        <CheckBox
          id="consentCheckbox"
          bind:checked={consentValue}
          label={m['form.checkbox.label']({})}
          name="consent"
        />
      </div>

      <div
        class="mt-6 flex
        justify-center"
      >
        <Button label={m['form.button']({})} rightIcon="chevron" iconSize="sm" type="submit" theme="secondary" />
      </div>
    </form>
  </div>
</div>

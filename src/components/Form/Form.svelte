<script lang="ts">
  import Button from '@/theme/Button/Button.svelte';

  let { title = 'Formulář' } = $props();

  let inputValue = $state('');
  let textareaValue = $state('');
  let selectValue = $state('');
  let radioValue = $state('option1');
  let consentValue = $state(false);

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

  function handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    inputValue = target.value;
  }

  function handleTextareaChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    textareaValue = target.value;
  }

  function handleSelectChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    selectValue = target.value;
  }

  function handleCheckboxChange(e: Event) {
    const target = e.target as HTMLInputElement;
    consentValue = target.checked;
  }
</script>

<div class="bg-themeYellow-400 mx-auto max-w-md rounded-xl p-6">
  <h2 class="mb-6 text-2xl font-bold">{title}</h2>

  <form onsubmit={handleSubmit}>
    <!-- Input -->
    <div class="mb-4">
      <label class="text-themeGray-800 mb-1.5 block text-sm font-medium">Input</label>
      <input
        class="border-themeGray-300 focus:ring-themeYellow-600 w-full rounded-lg border bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:outline-none"
        oninput={handleInputChange}
        placeholder="Enter your text here"
        value={inputValue}
      />
    </div>

    <!-- Textarea -->
    <div class="mb-4">
      <label class="text-themeGray-800 mb-1.5 block text-sm font-medium">Textarea</label>
      <textarea
        class="border-themeGray-300 focus:ring-themeYellow-600 w-full rounded-lg border bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:outline-none"
        oninput={handleTextareaChange}
        placeholder="Enter your message here"
        rows={5}
        value={textareaValue}
      ></textarea>
    </div>

    <!-- SelectBox -->
    <div class="mb-4">
      <label class="text-themeGray-800 mb-1.5 block text-sm font-medium">Selectbox</label>
      <div class="relative">
        <select
          class="border-themeGray-300 focus:ring-themeYellow-600 w-full appearance-none rounded-lg border bg-white px-4 py-3 pr-10 focus:border-transparent focus:ring-2 focus:outline-none"
          onchange={handleSelectChange}
          value={selectValue}
        >
          <option value="">Lorem ipsum</option>
        </select>
        <div class="text-themeGray-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Radio Buttons -->
    <div class="my-4">
      <div class="mb-2 flex gap-4">
        <div class="flex items-center">
          <input
            checked={radioValue === 'option1'}
            class="border-themeGray-300 text-themeYellow-600 focus:ring-themeYellow-500 h-4 w-4"
            name="radioOptions"
            onchange={() => (radioValue = 'option1')}
            type="radio"
            value="option1"
          />
        </div>
        <div class="flex items-center">
          <input
            checked={radioValue === 'option2'}
            class="border-themeGray-300 text-themeYellow-600 focus:ring-themeYellow-500 h-4 w-4"
            name="radioOptions"
            onchange={() => (radioValue = 'option2')}
            type="radio"
            value="option2"
          />
        </div>
      </div>
    </div>

    <!-- Checkbox -->
    <div class="mb-2 flex items-center">
      <input
        checked={consentValue}
        class="border-themeGray-300 text-themeYellow-600 focus:ring-themeYellow-500 h-4 w-4 rounded"
        onchange={handleCheckboxChange}
        type="checkbox"
      />
      <label class="text-themeGray-700 ml-2 text-sm">Souhlasím se zpracováním osobních údajů</label>
    </div>

    <div class="mt-6">
      <Button label="Odeslat zprávu" rightIcon="chevron" type="submit" />
    </div>
  </form>
</div>

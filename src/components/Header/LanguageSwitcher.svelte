<script lang="ts">
import { onMount } from 'svelte';
import enFlag from '../../assets/images/en.svg';
import czFlag from '../../assets/images/cz.svg';

interface Props {
  defaultLanguage?: 'en' | 'cz';
}

let { 
  defaultLanguage = 'en'
}: Props = $props();

let currentLanguage = $state(defaultLanguage);
let isOpen = $state(false);
let languageSwitcher: HTMLDivElement;

const languages = [
  { code: 'en', name: 'English', flagSrc: enFlag },
  { code: 'cz', name: 'Czech', flagSrc: czFlag }
];

function selectLanguage(langCode: 'en' | 'cz') {
  currentLanguage = langCode;
  isOpen = false;
}

$effect(() => {
  console.log(`Language changed to: ${currentLanguage}`);
});

let currentLanguageData = $derived(
  languages.find(lang => lang.code === currentLanguage) || languages[0]
);
</script>

<div 
  class="language-switcher relative group" 
  bind:this={languageSwitcher}
>
  <button 
    class="flex items-center cursor-pointer"
  >
    <img 
      src={currentLanguageData.flagSrc} 
      alt={currentLanguage}
      class="w-6 h-6 rounded-full"
    />
  </button>

  <div class="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 pt-4 z-50">
    <div class="relative bg-gradient-to-t theme-gradient-white rounded-xl shadow-md min-w-[110px] whitespace-nowrap">
      <!-- Chevron  -->
      <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-md"></div>
      
      <!-- Dropdown content -->
      <div class="relative z-10 overflow-hidden rounded-xl bg-white">
        {#each languages.filter(lang => lang.code !== currentLanguage) as language}
          <button
            class="flex items-center w-full px-4 py-2 text-sm cursor-pointer group/item"
            onclick={() => selectLanguage(language.code as 'en' | 'cz')}
          >
            <img 
              src={language.flagSrc} 
              alt={language.code}
              class="w-6 h-6 rounded-full mr-3"
            />
            <span class="whitespace-nowrap group-hover/item:underline">{language.name}</span>
          </button>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .language-switcher {
    user-select: none;
  }
</style>

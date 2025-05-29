<script lang="ts">
  import { m } from '@paraglide/messages';

  interface Props {
    title?: string;
    textContent?: string[];
    imagePath?: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    showImage?: boolean;
    showBulletList?: boolean;
  }

  let {
    title = m['text_image.title']({}),
    textContent = [m['text_image.paragraph1']({}), m['text_image.paragraph2']({})],
    imagePath = '/assets/images/textImage.png',
    imageAlt = m['text_image.image_alt']({}),
    imagePosition = 'left',
    showImage = true,
    showBulletList = true
  }: Props = $props();
</script>

<div class="mx-auto my-12 max-w-7xl px-4">
  <h2 class="theme-text-h3 mb-5 text-center font-bold md:mb-8 md:text-left">{title}</h2>
  <div
    class="flex flex-col items-start gap-5 md:flex-row md:items-start md:gap-7 lg:gap-10"
    class:md:flex-row-reverse={imagePosition === 'right'}
  >
    <!-- Image Content (only shown if showImage is true) -->
    {#if showImage}
      <div class="lg:max-w-auto mr-auto ml-auto w-full max-w-[500px] md:max-w-[320px] lg:flex-none lg:flex-shrink-0">
        <img src={imagePath} alt={imageAlt} class="h-auto w-full rounded-lg drop-shadow-md" />
      </div>
    {/if}

    <!-- Text Content -->
    <div class="w-full md:flex-1">
      {#each textContent as paragraph, index}
        <p class="theme-text-body1 text-themeGray-700 mb-4" class:font-bold={index === 0}>
          {@html paragraph}
        </p>
      {/each}

      {#if showBulletList}
        <ul class="theme-bullet-list text-themeGray-700 md:text-md mt-6 mb-8 text-sm font-medium lg:text-lg">
          <li>{m['text_image.bullet_list.item1']({})}</li>
          <li>
            {m['text_image.bullet_list.item2']({})}
            <ul class="text-themeGray-400 md:text-md text-xs font-normal">
              <li>{m['text_image.bullet_list.item2_sub1']({})}</li>
              <li>{m['text_image.bullet_list.item2_sub2']({})}</li>
              <li>{m['text_image.bullet_list.item2_sub3']({})}</li>
            </ul>
          </li>
          <li>{m['text_image.bullet_list.item3']({})}</li>
          <li>{m['text_image.bullet_list.item4']({})}</li>
          <li>{m['text_image.bullet_list.item5']({})}</li>
          <li>{m['text_image.bullet_list.item6']({})}</li>
        </ul>
      {/if}
    </div>
  </div>
</div>

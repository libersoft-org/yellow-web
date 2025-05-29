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
  <h2 class="mb-8 text-8xl font-bold">{title}</h2>
  <div class={`${imagePosition === 'right' ? 'flex' : 'flex flex-row-reverse'} items-start gap-10`}>
    <!-- Text Content -->
    <div class="flex-shrink">
      {#each textContent as paragraph, index}
        <p class="theme-text-body1 text-themeGray-700 mb-4 text-lg" class:font-bold={index === 0}>
          {@html paragraph}
        </p>
      {/each}

      {#if showBulletList}
        <ul class="theme-bullet-list text-themeGray-700 mt-6 mb-8 text-lg font-medium">
          <li>{m['text_image.bullet_list.item1']({})}</li>
          <li>
            {m['text_image.bullet_list.item2']({})}
            <ul class="text-themeGray-400 text-lg font-normal">
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

    <!-- Image Content (only shown if showImage is true) -->
    {#if showImage}
      <div class="flex-shrink-0">
        <img src={imagePath} alt={imageAlt} class="h-auto w-auto rounded-lg drop-shadow-md" />
      </div>
    {/if}
  </div>
</div>

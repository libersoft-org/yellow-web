<script lang="ts">
  import { m } from '@paraglide/messages';

  interface Props {
    textContent?: string;
    imagePath?: string;
    imageAlt?: string;
    title?: string;
    imagePosition?: 'left' | 'right';
  }

  let {
    textContent = m['text_image_highlighted.content']({}),
    imagePath = '/assets/images/ntb-image.png',
    imageAlt = m['text_image_highlighted.image_alt']({}),
    title = m['text_image_highlighted.title']({}),
    imagePosition = 'right'
  }: Props = $props();
</script>

<div class="theme-container m-auto mb-12">
  <div
    class={[
      'text-image-wrapper theme-gradient-radial-grey flex flex-col items-center justify-between rounded-3xl px-7.5 py-5 md:flex-row md:px-15 md:py-7 lg:py-10 lg:pr-4 lg:pl-20',
      imagePosition === 'left' ? 'flex-col-reverse md:flex-row-reverse' : ''
    ]}
  >
    <!-- Text Content -->
    <div class="mb-8 flex-1 md:mb-0">
      <h2 class="theme-text-h3 mb-4 font-bold">{title}</h2>
      <p class="theme-text-body1 text-themeGray-800 font-medium">{textContent}</p>
    </div>
    <!-- Image Content -->
    <div class="relative flex h-full w-full flex-1 justify-center">
      <div class="md:top-50% md:absolute md:left-0 md:translate-y-[-50%]">
        <img alt={imageAlt} class="h-auto max-w-full rounded-xl" src={imagePath} />
      </div>
    </div>
  </div>
</div>

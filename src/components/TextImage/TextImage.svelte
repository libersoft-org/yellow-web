<script lang="ts">
  interface Props {
    textContent?: string;
    imagePath?: string;
    imageAlt?: string;
    title?: string;
    imagePosition?: 'left' | 'right';
  }

  let {
    textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla ex in nisi molestie fringilla. Integer finibus dolor sapien, a venenatis sapien porttitor ut. Mauris non metus tincidunt, ornare turpis ac, accumsan dolor. Quisque non leo sit amet lorem vulputate vulputate sed quis dui. Fusce eleifend convallis nulla quis molestie. Cras rutrum nisl neque.`,
    imagePath = '/assets/images/ntb-image.png',
    imageAlt = 'Screenshot',
    title = 'Výrazný textový blok',
    imagePosition = 'right'
  }: Props = $props();
</script>

<div class="theme-container m-auto mb-12">
  <div
    class={[
      'text-image-wrapper rounded-3xl px-7.5 py-5 md:px-15 md:py-7 lg:px-20 lg:py-10',
      'flex flex-col items-center justify-between md:flex-row',
      imagePosition === 'left' ? 'flex-col-reverse md:flex-row-reverse' : ''
    ]}
    style="background: radial-gradient(ellipse at 50% 50%, #F8F9FF 0%, #EAECF7 100%);"
  >
    <!-- Text Content -->
    <div class="mb-8 flex-1 md:mr-8 md:mb-0">
      <h2 class="theme-text-h3 mb-4 font-bold">{title}</h2>
      <p class="theme-text-body1 text-themeGray-800">{textContent}</p>
    </div>
    <!-- Image Content -->
    <div class="flex flex-1 justify-center">
      <img alt={imageAlt} class="h-auto max-w-full rounded-xl" src={imagePath} />
    </div>
  </div>
</div>

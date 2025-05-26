<script lang="ts">
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
    title = 'Odstavce a vzhled obrázku',
    textContent = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla ex in nisi molestie fringilla. Integer finibus dolor sapien, a venenatis sapien porttitor ut. Mauris non metus tincidunt, ornare turpis ac, accumsan dolor. Quisque non leo sit amet lorem vulputate vulputate sed quis dui.',
      'Etiam lorem lacus, mattis eu cursus tempus, convallis et libero. Ut eget bibendum purus. Aliquam molestie, lacus in ullamcorper lobortis, ipsum est condimentum lorem, a auctor orci velit at nulla. Morbi accumsan pulvinar sapien vitae maximus. Aliquam porta sit amet odio vel condimentum. Morbi et augue eget enim vulputate auctor. Ut porta nibh, gravida quam et elementum nec, ornare a velit. Mauris elit quam, ultricies sit amet lectus eius, molestie congue nisi. Ut egestas diam justo, eu pretium magna vestibulum a. In vehicula, est quis mattis lobortis, elit ipsum posuere ipsum, non lobortis lorem, porttitor auctor nisl.'
    ],
    imagePath = '/assets/images/textImage.png',
    imageAlt = 'Phone Screenshot',
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
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Vestibulum fringilla ex in nisi molestie.
            <ul class="text-themeGray-400 text-lg font-normal">
              <li>Integer finibus dolor sapien, a venenatis sapien porttitor ut.</li>
              <li>Mauris non metus tincidunt, ornare turpis.</li>
              <li>Donec sollicitudin consectetur purus.</li>
            </ul>
          </li>
          <li>Suspendisse eget semper leo.</li>
          <li>Cras vitae feugiat turpis.</li>
          <li>Etiam suscipit viverra consequat.</li>
          <li>Mauris et est lectus in hendrerit ante ac felis blandit.</li>
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

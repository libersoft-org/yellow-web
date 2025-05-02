<script lang="ts">
	interface Props {
		children?: any;
	}

	let { children }: Props = $props();
</script>

<div class={['table']}>
	<table>
		{@render children?.()}
	</table>
</div>

<style>
	/* See https://tailwindcss.com/docs/functions-and-directives#reference-directive */
	@reference "../../app.css";

	.table :global {
			/* Head */
      thead th {
          @apply bg-gradient-to-t theme-gradient-yellow;
          @apply px-8 py-5;
          @apply text-xl;
			}

      thead th:first-child {
          @apply rounded-tl-2xl;
			}

      thead th:last-child {
          @apply rounded-tr-2xl;
			}

      /* Body */
			tbody th, tbody td {
          @apply px-8 py-4;
			}
      tbody th {
          @apply font-bold;
			}
			tbody tr:nth-child(even) td, tbody tr:nth-child(even) th {
          @apply bg-themeGray-100;
			}
			tbody tr:not(:last-child) td, tbody tr:not(:last-child) th {
          @apply border-b-1 border-b-themeGray-150;
			}
	}
</style>

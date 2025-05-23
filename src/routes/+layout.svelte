<script lang="ts" module>
	export const prerender = true;
</script>

<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

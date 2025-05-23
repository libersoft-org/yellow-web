<script module lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

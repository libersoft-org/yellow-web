<script lang="ts">
import HeaderItem from '@/components/Header/HeaderItem.svelte';
</script>

<div class="header flex border-t-4 border-themeYellow-600 bg-gradient-to-t theme-gradient-white rounded-bl-2xl rounded-br-2xl shadow-md">
	<div class="header__logo bg-gradient-to-t theme-gradient-yellow px-8 py-4 rounded-bl-2xl">
		<img src="/assets/images/yellow-logo.svg" alt="Yellow Logo" />
	</div>
	<nav class="header__nav flex items-center">
		<ul class="flex gap-4">
			<HeaderItem label="Home" href="/" active />
			<HeaderItem label="About" href="/">
				some more items <br />
				some more items <br />
				some more items <br />
				some more items <br />
			</HeaderItem>
			<HeaderItem label="Test" href="/">
				some more items <br />
				some more items <br />
				some more items <br />
				some more items <br />
			</HeaderItem>
			<HeaderItem label="Download" href="/" />
			<HeaderItem label="Comparison" href="/" />
		</ul>
	</nav>
</div>

<style>
    .header__logo {
        clip-path: ellipse(275px 195px at 5% 5%);
        width: 326px;
    }
</style>

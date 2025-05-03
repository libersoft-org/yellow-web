<script lang="ts">
import HeaderItem from '@/components/Header/HeaderItem.svelte';
import LanguageSwitcher from '@/components/Header/LanguageSwitcher.svelte';

type PositionType = 'static' | 'sticky' | 'fixed';
type WidthType = 'theme-container' | 'full-width';

interface Props {
	position?: PositionType;
	zIndex?: number;
	width?: WidthType;
}

let {
	position = 'static',
	zIndex = 50,
	width = 'theme-container'
}: Props = $props();

// Generate position classes
const positionClasses = $derived({
	'sticky top-0': position === 'sticky',
	'fixed top-0 left-0 right-0': position === 'fixed',
	'static': position === 'static'
});

// Generate width classes
const widthClasses = $derived({
	'theme-container mx-auto': width === 'theme-container',
	'w-full': width === 'full-width'
});
</script>

<div 
	class="header flex justify-between border-t-4 border-themeYellow-600 bg-gradient-to-t theme-gradient-white rounded-bl-2xl rounded-br-2xl shadow-md"
	class:sticky={position === 'sticky'} 
	class:top-0={position === 'sticky' || position === 'fixed'}
	class:fixed={position === 'fixed'} 
	class:left-0={position === 'fixed'} 
	class:right-0={position === 'fixed'}
	class:theme-container={width === 'theme-container'}
	class:mx-auto={width === 'theme-container'}
	class:w-full={width === 'full-width'}
	style="z-index: {zIndex};"
>
	<div class="flex">
		<div class="header__logo bg-gradient-to-t theme-gradient-yellow px-8 py-4 rounded-bl-2xl">
			<img src="/assets/images/yellow-logo.svg" alt="Yellow Logo" />
		</div>
		<nav class="header__nav flex items-center pl-12">
			<ul class="flex gap-4">
				<HeaderItem label="About" href="/">
					some more items <br />
					some more items <br />
					some more items <br />
					some more items <br />
				</HeaderItem>
				<HeaderItem label="Download" href="/" />
				<HeaderItem label="Documentation" href="/" />
				<HeaderItem label="FAQ" href="/" />
				<HeaderItem label="Contact" href="/" />
			</ul>
		</nav>
	</div>
	
	<div class="flex items-center pr-12">
		<LanguageSwitcher defaultLanguage="en" />
	</div>
</div>

<style>
	.header__logo {
		clip-path: ellipse(275px 195px at 5% 5%);
		width: 326px;
	}
</style>

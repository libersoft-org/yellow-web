<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Accordion from '@/theme/Accordion/Accordion.svelte';
	import AccordionItem from '@/theme/Accordion/AccordionItem.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/Accordion',
		component: Accordion,
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Accordion>
		<AccordionItem title="What is Lorem Ipsum?">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s.
		</AccordionItem>
		<AccordionItem title="Why do we use it?">
			It is a long established fact that a reader will be distracted by the readable content of a page when looking at
			its layout.
		</AccordionItem>
		<AccordionItem title="Where does it come from?">
			Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
			literature from 45 BC.
		</AccordionItem>
	</Accordion>
</Story>

<Story name="WithOpenItem">
	<Accordion>
		<AccordionItem open={true} title="What is Lorem Ipsum?">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s.
		</AccordionItem>
		<AccordionItem title="Why do we use it?">
			It is a long established fact that a reader will be distracted by the readable content of a page when looking at
			its layout.
		</AccordionItem>
	</Accordion>
</Story>

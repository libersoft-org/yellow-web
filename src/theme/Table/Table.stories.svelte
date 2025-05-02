<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Table from '@/theme/Table/Table.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Theme/Table',
		component: Table,
		tags: ['autodocs'],
		args: {}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">
	{#snippet children (args)}
		<Table {...args}>
			<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th>Row 1, Cell 1</th>
				<td>Row 1, Cell 2</td>
				<td>Row 1, Cell 3</td>
			</tr>
			<tr>
				<th>Row 2, Cell 1</th>
				<td>Row 2, Cell 2</td>
				<td>Row 2, Cell 3</td>
			</tr>
			<tr>
				<th>Row 3, Cell 1</th>
				<td>Row 3, Cell 2</td>
				<td>Row 3, Cell 3</td>
			</tr>
			<tr>
				<th>Row 4, Cell 1</th>
				<td>Row 4, Cell 2</td>
				<td>Row 4, Cell 3</td>
			</tr>
			<tr>
				<th>Row 5, Cell 1</th>
				<td>Row 5, Cell 2</td>
				<td>Row 5, Cell 3</td>
			</tr>
			<tr>
				<th>Row 6, Cell 1</th>
				<td>Row 6, Cell 2</td>
				<td>Row 6, Cell 3</td>
			</tr>
			<tr>
				<th>Row 7, Cell 1</th>
				<td>Row 7, Cell 2</td>
				<td>Row 7, Cell 3</td>
			</tr>
			</tbody>
		</Table>
	{/snippet}
</Story>



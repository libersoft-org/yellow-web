<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Table from '@/theme/Table/Table.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Theme/Table',
    component: Table,
    tags: ['autodocs'],
    args: {
      rounded: true
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">
  {#snippet children(args)}
    <Table {...args}>
      <thead>
        <tr>
          <th>Lorem ipsum</th>
          <th>Dolor</th>
          <th>Sit amet</th>
          <th>Rutrum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Lorem ipsum</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td>Sit amet</td>
          <td>3 500</td>
        </tr>
        <tr>
          <th>Lorem ipsum</th>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td>Sit amet</td>
          <td>2 100</td>
        </tr>
        <tr>
          <th>Lorem ipsum</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td>Sit amet</td>
          <td>5 000</td>
        </tr>
        <tr>
          <th>Lorem ipsum</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td>Sit amet</td>
          <td>3 500</td>
        </tr>
        <tr>
          <th>Lorem ipsum</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td>Sit amet</td>
          <td>2 100</td>
        </tr>
      </tbody>
    </Table>
  {/snippet}
</Story>

<Story name="Feature Table">
  {#snippet children(args)}
    <Table {...args}>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Implemented</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>AMTP protocol</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
        </tr>
        <tr>
          <th>DMTP protocol</th>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
        </tr>
        <tr>
          <th>Server - modularity</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
        </tr>
        <tr>
          <th>Client - modularity</th>
          <td class="text-center">
            <span class="status-check status-warning">✓</span>
          </td>
        </tr>
        <tr>
          <th>Encrypted connection</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
        </tr>
        <tr>
          <th class="text-themeGray-400">Client - encryption, signature<br />and login keys management</th>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
        </tr>
      </tbody>
    </Table>
  {/snippet}
</Story>

<Story name="Comparison Table">
  {#snippet children(args)}
    <Table {...args}>
      <thead>
        <tr>
          <th>Software</th>
          <th>Open source</th>
          <th>Distributed/<br />decentralized</th>
          <th>End-to-end<br />encryption</th>
          <th>Developed by</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Yellow</th>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td>LiberSoft, Liberland</td>
        </tr>
        <tr>
          <th>E-mail</th>
          <td>some software</td>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td>some software</td>
          <td>Jon Postel and Suzanne Sluizer, USA</td>
        </tr>
        <tr>
          <th>WhatsApp</th>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td class="text-center">
            <span class="status-check status-success">✓</span>
          </td>
          <td>Meta Platforms Inc., USA</td>
        </tr>
        <tr>
          <th>Messages<br />(RCS protocol)</th>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td>mobile operators</td>
          <td>in development</td>
          <td>Google LLC, USA / GSM Association, UK</td>
        </tr>
        <tr>
          <th>WeChat</th>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td>Tencent Holdings Ltd., China</td>
        </tr>
        <tr>
          <th>Facebook Messenger</th>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td class="text-center">
            <span class="status-check status-error">✕</span>
          </td>
          <td>Meta Platforms Inc., USA</td>
        </tr>
      </tbody>
    </Table>
  {/snippet}
</Story>

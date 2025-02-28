<script>
 import { goto } from '$app/navigation';
 import { product } from '../app.js';
 import BaseButton from '../components/base-button.svelte';
</script>

<h1>About {product}</h1>
<span class="bold">{product}</span> is a <span class="bold">decentralized</span>, <span class="bold">multifunctional communication application</span> designed to put you in control of your digital interactions. By combining <span class="bold">messaging</span>, <span class="bold">content creation</span> and <span class="bold">decentralized e-commerce</span> in one platform, it opens up a world of possibilities without forcing you to juggle multiple apps or services.
<h2>Key Features</h2>
<h3>One platform for everything</h3>
<div>From <span class="bold">messaging</span> and <span class="bold">content sharing</span> to <span class="bold">crypto wallets</span> and <span class="bold">e-commerce</span>, {product} brings all your needs under one login. Creators, for example, can share videos, host live streams, open an online store, or run a subscription service - all in one place.</div>
<h3>Multiplatform</h3>
<div>{product} is available on <span class="bold">Windows</span>, <span class="bold">MacOS</span>, <span class="bold">Linux</span>, <span class="bold">Android</span> and <span class="bold">iOS</span>. <span class="bold">Web</span> version is also available.</div>
<h3>Unique features</h3>
<div>Enjoy message widgets, peer-to-peer file transfer with no size limit in messages, chats in virtual 3D world, unique dating module, and much more! A complete list of features can be found <BaseButton onClick={() => goto('/features')}><span class="link">here</span></BaseButton>.</div>
<h3>Modularity</h3>
<div>Pick and choose the modules you need. Whether you want only the messenger or a full suite of crypto, social, and e-commerce tools, {product}'s modular design puts you in charge of your user experience.</div>
<h3>Interconnectivity</h3>
<div>Every module seamlessly integrates with the others, making it easy to switch between features and keep your digital life organized.</div>
<h3>Data Security & Encryption</h3>
<div>Protect your privacy with <span class="bold">end-to-end encryption</span>, <span class="bold">secure data transfer</span>, and <span class="bold">content signing</span>. Your information stays safe from prying eyes.</div>
<h3>Censorship resistance</h3>
<ul>
 <li><span class="bold">AMTP</span> (Advanced Mail Transfer Protocol) - A next-generation, partially censorship-resistant protocol where data is stored on end-user devices and distributed servers.</li>
 <li><span class="bold">DMTP</span> (Decentralized Mail Transfer Protocol) - An upcoming fully censorship-resistant protocol, eliminating central servers entirely and relying on decentralized storage.</li>
</ul>
<h3>Open platform with ongoing development</h3>
<div>Developers worldwide can create or integrate new modules, ensuring that {product} continually evolves. You can add or remove features from both client and server sides to match your needs - perfect for personal use, community platforms, or enterprise solutions.</div>
<h3>Smart home integration</h3>
<div>Seamlessly connect your IoT devices to {product}, creating a secure and convenient way to manage your smart home within the same trusted environment.</div>

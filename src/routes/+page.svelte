<script>
 import { goto } from '$app/navigation';
 import { product } from '../app.js';
 import BaseButton from '../components/base-button.svelte';
 import DownloadPlatform from '../components/download-platform.svelte';
</script>

<style>
 .home {
  display: flex;
  flex-direction: column;
  gap: 20px;
 }

 .panel {
  display: flex;
  gap: 20px;
 }

 .download {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*border: 1px solid #000;*/
 }

 .download .label {
  padding: 0 0 20px 0;
  font-size: 24px;
  font-weight: bold;
 }

 .download .buttons {
  display: flex;
  gap: 10px;
 }

 .panel .left,
 .panel .right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
 }

 .panel img {
  border-radius: 10px;
  max-width: 100%;
 }
</style>

<div class="home">
 <div class="panel">
  <div class="left">
   <img src="img/logo.svg" alt="Features" />
  </div>
  <div class="right">
   <h2>Welcome to Yellow</h2>
   <h3>One app, one account for everything you need!</h3>
   <ul>
    <li>Messaging</li>
    <li>Social media</li>
    <li>E-commerce</li>
    <li>Entertainment</li>
   </ul>
  </div>
 </div>

 <div class="download">
  <div class="label">Download Yellow</div>
  <div class="buttons">
   <DownloadPlatform link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/windows.svg" name="Windows" />
   <DownloadPlatform link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/macos.svg" name="macOS" />
   <DownloadPlatform link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/linux.svg" name="Linux" />
   <DownloadPlatform link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/android.svg" name="Android" />
   <DownloadPlatform link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/ios.svg" name="iOS" />
   <DownloadPlatform link="https://github.com/libersoft-org/yellow-client" img="img/platforms/web.svg" name="Web" />
   <DownloadPlatform link="https://github.com/libersoft-org?tab=repositories" img="img/platforms/github.svg" name="Source codes" />
  </div>
 </div>

 <div class="panel">
  <div class="left">
   <img src="img/background.webp" alt="Features" />
  </div>
  <div class="right">
   <h2>Key characteristics</h2>
   <h3>Cutting edge technology!</h3>
   <ul>
    <li>Distributed and decentralized network</li>
    <li>Privacy and security</li>
    <li>Open source</li>
    <li>Modularity</li>
   </ul>
  </div>
 </div>

 <div class="panel">
  <div class="left">
   <h2>Unique features</h2>
   <h3>Something extra!</h3>
   <ul>
    <li>Peer-to-peer file transfer with no size limit</li>
    <li>3D virtual world</li>
    <li>Unique dating</li>
    <li>... and much more</li>
   </ul>
  </div>
  <div class="right">
   <img src="img/background.webp" alt="Features" />
  </div>
 </div>

 <div class="panel">
  <div class="left">
   <img src="img/background.webp" alt="Features" />
  </div>
  <div class="right">
   <h2>Modularity</h2>
   <h3>Pick just the features you really use!</h3>
   <div>Whether you want only the messenger or a full suite of social, and e-commerce tools, Yellow's modular design puts you in charge of your user experience.</div>
  </div>
 </div>

 <div class="panel">
  <div class="left">
   <h2>Data Security & Encryption</h2>
   <h3>Protect your privacy and communicate safely!</h3>
   <ul>
    <li>Secure data transfer</li>
    <li>End-to-end encryption</li>
    <li>Content signing</li>
   </ul>
  </div>
  <div class="right">
   <img src="img/background.webp" alt="Features" />
  </div>
 </div>

 <div class="panel">
  <div class="left">
   <img src="img/background.webp" alt="Features" />
  </div>
  <div class="right">
   <h2>Censorship resistance</h2>
   <h3>Cutting edge communication protocols!</h3>
   <ul>
    <li>AMTP (Advanced Mail Transfer Protocol) - A next-generation, partially censorship-resistant protocol where data is stored on end-user devices and distributed servers.</li>
    <li>DMTP (Decentralized Mail Transfer Protocol) - An upcoming fully censorship-resistant protocol, eliminating central servers entirely and relying on decentralized storage.</li>
   </ul>
  </div>
 </div>

 <div class="panel">
  <div class="left">
   <h2>And much more</h2>
   <h3>Something extra!</h3>
   <ul>
    <li>Open platform with ongoing development - Developers worldwide can create or integrate new modules, ensuring that Yellow continually evolves. You can add or remove features from both client and server sides to match your needs - perfect for personal use, community platforms, or enterprise solutions.</li>
    <li>Smart home integration - Seamlessly connect your IoT devices to Yellow, creating a secure and convenient way to manage your smart home within the same trusted environment.</li>
   </ul>
  </div>
  <div class="right">
   <img src="img/background.webp" alt="Features" />
  </div>
 </div>

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
</div>

<script>
 import { goto } from '$app/navigation';
 import { product } from '../app.js';
 import BaseButton from '../components/base-button.svelte';
 import Item from '../components/item.svelte';
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

 .center {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*border: 1px solid #000;*/
 }

 .label {
  padding: 0 0 20px 0;
  font-size: 24px;
  font-weight: bold;
 }

 .buttons {
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
 <div class="center">
  <h2>Welcome to Yellow</h2>
  <h3>One app, one account, for everything you need!</h3>
  <div class="buttons">
   <Item background="#fd1" img="img/platforms/linux.svg" label="Instant messaging" />
   <Item background="#222" color="#fff" img="img/platforms/linux.svg" label="Social media" />
   <Item background="#fd1" img="img/platforms/linux.svg" label="E-commerce" />
   <Item background="#222" color="#fff" img="img/platforms/linux.svg" label="Entertainment" />
  </div>
 </div>

 <div class="center">
  <div class="label">Download Yellow</div>
  <div class="buttons">
   <Item hover={true} link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/windows.svg" label="Windows" />
   <Item hover={true} link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/macos.svg" label="macOS" />
   <Item hover={true} link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/linux.svg" label="Linux" />
   <Item hover={true} link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/android.svg" label="Android" />
   <Item hover={true} link="https://github.com/libersoft-org/yellow-client-native" img="img/platforms/ios.svg" label="iOS" />
   <Item hover={true} link="https://github.com/libersoft-org/yellow-client" img="img/platforms/web.svg" label="Web" />
   <Item hover={true} link="https://github.com/libersoft-org?tab=repositories" img="img/platforms/github.svg" label="Source codes" />
  </div>
 </div>

 <div class="center">
  <h2>Key characteristics</h2>
  <h3>Cutting edge technology!</h3>
  <div class="buttons">
   <Item background="#fd1" img="img/platforms/linux.svg" label="Distributed and decentralized network" />
   <Item background="#222" color="#fff" img="img/platforms/linux.svg" label="Privacy and security" />
   <Item background="#fd1" img="img/platforms/linux.svg" label="Open source" />
   <Item background="#222" color="#fff" img="img/platforms/linux.svg" label="Modularity" />
  </div>
 </div>

 <div class="center">
  <h2>Unique features</h2>
  <h3>Something extra!</h3>
  <div class="buttons">
   <Item background="#fd1" img="img/platforms/linux.svg" label="Peer-to-peer file transfer with no size limit" />
   <Item background="#222" color="#fff" img="img/platforms/linux.svg" label="3D virtual world" />
   <Item background="#fd1" img="img/platforms/linux.svg" label="Unique dating" />
  </div>
  <div>... and much more</div>
 </div>

 <div class="center">
  <h2>Modularity</h2>
  <h3>Pick just the features you really use!</h3>
  <div>Whether you want only the messenger or a full suite of social, and e-commerce tools, Yellow's modular design puts you in charge of your user experience.</div>
 </div>

 <div class="center">
  <h2>Data Security & Encryption</h2>
  <h3>Protect your privacy and communicate safely!</h3>
  <div class="buttons">
   <Item background="#fd1" img="img/platforms/linux.svg" label="Secure data transfer" />
   <Item background="#222" color="#fff" img="img/platforms/linux.svg" label="End-to-end encryption" />
   <Item background="#fd1" img="img/platforms/linux.svg" label="Content signing" />
  </div>
 </div>

 <div class="center">
  <h2>Censorship resistance</h2>
  <h3>Cutting edge communication protocols!</h3>
  <div class="buttons">
   <Item width="250px" background="#fd1" img="img/platforms/linux.svg" label="AMTP (Advanced Mail Transfer Protocol) - A next-generation, partially censorship-resistant protocol where data is stored on end-user devices and distributed servers." />
   <Item width="250px" background="#222" color="#fff" img="img/platforms/linux.svg" label="DMTP (Decentralized Mail Transfer Protocol) - An upcoming fully censorship-resistant protocol, eliminating central servers entirely and relying on decentralized storage." />
  </div>
 </div>

 <div class="center">
  <h2>And much more</h2>
  <h3>Something extra!</h3>
  <div class="buttons">
   <Item width="250px" background="#fd1" img="img/platforms/linux.svg" label="Open platform with ongoing development - Developers worldwide can create or integrate new modules, ensuring that Yellow continually evolves. You can add or remove features from both client and server sides to match your needs - perfect for personal use, community platforms, or enterprise solutions." />
   <Item width="250px" background="#222" color="#fff" img="img/platforms/linux.svg" label="Smart home integration - Seamlessly connect your IoT devices to Yellow, creating a secure and convenient way to manage your smart home within the same trusted environment." />
  </div>
 </div>
</div>

<script>
 import Item from '../components/item.svelte';
</script>

<style>
 .home {
  display: flex;
  flex-direction: column;
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
</style>

<div class="home">
 <div class="center">
  <h2>Welcome to Yellow</h2>
  <h3>One app, one account, for everything you need!</h3>
  <div class="buttons">
   <Item width="300px" background="#fd1" img="img/platforms/linux.svg" label="Messages - Highly innovative instant messaging. Includes unique features such as sending unlimited file sizes, widgets in messages, multipart messages, multiple topics within a conversation, message templates and much more." />
   <Item width="300px" background="#222" color="#fff" img="img/platforms/linux.svg" label="Social media - the platform offers advanced social media features such as video channels, forum, newsfeed, stories, events, virtual world, maps and more." />
  </div>
  <div class="buttons">
   <Item width="300px" background="#fd1" img="img/platforms/linux.svg" label="E-commerce - thanks to the integration of a crypto wallet that supports smart contracts, the platform offers advanced e-commerce features that are linked to the wallet. These include features such as: sending payments between users, making purchases in e-shops, marketplace and virtual chat, sending donations to specific purposes, supporting crowdfunding campaigns, selling video content within video channels, sending payments during live streams, topping up your own content, buying premium memberships, in-game payments and much more." />
   <Item width="300px" background="#222" color="#fff" img="img/platforms/linux.svg" label="Business tools - modules such as Calendar and Tasks, provide business users with an easy way to organise, share and support productivity in the work environment." />
  </div>
  <Item width="300px" background="#fd1" img="img/platforms/linux.svg" label="Entertainment - Last but not least, the platform also provides fun features such as dating and video games." />
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
   <Item width="300px" background="#fd1" img="img/platforms/linux.svg" label="Distributed and decentralized network - platform offers innovative network protocols AMTP and DMTP. AMTP (Advanced Mail Transfer Protocol) - A next-generation, partially censorship-resistant protocol where data is stored on end-user devices and distributed servers. DMTP (Decentralized Mail Transfer Protocol) - An upcoming fully censorship-resistant protocol, eliminating central servers entirely and relying on decentralized storage." />
   <Item width="300px" background="#222" color="#fff" img="img/platforms/linux.svg" label="Privacy and security - Protect your privacy and communicate safely! The platform emphasizes a high level of security, primarily through secure data transfer, end-to-end encryption and content digital signing, as well as providing simple and secure transfer of user's private keys across devices." />
  </div>
  <div class="buttons">
   <Item width="300px" background="#fd1" img="img/platforms/linux.svg" label="Open source - The client and server applications, as well as the entire set of modules, are released as open source. This ensures transparency and credibility of our project. Developers worldwide can create or integrate new modules, ensuring that the platform continually evolves." />
   <Item width="300px" background="#222" color="#fff" img="img/platforms/linux.svg" label="Modularity - Whether you want only the messenger or a full suite of social, and e-commerce tools, the platform's modular design puts you in charge of your user experience. Choose just the features you really use." />
  </div>
  <Item width="300px" background="#fd1" img="img/platforms/linux.svg" label="Smart home integration - Seamlessly connect your IoT devices to Yellow, creating a secure and convenient way to manage your smart home within the same trusted environment." />
 </div>
</div>

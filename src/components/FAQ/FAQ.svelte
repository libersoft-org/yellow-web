<script lang="ts">
  import Accordion from '@/theme/Accordion/Accordion.svelte';
  import AccordionItem from '@/theme/Accordion/AccordionItem.svelte';

  interface FAQItem {
    id: string;
    question: string;
    answer: string;
    isOpen?: boolean;
  }

  // Local variables for FAQ content
  const heading = 'Často kladené otázky';
  
  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "What is AMTP?",
      answer: "Advanced Mail Transfer Protocol (AMTP) is a new generation of e-mail network protocol that surpasses the limitations of traditional protocols such as SMTP, POP, and IMAP by utilizing new technologies and a modular concept. It fully replaces these protocols with its functionality and even significantly expands their usability thanks to its modular design. It also uses more modern, secure methods of real-time data transmission.",
      isOpen: true
    },
    {
      id: "faq-2",
      question: "What is Yellow?",
      answer: "Yellow is a modern email client that utilizes the AMTP protocol to provide a more secure, reliable, and feature-rich email experience compared to traditional email clients. It's designed with a focus on user privacy, speed, and ease of use."
    },
    {
      id: "faq-3",
      question: "Why is this software named \"Yellow\"?",
      answer: "The name Yellow was chosen to represent clarity, optimism, and visibility in email communications. Just as yellow is a vibrant and attention-grabbing color, our email client aims to make your important communications stand out and your email experience brighter."
    },
    {
      id: "faq-4",
      question: "Is Yellow Client backward compatible with classic e-mail protocols (SMTP, IMAP, POP3)?",
      answer: "Yes, Yellow Client is fully backward compatible with classic email protocols including SMTP, IMAP, and POP3. This ensures you can continue to access all your existing email accounts while also enjoying the advanced features offered by AMTP for supported accounts."
    }
  ];

  // Set the first item as default active
  const defaultActiveId = "faq-1";
</script>

{#snippet questionContent(item: FAQItem)}
  <AccordionItem id={item.id} title={item.question} open={item.isOpen}>
    {item.answer}
  </AccordionItem>
{/snippet}

<div class="container mx-auto">
  <h2 class="text-3xl font-bold text-center mb-8">{heading}</h2>
  <Accordion defaultActive={defaultActiveId}>
    {#each faqItems as item}
      {@render questionContent(item)}
    {/each}
  </Accordion>
</div>

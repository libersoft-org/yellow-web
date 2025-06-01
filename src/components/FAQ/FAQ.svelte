<script lang="ts">
  import Accordion from '@/theme/Accordion/Accordion.svelte';
  import AccordionItem from '@/theme/Accordion/AccordionItem.svelte';
  import { m } from '@paraglide/messages';

  interface FAQItem {
    id: string;
    question: string;
    answer: string;
    isOpen?: boolean;
  }

  // Local variables for FAQ content
  const heading = m['faq.heading']({});

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: m['faq.item1.question']({}),
      answer: m['faq.item1.answer']({}),
      isOpen: true
    },
    {
      id: 'faq-2',
      question: m['faq.item2.question']({}),
      answer: m['faq.item2.answer']({})
    },
    {
      id: 'faq-3',
      question: m['faq.item3.question']({}),
      answer: m['faq.item3.answer']({})
    },
    {
      id: 'faq-4',
      question: m['faq.item4.question']({}),
      answer: m['faq.item4.answer']({})
    }
  ];

  // Set the first item as default active
  const defaultActiveId = ['faq-1'];
</script>

{#snippet questionContent(item: FAQItem)}
  <AccordionItem id={item.id} title={item.question} open={item.isOpen}>
    {item.answer}
  </AccordionItem>
{/snippet}

<div
  class="theme-container
  mx-auto"
>
  <h2
    class="theme-text-h4
    mb-8
    text-center"
  >
    {heading}
  </h2>
  <Accordion defaultActive={defaultActiveId}>
    {#each faqItems as item}
      {@render questionContent(item)}
    {/each}
  </Accordion>
</div>

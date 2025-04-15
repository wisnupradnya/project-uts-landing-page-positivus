// src/app/components/Accor.tsx
import AccordionItem from "../Molecules/AccordionItem";

export default function Accor() {
  return (
    <div className="px-20 mt-10">
      <AccordionItem
        number="01"
        title="Consultation"
        content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <AccordionItem
        number="02"
        title="Research and Strategy Development"
        content="We will research your industry, competitors, and customer base to create an effective marketing strategy..."
      />
      <AccordionItem
        number="03"
        title="Implementation"
        content="We execute the plan using appropriate digital channels like SEO, PPC, social media, and email marketing."
      />
      <AccordionItem
        number="04"
        title="Monitoring and Optimization"
        content="We continuously track performance and optimize campaigns to ensure the best results."
      />
      <AccordionItem
        number="05"
        title="Reporting and Communication"
        content="You receive detailed reports on key metrics and regular communication on progress and adjustments."
      />
      <AccordionItem
        number="06"
        title="Continual Improvement"
        content="We refine our strategy based on results and feedback to ensure long-term success."
      />
    </div>
  );
}

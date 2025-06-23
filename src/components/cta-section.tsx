import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ReactNode } from "react";

interface Faq {
    question: string;
    answer: ReactNode;
}

interface CtaContent {
    title: string;
    faqs: Faq[];
}

interface CtaSectionProps {
    content: CtaContent;
}

export default function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-headline text-center mb-12">
          {content.title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
            {content.faqs.map(faq => (
                <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PiggyBank, Recycle, ShieldCheck } from "lucide-react";

interface Benefit {
    title: string;
    description: string;
}

interface JournalContent {
    title: string;
    benefits: Benefit[];
    outro: string;
}

interface JournalSectionProps {
    content: JournalContent;
}

const benefitIcons = [PiggyBank, Recycle, ShieldCheck];

export default function JournalSection({ content }: JournalSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
                <Card key={benefit.title} className="bg-card hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardHeader className="items-center p-8">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                       <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
                    <CardDescription className="pt-2 text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
            )
          })}
        </div>
        <p className="mt-12 text-xl text-center font-headline text-primary">
            {content.outro}
        </p>
      </div>
    </section>
  );
}

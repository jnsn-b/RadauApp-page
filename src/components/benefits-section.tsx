import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { Car, Eye, Headphones, PiggyBank, Recycle, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface Benefit {
    title: string;
    description: string;
    icon: 'Car' | 'Eye' | 'Headphones' | 'PiggyBank' | 'Recycle' | 'ShieldCheck';
}

export interface BenefitsContent {
    title: string;
    description: string;
    benefits: Benefit[];
}

interface BenefitsSectionProps {
    content: BenefitsContent;
    ctaLink: string;
}

const benefitIcons: { [key: string]: LucideIcon } = {
    Car,
    Eye,
    Headphones,
    PiggyBank,
    Recycle,
    ShieldCheck,
};

export default function BenefitsSection({ content, ctaLink }: BenefitsSectionProps) {
  const appStoreLink = "https://apps.apple.com/de/app/radauapp/id6745492017?l=en-GB";
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {content.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {content.description}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.icon];
            return (
                <Card key={benefit.title} className="bg-card hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardHeader className="items-center p-8">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                       {Icon && <Icon className="h-10 w-10 text-primary" />}
                    </div>
                    <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
                    <CardDescription className="pt-2 text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
            <Link href={appStoreLink} className="text-primary hover:underline text-lg font-semibold">
                {ctaLink}
            </Link>
        </div>
      </div>
    </section>
  );
}

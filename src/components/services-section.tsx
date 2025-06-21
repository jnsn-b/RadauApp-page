import { Music, Podcast, Radio } from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface ServicesContent {
    title: string;
    description1: string;
    features: Feature[];
    description2: string;
}

interface ServicesSectionProps {
    content: ServicesContent;
}

const featureIcons = [Music, Podcast, Radio];

export default function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          {content.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {content.description1}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {content.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
                <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">{feature.description}</p>
                </div>
            )
          })}
        </div>
        <p className="mt-12 text-lg text-muted-foreground max-w-3xl mx-auto">
          {content.description2}
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

interface HeroContent {
  subtitle: string;
  description: string;
  imageAlt: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="text-center py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter text-primary">
          RadauApp
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight mt-2">
          {content.subtitle}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {content.description}
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto">
        <Image
          src="https://placehold.co/1200x800.png"
          alt={content.imageAlt}
          width={1200}
          height={800}
          className="rounded-2xl shadow-2xl"
          data-ai-hint="kids music app iphone"
        />
      </div>
    </section>
  );
}

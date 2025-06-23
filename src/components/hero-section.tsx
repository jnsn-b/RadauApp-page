'use client';

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <section className="text-center py-16 md:py-24 px-4">
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
      <div className="mt-12 max-w-6xl mx-auto">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={`/${index + 1}.jpg`}
                    alt={`${content.imageAlt} Screenshot ${index + 1}`}
                    width={1290}
                    height={2796}
                    className="rounded-2xl shadow-2xl"
                    data-ai-hint="app screenshot"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

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

const AppStoreButton = () => (
  <a href="#" className="inline-block hover:opacity-90 transition-opacity" title="Download on the App Store">
    <svg width="150" height="50" viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="150" height="50" rx="7" ry="7" fill="#000000"/>
      <g fill="#FFFFFF">
        <path d="M28.8,35.8c-2-2.2-4.9-2.3-7.1-0.2c-1.9,1.8-3.4,5.3-3.4,5.3s1.5-2.1,3.5-2.1c2,0,4.3,2,4.3,2s-2.6,2.2-2.6,5.6 c0,3.3,2.9,5.2,5.7,5.1c1.5-0.1,3.5-1.1,4.6-2.2c1-1,1.6-2.6,1.6-2.6s-1.4,1-2.7,1c-1.4,0-3.1-1.2-3.1-3.2 c0-2.8,3-4.3,5.9-4.2c0.6,0,1.2,0.1,1.9,0.2C32.1,36.5,30.8,34,28.8,35.8z M26.5,31c0.9-1.1,1.5-2.6,1.4-4.1 c-1.5,0.1-3.1,1-4.1,2.1c-0.9,1-1.8,2.7-1.5,4.1C23.6,33.2,25.4,32.2,26.5,31z"/>
        <text x="88" y="21" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" textAnchor="middle">Download on the</text>
        <text x="88" y="38" fontFamily="Helvetica-Bold, Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle">App Store</text>
      </g>
    </svg>
  </a>
);

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
        <div className="mt-8">
          <AppStoreButton />
        </div>
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
                    src={`https://placehold.co/1290x2796.png`}
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

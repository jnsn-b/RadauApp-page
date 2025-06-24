'use client';

import Image from "next/image";
import { ListMusic, ImageUp, PlusCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Feature {
    text: string;
}

interface WorkContent {
    title: string;
    description: string;
    features: Feature[];
    imageAlt: string;
}

interface WorkSectionProps {
    content: WorkContent;
}

const featureIcons = [ListMusic, ImageUp, PlusCircle];

export default function WorkSection({ content }: WorkSectionProps) {
  const [imageOpacity, setImageOpacity] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageContainerRef.current) return;

      const rect = imageContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const imageCenterY = rect.top + rect.height / 2;
      
      const transitionZoneHeight = viewportHeight / 2;
      const transitionStartsAt = viewportHeight / 2 + transitionZoneHeight / 2;
      const transitionEndsAt = viewportHeight / 2 - transitionZoneHeight / 2;

      const progressRaw = (transitionStartsAt - imageCenterY) / (transitionStartsAt - transitionEndsAt);
      
      const progress = Math.max(0, Math.min(1, progressRaw));
      
      setImageOpacity(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {content.description}
          </p>
          <ul className="mt-6 space-y-4">
            {content.features.map((feature, index) => {
                 const Icon = featureIcons[index];
                 return (
                     <li key={feature.text} className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-lg flex-1">{feature.text}</span>
                     </li>
                 )
            })}
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
            <div ref={imageContainerRef} className="relative w-full max-w-[500px] aspect-square mx-auto">
              <Image
                src="/kid.webp"
                alt={content.imageAlt}
                fill
                className="rounded-2xl shadow-xl transition-opacity duration-500 ease-in-out object-cover"
                style={{ opacity: 1 - imageOpacity }}
                data-ai-hint="child using tablet"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                src="/usage.webp"
                alt="App usage screen"
                fill
                className="rounded-2xl shadow-xl transition-opacity duration-500 ease-in-out object-cover"
                style={{ opacity: imageOpacity }}
                data-ai-hint="app usage dashboard"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
        </div>
      </div>
    </section>
  );
}

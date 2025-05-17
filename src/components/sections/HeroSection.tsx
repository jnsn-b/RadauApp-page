import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          RadauApp
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
          Die nachhaltige Kinder-Jukebox. Mach aus deinem alten iPhone ein smartes Musikgerät für Kinder – ganz ohne Lesen, aber mit voller Kontrolle im Elternbereich.
        </p>
        <div className="relative mx-auto w-full max-w-2xl h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl mb-12">
          <Image
            src="https://placehold.co/800x500.png"
            alt="RadauApp Interface Mockup"
            layout="fill"
            objectFit="cover"
            data-ai-hint="kids music app interface"
            className="transform hover:scale-105 transition-transform duration-300"
          />
           <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white opacity-90">So einfach, so smart!</h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="#what-is-radauapp">
              Mehr erfahren <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Link href="https://apps.apple.com/de/app/radauapp/id6745492017" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image
              // Ensure this image is placed in 'public/images/download-application-button-apple-app-store-free-vector.jpg'
              src="/images/download-application-button-apple-app-store-free-vector.jpg" 
              alt="Download on the App Store"
              width={250}
              height={83}
              // You can remove data-ai-hint if you no longer need it
              // data-ai-hint="app store badge" 
              className="h-auto transition-transform hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

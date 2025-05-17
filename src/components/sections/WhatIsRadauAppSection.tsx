import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Mic, Radio, Smartphone, Smile, ShieldCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Smartphone,
    title: "Nachhaltige Alternative",
    description: "Du hast noch ein altes iPhone 6s oder neuer zuhause? Perfekt! Mit RadauApp machst du daraus eine kinderleichte Musikbox.",
    image: "/images/Musik_DE Small.jpg",
  },
  {
    icon: Music,
    title: "Apple Music & MP3s",
    description: "Greife auf die riesige Bibliothek von Apple Music zu oder spiele deine eigenen MP3-Dateien ab.",
    image: "/images/music-notes-playlist-DE.jpg",
  },
  {
    icon: Mic,
    title: "Lieblings-Podcasts",
    description: "Integriere die spannendsten und lehrreichsten Podcasts für Kinder.",
    image: "/images/podcast-microphone-kids-DE.jpg",
  },
  {
    icon: Radio,
    title: "Kindgerechtes Webradio",
    description: "Sicher ausgewählte Webradio-Sender, die speziell für Kinder geeignet sind.",
    image: "/images/radio-children-music-DE.jpg",
  },
  {
    icon: Smile,
    title: "Kinderleichte Bedienung",
    description: "Bewusst einfach gehalten – ganz ohne Lesekenntnisse. Große Kacheln, intuitive Icons und keine Ablenkung. Einfach tippen – Musik läuft!",
    image: "/images/child-using-tablet-DE.jpg",
  },
];


export default function WhatIsRadauAppSection() {
  return (
    <section id="what-is-radauapp" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Was ist die RadauApp?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Die RadauApp verwandelt dein altes iPhone in eine vielseitige und sichere Musikbox für deine Kinder. Entdecke die Kernfunktionen:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image src={feature.image} alt={feature.title} layout="fill" objectFit="cover" />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <feature.icon className="h-8 w-8 text-secondary mr-3" />
                  <CardTitle className="text-xl font-semibold text-secondary">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

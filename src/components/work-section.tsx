import Image from "next/image";
import { ListMusic, ImageUp, PlusCircle } from "lucide-react";

const parentFeatures = [
    {
        icon: ListMusic,
        text: "Medien verwalten (Playlists, Podcasts, Radiosender)"
    },
    {
        icon: ImageUp,
        text: "Coverbilder ändern"
    },
    {
        icon: PlusCircle,
        text: "Inhalte hinzufügen oder löschen"
    }
]

export default function WorkSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Elternmodus inklusive
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Im geschützten Elternbereich kannst du alles kindersicher hinter einem einfachen Zugangsschutz verwalten:
          </p>
          <ul className="mt-6 space-y-4">
            {parentFeatures.map(feature => (
                 <li key={feature.text} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg flex-1">{feature.text}</span>
                 </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="https://placehold.co/500x600.png"
              alt="Elternmodus in der RadauApp"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl"
              data-ai-hint="parental control app dashboard"
            />
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlidersHorizontal, Image as ImageIcon, PlusCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";

const parentFeatures = [
  {
    icon: SlidersHorizontal,
    title: "Medien verwalten",
    description: "Organisiere Playlists, Podcasts und Radiosender einfach und übersichtlich.",
  },
  {
    icon: ImageIcon,
    title: "Coverbilder ändern",
    description: "Personalisiere das Aussehen mit eigenen Coverbildern für Alben und Playlists.",
  },
  {
    icon: PlusCircle,
    title: "Inhalte hinzufügen/löschen",
    description: "Füge neue Musik und Podcasts hinzu oder entferne Inhalte, die nicht mehr relevant sind.",
  },
  {
    icon: ShieldCheck,
    title: "Kindersicherer Zugang",
    description: "Alle Einstellungen sind durch einen einfachen, aber effektiven Zugangsschutz gesichert.",
  },
];

export default function ParentModeSection() {
  return (
    <section id="parent-mode" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">👨‍👩‍👧‍👦 Elternmodus inklusive</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Im geschützten Elternbereich hast du die volle Kontrolle über die Inhalte und Einstellungen der RadauApp:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {parentFeatures.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <feature.icon className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-xl font-semibold text-primary">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Image 
              src="https://placehold.co/700x400.png" 
              alt="Elternmodus Interface" 
              width={700} 
              height={400} 
              className="rounded-lg shadow-xl mx-auto"
              data-ai-hint="parental control app"
            />
        </div>
      </div>
    </section>
  );
}

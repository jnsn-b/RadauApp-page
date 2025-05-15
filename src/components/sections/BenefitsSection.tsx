import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Recycle, Lock } from "lucide-react";

const benefits = [
  {
    icon: Coins,
    title: "Spare Geld",
    description: "Verzichte auf teure Spezial-Hardware wie TonieBox & Co. Nutze, was du schon hast!",
    bgColor: "bg-primary/10",
    textColor: "text-primary"
  },
  {
    icon: Recycle,
    title: "Sei nachhaltig",
    description: "Gib alten Geräten ein neues Leben, statt sie wegzuwerfen. Gut für die Umwelt!",
    bgColor: "bg-secondary/10",
    textColor: "text-secondary"
  },
  {
    icon: Lock,
    title: "Volle Kontrolle & Datenschutz",
    description: "Behalte die Hoheit über die Daten deiner Kinder. Keine Cloudbindung, volle Privatsphäre.",
    bgColor: "bg-accent/10",
    textColor: "text-accent" // Changed from text-accent-foreground
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">🌱 Warum RadauApp?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecke die Vorteile, die RadauApp dir und deiner Familie bietet:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${benefit.bgColor}`}>
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full ${benefit.bgColor === 'bg-accent/10' ? 'bg-accent/20' : benefit.bgColor} inline-block mb-4`}>
                  <benefit.icon className={`h-12 w-12 ${benefit.textColor}`} />
                </div>
                <CardTitle className={`text-2xl font-semibold ${benefit.textColor}`}>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
            <p className="text-2xl font-semibold text-foreground">RadauApp – weil gute Musik nachhaltiger sein kann.</p>
        </div>
      </div>
    </section>
  );
}

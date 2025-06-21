import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PiggyBank, Recycle, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: PiggyBank,
    title: "Kosten sparen",
    description: "Spare dir teure Spezial-Hardware wie TonieBox & Co. und nutze, was du schon hast.",
  },
  {
    icon: Recycle,
    title: "Nachhaltig",
    description: "Gib deinem alten iPhone ein zweites Leben, statt es in der Schublade verstauben zu lassen oder wegzuwerfen.",
  },
  {
    icon: ShieldCheck,
    title: "Sicher & Privat",
    description: "Volle Kontrolle über die Inhalte und keine Cloudbindung. Deine Daten bleiben bei dir.",
  },
];

export default function JournalSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center">
          Warum RadauApp?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="bg-card hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader className="items-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                   <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
                <CardDescription className="pt-2 text-base">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="mt-12 text-xl text-center font-headline text-primary">
            RadauApp – weil gute Musik nachhaltiger sein kann.
        </p>
      </div>
    </section>
  );
}

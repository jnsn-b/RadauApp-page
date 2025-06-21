import { Music, Podcast, Radio } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Apple Music & eigene MP3s",
    description: "Greife auf die riesige Mediathek von Apple Music zu oder spiele deine eigenen MP3-Dateien ab.",
  },
  {
    icon: Podcast,
    title: "Lieblings-Podcasts",
    description: "Binde die Lieblings-Hörspiele und Podcasts deiner Kinder direkt in die App ein.",
  },
  {
    icon: Radio,
    title: "Kindgerechtes Webradio",
    description: "Füge sichere und unterhaltsame Webradio-Sender für Kinder hinzu.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Was ist die RadauApp?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Die nachhaltige Alternative zur ToniBox. Du hast noch ein altes iPhone 6s oder neuer zuhause? Perfekt! Mit RadauApp machst du daraus eine kinderleichte Musikbox für deine Kleinen.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg text-muted-foreground max-w-3xl mx-auto">
          Die Bedienung ist bewusst einfach gehalten – ganz ohne Lesekenntnisse. Große Kacheln, intuitive Icons und keine Ablenkung. Einfach tippen – Musik läuft!
        </p>
      </div>
    </section>
  );
}

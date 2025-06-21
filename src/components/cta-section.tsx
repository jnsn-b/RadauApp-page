import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Wie sperre ich das iPhone, dass nur noch eine App verwendbar ist?",
        answer: "Mit der iOS-Funktion „Geführter Zugriff“ (unter Einstellungen > Bedienungshilfen). Damit kann das Gerät auf die RadauApp beschränkt werden. Apple bietet hierzu eine offizielle Anleitung."
    },
    {
        question: "Wie verwalte ich die Playlisten?",
        answer: "Die Musikplaylists werden in iTunes bzw. der Apple Music App verwaltet. Dort können Lieder in Playlisten abonniert und verwaltet werden. Die RadauApp ruft diese Playlisten ab und stellt diese kindgerecht dar. Im Elternmodus kannst du die Erscheinungsbilder der Playlisten bearbeiten."
    },
    {
        question: "Wie kann ich eigene Musik nutzen?",
        answer: "Du kannst eigene MP3-Dateien über iTunes auf deinem Mac oder Computer mit deinem Handy synchronisieren. Sobald die Songs oder Hörspiele verfügbar sind, können sie über die RadauApp gesteuert werden."
    },
    {
        question: "Geht auch Spotify?",
        answer: "Derzeit leider nicht. RadauApp unterstützt Apple Music und lokale Dateien, nicht aber Spotify, da sich Spotify nicht über eine externe App steuern lässt."
    }
];

export default function CtaSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-headline text-center mb-12">
          Häufige Fragen
        </h2>
        <Accordion type="single" collapsible className="w-full">
            {faqs.map(faq => (
                <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Wie sperre ich das iPhone, dass nur noch eine App verwendbar ist?",
    answer:
      "Du kannst die Funktion \"Geführter Zugriff\" (Guided Access) in den iOS-Einstellungen aktivieren. Gehe zu Einstellungen > Bedienungshilfen > Geführter Zugriff. Einmal eingerichtet, kannst du den geführten Zugriff mit einem dreifachen Klick auf die Seitentaste (oder Home-Taste bei älteren Modellen) starten und beenden. Dies sperrt das iPhone auf die aktuell geöffnete App (RadauApp).",
  },
  {
    question: "Wie verwalte ich die Playlisten?",
    answer:
      "Im geschützten Elternbereich der RadauApp findest du eine intuitive Oberfläche, um Playlists zu erstellen, zu bearbeiten und Lieder hinzuzufügen oder zu entfernen. Du kannst auch die Reihenfolge der Lieder anpassen.",
  },
  {
    question: "Wie kann ich eigene Musik nutzen?",
    answer:
      "RadauApp unterstützt das Abspielen von MP3-Dateien, die auf dem iPhone gespeichert sind. Im Elternbereich kannst du Ordner auswählen, aus denen die Musik importiert werden soll. Stelle sicher, dass die Musikdateien über iTunes oder die Dateien-App auf das Gerät übertragen wurden.",
  },
  {
    question: "Geht auch Spotify?",
    answer:
      "Aktuell konzentriert sich RadauApp auf die Integration mit Apple Music und eigenen MP3-Dateien, um eine geschlossene und kindersichere Umgebung zu gewährleisten. Eine Spotify-Integration ist derzeit nicht verfügbar.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">❓ Häufige Fragen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier findest du Antworten auf die am häufigsten gestellten Fragen zur RadauApp.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-border">
              <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

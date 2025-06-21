import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-headline">
          Let's build something great together
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/80">
          Have a project in mind? We'd love to hear about it.
        </p>
        <Button variant="secondary" size="lg" className="mt-8">
          Let's talk
        </Button>
      </div>
    </section>
  );
}

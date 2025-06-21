import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Websites & Apps",
    description: "We create beautiful and functional websites and applications, tailored to your needs.",
  },
  {
    title: "Strategy & Branding",
    description: "We help you define your brand and create a solid strategy for long-term success.",
  },
  {
    title: "Support & Maintenance",
    description: "We provide ongoing support and maintenance to keep your product running smoothly.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center">
          What we do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

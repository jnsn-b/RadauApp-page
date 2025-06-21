import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Project Alpha",
    category: "Web Design",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "abstract modern"
  },
  {
    title: "Project Beta",
    category: "Mobile App",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "technology interface"
  },
  {
    title: "Project Gamma",
    category: "Branding",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "creative logo"
  },
];

export default function WorkSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Selected Work
          </h2>
          <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
            View all work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group border-border hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.hint}
                />
              </div>
              <CardContent className="p-4 bg-card">
                <h3 className="text-lg font-bold font-headline">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

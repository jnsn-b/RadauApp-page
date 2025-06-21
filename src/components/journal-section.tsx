import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const posts = [
  {
    title: "The value of design systems",
    date: "June 14, 2024",
    href: "#"
  },
  {
    title: "How to build a brand that lasts",
    date: "May 28, 2024",
    href: "#"
  },
  {
    title: "Our process for building digital products",
    date: "April 1, 2024",
    href: "#"
  },
];

export default function JournalSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center">
          From our journal
        </h2>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={post.title}>
              <Link href={post.href} className="group">
                <div className="flex justify-between items-center py-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold font-headline group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">{post.date}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                </div>
              </Link>
              {index < posts.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

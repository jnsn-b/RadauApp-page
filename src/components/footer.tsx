import Link from "next/link";
import { Volume2 } from "lucide-react";

interface FooterContent {
    tagline: string;
    contact: string;
    location: string;
    imprint: string;
    privacy: string;
    copy: string;
}

interface FooterProps {
    content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
                <Volume2 className="h-6 w-6" />
                RadauApp
            </Link>
            <p className="text-muted-foreground">{content.tagline}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">{content.contact}</h4>
            <a href="mailto:radau.app@team-becker.net" className="block text-muted-foreground hover:text-primary">
              radau.app@team-becker.net
            </a>
          </div>
           <div className="space-y-2">
            <h4 className="font-semibold font-headline">{content.location}</h4>
            <p className="text-muted-foreground">Reilingen, DE</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} RadauApp. {content.copy}</p>
            <nav className="flex gap-x-6">
              <Link href="/impressum" className="hover:text-primary transition-colors">{content.imprint}</Link>
              <Link href="/datenschutz" className="hover:text-primary transition-colors">{content.privacy}</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Twitter, Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-headline text-primary">Radau</h3>
            <p className="text-muted-foreground">A digital agency.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Contact</h4>
            <a href="mailto:hello@radau.app" className="block text-muted-foreground hover:text-primary">
              hello@radau.app
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Follow us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Dribbble className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Radau. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

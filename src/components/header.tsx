import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
      <Link href="/" className="text-2xl font-bold font-headline text-primary">
        Radau Recreation
      </Link>
      <Button>Let's talk</Button>
    </header>
  );
}

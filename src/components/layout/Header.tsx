import Link from 'next/link';
import { Music2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Music2 size={28} />
          <span>RadauApp</span>
        </Link>
        <nav>
          {/* Future navigation links can go here */}
        </nav>
      </div>
    </header>
  );
}

"use client";

import { Volume2, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const GermanFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-auto rounded-sm">
      <rect width="5" height="1" y="0" fill="#000000"/>
      <rect width="5" height="1" y="1" fill="#DD0000"/>
      <rect width="5" height="1" y="2" fill="#FFCE00"/>
    </svg>
);

const UKFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-auto rounded-sm">
      <rect fill="#00247d" width="60" height="30"/>
      <path d="M0,0L60,30M60,0L0,30" stroke="#ffffff" strokeWidth="6"/>
      <path d="M0,0L60,30M60,0L0,30" stroke="#cf142b" strokeWidth="4"/>
      <path d="M0,15h60M30,0v30" stroke="#ffffff" strokeWidth="10"/>
      <path d="M0,15h60M30,0v30" stroke="#cf142b" strokeWidth="6"/>
    </svg>
);

const AppStoreButton = () => (
  <a href="https://apps.apple.com/de/app/radauapp/id6745492017?l=en-GB" className="inline-block hover:opacity-90 transition-opacity" title="Download on the App Store">
    <Image
      src="/AppStoreButton.svg"
      alt="Download on the App Store"
      width={120}
      height={40}
      priority
    />
  </a>
);

type Language = "de" | "en";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {

  return (
    <header className="py-4 px-4 md:px-8 lg:px-16 flex justify-between items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
        <Volume2 className="h-7 w-7" />
        RadauApp
      </Link>

      <div className="hidden md:block">
        <AppStoreButton />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            {language === 'de' ? <GermanFlag /> : <UKFlag />}
            <span className="uppercase">{language}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setLanguage('de')} className="gap-2 cursor-pointer">
            <GermanFlag />
            <span>Deutsch</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setLanguage('en')} className="gap-2 cursor-pointer">
            <UKFlag />
            <span>English</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

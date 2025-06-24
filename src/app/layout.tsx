import type { Metadata } from 'next';
import { Inter, Kalam } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-kalam',
});

// IMPORTANT: Please replace this with your actual domain.
const siteUrl = "https://radau.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | RadauApp',
    default: 'RadauApp - Die nachhaltige Kinder-Jukebox',
  },
  description: 'Mach aus deinem alten iPhone eine nachhaltige Musikbox für Kinder. Die RadauApp ist die smarte Alternative zur Toniebox – ganz ohne Lesen, aber mit voller Kontrolle im Elternbereich.',
  keywords: ["Kinder Jukebox", "Musikbox Kinder", "Toniebox Alternative", "Hörspielbox", "Kinder-Hörspiele", "Hörbuch App Kinder", "Kinderlieder App", "Kindermusik-App", "Kinder-App", "Kinder-Podcasts", "nachhaltig", "Upcycling iPhone", "altes iPhone", "Apple Music"],
  creator: 'RadauApp',
  authors: [{ name: 'RadauApp', url: siteUrl }],
  icons: {
    icon: '/RadauAppLogo.png',
    shortcut: '/RadauAppLogo.png',
    apple: '/RadauAppLogo.png',
  },
  openGraph: {
    title: 'RadauApp - Die nachhaltige Kinder-Jukebox',
    description: 'Verwandle dein altes iPhone in eine sichere & nachhaltige Musikbox für Kinder. Die smarte Alternative zur Toniebox.',
    url: siteUrl,
    siteName: 'RadauApp',
    images: [
      {
        url: '/og-image.png', // IMPORTANT: Create a file named og-image.png (1200x630px) in your /public folder
        width: 1200,
        height: 630,
        alt: 'RadauApp auf einem iPhone in einer verspielten Umgebung'
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RadauApp - Die nachhaltige Kinder-Jukebox',
    description: 'Verwandle dein altes iPhone in eine sichere & nachhaltige Musikbox für Kinder. Die smarte Alternative zur Toniebox.',
    images: ['/og-image.png'], // IMPORTANT: Create a file named og-image.png (1200x630px) in your /public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${kalam.variable}`}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

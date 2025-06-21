import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WorkSection from "@/components/work-section";
import JournalSection from "@/components/journal-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground animate-fade-in">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <JournalSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

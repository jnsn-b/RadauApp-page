import HeroSection from '@/components/sections/HeroSection';
import WhatIsRadauAppSection from '@/components/sections/WhatIsRadauAppSection';
import ParentModeSection from '@/components/sections/ParentModeSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FaqSection from '@/components/sections/FaqSection';
import RecommendationsTool from '@/components/sections/RecommendationsTool';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIsRadauAppSection />
      <ParentModeSection />
      <BenefitsSection />
      <RecommendationsTool />
      <FaqSection />
    </>
  );
}

import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import HeroSection from '@/components/story/HeroSection';
import IntroductionSection from '@/components/story/IntroductionSection';
import ProblemSection from '@/components/story/ProblemSection';
import StruggleSection from '@/components/story/StruggleSection';
import ContactingSection from '@/components/story/ContactingSection';
import SolutionSection from '@/components/story/SolutionSection';
import TestimonialSection from '@/components/story/TestimonialSection';

// Add metadata for the page
export const metadata = {
  title: 'Customer Story - BrandElevate',
  description: "Discover Brad's journey with BrandElevate and how we transformed his brand's content strategy.",
};

export default function StoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BaseLayout>
        <div className="flex-grow">
          <HeroSection />
          <IntroductionSection />
          <ProblemSection />
          <StruggleSection />
          <ContactingSection />
          <SolutionSection />
          <TestimonialSection />
        </div>
      </BaseLayout>
    </div>
  );
} 
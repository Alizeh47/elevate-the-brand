import React from 'react';
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
    // Remove min-h-screen as each section manages its own height
    <div className="w-full">
      <div className="relative">
        {/* Geometric background designs */}
        <div className="fixed inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-xl"></div>
          <div className="absolute top-60 right-40 w-60 h-60 rotate-45 bg-purple-300/20 blur-xl"></div>
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <HeroSection />
          <IntroductionSection />
          <ProblemSection />
          <StruggleSection />
          <ContactingSection />
          <SolutionSection />
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
} 
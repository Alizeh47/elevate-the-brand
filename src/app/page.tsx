'use client'

import BaseLayout from '@/components/layout/BaseLayout'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { SpecializationSection } from '@/components/home/SpecializationSection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { TestimonialSection } from '@/components/home/TestimonialSection'

export default function HomePage() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <SpecializationSection />
      <WhyChooseUsSection />
      <TestimonialSection />
    </BaseLayout>
  )
}

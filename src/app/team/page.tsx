'use client'

import React from 'react';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/team/HeroSection'));
const IntroductionSection = dynamic(() => import('@/components/team/IntroductionSection'));
const TeamMembersSection = dynamic(() => import('@/components/team/TeamMembersSection'));
const CallToActionSection = dynamic(() => import('@/components/team/CallToActionSection'));

export default function TeamPage() {
  return (
    <main className="relative w-full overflow-hidden">
      <HeroSection />
      <IntroductionSection />
      <TeamMembersSection />
      <CallToActionSection />
    </main>
  );
} 
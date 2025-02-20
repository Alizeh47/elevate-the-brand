import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/case-studies/HeroSection';
import CaseStudyList from '@/components/case-studies/CaseStudyList';
import CallToAction from '@/components/case-studies/CallToAction';

export const metadata: Metadata = {
  title: 'Case Studies | Brand Elevate',
  description: 'Explore our successful case studies showcasing our expertise in website content, internet marketing, blog writing, and newspaper content.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <CaseStudyList />
        <CallToAction />
      </main>
    </>
  );
} 
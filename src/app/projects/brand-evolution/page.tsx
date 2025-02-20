'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Target, Users, ChartLine, Palette } from 'lucide-react';
import { Phudu } from 'next/font/google';
import Header from '@/components/layout/Header';

const phudu = Phudu({ subsets: ['latin'] });

const FLOATING_ICONS = [
  { Icon: Hexagon, top: '15%', left: '8%', size: 64, color: 'purple', delay: 0 },
  { Icon: Target, bottom: '25%', right: '12%', size: 64, color: 'pink', delay: 1 },
  { Icon: Users, top: '35%', right: '8%', size: 64, color: 'indigo', delay: 2 },
  { Icon: ChartLine, bottom: '25%', left: '12%', size: 64, color: 'purple', delay: 1.5 },
  { Icon: Palette, top: '65%', left: '18%', size: 64, color: 'pink', delay: 0.5 },
];

export default function BrandEvolutionPage() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-20">
      <Header />
      
      {/* Dynamic Background with Blur */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, 
              rgba(168, 85, 247, 0.15) 0%,    /* purple */
              rgba(236, 72, 153, 0.15) 50%,   /* pink */
              rgba(99, 102, 241, 0.15) 100%   /* indigo */
            )
          `,
          backdropFilter: 'blur(50px)'
        }}
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_ICONS.map(({ Icon, top, left, right, bottom, size, color, delay }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ top, left, right, bottom }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.15,
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: { duration: 1, delay },
              scale: { duration: 1, delay },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay,
              }
            }}
          >
            <Icon
              size={size}
              className={`text-${color}-700`}
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className={`max-w-4xl mx-auto ${phudu.className}`}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Brand Evolution</h1>
            <p className="text-xl text-gray-600">Complete rebranding and digital transformation for a global tech company.</p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <img
              src="/images/projects/project1.jpg"
              alt="Brand Evolution Project"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-gray-600 mb-8">
              Our team undertook a comprehensive rebranding initiative for a leading global tech company. 
              The project encompassed everything from visual identity redesign to digital platform transformation, 
              resulting in a cohesive and modern brand presence across all touchpoints.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
            <ul className="space-y-4 text-gray-600 mb-8">
              <li>Complete visual identity overhaul</li>
              <li>Digital platform modernization</li>
              <li>Brand strategy development</li>
              <li>User experience enhancement</li>
              <li>Global market adaptation</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Results</h3>
            <p className="text-gray-600 mb-8">
              The rebranding effort led to a 40% increase in brand recognition and a 25% improvement 
              in user engagement across digital platforms. The new brand identity has been widely 
              praised for its modern appeal while maintaining the company's core values.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 
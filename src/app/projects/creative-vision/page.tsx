'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star, PenTool, Eye, Palette, Sparkles } from 'lucide-react';
import { Phudu } from 'next/font/google';
import Header from '@/components/layout/Header';

const phudu = Phudu({ subsets: ['latin'] });

const FLOATING_ICONS = [
  { Icon: Star, top: '15%', left: '8%', size: 64, color: 'indigo', delay: 0 },
  { Icon: PenTool, bottom: '25%', right: '12%', size: 72, color: 'purple', delay: 1 },
  { Icon: Eye, top: '35%', right: '8%', size: 82, color: 'pink', delay: 2 },
  { Icon: Palette, bottom: '45%', left: '10%', size: 64, color: 'indigo', delay: 1.5 },
  { Icon: Sparkles, top: '75%', left: '18%', size: 72, color: 'purple', delay: 0.5 },
];

export default function CreativeVisionPage() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-20">
      <Header />
      
      {/* Dynamic Background with Blur */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
        style={{
          background: `
            radial-gradient(circle at 100% 100%, 
              rgba(99, 102, 241, 0.15) 0%,   /* indigo */
              rgba(168, 85, 247, 0.15) 50%,  /* purple */
              rgba(236, 72, 153, 0.15) 100%  /* pink */
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Creative Vision</h1>
            <p className="text-xl text-gray-600">Award-winning marketing campaign with stunning visual elements.</p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <img
              src="/images/projects/project3.jpg"
              alt="Creative Vision Project"
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
              Our creative team developed an award-winning marketing campaign that captured audiences 
              through innovative visual storytelling. The campaign combined traditional and digital 
              media to create an immersive brand experience.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Elements</h3>
            <ul className="space-y-4 text-gray-600 mb-8">
              <li>Interactive digital experiences</li>
              <li>Social media integration</li>
              <li>Custom illustration and animation</li>
              <li>Viral marketing components</li>
              <li>Cross-platform content strategy</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recognition</h3>
            <p className="text-gray-600 mb-8">
              The campaign received multiple industry awards for creativity and effectiveness, 
              including Best Digital Campaign and Most Innovative Marketing Solution. It generated 
              a 200% increase in brand engagement and significant ROI for our client.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Triangle, Smartphone, Code, Laptop, Zap } from 'lucide-react';
import { Phudu } from 'next/font/google';
import Header from '@/components/layout/Header';

const phudu = Phudu({ subsets: ['latin'] });

const FLOATING_ICONS = [
  { Icon: Smartphone, top: '15%', left: '8%', size: 64, color: 'pink', delay: 0 },
  { Icon: Code, bottom: '25%', right: '12%', size: 64, color: 'purple', delay: 1 },
  { Icon: Triangle, top: '35%', right: '8%', size: 72, color: 'indigo', delay: 2 },
  { Icon: Laptop, bottom: '35%', left: '10%', size: 72, color: 'pink', delay: 1.5 },
  { Icon: Zap, top: '65%', left: '18%', size: 64, color: 'purple', delay: 0.5 },
];

export default function DigitalInnovationPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white -z-10" />

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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Digital Innovation</h1>
            <p className="text-xl text-gray-600">Revolutionary mobile app design with cutting-edge UI/UX solutions.</p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <img
              src="/images/projects/project2.jpg"
              alt="Digital Innovation Project"
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
              We developed a revolutionary mobile application that sets new standards in user experience 
              and interface design. The project focused on creating an intuitive, accessible, and 
              visually stunning platform that enhances user engagement and satisfaction.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-4 text-gray-600 mb-8">
              <li>Intuitive gesture-based navigation</li>
              <li>Real-time data visualization</li>
              <li>Customizable user interfaces</li>
              <li>Advanced analytics integration</li>
              <li>Cross-platform compatibility</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
            <p className="text-gray-600 mb-8">
              The application achieved a 95% user satisfaction rate and increased user engagement by 300%. 
              It has been featured in multiple tech publications and received awards for its innovative 
              approach to mobile user experience design.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
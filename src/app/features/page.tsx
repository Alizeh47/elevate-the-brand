'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Code, Palette, Target, 
  Sparkles, Star, Award, Crown, Diamond, Heart } from 'lucide-react';
import Link from 'next/link';

const FLOATING_ICONS = [
  { Icon: Star, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: Crown, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Diamond, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Heart, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast Performance",
    description: "Optimized code and infrastructure for blazing fast load times and smooth interactions."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Security",
    description: "Advanced security measures to protect your data and ensure privacy."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description: "Reach audiences worldwide with multi-language support and localization."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Clean Code",
    description: "Well-structured, maintainable code following best practices."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Beautiful Design",
    description: "Modern, responsive designs that look great on all devices."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Targeted Solutions",
    description: "Custom solutions tailored to your specific business needs."
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Floating Icons */}
        <div className="fixed inset-0 pointer-events-none">
          {FLOATING_ICONS.map(({ Icon, top, left, right, bottom, size, color, delay }, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ top, left, right, bottom }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.2,
                scale: 1,
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay
              }}
            >
              <Icon size={size} className={`text-${color}`} />
            </motion.div>
          ))}
        </div>

        {/* Geometric Shapes */}
        {GEOMETRIC_SHAPES.map((shape, index) => (
          <motion.div
            key={index}
            className={`fixed ${
              shape.type === 'circle' ? 'rounded-full' : 'transform rotate-45'
            } bg-gradient-to-br ${shape.gradient} ${
              shape.size === 'lg' ? 'w-64 h-64' : 
              shape.size === 'md' ? 'w-48 h-48' : 
              'w-32 h-32'
            }`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        ))}

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Powerful Features
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive suite of features designed to elevate your brand and drive success.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="text-purple-600 mb-4 transform transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl group">
                  Get Started Today
                  <Sparkles className="inline-block ml-2 w-5 h-5 transform transition-transform group-hover:scale-110" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
} 
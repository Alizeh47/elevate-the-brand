'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { Book, FileText, Bookmark, Search, Code, Settings, 
  Zap, Star, Coffee, Palette, Layout, Box } from 'lucide-react';

const FLOATING_ICONS = [
  { Icon: Book, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: FileText, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Code, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Settings, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 },
  { Icon: Star, top: '45%', right: '25%', size: 48, color: 'purple-600', delay: 2 },
  { Icon: Coffee, bottom: '40%', left: '20%', size: 44, color: 'pink-600', delay: 2.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const documentationSections = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Getting Started",
    description: "Learn the basics and get up and running quickly with our platform.",
    items: ["Quick Start Guide", "Installation", "Basic Concepts", "First Steps"]
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Core Features",
    description: "Explore the main features and capabilities of our platform.",
    items: ["Content Management", "User Interface", "Customization", "Integration"]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "API Reference",
    description: "Detailed documentation of our API endpoints and usage.",
    items: ["Authentication", "Endpoints", "Response Format", "Error Handling"]
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Components",
    description: "Browse our collection of pre-built components and utilities.",
    items: ["UI Components", "Layouts", "Forms", "Navigation"]
  }
];

export default function DocumentationPage() {
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
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-600">
                Everything you need to know about our platform and services.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none pr-12"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </motion.div>

            {/* Documentation Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {documentationSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-purple-600 mb-4">{section.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <Bookmark className="w-4 h-4 text-purple-600 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 
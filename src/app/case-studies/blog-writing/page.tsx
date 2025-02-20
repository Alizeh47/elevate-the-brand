'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PenTool, BookOpen, Share2, LineChart } from 'lucide-react';

const features = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Content Creation",
    description: "Crafting engaging and informative blog content that resonates with readers."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Editorial Strategy",
    description: "Developing comprehensive content calendars and topic strategies."
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Content Distribution",
    description: "Maximizing reach through strategic content distribution channels."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Performance Tracking",
    description: "Monitoring and optimizing content performance metrics."
  }
];

export default function BlogWritingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                Blog Writing Excellence
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-12"
              >
                Creating engaging blog content that connects with audiences and drives organic traffic growth.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Project Overview */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative aspect-video"
                >
                  <Image
                    src="/images/case-studies/blog-writing.jpg"
                    alt="Blog Writing Project"
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                  <p className="text-gray-600 mb-6">
                    Our client needed to establish thought leadership and drive organic traffic through high-quality blog content. 
                    We developed a comprehensive content strategy that delivered outstanding results.
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      250% increase in organic traffic
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      180% improvement in engagement rates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      95% increase in social shares
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-purple-600 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-center">Content Performance</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
                    <p className="text-gray-600">Increase in Organic Traffic</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">180%</div>
                    <p className="text-gray-600">Higher Engagement Rates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                    <p className="text-gray-600">More Social Shares</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 
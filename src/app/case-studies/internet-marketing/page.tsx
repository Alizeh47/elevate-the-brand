'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart, Search } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth Strategy",
    description: "Developing comprehensive digital marketing strategies for sustainable growth."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Targeted Campaigns",
    description: "Creating focused campaigns that reach and engage your ideal audience."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & SEM",
    description: "Optimizing search presence through organic and paid strategies."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics & ROI",
    description: "Measuring and improving campaign performance for maximum return."
  }
];

export default function InternetMarketingPage() {
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
                Digital Marketing Success
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-12"
              >
                Driving growth through innovative digital marketing strategies and targeted campaign optimization.
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
                    src="/images/case-studies/internet-marketing.jpg"
                    alt="Internet Marketing Project"
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
                    Our client sought to expand their digital presence and increase market share. 
                    We implemented a multi-channel marketing strategy that delivered exceptional results.
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      200% increase in online visibility
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      85% improvement in lead generation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      45% reduction in customer acquisition cost
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
                <h2 className="text-3xl font-bold mb-6 text-center">Campaign Results</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">200%</div>
                    <p className="text-gray-600">Increase in Online Visibility</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                    <p className="text-gray-600">Improvement in Lead Generation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                    <p className="text-gray-600">Reduction in CAC</p>
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
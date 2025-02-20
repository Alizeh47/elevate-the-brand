'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe, Layout, Code, Users } from 'lucide-react'

const features = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces that enhance user experience."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Content Strategy",
    description: "Developing strategic content plans that align with business objectives."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User Research",
    description: "Understanding user behavior to create targeted and effective content."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Implementing best practices to improve search engine visibility."
  }
]

export default function WebsiteContentPage() {
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
                Website Content Excellence
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-12"
              >
                Transforming digital presence through strategic website content optimization and user experience enhancement.
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
                    src="/images/case-studies/website-content.jpg"
                    alt="Website Content Project"
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
                    Our client needed a complete website content overhaul to improve user engagement and conversion rates. 
                    We developed a comprehensive content strategy that focused on user experience and SEO optimization.
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Increased user engagement by 150%
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Improved conversion rates by 75%
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Enhanced SEO rankings for key terms
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
                <h2 className="text-3xl font-bold mb-6 text-center">Project Results</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">150%</div>
                    <p className="text-gray-600">Increase in User Engagement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
                    <p className="text-gray-600">Improvement in Conversion Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                    <p className="text-gray-600">Client Satisfaction Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 
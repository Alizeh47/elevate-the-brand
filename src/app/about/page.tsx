'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Image from 'next/image'
import { Users, Target, Award, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our dedicated team of professionals brings years of experience in digital marketing and brand development."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client Focus",
      description: "We prioritize understanding your unique needs and goals to deliver tailored solutions that drive results."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "Excellence is our standard. We ensure every project meets the highest quality benchmarks."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of industry trends to bring you cutting-edge solutions and creative strategies."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden pt-20">
        {/* Dynamic Background with Blur */}
        <div 
          className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
          style={{
            background: `
              radial-gradient(circle at 100% 0%, 
                rgba(168, 85, 247, 0.15) 0%,
                rgba(236, 72, 153, 0.15) 30%,
                rgba(99, 102, 241, 0.15) 70%
              )
            `,
            backdropFilter: 'blur(100px)'
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="fixed inset-0 pointer-events-none -z-5">
          <div className="absolute top-20 left-10 animate-float opacity-10">
            <div className="w-32 h-32 border-4 border-purple-500 rounded-full"></div>
          </div>
          <div className="absolute bottom-40 right-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
            <div className="w-24 h-24 border-4 border-pink-500 transform rotate-45"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 border-4 border-indigo-500 transform rotate-[30deg]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <div className="relative mb-16 text-center">
            <h1 className="text-5xl font-letterform text-center mb-6 relative z-10">
              About Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"></div>
            </h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              We are passionate about helping brands reach their full potential through innovative digital solutions
            </p>
          </div>

          {/* Company Introduction */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/meeting.jpg"
                    alt="Our Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-purple-500/30"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-purple-500/30"></div>
              </div>
              <div>
                <h2 className="text-3xl font-letterform mb-6 text-gray-800">
                  Elevating Brands Through Digital Excellence
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At BrandElevate, we believe in the power of digital transformation to revolutionize how brands connect with their audience. Our journey began with a simple mission: to help businesses thrive in the digital age through innovative solutions and strategic thinking.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We combine creativity with technical expertise to deliver results that exceed expectations. Our approach is collaborative, transparent, and focused on long-term success.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-500/5 rounded-2xl transform transition-transform group-hover:scale-[1.01]"></div>
                <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/20 transition-all">
                  <div className="text-purple-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-letterform mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg hover:shadow-xl">
              Join Our Team
            </button>
          </div>
        </div>
      </main>
    </>
  )
} 
'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import { Briefcase, Code, Megaphone, PenTool } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Professional content creation services tailored to your brand's voice and audience."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web development solutions that bring your vision to life."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive results and engagement."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Comprehensive brand strategy development to elevate your market presence."
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
              radial-gradient(circle at 0% 100%, 
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
              Our Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"></div>
            </h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to elevate your brand and drive success
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-500/5 rounded-2xl transform transition-transform group-hover:scale-[1.01]"></div>
                <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/20 transition-all">
                  <div className="text-purple-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-letterform mb-4 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  )
} 
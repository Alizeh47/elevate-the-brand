'use client'

import React from 'react';
import Image from 'next/image';
import { Phudu } from 'next/font/google';
import { Target, Lightbulb, ChartBar, Sparkles, Workflow, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const phudu = Phudu({ subsets: ['latin'] });

const FEATURE_ITEMS = [
  {
    title: "Strategic Planning",
    PrimaryIcon: Target,
    SecondaryIcon: Workflow,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    delay: 0
  },
  {
    title: "Creative Solutions",
    PrimaryIcon: Lightbulb,
    SecondaryIcon: Sparkles,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    delay: 0.2
  },
  {
    title: "Measurable Results",
    PrimaryIcon: ChartBar,
    SecondaryIcon: BarChart3,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    delay: 0.4
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Rotating Circle */}
        <div className="absolute -right-20 -top-20 w-80 h-80">
          <div className="absolute inset-0 border-[3px] border-purple-300/30 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-8 border-2 border-purple-200/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-purple-100/10 rounded-full animate-[spin_30s_linear_infinite]" />
        </div>
        
        {/* Left Square Pattern */}
        <div className="absolute -left-16 -top-16 w-64 h-64">
          <div className="absolute inset-0 border-[3px] border-purple-300/30 rotate-45 animate-[spin_50s_linear_infinite]" />
          <div className="absolute inset-6 border-2 border-purple-200/20 rotate-[60deg] animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-12 border border-purple-100/10 rotate-[30deg] animate-[spin_30s_linear_infinite]" />
      </div>

        {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0">
          {/* Horizontal Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
              style={{ 
                top: `${(i + 1) * 16.66}%`,
                transform: i % 2 === 0 ? 'translateX(10px)' : 'translateX(-10px)'
              }}
            />
          ))}

          {/* Vertical Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"
              style={{ 
                left: `${(i + 1) * 8.33}%`,
                transform: i % 2 === 0 ? 'translateY(5px)' : 'translateY(-5px)'
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32">
          <div className="absolute inset-0 border-[3px] border-purple-300/40 rotate-45 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border-2 border-purple-200/30 rotate-[60deg] animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-8 border border-purple-100/20 rotate-[30deg] animate-[spin_10s_linear_infinite]" />
        </div>

        {/* Enhanced Corner Decorations */}
        <div className="absolute top-0 right-0 w-48 h-48">
          <div className="absolute top-6 right-6 w-24 h-24 border-t-[3px] border-r-[3px] border-purple-300/40 rounded-tr-[40px]" />
          <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-purple-200/30 rounded-tr-[30px]" />
        </div>

        {/* Floating Dots Pattern */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`dots-${i}`}
            className="absolute flex gap-3"
            style={{
              top: `${20 + i * 20}%`,
              left: `${15 + i * 25}%`,
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400/50 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            <div className="w-2 h-2 rounded-full bg-purple-300/40 animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-200/50 animate-pulse" style={{ animationDelay: `${i * 400}ms` }} />
        </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${phudu.className} text-purple-900`}>
                <span className="relative inline-block">
                  <span className="relative z-10">our client&apos;s</span>
                  <div className="absolute -left-2 -top-2 w-6 h-6 border-t-2 border-l-2 border-purple-400 opacity-60 animate-pulse" />
                  <div className="absolute -right-2 -top-2 w-6 h-6 border-t-2 border-r-2 border-purple-400 opacity-60 animate-pulse delay-100" />
          </span>
          <br />
          <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    success story
                  </span>
                  <div className="absolute -left-2 -bottom-2 w-6 h-6 border-b-2 border-l-2 border-purple-400 opacity-60 animate-pulse delay-200" />
                  <div className="absolute -right-2 -bottom-2 w-6 h-6 border-b-2 border-r-2 border-purple-400 opacity-60 animate-pulse delay-300" />
          </span>
        </h1>

              <p className="text-xl text-purple-800/80 max-w-xl mb-12">
                Discover how we helped transform our client&apos;s vision into reality, delivering exceptional results through innovative solutions and strategic thinking.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                {FEATURE_ITEMS.map((item, index) => {
                  const PrimaryIcon = item.PrimaryIcon;
                  const SecondaryIcon = item.SecondaryIcon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      className="flex flex-col items-center group"
                    >
                      <div className={`relative w-20 h-20 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg`}>
                        {/* Primary Icon */}
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <PrimaryIcon className={`${item.iconColor} w-8 h-8 transition-transform duration-300 group-hover:scale-110`} />
                        </motion.div>
                        
                        {/* Secondary Icon (Floating) */}
                        <motion.div
                          animate={{ 
                            y: [-5, 5, -5],
                            opacity: [0.5, 1, 0.5],
                            scale: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute -right-2 -top-2"
                        >
                          <SecondaryIcon className={`${item.iconColor} w-6 h-6`} />
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 rounded-xl border-2 border-purple-200/30 group-hover:border-purple-300/50 transition-colors duration-300" />
                        <motion.div
                          animate={{ 
                            rotate: [0, 180, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-2 rounded-lg border border-purple-300/20"
                        />
                      </div>
                      <span className="text-purple-900 font-medium text-sm uppercase tracking-wider">{item.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/client.jpg"
                  alt="Client Success Story"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent" />
                
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-12 h-12">
                    <div className="absolute w-full h-[2px] bg-white/60" />
                    <div className="absolute h-full w-[2px] bg-white/60" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12">
                    <div className="absolute bottom-0 w-full h-[2px] bg-white/60" />
                    <div className="absolute right-0 h-full w-[2px] bg-white/60" />
                  </div>
                </div>
        </div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-purple-300/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-purple-300/20 rounded-2xl" />
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-purple-300/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-20 h-20 border-4 border-purple-300/20 rotate-45 animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
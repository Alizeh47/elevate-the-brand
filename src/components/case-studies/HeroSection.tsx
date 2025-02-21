'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phudu, Poppins, Delius_Unicase } from 'next/font/google';

const phudu = Phudu({ 
  weight: ['600'],
  subsets: ['latin'] 
});
const poppins = Poppins({ weight: ['400', '500'], subsets: ['latin'] });
const delius = Delius_Unicase({
  weight: ['400'],
  subsets: ['latin']
});

export default function HeroSection() {
  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-borderGlow {
          animation: borderGlow 2s ease-in-out infinite;
        }
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: floatAnimation 3s ease-in-out infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-dash {
          animation: dash 2s linear forwards;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate {
          animation: rotate 12s linear infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }
      `}</style>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-400/50 to-pink-300/50 pt-20">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-75"
            >
              <source src="/videos/meeting.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-300/10 backdrop-blur-[px]" />
          </div>
        </div>

        {/* Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-10 bottom-10 w-20 h-20 border-2 border-gradient-to-r from-purple-500 to-pink-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20 transform rotate-45 backdrop-blur-sm"
        />

        {/* Animated Dots Grid */}
        <div className="absolute inset-0 z-0 pt-20">
          {[
            { left: '15%', top: '20%' },
            { left: '85%', top: '15%' },
            { left: '25%', top: '45%' },
            { left: '75%', top: '35%' },
            { left: '10%', top: '65%' },
            { left: '90%', top: '55%' },
            { left: '35%', top: '85%' },
            { left: '65%', top: '75%' },
            { left: '45%', top: '25%' },
            { left: '55%', top: '95%' },
            { left: '20%', top: '30%' },
            { left: '80%', top: '40%' },
            { left: '30%', top: '70%' },
            { left: '70%', top: '60%' },
            { left: '40%', top: '50%' },
            { left: '60%', top: '80%' },
            { left: '50%', top: '90%' },
            { left: '15%', top: '85%' },
            { left: '85%', top: '25%' },
            { left: '25%', top: '65%' }
          ].map((position, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`absolute w-2 h-2 rounded-full backdrop-blur-sm ${
                i % 2 === 0 
                  ? 'bg-gradient-to-r from-purple-400 to-purple-600' 
                  : 'bg-gradient-to-r from-pink-400 to-pink-600'
              }`}
              style={{
                left: position.left,
                top: position.top,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className={`${phudu.className} text-7xl md:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight flex flex-wrap items-center gap-4`}>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-purple-900 via-pink-500 to-purple-700 bg-clip-text text-transparent uppercase tracking-widest bg-[length:200%_auto] animate-gradient"
              >
                OUR CASE
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Background Pulse Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-lg blur-sm animate-pulse-ring"></div>
                
                {/* Rotating Border */}
                <div className="absolute -inset-[1px] rounded-lg animate-rotate">
                  <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30"></div>
                </div>

                <div className={`
                  relative
                  ${delius.className} 
                  text-4xl md:text-5xl 
                  px-6 py-2
                  rounded-lg 
                  text-purple-50
                  bg-gradient-to-r from-purple-900/20 to-pink-900/20
                  border border-white/10
                  animate-float
                `}>
                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400/50"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-pink-400/50"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-pink-400/50"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400/50"></div>

                  {/* Decorative Lines - Top Left */}
                  <svg className="absolute -top-2 -left-2 w-4 h-4" viewBox="0 0 16 16">
                    <motion.path
                      d="M1 8h6M8 1v6"
                      stroke="url(#lineGradient)"
                      strokeWidth="0.5"
                      strokeDasharray="12"
                      strokeDashoffset="12"
                      className="animate-dash"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                    />
                  </svg>
                  
                  {/* Decorative Lines - Bottom Right */}
                  <svg className="absolute -bottom-2 -right-2 w-4 h-4" viewBox="0 0 16 16">
                    <motion.path
                      d="M15 8h-6M8 15v-6"
                      stroke="url(#lineGradient)"
                      strokeWidth="0.5"
                      strokeDasharray="12"
                      strokeDashoffset="12"
                      className="animate-dash"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                    />
                  </svg>

                  {/* Decorative Dots with Pulse */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                  />

                  {/* Inner Accent Lines */}
                  <div className="absolute inset-[2px] border border-white/5 rounded-lg pointer-events-none"></div>

                  studies
                </div>
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${poppins.className} text-lg md:text-xl max-w-2xl leading-relaxed backdrop-blur-sm bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-2xl text-purple-50 font-light tracking-wide`}
            >
              Explore our portfolio of successful projects where we've helped businesses transform their digital presence and achieve remarkable growth through strategic content and marketing solutions.
            </motion.p>
          </motion.div>
        </div>

        {/* Geometric Lines */}
        <svg className="absolute bottom-0 left-0 w-full" height="4" fill="none">
          <motion.path
            d="M0 2L2000 2"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            className="opacity-50"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-800/40 via-pink-600/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-800/40 via-pink-600/30 to-transparent" />
      </section>
    </>
  );
} 
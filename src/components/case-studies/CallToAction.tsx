'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Hexagon, Circle, Triangle, Square, Plus, X } from 'lucide-react';

const GEOMETRIC_SHAPES = [
  { Icon: Hexagon, top: '10%', left: '5%', size: 72, rotate: 45 },
  { Icon: Circle, bottom: '15%', right: '10%', size: 64, rotate: 0 },
  { Icon: Triangle, top: '20%', right: '15%', size: 72, rotate: 180 },
  { Icon: Square, bottom: '25%', left: '20%', size: 46, rotate: 30 },
  { Icon: Plus, top: '40%', right: '25%', size: 64, rotate: 0 },
  { Icon: X, bottom: '30%', left: '15%', size: 64, rotate: 45 }
];

const LINES = [
  { top: '15%', left: '10%', width: '180px', angle: 45 },
  { bottom: '20%', right: '15%', width: '220px', angle: -30 },
  { top: '35%', right: '25%', width: '160px', angle: 15 },
  { bottom: '40%', left: '20%', width: '200px', angle: -45 }
];

const DOTS = [
  { top: '25%', left: '30%', size: 'sm' },
  { bottom: '35%', right: '25%', size: 'lg' },
  { top: '45%', left: '15%', size: 'md' },
  { bottom: '15%', right: '35%', size: 'sm' }
];

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/workplace-blur.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/65 to-purple-900/95 backdrop-blur-sm" />
      </div>

      {/* Geometric Shapes */}
      {GEOMETRIC_SHAPES.map(({ Icon, top, left, right, bottom, size, rotate }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top, left, right, bottom }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.2,
            scale: 1,
            rotate: rotate,
            y: [0, -10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
        >
          <Icon size={size} className="text-white" strokeWidth={1} />
        </motion.div>
      ))}

      {/* Animated Lines */}
      {LINES.map((line, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-r from-white/20 to-white/10"
          style={{
            top: line.top,
            left: line.left,
            right: line.right,
            bottom: line.bottom,
            width: line.width,
            height: '1px',
            transform: `rotate(${line.angle}deg)`
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: index * 0.2 }}
        />
      ))}

      {/* Decorative Dots */}
      {DOTS.map((dot, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-white/20 ${
            dot.size === 'lg' ? 'w-4 h-4' : 
            dot.size === 'md' ? 'w-3 h-3' : 
            'w-2 h-2'
          }`}
          style={{ top: dot.top, left: dot.left, right: dot.right, bottom: dot.bottom }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/30" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-white/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/30" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              HIRE US NOW FOR YOUR PROJECT
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg mb-12 leading-relaxed"
          >
            Ready to transform your digital presence? Let's create something amazing together.
            Our team of experts is here to bring your vision to life with innovative solutions
            and creative excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md" />
            <Link
              href="/contact"
              className="relative inline-flex items-center px-8 py-4 bg-white text-purple-800 rounded-full font-semibold hover:bg-purple-50 transition-colors group"
            >
              Get Started
              <motion.svg
                className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900 to-transparent" />
    </section>
  );
} 
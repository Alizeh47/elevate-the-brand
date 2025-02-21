'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DM_Serif_Text, Lexend_Exa, Phudu } from 'next/font/google';
import { FileText, Globe, PenTool, Newspaper, Sparkles, Target, Zap, Star, 
  Lightbulb, Rocket, Heart, Diamond, Crown, Award, Coffee, Palette } from 'lucide-react';

const dmSerif = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin']
});

const lexendExa = Lexend_Exa({
  weight: ['600'],
  subsets: ['latin']
});

const phudu = Phudu({
  weight: ['600'],
  subsets: ['latin']
});

const caseStudies = [
  {
    id: 1,
    title: 'website content',
    description: 'Transforming digital presence through strategic website content optimization and user experience enhancement.',
    image: '/images/case-studies/website-content.jpg',
    imagePosition: 'left',
    imageSize: 'medium',
    link: '/case-studies/website-content',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'internet marketing',
    description: 'Driving growth through innovative digital marketing strategies and targeted campaign optimization.',
    image: '/images/case-studies/internet-marketing.jpg',
    imagePosition: 'right',
    imageSize: 'large',
    link: '/case-studies/internet-marketing',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'blog writing',
    description: 'Creating engaging blog content that connects with audiences and drives organic traffic growth.',
    image: '/images/case-studies/blog-writing.jpg',
    imagePosition: 'left',
    imageSize: 'large',
    link: '/case-studies/blog-writing',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'newspaper content',
    description: 'Delivering impactful news content that engages readers and maintains journalistic excellence.',
    image: '/images/case-studies/newspaper-content.jpg',
    imagePosition: 'right',
    imageSize: 'medium',
    link: '/case-studies/newspaper-content',
    icon: <Newspaper className="w-6 h-6" />
  }
];

const FLOATING_ICONS = [
  { Icon: FileText, top: '5%', left: '10%', size: 64, color: 'purple-600', delay: 0 },
  { Icon: Globe, bottom: '15%', right: '6%', size: 72, color: 'pink-600', delay: 1 },
  { Icon: PenTool, top: '20%', right: '15%', size: 86, color: 'purple-600', delay: 2 },
  { Icon: Newspaper, bottom: '20%', left: '6%', size: 84, color: 'pink-600', delay: 1.5 },
  { Icon: Sparkles, top: '40%', left: '15%', size: 72, color: 'purple-600', delay: 0.5 },
  { Icon: Target, top: '60%', right: '10%', size: 64, color: 'pink-600', delay: 2.5 },
  { Icon: Zap, bottom: '15%', left: '20%', size: 64, color: 'purple-600', delay: 1.8 },
  { Icon: Star, top: '15%', right: '25%', size: 84, color: 'pink-600', delay: 0.8 },
  { Icon: Lightbulb, top: '40%', left: '25%', size: 72, color: 'purple-600', delay: 2.2 },
  { Icon: Rocket, bottom: '40%', right: '18%', size: 58, color: 'pink-600', delay: 1.2 },
  { Icon: Heart, top: '70%', left: '8%', size: 52, color: 'purple-600', delay: 0.3 },
  { Icon: Diamond, bottom: '20%', right: '30%', size: 52, color: 'pink-600', delay: 1.7 },
  { Icon: Crown, top: '65%', right: '32%', size: 64, color: 'purple-600', delay: 2.8 },
  { Icon: Award, bottom: '45%', left: '28%', size: 72, color: 'pink-600', delay: 0.9 },
  { Icon: Coffee, top: '55%', right: '55%', size: 72, color: 'purple-600', delay: 1.4 },
  { Icon: Palette, bottom: '35%', left: '18%', size: 64, color: 'pink-600', delay: 2.1 }
];

const GEOMETRIC_POSITIONS = [
  { top: '10%', left: '5%', type: 'circle', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { bottom: '15%', right: '8%', type: 'square', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { top: '30%', right: '15%', type: 'circle', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { bottom: '25%', left: '10%', type: 'square', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' },
  { top: '50%', right: '25%', type: 'circle', size: 'md', gradient: 'from-purple-400/20 to-pink-400/20' },
  { bottom: '40%', left: '20%', type: 'square', size: 'sm', gradient: 'from-pink-400/20 to-purple-400/20' },
  { top: '70%', right: '5%', type: 'circle', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { bottom: '60%', left: '30%', type: 'square', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const LINE_POSITIONS = [
  { top: '20%', left: '30%', width: '150px', angle: 45 },
  { top: '40%', right: '25%', width: '120px', angle: -30 },
  { bottom: '30%', left: '20%', width: '100px', angle: 15 },
  { bottom: '15%', right: '35%', width: '130px', angle: -45 },
  { top: '60%', left: '15%', width: '140px', angle: 60 },
  { top: '80%', right: '40%', width: '110px', angle: -15 },
  { bottom: '45%', left: '35%', width: '160px', angle: 30 },
  { bottom: '70%', right: '15%', width: '90px', angle: -60 }
];

const SPARKLE_POSITIONS = [
  { top: '25%', left: '40%', size: 'sm' },
  { top: '45%', right: '35%', size: 'lg' },
  { bottom: '30%', left: '25%', size: 'md' },
  { bottom: '60%', right: '20%', size: 'sm' },
  { top: '75%', left: '15%', size: 'lg' },
  { top: '15%', right: '45%', size: 'md' }
];

export default function CaseStudyList() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_ICONS.map(({ Icon, top, left, right, bottom, size, color, delay }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ top, left, right, bottom }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.15,
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: { duration: 1, delay },
              scale: { duration: 1, delay },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay,
              }
            }}
          >
            <Icon
              size={size}
              className={`text-${color}`}
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      {/* Geometric Shapes */}
      {GEOMETRIC_POSITIONS.map((pos, index) => (
        <motion.div
          key={index}
          className={`absolute ${
            pos.type === 'circle' 
              ? 'rounded-full border-2 border-purple-400/30' 
              : 'transform rotate-45 border-2 border-pink-400/30'
          } ${
            pos.size === 'lg' ? 'h-32 w-32' : pos.size === 'md' ? 'h-24 w-24' : 'h-16 w-16'
          }`}
          style={pos}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        />
      ))}

      {/* Decorative Lines */}
      {LINE_POSITIONS.map((line, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-r from-purple-400/20 to-pink-400/20"
          style={{
            top: line.top,
            left: line.left,
            right: line.right,
            bottom: line.bottom,
            width: line.width,
            height: '2px',
            transform: `rotate(${line.angle}deg)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      ))}

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className={`${lexendExa.className} text-4xl md:text-5xl text-gray-900 mb-6 font-semibold tracking-tight`}>
              Our Success Stories
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className={`${dmSerif.className} text-xl text-gray-600 leading-relaxed`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <p className={`${dmSerif.className} text-xl text-gray-600 leading-relaxed`}>
                When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
              <p className={`${dmSerif.className} text-xl text-gray-600 leading-relaxed`}>
                Remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages.
              </p>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  study.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 md:gap-16`}
              >
                {/* Image Container */}
                <div className={`relative w-full md:w-1/2 ${
                  study.imageSize === 'large' ? 'aspect-[4/3]' : 'aspect-[3/2]'
                }`}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  {study.imagePosition === 'right' && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        study.id === 2 ? '-left-16' : 
                        study.id === 4 ? '-left-16' : 
                        '-left-8'
                      }`}
                    >
                      <Link 
                        href={study.link}
                        className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <div className="transform transition-transform duration-300 group-hover:rotate-12">
                          {study.icon}
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Content Container */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`${phudu.className} text-3xl font-semibold text-gray-900 mb-4 capitalize`}
                  >
                    {study.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-6"
                  >
                    {study.description}
                  </motion.p>
                  {study.imagePosition === 'left' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="inline-block"
                    >
                      <Link 
                        href={study.link}
                        className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <div className="transform transition-transform duration-300 group-hover:rotate-12">
                          {study.icon}
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sparkle Effects */}
      {SPARKLE_POSITIONS.map((sparkle, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className={`absolute ${
            sparkle.size === 'lg' ? 'w-4 h-4' : sparkle.size === 'md' ? 'w-3 h-3' : 'w-2 h-2'
          } bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-[1px]`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
            bottom: sparkle.bottom
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-pink-400/10 to-purple-400/10 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
} 
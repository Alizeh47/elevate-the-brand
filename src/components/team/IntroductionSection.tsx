'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Exo_2 } from 'next/font/google';
import { Users, Target, Lightbulb, Rocket, Award, Zap } from 'lucide-react';
import Image from 'next/image';

const exo2 = Exo_2({ subsets: ['latin'] });

const DOTS_POSITIONS = [
  { left: '10%', top: '20%' },
  { left: '30%', top: '40%' },
  { left: '50%', top: '60%' },
  { left: '70%', top: '30%' },
  { left: '90%', top: '50%' },
  { left: '20%', top: '80%' },
  { left: '60%', top: '10%' },
  { left: '80%', top: '70%' },
];

const LINES_POSITIONS = [
  { left: '25%', top: '30%' },
  { left: '50%', top: '60%' },
  { left: '75%', top: '90%' },
];

const CIRCLES_POSITIONS = [
  { left: '15%', top: '25%', size: 'lg' },
  { left: '85%', top: '75%', size: 'md' },
  { left: '45%', top: '85%', size: 'sm' },
];

const STATS = [
  { number: '10+', label: 'Years Experience' },
  { number: '250+', label: 'Projects Completed' },
  { number: '50+', label: 'Team Members' },
  { number: '99%', label: 'Client Satisfaction' },
];

const VALUES = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries and embracing new technologies to deliver cutting-edge solutions.',
  },
  {
    title: 'Collaboration',
    description: 'Working together seamlessly to achieve extraordinary results for our clients.',
  },
  {
    title: 'Excellence',
    description: 'Maintaining the highest standards in everything we do, from design to delivery.',
  },
];

const FLOATING_ICONS = [
  { Icon: Users, top: '10%', left: '5%', size: 48, color: 'purple-700', delay: 0 },
  { Icon: Target, bottom: '20%', right: '10%', size: 56, color: 'pink-700', delay: 1 },
  { Icon: Lightbulb, top: '30%', right: '15%', size: 56, color: 'indigo-700', delay: 2 },
  { Icon: Rocket, bottom: '30%', left: '10%', size: 56, color: 'purple-700', delay: 3.5 },
  { Icon: Award, top: '60%', left: '20%', size: 48, color: 'pink-700', delay: 0.5 },
  { Icon: Zap, top: '40%', right: '25%', size: 48, color: 'indigo-700', delay: 2.5 },
];

export default function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_ICONS.map(({ Icon, top, left, right, bottom, size, color, delay }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top,
              left,
              right,
              bottom,
            }}
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

      {/* Geometric Background Elements */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        whileInView={{ opacity: 0.05, rotate: 0 }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-0 h-64 w-64 rounded-3xl bg-purple-500"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        whileInView={{ opacity: 0.05, rotate: 0 }}
        transition={{ duration: 1 }}
        className="absolute -right-20 bottom-0 h-64 w-64 rounded-3xl bg-purple-500"
      />

      {/* Animated Circles */}
      <div className="absolute inset-0">
        {CIRCLES_POSITIONS.map((circle, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full border-2 border-purple-400 ${
              circle.size === 'lg' ? 'h-32 w-32' : circle.size === 'md' ? 'h-24 w-24' : 'h-16 w-16'
            }`}
            style={circle}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0">
        {LINES_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-20 bg-purple-300"
            style={position}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-6">
        {/* Introduction Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`relative mb-20 text-center ${exo2.className}`}
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900">Who We Are</h2>
          <p className="mx-auto max-w-4xl text-lg text-gray-600">
            Our team is a diverse group of passionate professionals dedicated to delivering exceptional results. 
            With expertise spanning multiple disciplines, we work collaboratively to bring innovative solutions 
            to every project. Together, we&apos;re committed to exceeding expectations and driving success for our clients.
          </p>
          <p className="text-gray-600 mb-8">
            &quot;We&apos;re not just a team; we&apos;re a family of creative minds dedicated to elevating brands to their fullest potential.&quot;
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-2 text-4xl font-bold text-purple-600"
              >
                {stat.number}
              </motion.div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {VALUES.map((value, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-purple-50 p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <h3 className="mb-4 text-2xl font-bold text-purple-600">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <div className="relative">
          <div className="size-64 relative">
            <Image
              src="/images/team/intro-image-1.jpg"
              alt="Team collaboration"
              fill
              className="size-full object-cover rounded-2xl"
            />
          </div>
          <div className="size-64 absolute -bottom-8 -right-8">
            <Image
              src="/images/team/intro-image-2.jpg"
              alt="Team brainstorming"
              fill
              className="size-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <div className="size-32 bg-purple-100 rounded-full"></div>
            <div className="size-24 bg-purple-200 rounded-full"></div>
            <div className="size-16 bg-purple-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {DOTS_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-purple-400"
            style={position}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
} 
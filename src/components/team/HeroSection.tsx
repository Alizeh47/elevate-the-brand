'use client'

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import { Phudu, Exo_2 } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });
const exo2 = Exo_2({ subsets: ['latin'] });

const DOTS_POSITIONS = [
  { left: '10%', top: '20%' },
  { left: '20%', top: '40%' },
  { left: '30%', top: '60%' },
  { left: '40%', top: '80%' },
  { left: '50%', top: '30%' },
  { left: '60%', top: '50%' },
  { left: '70%', top: '70%' },
  { left: '80%', top: '40%' },
  { left: '90%', top: '20%' },
  { left: '15%', top: '75%' },
  { left: '25%', top: '25%' },
  { left: '35%', top: '85%' },
  { left: '45%', top: '15%' },
  { left: '55%', top: '65%' },
  { left: '65%', top: '35%' },
  { left: '75%', top: '55%' },
  { left: '85%', top: '45%' },
  { left: '95%', top: '25%' },
  { left: '5%', top: '95%' },
  { left: '95%', top: '5%' },
];

const STARS_POSITIONS = [
  { left: '5%', top: '15%', size: 'sm' },
  { left: '15%', top: '35%', size: 'md' },
  { left: '25%', top: '75%', size: 'lg' },
  { left: '35%', top: '25%', size: 'sm' },
  { left: '45%', top: '85%', size: 'md' },
  { left: '55%', top: '45%', size: 'lg' },
  { left: '65%', top: '15%', size: 'sm' },
  { left: '75%', top: '65%', size: 'md' },
  { left: '85%', top: '35%', size: 'lg' },
  { left: '95%', top: '85%', size: 'sm' },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <>
      <Header />
      <section className="relative h-screen w-full overflow-hidden bg-gray-100">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onError={handleVideoError}
              className="h-full w-full object-cover grayscale"
            >
              <source src="/videos/contact-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="h-full w-full bg-gradient-to-b from-gray-900 to-purple-900" />
          )}
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Animated Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {STARS_POSITIONS.map((star, i) => (
            <motion.div
              key={i}
              className={`absolute ${
                star.size === 'sm' ? 'h-1 w-1' : star.size === 'md' ? 'h-1.5 w-1.5' : 'h-2 w-2'
              } rotate-45 bg-white`}
              style={star}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                rotate: ['45deg', '225deg', '45deg'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-20 top-20 h-40 w-40 rounded-full border-2 border-purple-500 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-10 top-40 h-32 w-32 rotate-45 border-2 border-purple-500 backdrop-blur-sm"
        />

        {/* Animated Dots */}
        <div className="absolute left-0 top-0 h-full w-full">
          {DOTS_POSITIONS.map((position, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-purple-500 backdrop-blur-sm"
              style={position}
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`text-center text-6xl font-bold text-white ${phudu.className}`}
          >
            meet our{' '}
            <span className="rounded bg-purple-500/80 px-4 py-2 backdrop-blur-sm">team</span>
          </motion.h1>

          {/* Introduction Text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`mt-8 max-w-2xl text-center ${exo2.className}`}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate innovators, creative minds, and dedicated professionals.
              <br />
              Together, we transform ideas into exceptional digital experiences.
              <br />
              Our diverse team brings expertise and innovation to every project.
            </p>
          </motion.div>

          {/* Geometric Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 h-1 w-32 bg-purple-500"
          />
        </div>
      </section>
    </>
  );
} 
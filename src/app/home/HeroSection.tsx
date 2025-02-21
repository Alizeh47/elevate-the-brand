'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Content Section */}
          <div className="col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl font-bold mb-6">
                Elevate Your Brand with AI-Powered Content
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your digital presence with our innovative content creation and management platform.
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[550px] w-[120%] -mt-16">
                <Image
                  src="/images/business-meeting.jpg"
                  alt="Business Meeting"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const geometricVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

const decorativeVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" }
  }
}

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const rotatingVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

export function WhyChooseUsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Floating Geometric Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-20 w-40 h-40 bg-gradient-to-br from-purple-600/5 to-pink-500/5 rounded-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute right-40 bottom-20 w-32 h-32 border-2 border-pink-500/10 rounded-full"
          variants={rotatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute left-1/3 top-1/4 w-24 h-24 bg-gradient-to-br from-purple-600/5 to-transparent transform rotate-45"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute right-1/4 top-1/3 w-16 h-16 border-2 border-purple-600/10"
          variants={rotatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-black dark:border-white" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-t border-black dark:border-white" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title with Geometric Accents */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 border-2 border-purple-600/20 rounded-lg transform rotate-45"
              variants={geometricVariants}
            />
            <motion.div
              className="absolute inset-0 border-2 border-pink-500/20 rounded-lg transform -rotate-45"
              variants={geometricVariants}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          <h2 className="text-4xl font-letterform mb-4 relative inline-block">
            Why Choose Us
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"></div>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We deliver exceptional results through our innovative approach and dedicated team
          </p>
        </motion.div>

        {/* Features Container */}
        <div className="space-y-32">
          {/* First Feature */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 relative"
          >
            {/* Purple Gradient Background */}
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Image Container */}
            <div className="w-full md:w-[45%] relative group">
              <motion.div 
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-purple-600"
                  initial="hidden"
                  whileInView="visible"
                  variants={decorativeVariants}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-purple-600"
                  initial="hidden"
                  whileInView="visible"
                  variants={decorativeVariants}
                />
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-purple-600/30 rounded-full"
                  initial="hidden"
                  whileInView="visible"
                  variants={geometricVariants}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-8 h-8 bg-purple-600/10 transform rotate-45"
                  initial="hidden"
                  whileInView="visible"
                  variants={geometricVariants}
                />

                {/* Animated Dots */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-600/30 rounded-full"
                    style={{
                      top: `${25 * (i + 1)}%`,
                      left: i % 2 === 0 ? '-8px' : 'auto',
                      right: i % 2 === 1 ? '-8px' : 'auto',
                    }}
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                <Image
                  src="/images/team-meeting.jpg"
                  alt="Team Meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />

                {/* Image Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Purple Frame */}
                <div className="absolute -inset-1 border-2 border-purple-600/20 rounded-lg transform -rotate-2 transition-transform group-hover:rotate-0" />
                <div className="absolute -inset-1 border-2 border-purple-600/20 rounded-lg transform rotate-2 transition-transform group-hover:rotate-0" />
              </motion.div>
            </div>

            {/* Content */}
            <motion.div 
              className="w-full md:w-[45%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-light mb-6">
                We Avoid Misinterpretation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clear communication is at the heart of everything we do. We ensure every project starts with a thorough understanding of your goals and maintains transparent dialogue throughout the process.
              </p>

              {/* Decorative Line */}
              <motion.div
                className="mt-6 h-px bg-gradient-to-r from-purple-600/20 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Second Feature */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative"
          >
            {/* Pink Gradient Background */}
            <motion.div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Content */}
            <motion.div 
              className="w-full md:w-[45%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-light mb-6">
                We Don't Stretch Word Count
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quality over quantity is our mantra. We focus on delivering impactful, concise content that resonates with your audience and drives results, not just filling pages.
              </p>

              {/* Decorative Line */}
              <motion.div
                className="mt-6 h-px bg-gradient-to-r from-pink-500/20 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Image Container */}
            <div className="w-full md:w-[45%] relative group">
              <motion.div 
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-pink-500"
                  initial="hidden"
                  whileInView="visible"
                  variants={decorativeVariants}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-pink-500"
                  initial="hidden"
                  whileInView="visible"
                  variants={decorativeVariants}
                />
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 border-2 border-pink-500/30 rounded-full"
                  initial="hidden"
                  whileInView="visible"
                  variants={geometricVariants}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-pink-500/10 transform rotate-45"
                  initial="hidden"
                  whileInView="visible"
                  variants={geometricVariants}
                />

                {/* Animated Dots */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-500/30 rounded-full"
                    style={{
                      top: `${25 * (i + 1)}%`,
                      left: i % 2 === 1 ? '-8px' : 'auto',
                      right: i % 2 === 0 ? '-8px' : 'auto',
                    }}
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                <Image
                  src="/images/content-creation.jpg"
                  alt="Content Creation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />

                {/* Image Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Pink Frame */}
                <div className="absolute -inset-1 border-2 border-pink-500/20 rounded-lg transform -rotate-2 transition-transform group-hover:rotate-0" />
                <div className="absolute -inset-1 border-2 border-pink-500/20 rounded-lg transform rotate-2 transition-transform group-hover:rotate-0" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
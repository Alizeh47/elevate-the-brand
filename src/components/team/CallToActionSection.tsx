'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Hexagon, Triangle, Circle, Square, Star, Box,
  Lightbulb, Target, Rocket, Award, Zap, Palette, Laptop, Briefcase, Code, PenTool
} from 'lucide-react';
import { Delius_Unicase, Phudu } from 'next/font/google';
import { useRouter } from 'next/navigation';

const delius = Delius_Unicase({
  weight: ['400', '700'],
  subsets: ['latin']
});

const phudu = Phudu({
  subsets: ['latin']
});

const LINES_POSITIONS = [
  { left: '20%', top: '50%', rotate: '0deg' },
  { left: '40%', top: '50%', rotate: '45deg' },
  { left: '60%', top: '50%', rotate: '90deg' },
  { left: '80%', top: '50%', rotate: '135deg' },
];

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
];

const PROJECTS = [
  {
    title: 'Brand Evolution',
    description: 'Complete rebranding and digital transformation for a global tech company.',
    image: '/images/projects/project1.jpg',
    icon: Hexagon,
    color: 'purple',
    route: '/projects/brand-evolution',
    caseStudy: 'brand-evolution'
  },
  {
    title: 'Digital Innovation',
    description: 'Revolutionary mobile app design with cutting-edge UI/UX solutions.',
    image: '/images/projects/project2.jpg',
    icon: Triangle,
    color: 'pink',
    route: '/projects/digital-innovation',
    caseStudy: 'digital-innovation'
  },
  {
    title: 'Creative Vision',
    description: 'Award-winning marketing campaign with stunning visual elements.',
    image: '/images/projects/project3.jpg',
    icon: Star,
    color: 'indigo',
    route: '/projects/creative-vision',
    caseStudy: 'creative-vision'
  },
];

const GEOMETRIC_SHAPES = [
  { Icon: Square, top: '10%', left: '5%', size: 32, rotate: 45 },
  { Icon: Circle, top: '20%', right: '10%', size: 28, rotate: 0 },
  { Icon: Triangle, bottom: '15%', left: '15%', size: 36, rotate: 180 },
  { Icon: Box, top: '40%', right: '15%', size: 30, rotate: 15 },
];

const FLOATING_ICONS = [
  { Icon: Lightbulb, top: '15%', left: '8%', size: 48, color: 'purple', delay: 0 },
  { Icon: Target, bottom: '25%', right: '12%', size: 40, color: 'pink', delay: 1 },
  { Icon: Rocket, top: '35%', right: '8%', size: 56, color: 'indigo', delay: 2 },
  { Icon: Palette, bottom: '35%', left: '12%', size: 42, color: 'purple', delay: 1.5 },
  { Icon: Laptop, top: '65%', left: '18%', size: 56, color: 'pink', delay: 0.5 },
  { Icon: Code, top: '45%', right: '20%', size: 56, color: 'indigo', delay: 2.5 },
  { Icon: PenTool, bottom: '15%', right: '25%', size: 56, color: 'purple', delay: 1.8 },
  { Icon: Briefcase, top: '25%', left: '22%', size: 56, color: 'pink', delay: 0.8 },
];

export default function CallToActionSection() {
  const [showProjects, setShowProjects] = useState(false);
  const router = useRouter();

  const handleProjectClick = (route: string) => {
    router.push(route);
  };

  return (
    <section className="relative overflow-hidden bg-purple-600 py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/workplace-blur.jpg"
          alt="Workspace"
          className="h-full w-full object-cover opacity-10"
        />
      </div>

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
              className={`text-${color}-700`}
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      {/* Geometric Shapes */}
      {GEOMETRIC_SHAPES.map(({ Icon, top, left, right, bottom, size, rotate }, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{ top, left, right, bottom }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.15,
            scale: 1,
            rotate: rotate,
          }}
          transition={{
            duration: 1,
            delay: index * 0.2,
          }}
        >
          <Icon
            size={size}
            className="text-white"
            strokeWidth={1}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`mb-8 text-4xl font-bold text-white uppercase tracking-wider md:text-5xl ${delius.className}`}
          >
            see our latest projects
          </motion.h2>
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowProjects(!showProjects)}
            className={`inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-600 transition-all hover:bg-purple-50 ${phudu.className}`}
          >
            {showProjects ? 'Hide Projects' : 'View Projects'}
          </motion.button>

          {/* Projects Grid */}
          <AnimatePresence>
            {showProjects && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
              >
                {PROJECTS.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative overflow-hidden rounded-xl bg-white p-6 shadow-xl ${phudu.className}`}
                  >
                    <div className="absolute -right-4 -top-4">
                      <project.icon
                        size={48}
                        className={`text-${project.color}-500 opacity-10`}
                      />
                    </div>
                    <div className="mb-4 h-48 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-6 flex justify-center"
                    >
                      <button
                        onClick={() => handleProjectClick(project.route)}
                        className={`
                          relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-500 
                          px-8 py-3 text-base font-semibold text-white shadow-lg 
                          transition-all duration-300 hover:shadow-xl hover:from-purple-700 hover:to-pink-600
                          group/button cursor-pointer
                        `}
                      >
                        <motion.span
                          className="relative z-10 flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          Learn More
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            →
                          </motion.span>
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-white"
                          initial={{ x: "100%" }}
                          whileHover={{ x: "-100%" }}
                          transition={{ duration: 0.3 }}
                          style={{ opacity: 0.15 }}
                        />
                      </button>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {LINES_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-20 bg-white/30"
            style={{
              left: position.left,
              top: position.top,
              transform: `rotate(${position.rotate})`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {DOTS_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white"
            style={position}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </section>
  );
} 
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Delius_Unicase } from 'next/font/google';

const delius = Delius_Unicase({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});

interface TeamMember {
  name: string;
  role: string;
  image: string;
  featured?: boolean;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'alex volkov',
    role: 'Creative Director',
    image: '/images/team/member1.jpg',
    featured: true,
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'AVA chen',
    role: 'Lead Designer',
    image: '/images/team/member3.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'JOSH CHEN',
    role: 'Marketing Strategist',
    image: '/images/team/member2.jpg',
    socials: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'ADELINE Chen',
    role: 'Content Specialist',
    image: '/images/team/member5.jpg',
    socials: {
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Emma Wilson',
    role: 'Brand Manager',
    image: '/images/team/member4.jpg',
    socials: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'David Lee',
    role: 'Art Director',
    image: '/images/team/member6.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const DOTS_POSITIONS = [
  { left: '5%', top: '10%' },
  { left: '15%', top: '30%' },
  { left: '25%', top: '50%' },
  { left: '35%', top: '70%' },
  { left: '45%', top: '90%' },
  { left: '55%', top: '20%' },
  { left: '65%', top: '40%' },
  { left: '75%', top: '60%' },
  { left: '85%', top: '80%' },
  { left: '95%', top: '15%' },
  { left: '10%', top: '85%' },
  { left: '90%', top: '35%' },
];

export default function TeamMembersSection() {
  return (
    <section className="relative bg-white py-20">
      {/* Section Heading */}
      <div className="container mx-auto px-6 mb-16">
        <div className="relative">
          {/* Geometric Designs for Heading */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            className="absolute -left-8 -top-8 h-24 w-24 rounded-full border-4 border-purple-500"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -right-8 -top-8 h-20 w-20 rotate-45 border-4 border-purple-500"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -left-16 top-1/2 h-1 w-12 bg-purple-500 opacity-20"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -right-16 top-1/2 h-1 w-12 bg-purple-500 opacity-20"
          />
          
          {/* Heading Text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative text-center"
          >
            <h2 className={`${delius.className} text-5xl font-bold tracking-wider text-gray-900 uppercase relative z-10`}>
              TEAM MEMBERS
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 bg-purple-500"
              />
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -left-20 top-1/4 h-96 w-96 rotate-45 rounded-3xl border-2 border-purple-500"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -right-20 bottom-1/4 h-96 w-96 -rotate-45 rounded-3xl border-2 border-purple-500"
        />
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg ${
                member.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                />
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-purple-500 bg-opacity-80 p-6 text-white opacity-0 transition-all duration-300 hover:opacity-100`}
                >
                  <h3 className="mb-2 text-2xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-lg">{member.role}</p>
                  <div className="flex space-x-4">
                    {member.socials.linkedin && (
                      <motion.a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-transform hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaLinkedin size={24} />
                      </motion.a>
                    )}
                    {member.socials.twitter && (
                      <motion.a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-transform hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaTwitter size={24} />
                      </motion.a>
                    )}
                    {member.socials.instagram && (
                      <motion.a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-transform hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaInstagram size={24} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {DOTS_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-purple-400"
            style={position}
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
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
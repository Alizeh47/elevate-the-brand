'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { LifeBuoy, MessageCircle, Phone, Mail, Clock, Video, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const FLOATING_ICONS = [
  { Icon: LifeBuoy, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: MessageCircle, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Clock, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Users, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const supportOptions = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7 Support",
    action: "Start Chat"
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri, 9am-6pm",
    action: "Call Now"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Support",
    description: "Send us your detailed inquiries",
    availability: "Response within 24h",
    action: "Send Email"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Call",
    description: "Schedule a video consultation",
    availability: "By Appointment",
    action: "Book Session"
  }
];

const quickLinks = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Start Guide",
    description: "Get up and running quickly with our platform"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Forum",
    description: "Connect with other users and share experiences"
  },
  {
    icon: <LifeBuoy className="w-6 h-6" />,
    title: "Help Center",
    description: "Browse our comprehensive knowledge base"
  }
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Floating Icons */}
        <div className="fixed inset-0 pointer-events-none">
          {FLOATING_ICONS.map(({ Icon, top, left, right, bottom, size, color, delay }, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ top, left, right, bottom }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.2,
                scale: 1,
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay
              }}
            >
              <Icon size={size} className={`text-${color}`} />
            </motion.div>
          ))}
        </div>

        {/* Geometric Shapes */}
        {GEOMETRIC_SHAPES.map((shape, index) => (
          <motion.div
            key={index}
            className={`fixed ${
              shape.type === 'circle' ? 'rounded-full' : 'transform rotate-45'
            } bg-gradient-to-br ${shape.gradient} ${
              shape.size === 'lg' ? 'w-64 h-64' : 
              shape.size === 'md' ? 'w-48 h-48' : 
              'w-32 h-32'
            }`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        ))}

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                How Can We Help?
              </h1>
              <p className="text-xl text-gray-600">
                Choose your preferred way to get support from our team.
              </p>
            </motion.div>

            {/* Support Options Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start">
                    <div className="text-purple-600 mr-4">{option.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          <Clock className="w-4 h-4 inline-block mr-2" />
                          {option.availability}
                        </span>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                          {option.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">Quick Links</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href="#"
                    className="p-4 rounded-lg hover:bg-purple-50 transition-colors group"
                  >
                    <div className="text-purple-600 mb-3 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{link.title}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
} 
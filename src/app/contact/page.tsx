'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { Star, Sparkles, Mail, Phone, MapPin, MessageSquare, Send, Zap, 
  Award, Crown, Diamond, Heart, Coffee, Palette } from 'lucide-react';

const FLOATING_ICONS = [
  { Icon: Star, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: Sparkles, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Award, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Crown, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 },
  { Icon: Diamond, top: '45%', right: '25%', size: 48, color: 'purple-600', delay: 2 },
  { Icon: Heart, bottom: '40%', left: '20%', size: 44, color: 'pink-600', delay: 2.5 },
  { Icon: Coffee, top: '60%', right: '10%', size: 54, color: 'purple-600', delay: 3 },
  { Icon: Palette, bottom: '20%', left: '25%', size: 58, color: 'pink-600', delay: 3.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "Get in touch via email",
    info: "hello@brandelevate.com",
    delay: 0.2
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm",
    info: "+1 (555) 000-0000",
    delay: 0.4
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    description: "Come say hello at our office",
    info: "123 Business Avenue, Suite 100",
    delay: 0.6
  }
];

export default function ContactPage() {
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
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h1>
              <p className="text-xl text-gray-600">
                Ready to transform your digital presence? Get in touch with us today.
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: method.delay }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-purple-600 mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <p className="text-purple-600 font-medium">{method.info}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                    placeholder="Your message"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
} 
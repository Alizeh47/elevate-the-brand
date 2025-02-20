'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, FileCheck, UserCheck, 
  Settings, Database, Bell, AlertCircle } from 'lucide-react';

const FLOATING_ICONS = [
  { Icon: Shield, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: Lock, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Eye, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Key, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 },
  { Icon: FileCheck, top: '45%', right: '25%', size: 48, color: 'purple-600', delay: 2 },
  { Icon: UserCheck, bottom: '40%', left: '20%', size: 44, color: 'pink-600', delay: 2.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const privacySections = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Data Protection",
    description: "How we protect your personal information",
    content: "We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, and destruction."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Collection",
    description: "Information we collect and why",
    content: "We collect only essential information needed to provide our services, including contact details, usage data, and preferences to enhance your experience."
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Your Rights",
    description: "Understanding your privacy rights",
    content: "You have the right to access, modify, or delete your personal data. We provide tools and support to help you exercise these rights."
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: "Cookie Policy",
    description: "How we use cookies and tracking",
    content: "We use cookies to improve site functionality and user experience. You can control cookie preferences through your browser settings."
  }
];

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">
                We value your privacy and are committed to protecting your personal data.
              </p>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {privacySections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start">
                    <div className="text-purple-600 mr-4 mt-1">{section.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                      <p className="text-gray-600 mb-2">{section.description}</p>
                      <p className="text-gray-700">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600">
                For any privacy-related questions, please contact us at{' '}
                <a href="mailto:privacy@brandelevate.com" className="text-purple-600 hover:text-purple-700">
                  privacy@brandelevate.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
} 
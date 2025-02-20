'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { FileText, Shield, Lock, Scale, AlertCircle, CheckCircle, HelpCircle, Info } from 'lucide-react';

const FLOATING_ICONS = [
  { Icon: FileText, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: Shield, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Scale, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Lock, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const termsSection = [
  {
    icon: <Info className="w-8 h-8" />,
    title: "Terms of Use",
    content: "By accessing and using our services, you agree to comply with these terms and conditions. These terms govern your use of our platform and services."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "User Responsibilities",
    content: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account."
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: "Intellectual Property",
    content: "All content, features, and functionality of our services are owned by Brand Elevate and are protected by international copyright, trademark, and other intellectual property laws."
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "Service Modifications",
    content: "We reserve the right to modify or discontinue any part of our services with or without notice. We shall not be liable to you or any third party for any modification."
  }
];

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600">
                Please read these terms carefully before using our services.
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

            {/* Terms Sections */}
            <div className="space-y-8">
              {termsSection.map((section, index) => (
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
                For any questions about these terms, please contact us at{' '}
                <a href="mailto:legal@brandelevate.com" className="text-purple-600 hover:text-purple-700">
                  legal@brandelevate.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
} 
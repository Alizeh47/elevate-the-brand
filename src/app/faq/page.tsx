'use client'

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus, MessageCircle, Search, Zap, Star, Award } from 'lucide-react';

const FLOATING_ICONS = [
  { Icon: HelpCircle, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: MessageCircle, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Star, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Award, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        question: "What services does Brand Elevate offer?",
        answer: "Brand Elevate offers a comprehensive suite of digital marketing services including content creation, SEO optimization, social media management, and brand strategy development."
      },
      {
        question: "How do I get started with Brand Elevate?",
        answer: "Getting started is easy! Simply sign up for an account or contact our sales team for a personalized consultation to discuss your specific needs."
      }
    ]
  },
  {
    title: "Pricing & Plans",
    questions: [
      {
        question: "What are your pricing plans?",
        answer: "We offer flexible pricing plans starting from $49/month. Each plan is customizable to meet your specific needs and budget."
      },
      {
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial for all our plans. No credit card required to start your trial."
      }
    ]
  },
  {
    title: "Technical Support",
    questions: [
      {
        question: "How can I get technical support?",
        answer: "Our support team is available 24/7 through email, live chat, and phone. Premium plans include priority support."
      },
      {
        question: "What is your response time?",
        answer: "We typically respond to support requests within 2 hours during business hours and within 24 hours outside business hours."
      }
    ]
  }
];

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our services and platform.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none pr-12"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </motion.div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">{category.title}</h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <div key={questionIndex} className="border-b border-gray-200 pb-4">
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <span className="text-lg font-medium text-gray-900">{item.question}</span>
                          {openQuestions[`${categoryIndex}-${questionIndex}`] ? (
                            <Minus className="w-5 h-5 text-purple-600" />
                          ) : (
                            <Plus className="w-5 h-5 text-purple-600" />
                          )}
                        </button>
                        {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4 text-gray-600"
                          >
                            {item.answer}
                          </motion.p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600">
                Can't find what you're looking for? Contact our support team at{' '}
                <a href="mailto:support@brandelevate.com" className="text-purple-600 hover:text-purple-700">
                  support@brandelevate.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
} 
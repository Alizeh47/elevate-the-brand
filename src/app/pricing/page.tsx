'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Diamond, Sparkles, Zap, Shield, Award } from 'lucide-react';
import Link from 'next/link';

const FLOATING_ICONS = [
  { Icon: Star, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: Crown, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Diamond, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Award, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small businesses and startups",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "Basic content optimization",
      "5 pages of content",
      "Monthly performance report",
      "Basic SEO features",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing businesses",
    icon: <Shield className="w-8 h-8" />,
    popular: true,
    features: [
      "Advanced content optimization",
      "15 pages of content",
      "Weekly performance reports",
      "Advanced SEO features",
      "Priority email & chat support",
      "Social media integration",
      "Content strategy consultation"
    ]
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations with complex needs",
    icon: <Crown className="w-8 h-8" />,
    features: [
      "Full content management",
      "Unlimited pages",
      "Real-time analytics",
      "Custom SEO strategy",
      "24/7 priority support",
      "Dedicated account manager",
      "Custom integrations",
      "Strategy consulting"
    ]
  }
];

export default function PricingPage() {
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. No hidden fees, no surprises.
              </p>
            </motion.div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
                    plan.popular ? 'ring-2 ring-purple-600' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-purple-600 mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 hover:shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md'
                    }`}>
                      Get Started
                      {plan.popular && <Sparkles className="inline-block ml-2 w-5 h-5 transform transition-transform group-hover:scale-110" />}
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 
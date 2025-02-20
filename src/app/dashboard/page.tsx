'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Users, Globe, Clock, Star, 
  FileText, PieChart, Activity, Calendar, Bell, Settings } from 'lucide-react';

const FLOATING_ICONS = [
  { Icon: Star, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: Globe, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Clock, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: FileText, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Total Visitors",
    value: "12.5K",
    change: "+12%",
    positive: true
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Engagement Rate",
    value: "68%",
    change: "+5%",
    positive: true
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Page Views",
    value: "45.2K",
    change: "+18%",
    positive: true
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Avg. Session",
    value: "4m 32s",
    change: "-2%",
    positive: false
  }
];

const recentProjects = [
  {
    name: "Website Redesign",
    progress: 75,
    status: "In Progress"
  },
  {
    name: "Content Strategy",
    progress: 90,
    status: "Almost Done"
  },
  {
    name: "SEO Optimization",
    progress: 40,
    status: "Just Started"
  },
  {
    name: "Social Media Campaign",
    progress: 60,
    status: "In Progress"
  }
];

export default function DashboardPage() {
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

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Dashboard Overview
                </h1>
                <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex space-x-4"
              >
                <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Bell className="w-6 h-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Settings className="w-6 h-6" />
                </button>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-600">{stat.icon}</div>
                    <span className={`text-sm font-semibold ${
                      stat.positive ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg mb-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Projects</h2>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div>
                      <h3 className="font-medium mb-1">{project.name}</h3>
                      <p className="text-sm text-gray-600">{project.status}</p>
                    </div>
                    <div className="w-32">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Analytics Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-6">Traffic Analytics</h2>
                <div className="flex items-center justify-center h-64">
                  <BarChart2 className="w-full h-full text-gray-300" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-6">Engagement Overview</h2>
                <div className="flex items-center justify-center h-64">
                  <PieChart className="w-full h-full text-gray-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 
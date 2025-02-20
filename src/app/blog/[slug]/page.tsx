'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, Heart, Share2, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a database or CMS
const blogPosts = [
  {
    title: "The Future of Digital Marketing",
    excerpt: "Explore the latest trends and innovations shaping the future of digital marketing.",
    content: `
      Digital marketing is constantly evolving, and staying ahead of the curve is crucial for success. 
      In this comprehensive guide, we'll explore the latest trends and innovations that are shaping 
      the future of digital marketing.

      Key areas we'll cover:
      1. Artificial Intelligence in Marketing
      2. Voice Search Optimization
      3. Interactive Content
      4. Augmented Reality Experiences
      5. Privacy-First Marketing

      Each of these trends represents a significant shift in how businesses connect with their 
      audiences and deliver value through digital channels.
    `,
    author: "John Smith",
    date: "March 15, 2024",
    category: "Digital Marketing",
    image: "/images/blog/digital-marketing-future.jpg",
    readTime: "5 min read",
    slug: "future-of-digital-marketing"
  },
  {
    title: "Content Strategy Best Practices",
    excerpt: "Learn the essential strategies for creating engaging and effective content.",
    content: `
      Creating engaging content that resonates with your audience requires a well-planned strategy. 
      This guide will walk you through proven best practices for content creation and distribution.

      We'll discuss:
      1. Understanding Your Audience
      2. Content Planning and Calendar
      3. SEO Integration
      4. Distribution Channels
      5. Performance Measurement

      Following these best practices will help you create content that engages your audience and 
      achieves your marketing objectives.
    `,
    author: "Sarah Johnson",
    date: "March 12, 2024",
    category: "Content Strategy",
    image: "/images/blog/content-strategy.jpg",
    readTime: "7 min read",
    slug: "content-strategy-best-practices"
  },
  {
    title: "SEO Optimization Guide",
    excerpt: "Master the fundamentals of SEO to improve your website's visibility.",
    content: `
      Search Engine Optimization is crucial for improving your website's visibility and attracting 
      organic traffic. This comprehensive guide covers everything you need to know about SEO.

      Topics covered:
      1. Technical SEO Fundamentals
      2. On-Page Optimization
      3. Content Strategy for SEO
      4. Link Building
      5. Performance Monitoring

      By implementing these SEO strategies, you'll improve your website's search engine rankings 
      and attract more qualified traffic.
    `,
    author: "Mike Wilson",
    date: "March 10, 2024",
    category: "SEO",
    image: "/images/blog/seo-guide.jpg",
    readTime: "6 min read",
    slug: "seo-optimization-guide"
  }
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
              <Link href="/blog" className="text-purple-600 hover:text-purple-700">
                Return to Blog
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <article className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  {post.category}
                </div>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video mb-12 rounded-xl overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Social Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center space-x-6 mt-12 pt-6 border-t border-gray-200"
            >
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </motion.div>

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-12"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
              >
                ← Back to Blog
              </Link>
            </motion.div>
          </div>
        </article>
      </main>
    </>
  );
} 
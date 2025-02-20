'use client'

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Clock, User, Tag, Heart, Share2, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FLOATING_ICONS = [
  { Icon: BookOpen, top: '10%', left: '5%', size: 48, color: 'purple-600', delay: 0 },
  { Icon: PenTool, bottom: '15%', right: '8%', size: 56, color: 'pink-600', delay: 0.5 },
  { Icon: Heart, top: '25%', right: '15%', size: 64, color: 'purple-600', delay: 1 },
  { Icon: Share2, bottom: '30%', left: '10%', size: 52, color: 'pink-600', delay: 1.5 }
];

const GEOMETRIC_SHAPES = [
  { type: 'circle', top: '15%', left: '10%', size: 'lg', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '20%', right: '15%', size: 'md', gradient: 'from-pink-400/20 to-purple-400/20' },
  { type: 'circle', top: '40%', right: '25%', size: 'sm', gradient: 'from-purple-400/20 to-pink-400/20' },
  { type: 'square', bottom: '35%', left: '20%', size: 'lg', gradient: 'from-pink-400/20 to-purple-400/20' }
];

const blogPosts = [
  {
    title: "The Future of Digital Marketing",
    excerpt: "Explore the latest trends and innovations shaping the future of digital marketing.",
    author: "John Smith",
    date: "March 15, 2024",
    category: "Digital Marketing",
    image: "/images/team/member1.jpg",
    readTime: "5 min read",
    slug: "future-of-digital-marketing",
    likes: 0,
    comments: 0,
  },
  {
    title: "Content Strategy Best Practices",
    excerpt: "Learn the essential strategies for creating engaging and effective content.",
    author: "Sarah Johnson",
    date: "March 12, 2024",
    category: "Content Strategy",
    image: "/images/team/member2.jpg",
    readTime: "7 min read",
    slug: "content-strategy-best-practices",
    likes: 0,
    comments: 0,
  },
  {
    title: "SEO Optimization Guide",
    excerpt: "Master the fundamentals of SEO to improve your website's visibility.",
    author: "Mike Wilson",
    date: "March 10, 2024",
    category: "SEO",
    image: "/images/member6.jpg",
    readTime: "6 min read",
    slug: "seo-optimization-guide",
    likes: 0,
    comments: 0,
  }
];

export default function BlogPage() {
  const [posts, setPosts] = useState(blogPosts);

  const handleLike = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setPosts(currentPosts => 
      currentPosts.map((post, i) => 
        i === index ? { ...post, likes: (post.likes || 0) + 1 } : post
      )
    );
  };

  const handleComment = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setPosts(currentPosts => 
      currentPosts.map((post, i) => 
        i === index ? { ...post, comments: (post.comments || 0) + 1 } : post
      )
    );
  };

  const handleShare = async (post: typeof posts[0], e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.origin + '/blog/' + post.slug,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL to clipboard
      const url = window.location.origin + '/blog/' + post.slug;
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
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
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, tips, and strategies to help you elevate your digital presence.
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Tag className="w-4 h-4 mr-2" />
                        {post.category}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={(e) => handleLike(index, e)}
                            className="text-gray-500 hover:text-purple-600 transition-colors flex items-center"
                          >
                            <Heart className={`w-5 h-5 ${post.likes ? 'fill-purple-600 text-purple-600' : ''}`} />
                            {post.likes > 0 && <span className="ml-1 text-sm">{post.likes}</span>}
                          </button>
                          <button 
                            onClick={(e) => handleComment(index, e)}
                            className="text-gray-500 hover:text-purple-600 transition-colors flex items-center"
                          >
                            <MessageSquare className="w-5 h-5" />
                            {post.comments > 0 && <span className="ml-1 text-sm">{post.comments}</span>}
                          </button>
                          <button 
                            onClick={(e) => handleShare(post, e)}
                            className="text-gray-500 hover:text-purple-600 transition-colors"
                          >
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
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
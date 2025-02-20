'use client'

import React from 'react';
import Image from 'next/image';
import { Phudu } from 'next/font/google';
import { Sigmar } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });
const sigmar = Sigmar({ subsets: ['latin'], weight: ['400'] });

const ContactingSection = () => {
  const messages = [
    { 
      sender: 'brad',
      text: "Hi, BrandElevate!",
      name: "Brad Doe",
      avatar: "/images/brad-profile.jpg"
    },
    { 
      sender: 'brandelevate',
      text: "Hello Brad, Lorem Ipsum is simply dummy text.",
      name: "Team BrandElevate",
      avatar: "/images/avatar2.jpg"
    },
    { 
      sender: 'brad',
      text: "Lorem Ipsum is simply dummy text used by.",
      name: "Brad Doe",
      avatar: "/images/brad-profile.jpg"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Section Border Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Border with Geometric Designs */}
        <div className="absolute top-0 left-0 right-0 h-20">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
          {/* Left Top Corner */}
          <div className="absolute left-10 top-0 w-20 h-20">
            <div className="absolute inset-0 border-t-2 border-l-2 border-purple-300/30 rounded-tl-3xl"></div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-purple-400/30 rounded-full animate-ping"></div>
            <div className="absolute top-6 left-6 w-6 h-6 border border-purple-300/30 rotate-45 animate-spin-slow"></div>
            <div className="absolute top-2 left-2 w-4 h-4 border-2 border-purple-300/30 rounded-full"></div>
          </div>
          {/* Right Top Corner */}
          <div className="absolute right-10 top-0 w-20 h-20">
            <div className="absolute inset-0 border-t-2 border-r-2 border-purple-300/30 rounded-tr-3xl"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400/30 rounded-full animate-ping delay-300"></div>
            <div className="absolute top-6 right-6 w-6 h-6 border border-purple-300/30 rotate-45 animate-spin-slow"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-2 border-purple-300/30 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Border with Geometric Designs */}
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
          {/* Left Bottom Corner */}
          <div className="absolute left-10 bottom-0 w-20 h-20">
            <div className="absolute inset-0 border-b-2 border-l-2 border-purple-300/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400/30 rounded-full animate-ping delay-150"></div>
            <div className="absolute bottom-6 left-6 w-6 h-6 border border-purple-300/30 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-purple-300/30 rounded-full"></div>
          </div>
          {/* Right Bottom Corner */}
          <div className="absolute right-10 bottom-0 w-20 h-20">
            <div className="absolute inset-0 border-b-2 border-r-2 border-purple-300/30 rounded-br-3xl"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-purple-400/30 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-6 right-6 w-6 h-6 border border-purple-300/30 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-purple-300/90 rounded-full"></div>
          </div>
        </div>

        {/* Side Borders with Enhanced Geometric Designs */}
        <div className="absolute top-20 bottom-20 left-0 w-1">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"></div>
          <div className="absolute top-1/4 -left-3 w-6 h-6 border border-purple-300/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 -left-2 w-4 h-4 border border-purple-900/80 rotate-45"></div>
          <div className="absolute bottom-1/4 -left-3 w-6 h-6 border border-purple-300/30 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 -left-2 w-4 h-4 border border-purple-300/30 rotate-45"></div>
        </div>
        <div className="absolute top-20 bottom-20 right-0 w-1">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"></div>
          <div className="absolute top-1/4 -right-3 w-6 h-6 border border-purple-300/30 rounded-full animate-pulse delay-150"></div>
          <div className="absolute top-1/4 -right-2 w-4 h-4 border border-purple-300/30 rotate-45"></div>
          <div className="absolute bottom-1/4 -right-3 w-6 h-6 border border-purple-300/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 -right-2 w-4 h-4 border border-purple-300/30 rotate-45"></div>
        </div>

        {/* Corner Connectors with Geometric Elements */}
        <div className="absolute top-20 left-0 w-10 h-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-transparent animate-pulse"></div>
          <div className="absolute left-0 -top-2 w-4 h-4 border border-purple-300/30 rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute top-20 right-0 w-10 h-1">
          <div className="absolute inset-0 bg-gradient-to-l from-purple-800/30 to-transparent animate-pulse delay-150"></div>
          <div className="absolute right-0 -top-2 w-4 h-4 border border-purple-900/90 rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-20 left-0 w-10 h-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 to-transparent animate-pulse delay-300"></div>
          <div className="absolute left-0 -bottom-2 w-4 h-4 border border-purple-300/30 rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-20 right-0 w-10 h-1">
          <div className="absolute inset-0 bg-gradient-to-l from-purple-300/30 to-transparent animate-pulse delay-500"></div>
          <div className="absolute right-0 -bottom-2 w-4 h-4 border border-purple-300/30 rotate-45 animate-spin-slow"></div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/contact-bg.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        {/* Image Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-pink-800/40 backdrop-blur-sm"></div>
      </div>

      {/* Background Triangles with Lighter Colors - Adjusted opacity */}
      <div className="absolute inset-0 -z-10">
        {/* Left Triangle */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-purple-100/70 to-pink-200/10"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            opacity: '2.5'
          }}
        />
        {/* Right Triangle */}
        <div 
          className="absolute inset-0 bg-gradient-to-bl from-pink-200 via-pink-100 to-pink-200"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
            opacity: '2.5'
          }}
        />
        {/* Subtle Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        {/* Light blur effect */}
        <div className="absolute inset-0 backdrop-blur-[50px]"></div>
      </div>

      {/* Moving Dot Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid of Dots */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'moveBackground 20s linear infinite'
        }}></div>
        
        {/* Fixed Pattern Dots */}
        <div className="absolute inset-0">
          {[
            { left: '20%', top: '20%', delay: '0s' },
            { left: '80%', top: '15%', delay: '1s' },
            { left: '40%', top: '40%', delay: '2s' },
            { left: '60%', top: '30%', delay: '3s' },
            { left: '25%', top: '60%', delay: '4s' },
            { left: '75%', top: '50%', delay: '5s' },
            { left: '35%', top: '80%', delay: '6s' },
            { left: '85%', top: '70%', delay: '7s' },
            { left: '15%', top: '45%', delay: '8s' },
            { left: '65%', top: '85%', delay: '9s' },
            { left: '45%', top: '25%', delay: '10s' },
            { left: '90%', top: '90%', delay: '11s' },
            { left: '10%', top: '70%', delay: '12s' },
            { left: '50%', top: '55%', delay: '13s' },
            { left: '70%', top: '35%', delay: '14s' }
          ].map((dot, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 rounded-full bg-purple-400/20"
              style={{
                left: dot.left,
                top: dot.top,
                animation: 'floatDot 15s linear infinite',
                animationDelay: dot.delay
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Shapes with Lighter Colors */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-purple-300/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-pink-300/30 transform rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-4 border-purple-300/30 transform rotate-[30deg] animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Additional Geometric Elements */}
        <div className="absolute top-1/4 left-1/3 w-40 h-40">
          <div className="absolute inset-0 border-2 border-purple-300/30 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border-2 border-pink-300/30 rounded-full animate-spin-slow [animation-direction:reverse]"></div>
        </div>

        {/* Floating Dots with Lighter Colors */}
        <div className="absolute top-1/2 left-20 flex gap-2">
          <div className="w-2 h-2 bg-purple-400/40 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-purple-400/40 rounded-full animate-ping delay-150"></div>
          <div className="w-2 h-2 bg-purple-400/40 rounded-full animate-ping delay-300"></div>
        </div>
        <div className="absolute bottom-1/3 right-32 flex gap-2">
          <div className="w-2 h-2 bg-pink-400/40 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-pink-400/40 rounded-full animate-ping delay-150"></div>
          <div className="w-2 h-2 bg-pink-400/40 rounded-full animate-ping delay-300"></div>
        </div>

        {/* Gradient Lines with Lighter Colors */}
        <div className="absolute top-1/4 right-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-pink-300/40 to-transparent transform -rotate-45"></div>

        {/* Animated Corner Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden">
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-purple-300/30 transform rotate-[30deg] animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 overflow-hidden">
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-pink-300/30 transform -rotate-[30deg] animate-pulse delay-300"></div>
        </div>

        {/* Gradient Orbs with Lighter Colors */}
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-purple-300/20 to-transparent blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-pink-300/20 to-transparent blur-2xl animate-pulse delay-300"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className={`text-4xl md:text-5xl font-bold text-purple-900 text-center mb-16 ${phudu.className}`}>
            then i contacted BrandElevate
          </h2>

          {/* Description Text */}
          <p className="text-purple-800 text-center max-w-2xl mx-auto mb-16 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>

          {/* Chat Messages */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.sender === 'brad' ? '' : 'flex-row-reverse'
                }`}
              >
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-300/50">
                  <Image
                    src={message.avatar}
                    alt={message.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Message Content */}
                <div className={`flex flex-col ${
                  message.sender === 'brad' ? 'items-start' : 'items-end'
                }`}>
                  <span className="text-purple-800 text-sm mb-1">{message.name}</span>
                  <div className={`max-w-sm rounded-2xl p-4 ${
                    message.sender === 'brad'
                      ? 'bg-white text-gray-800 rounded-tl-none shadow-lg'
                      : 'bg-purple-100 backdrop-blur-sm text-purple-900 rounded-tr-none shadow-lg'
                  }`}>
                    <p className="text-sm md:text-base">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }
        @keyframes floatDot {
          0% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-30px, 30px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactingSection; 
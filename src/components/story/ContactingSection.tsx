'use client'

import React from 'react';
import Image from 'next/image';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

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
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Large Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border-[2px] border-purple-300/30 rounded-full animate-spin-slow" />
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border-[1px] border-purple-200/20 rounded-full animate-spin-slow [animation-direction:reverse]" />
        
        {/* Large Square */}
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border-[2px] border-pink-300/30 rotate-45 animate-spin-slower" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border-[1px] border-pink-200/20 rotate-45 animate-spin-slower [animation-direction:reverse]" />
      </div>

      {/* Geometric Lines Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal Lines - More Prominent */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
          style={{
                top: `${(i + 1) * 8.33}%`,
                transform: `translateY(${Math.sin(i) * 20}px)`,
              }}
            />
          ))}
      </div>

        {/* Vertical Lines - More Prominent */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-pink-300/30 to-transparent"
              style={{
                left: `${(i + 1) * 6.66}%`,
                transform: `translateX(${Math.cos(i) * 20}px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Decorative Circles */}
        <div className="absolute top-20 left-20 w-96 h-96">
          <div className="absolute inset-0 border-2 border-purple-300/40 rounded-full animate-pulse" />
          <div className="absolute inset-8 border border-purple-200/30 rounded-full animate-pulse delay-150" />
          <div className="absolute inset-16 border border-purple-100/20 rounded-full animate-pulse delay-300" />
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-80 h-80">
          <div className="absolute inset-0 border-2 border-pink-300/40 rounded-full animate-pulse delay-200" />
          <div className="absolute inset-8 border border-pink-200/30 rounded-full animate-pulse delay-300" />
          <div className="absolute inset-16 border border-pink-100/20 rounded-full animate-pulse delay-500" />
        </div>

        {/* Geometric Patterns */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40">
          <div className="absolute inset-0 border-2 border-purple-300/40 rotate-45 animate-spin-slow" />
          <div className="absolute inset-4 border border-purple-200/30 rotate-[60deg] animate-spin-slow delay-150" />
          <div className="absolute inset-8 border border-purple-100/20 rotate-[30deg] animate-spin-slow delay-300" />
        </div>

        <div className="absolute bottom-1/4 left-1/4 w-32 h-32">
          <div className="absolute inset-0 border-2 border-pink-300/40 rotate-12 animate-spin-slow" />
          <div className="absolute inset-4 border border-pink-200/30 rotate-45 animate-spin-slow delay-150" />
          <div className="absolute inset-8 border border-pink-100/20 rotate-[60deg] animate-spin-slow delay-300" />
        </div>

        {/* Enhanced Floating Dots */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`dots-${i}`}
            className="absolute flex gap-3"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
            <div className="w-2 h-2 rounded-full bg-purple-300/50 animate-pulse" style={{ animationDelay: `${i * 400}ms` }} />
          </div>
        ))}

        {/* Corner Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64">
          <div className="absolute top-8 right-8 w-32 h-32 border-t-4 border-r-4 border-purple-300/40 rounded-tr-3xl" />
          <div className="absolute top-12 right-12 w-24 h-24 border-t-2 border-r-2 border-purple-200/30 rounded-tr-2xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64">
          <div className="absolute bottom-8 left-8 w-32 h-32 border-b-4 border-l-4 border-pink-300/40 rounded-bl-3xl" />
          <div className="absolute bottom-12 left-12 w-24 h-24 border-b-2 border-l-2 border-pink-200/30 rounded-bl-2xl" />
        </div>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>

          {/* Chat Messages */}
          <div className="space-y-8 max-w-2xl mx-auto backdrop-blur-sm">
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
                    sizes="(max-width: 768px) 48px, 48px"
                    className="object-cover"
                  />
                </div>

                {/* Message Content */}
                <div className={`flex flex-col ${
                  message.sender === 'brad' ? 'items-start' : 'items-end'
                }`}>
                  <span className="text-purple-800 text-sm mb-1">{message.name}</span>
                  <div className={`max-w-sm rounded-2xl p-4 backdrop-blur-md ${
                    message.sender === 'brad'
                      ? 'bg-white/90 text-gray-800 rounded-tl-none shadow-lg'
                      : 'bg-purple-100/90 text-purple-900 rounded-tr-none shadow-lg'
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
        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactingSection; 
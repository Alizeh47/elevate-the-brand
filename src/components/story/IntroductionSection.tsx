import React from 'react';
import Image from 'next/image';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const IntroductionSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic Background with Blur */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
        style={{
          background: `
            radial-gradient(circle at 100% 0%, 
              rgba(168, 85, 247, 0.15) 0%,
              rgba(236, 72, 153, 0.15) 30%,
              rgba(99, 102, 241, 0.15) 70%
            )
          `,
          backdropFilter: 'blur(100px)'
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none -z-5">
        <div className="absolute top-20 left-10 animate-float opacity-10">
          <div className="w-32 h-32 border-4 border-purple-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 right-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <div className="w-24 h-24 border-4 border-pink-500 transform rotate-45"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 border-4 border-indigo-500 transform rotate-[30deg]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image with Enhanced Frame */}
            <div className="relative w-64 h-64 flex-shrink-0">
              <div className="absolute inset-0 border-2 border-purple-600 transform rotate-6 animate-pulse"></div>
              <div className="absolute inset-0 bg-purple-100/50 backdrop-blur-sm"></div>
              <Image
                src="/images/brad-profile.jpg"
                alt="Brad&apos;s Profile"
                fill
                sizes="256px"
                className="object-cover relative z-10"
              />
              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-400"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400"></div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${phudu.className} relative`}>
                hello, I am
                <span className="text-purple-600"> brad pitt</span>
                {/* Decorative line */}
                <div className="absolute -bottom-2 left-0 w-20 h-[2px] bg-gradient-to-r from-purple-600 to-transparent"></div>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed relative">
                As a business owner in the digital age, I understand the importance
                of having a strong online presence. My journey began when I realized
                that my company needed more than just a basic website - we needed a
                compelling story that would resonate with our audience and set us
                apart from the competition.
              </p>
            </div>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-1/2 right-0 w-20 h-20 border-2 border-purple-200/50 rounded-full 
            transform translate-x-1/2 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-0 left-1/4 w-16 h-16 border-2 border-purple-200/50 
            transform -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection; 
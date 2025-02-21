import React from 'react';
import Image from 'next/image';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const StruggleSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic Background with Blur */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
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
        <div className="absolute top-20 right-10 animate-float opacity-10">
          <div className="w-32 h-32 border-4 border-purple-500 transform rotate-[60deg]"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <div className="w-24 h-24 border-4 border-pink-500 transform rotate-[30deg]"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 border-4 border-indigo-500 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Enhanced Profile Image */}
            <div className="relative w-64 h-64 flex-shrink-0 order-2 md:order-1">
              <div className="absolute inset-0 bg-purple-600/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 border-2 border-purple-600 transform -rotate-6 animate-pulse"></div>
              <Image
                src="/images/brad-struggle.jpg"
                alt="Brad&apos;s Struggle"
                fill
                className="object-cover relative z-10"
              />
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-400"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400"></div>
            </div>

            {/* Content */}
            <div className="flex-1 order-1 md:order-2">
              <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-purple-600 ${phudu.className} relative`}>
                but couldn't find a solution
                {/* Decorative line */}
                <div className="absolute -bottom-2 left-0 w-32 h-[2px] bg-gradient-to-r from-purple-600 to-transparent"></div>
              </h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  I tried various content creation services, but none of them truly understood
                  my vision or could capture the essence of my brand. The challenges I faced were:
                </p>

                <ul className="space-y-4">
                  {[
                    "Generic content that didn't reflect our unique voice",
                    "Lack of strategic direction and purpose",
                    "Poor understanding of our industry and audience",
                    "Inconsistent quality and messaging"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 mt-2 bg-purple-600 transform rotate-45 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="text-lg group-hover:text-purple-600 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StruggleSection; 
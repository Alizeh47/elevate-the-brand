import React from 'react';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const ProblemSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic Background with Blur */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
        style={{
          background: `
            radial-gradient(circle at 0% 100%, 
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
          <div className="w-32 h-32 border-4 border-purple-500 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <div className="w-24 h-24 border-4 border-pink-500 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 left-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 border-4 border-indigo-500 transform rotate-[60deg]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl ml-auto text-right">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${phudu.className} relative inline-block`}>
            <span className="text-purple-600">i want some content</span>
            {/* Decorative line */}
            <div className="absolute -bottom-2 right-0 w-32 h-[2px] bg-gradient-to-l from-purple-600 to-transparent"></div>
          </h2>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              My business was growing, but our online presence wasn't reflecting our true
              potential. I needed content that would:
            </p>

            <ul className="space-y-4 list-none">
              {[
                'Showcase our expertise and unique value proposition',
                'Connect with our target audience on a deeper level',
                'Build trust and credibility in our industry',
                'Drive meaningful engagement and conversions'
              ].map((point, index) => (
                <li key={index} className="flex items-center justify-end gap-3 group">
                  <span className="text-lg group-hover:text-purple-600 transition-colors">{point}</span>
                  <div className="w-2 h-2 bg-purple-600 transform rotate-45 group-hover:scale-125 transition-transform"></div>
                </li>
              ))}
            </ul>

            <p className="text-lg font-semibold text-black">
              But creating compelling content that truly resonates isn't as simple as it seems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 
import React from 'react';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const points = [
  'Showcase our expertise and unique value proposition',
  'Connect with our target audience on a deeper level',
  'Build trust and credibility in our industry',
  'Drive meaningful engagement and conversions'
];

const ProblemSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Dynamic Background with Blur */}
      <div 
        className="fixed inset-0 -z-10 transition-all duration-1000 ease-in-out"
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
      <div className="pointer-events-none absolute inset-0 -z-[5]">
        <div className="absolute right-10 top-20 animate-float opacity-10">
          <div className="size-32 rotate-45 border-4 border-purple-500"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <div className="size-24 rounded-full border-4 border-pink-500"></div>
        </div>
        <div className="absolute left-1/4 top-1/3 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <div className="size-20 rotate-[60deg] border-4 border-indigo-500"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="ml-auto max-w-4xl text-right">
          <h2 className={`relative mb-8 inline-block text-4xl font-bold md:text-5xl ${phudu.className}`}>
            <span className="text-purple-600">i want some content</span>
            {/* Decorative line */}
            <div className="absolute -bottom-2 right-0 h-0.5 w-32 bg-gradient-to-l from-purple-600 to-transparent"></div>
          </h2>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              My business was growing, but our online presence wasn&apos;t reflecting our true
              potential. I needed content that would:
            </p>

            <ul className="list-none space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center justify-end gap-3 group">
                  <span className="text-lg transition-colors group-hover:text-purple-600">{point}</span>
                  <div className="size-2 rotate-45 bg-purple-600 transition-transform group-hover:scale-125"></div>
                </li>
              ))}
            </ul>

            <p className="text-lg font-semibold text-black">
              But creating compelling content that truly resonates isn&apos;t as simple as it seems.
            </p>

            <p className="mb-8 text-gray-600">
              &quot;We couldn&apos;t keep up with the content demands of our growing business. Our team was overwhelmed.&quot;
            </p>

            <p className="mb-4 text-gray-600">
              &quot;We were struggling to maintain consistency across our brand&apos;s messaging and visual identity.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 
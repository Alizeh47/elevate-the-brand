import React from 'react';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const TestimonialSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Grid and Line */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-black" />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-0.5 bg-black/10 transform -rotate-12 translate-y-1/2" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex">
          {/* Video Section */}
          <div className="relative w-3/4">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/brad-testimonial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-[45%] relative -ml-10 mt-16 z-10">
            <div className="bg-purple-600 text-white p-10 shadow-xl relative overflow-hidden">
              {/* Geometric Patterns */}
              <div className="absolute inset-0 opacity-10">
                {/* Large Circle */}
                <div className="absolute -right-20 -top-20 w-64 h-64 border-[30px] border-white rounded-full" />
                {/* Small Circle */}
                <div className="absolute -left-10 -bottom-10 w-40 h-40 border-[20px] border-white rounded-full" />
                {/* Diagonal Lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 right-0 w-32 h-1 bg-white transform rotate-45" />
                  <div className="absolute bottom-1/4 left-0 w-32 h-1 bg-white transform -rotate-45" />
                </div>
                {/* Squares */}
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-[10px] border-white transform rotate-45" />
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-[8px] border-white transform -rotate-12" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className={`text-5xl mb-6 ${phudu.className} tracking-tight`}>brad's story</h2>
                <p className="text-lg leading-relaxed opacity-90 mb-8 font-light">
                  "Working with BrandElevate transformed our brand's online presence. The results exceeded
                  our expectations. Their strategic approach and creative solutions helped us stand out in
                  our industry."
                </p>
                <div className="mt-6">
                  <span className="text-2xl font-medium">brad nichole</span>
                  <p className="text-purple-200 mt-1">CEO, TechVision Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-20 top-40 w-24 h-24 border-2 border-purple-200 rounded-full 
        animate-bounce"></div>
      <div className="absolute right-1/4 bottom-20 w-16 h-16 border-2 border-purple-200 
        transform rotate-45 animate-pulse"></div>
    </section>
  );
};

export default TestimonialSection; 
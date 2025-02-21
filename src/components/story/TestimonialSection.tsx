import React from 'react';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const TestimonialSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full grid grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-black" />
            ))}
          </div>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 border-[3px] border-purple-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-40 w-32 h-32 border-[3px] border-purple-500/20 rotate-45 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/5" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center">
          {/* Content Card - Left */}
          <div className="w-[40%] relative z-20">
            <div className="bg-purple-600 text-white p-12 rounded-lg shadow-xl relative overflow-hidden mr-[-50px]">
              {/* Card Background Patterns */}
              <div className="absolute inset-0">
                {/* Large Circle */}
                <div className="absolute -right-16 -top-16 w-48 h-48 border-[20px] border-white/10 rounded-full" />
                {/* Small Circle */}
                <div className="absolute -left-8 -bottom-8 w-32 h-32 border-[15px] border-white/10 rounded-full" />
                {/* Diagonal Lines */}
                <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white/10 -translate-x-1/2 rotate-45" />
                <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white/10 -translate-x-1/2 -rotate-45" />
                {/* Squares */}
                <div className="absolute top-1/3 left-1/4 w-12 h-12 border-[3px] border-white/10 rotate-45" />
                <div className="absolute bottom-1/4 right-1/3 w-8 h-8 border-[3px] border-white/10 -rotate-12" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className={`text-5xl mb-6 ${phudu.className}`}>brad&apos;s story</h2>
                <p className="text-lg leading-relaxed opacity-90 mb-4">
                  &quot;Working with this team has been an absolute game-changer for our business. They don&apos;t just deliver content; they deliver results.&quot;
                </p>
                <p className="text-lg leading-relaxed opacity-90 mb-8">
                  &quot;Their strategic approach and attention to detail have helped us achieve our goals faster than we ever thought possible.&quot;
                </p>
                <div className="mt-6">
                  <span className="text-2xl font-medium">brad nichole</span>
                  <p className="mt-1 text-purple-200">CEO, TechVision Pro</p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[141%] h-[141%] border-[3px] border-white/20 rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[141%] h-[141%] border-[3px] border-white/20 rounded-full -translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Video Section - Right */}
          <div className="relative w-[65%]">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" />
              
              {/* Main Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/brad-testimonial.mp4?v=1" type="video/mp4" />
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10" />
              
              {/* Decorative Corner Lines */}
              <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-white/60" />
                <div className="absolute top-0 right-0 w-[2px] h-full bg-white/60" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/60" />
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-white/60" />
              </div>
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-purple-500/20 rounded-full" />
            <div className="absolute -bottom-4 left-1/4 w-16 h-16 border-4 border-purple-500/20 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 
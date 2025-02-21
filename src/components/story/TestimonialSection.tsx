import React from 'react';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const TestimonialSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid size-full grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-black" />
            ))}
          </div>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 size-24 animate-pulse rounded-full border-[3px] border-purple-500/20" />
        <div className="absolute bottom-20 right-40 size-32 animate-pulse rounded-full border-[3px] border-purple-500/20 rotate-45" />
        <div className="absolute top-40 right-20 size-16 bg-purple-500/5" />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4">
        <div className="flex items-center">
          {/* Content Card - Left */}
          <div className="relative z-20 w-2/5">
            <div className="relative mr-[-50px] overflow-hidden rounded-lg bg-purple-600 p-12 text-white shadow-xl">
              {/* Card Background Patterns */}
              <div className="absolute inset-0">
                {/* Large Circle */}
                <div className="absolute -right-16 -top-16 size-48 rounded-full border-[20px] border-white/10" />
                {/* Small Circle */}
                <div className="absolute -left-8 -bottom-8 size-32 rounded-full border-[15px] border-white/10" />
                {/* Diagonal Lines */}
                <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 rotate-45 bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -rotate-45 bg-white/10" />
                {/* Squares */}
                <div className="absolute left-1/4 top-1/3 size-12 rotate-45 border-[3px] border-white/10" />
                <div className="absolute bottom-1/4 right-1/3 size-8 -rotate-12 border-[3px] border-white/10" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className={`mb-6 text-5xl ${phudu.className}`}>brad&apos;s story</h2>
                <p className="mb-4 text-gray-600">
                  &quot;Working with this team has been an absolute game-changer for our business. They don&apos;t just deliver content; they deliver results.&quot;
                </p>
                <p className="text-gray-600">
                  &quot;Their strategic approach and attention to detail have helped us achieve our goals faster than we ever thought possible.&quot;
                </p>
                <div className="mt-6">
                  <span className="text-2xl font-medium">brad nichole</span>
                  <p className="mt-1 text-purple-200">CEO, TechVision Pro</p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute right-0 top-0 size-16 overflow-hidden">
                <div className="absolute right-0 top-0 size-[141%] translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white/20" />
              </div>
              <div className="absolute bottom-0 left-0 size-16 overflow-hidden">
                <div className="absolute bottom-0 left-0 size-[141%] -translate-x-1/2 translate-y-1/2 rounded-full border-[3px] border-white/20" />
              </div>
            </div>
          </div>

          {/* Video Section - Right */}
          <div className="relative w-[65%]">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 size-32 rounded-full bg-purple-500/10 blur-xl" />
              <div className="absolute -bottom-6 -right-6 size-40 rounded-full bg-purple-500/10 blur-xl" />
              
              {/* Main Video */}
              <video
                className="absolute inset-0 size-full rounded-lg object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/videos/brad-testimonial.mp4" type="video/mp4" />
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10" />
              
              {/* Decorative Corner Lines */}
              <div className="pointer-events-none absolute top-4 right-4 size-12">
                <div className="absolute right-0 top-0 h-px w-full bg-white/60" />
                <div className="absolute right-0 top-0 h-full w-px bg-white/60" />
              </div>
              <div className="pointer-events-none absolute bottom-4 left-4 size-12">
                <div className="absolute bottom-0 left-0 h-px w-full bg-white/60" />
                <div className="absolute bottom-0 left-0 h-full w-px bg-white/60" />
              </div>
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute -top-6 -right-6 size-24 rounded-full border-4 border-purple-500/20" />
            <div className="absolute -bottom-4 left-1/4 size-16 rotate-45 border-4 border-purple-500/20" />
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="relative">
        <div className="size-48 absolute -top-12 -left-12 bg-purple-600/10 rounded-full"></div>
        <div className="size-32 absolute -bottom-8 -right-8 bg-pink-500/10 rounded-full"></div>
        <div className="h-px w-32 absolute top-1/2 -left-40 bg-gradient-to-r from-purple-600/30 to-transparent"></div>
        <div className="h-px w-32 absolute top-1/2 -right-40 bg-gradient-to-l from-pink-500/30 to-transparent"></div>
        <div className="size-12 absolute -top-20 left-1/2 -translate-x-1/2 bg-purple-600/5 rounded-full"></div>
        <div className="size-8 absolute -bottom-16 left-1/2 -translate-x-1/2 bg-pink-500/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default TestimonialSection; 
import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

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

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="flex">
          {/* Video Section */}
          <div className="relative w-3/4">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
                src="/videos/team-meeting.mp4"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-[45%] relative -ml-10 mt-16 z-10">
            <div className="bg-pink-500 text-white p-10 shadow-xl relative overflow-hidden">
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
                <h2 className="text-5xl font-letterform mb-6 font-sans tracking-tight">about us</h2>
                <p className="text-lg leading-relaxed opacity-90 mb-8 font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...
                </p>
                <div className="mt-6">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-white text-lg font-medium hover:opacity-80 transition-all group"
                  >
                    <span className="mr-2 tracking-wide relative">
                      read more
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
import Link from 'next/link'
import { Caesar_Dressing } from 'next/font/google'

const caesarDressing = Caesar_Dressing({
  weight: '400',
  subsets: ['latin'],
})

export function AboutSection() {
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
        <div className="absolute top-20 left-10 w-24 h-24 border-[3px] border-pink-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-40 w-32 h-32 border-[3px] border-pink-500/20 rotate-45 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-500/5" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center">
          {/* Content Card - Left */}
          <div className="w-[40%] relative z-20">
            <div className="bg-pink-500 text-white p-12 rounded-lg shadow-xl relative overflow-hidden mr-[-50px]">
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
                <h2 className={`text-5xl mb-6 ${caesarDressing.className}`}>about us</h2>
                <p className="text-lg leading-relaxed opacity-90 mb-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text...
                </p>
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-white text-lg font-medium group"
                >
                  <span className="relative">
                    read more
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
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
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-500/10 rounded-full blur-xl" />
              
              {/* Main Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/videos/meeting.mp4" type="video/mp4" />
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
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-pink-500/20 rounded-full" />
            <div className="absolute -bottom-4 left-1/4 w-16 h-16 border-4 border-pink-500/20 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  )
}

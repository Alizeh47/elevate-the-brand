'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32">
      {/* Background Number 4 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-0 bottom-0 text-[40rem] font-bold text-purple-600 leading-none z-0"
      >
        4
      </motion.div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[5rem] font-bold leading-tight">
                <div>powerful</div>
                <div>creation</div>
              </h1>
              
              <div className="mt-8 flex items-center">
                <div className="w-12 h-0.5 bg-purple-600 mr-6"></div>
                <p className="text-gray-600 max-w-md text-lg">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Extended Image Container */}
              <div className="relative h-[550px] w-[120%] -mt-16">
                <Image
                  src="/images/business-meeting.jpg"
                  alt="Business Meeting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Text Block */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-[45%] -left-[18%] z-10"
              >
                <div className="bg-purple-900/70 backdrop-blur-sm py-32 px-24 shadow-xl flex items-left relative overflow-hidden">
                  {/* Geometric Pattern Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 border-8 border-purple-500/20 transform rotate-45 translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 border-8 border-purple-500/20 transform rotate-45 -translate-x-20 translate-y-20" />
                    <div className="absolute top-1/2 right-0 w-24 h-24 bg-purple-500/10 transform rotate-45 translate-x-12 -translate-y-12" />
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 border-4 border-purple-500/20 transform rotate-12" />
                    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-4 border-purple-500/20 transform -rotate-12" />
                    {/* Diagonal Lines */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 transform rotate-45 origin-top-left" />
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 transform -rotate-45 origin-bottom-right" />
                    </div>
                  </div>
                  
                  <h2 className="text-white text-7xl font-bold tracking-widest uppercase pl-6 relative z-10">
                    content
                  </h2>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 right-0 flex gap-4">
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600/40 to-pink-500/40 backdrop-blur-sm transform rotate-45" />
                <div className="w-8 h-8 border-2 border-purple-600/30 transform rotate-45 backdrop-blur-sm" />
              </div>
              <div className="absolute -right-4 top-1/2 flex flex-col gap-4">
                <div className="w-1 h-24 bg-gradient-to-b from-purple-600/40 to-pink-500/40 backdrop-blur-sm" />
                <div className="w-4 h-4 rounded-full bg-purple-600/20 backdrop-blur-sm" />
                <div className="w-6 h-6 border border-purple-600/30 transform rotate-45 backdrop-blur-sm" />
              </div>
              {/* Additional Modern Element */}
              <div className="absolute top-0 -right-8">
                <div className="w-16 h-16 border-t-2 border-r-2 border-purple-600/20 transform rotate-12 backdrop-blur-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
import { Search, Megaphone, Pen } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function SpecializationSection() {
  const [bgPosition, setBgPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100
        const y = (e.clientY / window.innerHeight) * 100
        setBgPosition({ x, y })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate stable dot positions
  const dotPositions = Array.from({ length: 20 }).map((_, i) => ({
    top: `${(i * 13) % 100}%`,
    left: `${(i * 17) % 100}%`,
  }))

  const specializations = [
    {
      icon: Search,
      title: 'Research',
      image: '/images/research.jpg',
      href: '/specialization/research',
      description: 'Deep market analysis and strategic insights'
    },
    {
      icon: Megaphone,
      title: 'Promotion',
      image: '/images/promotion.jpg',
      href: '/specialization/promotion',
      description: 'Strategic content promotion and distribution'
    },
    {
      icon: Pen,
      title: 'Creation',
      image: '/images/creation.jpg',
      href: '/specialization/creation',
      description: 'Compelling content that captivates'
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background Colors */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-40"
        style={{
          background: `
            radial-gradient(circle at ${bgPosition.x}% ${bgPosition.y}%, 
              rgba(168, 85, 247, 0.15) 0%,
              rgba(236, 72, 153, 0.15) 30%,
              rgba(99, 102, 241, 0.15) 70%
            )
          `
        }}
      />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full animate-float">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Background Gradient Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-r from-purple-600 to-pink-500 transform -skew-y-6 scale-110" />

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-purple-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-40 right-10 w-32 h-32 border-4 border-pink-200 rounded-full opacity-20" />
        
        {/* Dots Grid */}
        <div className="absolute top-0 right-0 w-1/4 h-1/3 opacity-10">
          {dotPositions.map((pos, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 rounded-full transition-colors duration-500"
              style={{
                top: pos.top,
                left: pos.left,
                backgroundColor: `hsl(${((bgPosition.x || 0) + (bgPosition.y || 0) + i * 20) % 360}, 70%, 60%)`,
              }}
            />
          ))}
        </div>

        {/* Diagonal Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -rotate-12" />
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-12" />
        </div>

        {/* Hexagon Grid */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 border-2 transition-colors duration-500"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                transform: `rotate(${i * 30}deg)`,
                left: `${(i % 3) * 25}%`,
                top: `${Math.floor(i / 3) * 25}%`,
                borderColor: `hsl(${((bgPosition.x || 0) + i * 60) % 360}, 70%, 60%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        {/* Title Section */}
        <div className="relative mb-16 text-center">
          <h2 className="text-3xl font-letterform text-center uppercase tracking-wider relative z-10">
            our specialization
          </h2>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20">
            <div 
              className="absolute inset-0 border-2 rounded-lg transform rotate-45 transition-colors duration-500"
              style={{
                borderColor: `hsl(${bgPosition.x % 360}, 70%, 80%)`,
              }}
            />
            <div 
              className="absolute inset-0 border-2 rounded-lg transform -rotate-45 transition-colors duration-500"
              style={{
                borderColor: `hsl(${(bgPosition.x + 180) % 360}, 70%, 80%)`,
              }}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center gap-8 relative">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 opacity-20">
            <div 
              className="absolute inset-0 border-t-2 border-dashed transition-colors duration-500"
              style={{
                borderColor: `hsl(${bgPosition.x % 360}, 70%, 60%)`,
              }}
            />
          </div>

          {specializations.map((spec, index) => (
            <Link
              key={spec.title}
              href={spec.href}
              className="w-[300px] relative group"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              <div className="relative aspect-[1/1.1] flex flex-col items-center justify-center text-white p-8">
                {/* Decorative Border */}
                <div 
                  className="absolute inset-4 border transition-all duration-500"
                  style={{
                    borderColor: `hsla(${(bgPosition.x + index * 120) % 360}, 70%, 60%, 0.2)`,
                    transform: `rotate(45deg) scale(${1 + bgPosition.y / 1000})`,
                  }}
                />
                <div 
                  className="absolute inset-4 border transition-all duration-500"
                  style={{
                    borderColor: `hsla(${(bgPosition.x + index * 120 + 180) % 360}, 70%, 60%, 0.2)`,
                    transform: `rotate(-45deg) scale(${1 + bgPosition.y / 1000})`,
                  }}
                />
                
                <spec.icon className="w-8 h-8 mb-3 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-medium relative mb-2">
                  <span className="relative z-10">{spec.title}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </h3>
                <p className="text-sm text-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {spec.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 
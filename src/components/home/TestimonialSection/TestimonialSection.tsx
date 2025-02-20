import { useMemo, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  text: string
}

export default function TestimonialSection() {
  // Create stable grid elements
  const gridCells = useMemo(() => Array.from({ length: 12 }), [])
  
  // Testimonials data
  const testimonials = useMemo<Testimonial[]>(() => [
    {
      id: 1,
      name: "alex volkov",
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text..."
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Our partnership with Brand Elevate has transformed our content strategy. Their attention to detail and commitment to quality is unmatched..."
    },
    {
      id: 3,
      name: "Mike Johnson",
      text: "The team at Brand Elevate consistently delivers exceptional results. Their expertise in content creation has helped us reach new heights..."
    }
  ], [])

  const [activeIndex, setActiveIndex] = useState(0)

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }, [testimonials.length])

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }, [goToNext, goToPrevious])

  return (
    <section className="py-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full grid grid-cols-12">
          {gridCells.map((_, i) => (
            <div key={i} className="border-l border-black" />
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full absolute top-0">
          {gridCells.map((_, i) => (
            <div key={i} className="border-t border-black" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Large Quote Icons */}
          <div className="absolute -left-8 -top-16 z-10">
            <div className="relative">
              <div className="text-[180px] font-serif text-pink-500 leading-none opacity-90 select-none">"</div>
              <div className="absolute top-0 left-1 text-[180px] font-serif text-pink-400 leading-none opacity-50 blur-sm select-none">"</div>
            </div>
          </div>
          <div className="absolute -left-4 -top-12 z-0">
            <div className="text-[180px] font-serif text-pink-300 leading-none opacity-20 blur-md select-none">"</div>
          </div>

          {/* Main Content Box */}
          <div className="relative bg-purple-600 p-16 overflow-hidden group"
               tabIndex={0}
               onKeyDown={handleKeyDown}
               role="region"
               aria-label="Testimonials slider">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Geometric Patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              {/* Circles */}
              <div className="absolute -right-20 -top-20 w-64 h-64 border-[30px] border-white rounded-full" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 border-[20px] border-white rounded-full" />
              
              {/* Lines */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 right-0 w-32 h-0.5 bg-white transform rotate-45" />
                <div className="absolute bottom-1/4 left-0 w-32 h-0.5 bg-white transform -rotate-45" />
              </div>
              
              {/* Squares */}
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border-[10px] border-white transform rotate-45" />
              <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-[8px] border-white transform -rotate-12" />
            </div>

            {/* Content */}
            <div className="relative text-white max-w-3xl mx-auto">
              <div className="mb-8">
                <div className="transition-all duration-300 transform"
                     style={{
                       opacity: 1,
                       transform: 'translateX(0)'
                     }}>
                  <h3 className="text-3xl font-light mb-4 tracking-wide">{testimonials[activeIndex].name}</h3>
                  <div className="w-12 h-0.5 bg-pink-400 mb-6"></div>
                  <p className="text-base opacity-90 leading-relaxed">
                    {testimonials[activeIndex].text}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="absolute top-0 right-0 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full bg-pink-400 transition-all duration-300 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-purple-600 ${
                      i === activeIndex ? 'w-6' : ''
                    }`}
                    style={{
                      opacity: i === activeIndex ? '1' : '0.4'
                    }}
                    aria-label={`View testimonial ${i + 1}`}
                    aria-current={i === activeIndex ? 'true' : 'false'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
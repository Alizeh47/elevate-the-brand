import Image from 'next/image'

export function TestimonialSection() {
  return (
    <section className="py-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-black" />
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full absolute top-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-t border-black" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Large Quote Icons */}
          <div className="absolute -left-8 -top-16 z-10">
            <div className="relative">
              <div className="text-[180px] font-serif text-pink-500 leading-none opacity-90">"</div>
              <div className="absolute top-0 left-1 text-[180px] font-serif text-pink-400 leading-none opacity-50 blur-sm">"</div>
            </div>
          </div>
          <div className="absolute -left-4 -top-12 z-0">
            <div className="text-[180px] font-serif text-pink-300 leading-none opacity-20 blur-md">"</div>
          </div>

          {/* Main Content Box */}
          <div className="relative bg-purple-600 p-16 overflow-hidden">
            {/* Geometric Patterns */}
            <div className="absolute inset-0 opacity-10">
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
                <h3 className="text-3xl font-light mb-4 tracking-wide">John doe</h3>
                <div className="w-12 h-0.5 bg-pink-400 mb-6"></div>
                <p className="text-base opacity-90 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text...
                </p>
              </div>

              {/* Dots Menu */}
              <div className="absolute top-0 right-0 flex gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-pink-400 transition-opacity hover:opacity-100"
                    style={{
                      opacity: i === 0 ? '1' : '0.4'
                    }}
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
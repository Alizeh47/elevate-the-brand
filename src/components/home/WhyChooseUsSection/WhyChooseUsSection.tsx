import Image from 'next/image'
import { useState } from 'react'

export default function WhyChooseUsSection() {
  const [imageLoadError, setImageLoadError] = useState({
    meeting: false,
    content: false
  })

  const handleImageError = (image: 'meeting' | 'content') => {
    setImageLoadError(prev => ({
      ...prev,
      [image]: true
    }))
  }

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

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-letterform mb-4 relative inline-block uppercase tracking-wider">
            Why Choose Us
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-purple-600"></div>
          </h2>
          <p className="text-gray-600 mt-6">
            Lorem ipsum is simply dummy text of the printing and typesetting.
          </p>
        </div>

        {/* Features Container */}
        <div className="space-y-32">
          {/* First Feature */}
          <div className="flex items-center justify-between relative">
            {/* Purple Background Block */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 -z-10" />
            
            {/* Image with Frame */}
            <div className="w-[45%] relative">
              <div className="relative aspect-video bg-gray-100">
                <div className="absolute inset-0">
                  {!imageLoadError.meeting && (
                    <Image
                      src="/images/team-meeting.jpg"
                      alt="Team Meeting"
                      width={640}
                      height={360}
                      className="object-cover w-full h-full"
                      onError={() => handleImageError('meeting')}
                      loading="eager"
                    />
                  )}
                </div>
                {/* Purple Frame */}
                <div className="absolute -left-6 -top-6 w-full h-full border-2 border-purple-600" />
              </div>
            </div>

            {/* Content */}
            <div className="w-[45%]">
              <h3 className="text-4xl text-purple-600 font-light mb-6 uppercase tracking-wide">
                We Avoid Misinterpretation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard
              </p>
            </div>
          </div>

          {/* Second Feature */}
          <div className="flex items-center justify-between flex-row-reverse relative">
            {/* Pink Background Block */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 -z-10" />
            
            {/* Image with Frame */}
            <div className="w-[45%] relative">
              <div className="relative aspect-video bg-gray-100">
                <div className="absolute inset-0">
                  {!imageLoadError.content && (
                    <Image
                      src="/images/content-creation.jpg"
                      alt="Content Creation"
                      width={640}
                      height={360}
                      className="object-cover w-full h-full"
                      onError={() => handleImageError('content')}
                      loading="eager"
                    />
                  )}
                </div>
                {/* Pink Frame */}
                <div className="absolute -right-6 -top-6 w-full h-full border-2 border-pink-500" />
              </div>
            </div>

            {/* Content */}
            <div className="w-[45%]">
              <h3 className="text-4xl text-pink-500 font-light mb-6 uppercase tracking-wide">
                We Don't Stretch Word Count
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
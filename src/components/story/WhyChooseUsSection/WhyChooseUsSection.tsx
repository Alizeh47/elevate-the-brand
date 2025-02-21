import Image from 'next/image';
import { useState } from 'react';

export default function WhyChooseUsSection() {
  const [imageLoadError, setImageLoadError] = useState({
    meeting: false,
    content: false
  });

  const handleImageError = (image: 'meeting' | 'content') => {
    setImageLoadError(prev => ({
      ...prev,
      [image]: true
    }));
  };

  return (
    <section className="py-24 relative">
      <div className="flex items-center justify-between relative">
        {/* Purple Background Block */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 size-96 bg-purple-600/10 -z-10" />
        
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
                  className="size-full object-cover"
                  onError={() => handleImageError('meeting')}
                  loading="eager"
                />
              )}
            </div>
            {/* Purple Frame */}
            <div className="absolute -left-6 -top-6 size-full border-2 border-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
} 
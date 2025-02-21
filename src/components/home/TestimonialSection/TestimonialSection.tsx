import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "Working with this team has transformed our digital presence. Their strategic approach and creative solutions have delivered exceptional results.",
    rating: 5,
    image: "/images/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, TechStart",
    content: "The level of professionalism and innovation they bring to each project is outstanding. They&apos;ve become an invaluable partner in our growth.",
    rating: 5,
    image: "/images/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Brand Manager",
    content: "Their attention to detail and commitment to excellence sets them apart. They don&apos;t just meet expectations - they exceed them.",
    rating: 5,
    image: "/images/testimonials/emma.jpg"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Don&apos;t just take our word for it - hear from some of our satisfied clients
            about their experience working with us.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative size-16 overflow-hidden rounded-full">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    width={64}
                    height={64}
                    className="size-full object-cover"
                    onError={() => setImageErrors(prev => ({ ...prev, [currentIndex]: true }))}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{currentTestimonial.name}</h3>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <blockquote className="text-lg text-gray-700">
              &quot;{currentTestimonial.content}&quot;
            </blockquote>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`size-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
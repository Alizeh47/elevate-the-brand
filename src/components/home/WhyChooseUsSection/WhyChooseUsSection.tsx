import React, { useState } from 'react'
import Image from 'next/image'

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Strategic Approach",
    description: "We develop comprehensive strategies based on thorough market analysis and your unique business goals.",
    image: "/images/features/strategy.jpg"
  },
  {
    id: 2,
    title: "Creative Excellence",
    description: "Our team combines creativity with industry best practices to deliver outstanding results.",
    image: "/images/features/creative.jpg"
  }
];

export default function WhyChooseUsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We bring together strategic thinking and creative excellence to help your brand stand out
            in today&apos;s competitive landscape.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.id} className="overflow-hidden rounded-2xl bg-white p-8 shadow-lg">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={640}
                  height={360}
                  className="size-full object-cover"
                  onError={() => setImageErrors(prev => ({ ...prev, [feature.id]: true }))}
                />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
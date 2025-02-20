import React from 'react';
import { Phudu } from 'next/font/google';

const phudu = Phudu({ subsets: ['latin'] });

const SolutionSection = () => {
  const outcomes = [
    {
      title: "Strategic Content Planning",
      description: "Together, we developed a comprehensive content strategy aligned with business goals."
    },
    {
      title: "Authentic Brand Voice",
      description: "Created content that truly reflected our unique perspective and values."
    },
    {
      title: "Engaging Storytelling",
      description: "Crafted compelling narratives that resonated with our target audience."
    },
    {
      title: "Measurable Results",
      description: "Saw significant improvement in engagement and conversion rates."
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Speech Bubble */}
      <div className="absolute right-0 top-1/4 w-96 h-96 text-gray-100 transform rotate-12">
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          className="w-full h-full opacity-10"
        >
          <path d="M50 0C22.4 0 0 19.7 0 44c0 17.8 12.2 33.1 29.6 39.9-0.8 4.9-4.2 12.3-12.2 17.1 0 0 15.4-1.3 25.9-12.8C45.3 88.7 47.6 89 50 89c27.6 0 50-20.1 50-45S77.6 0 50 0z" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${phudu.className}`}>
            Together we shaped it
            <br />
            <span className="text-purple-600">and filled with value</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow
                  border border-purple-100"
              >
                {/* Decorative Corner */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-50 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-600 rounded-full"></div>

                <h3 className="text-xl font-bold mb-3 text-purple-600">{outcome.title}</h3>
                <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute left-20 bottom-20 w-40 h-40 border-2 border-purple-100 rounded-full 
        transform -rotate-12"></div>
      <div className="absolute right-1/4 top-20 w-24 h-24 border-2 border-purple-100 
        transform rotate-45"></div>
      
      {/* Floating Elements */}
      <div className="absolute left-1/3 top-1/2 w-16 h-16 border-2 border-purple-200 
        transform rotate-45 animate-pulse"></div>
      <div className="absolute right-40 bottom-40 w-20 h-20 border-2 border-purple-200 rounded-full 
        animate-bounce"></div>
    </section>
  );
};

export default SolutionSection; 
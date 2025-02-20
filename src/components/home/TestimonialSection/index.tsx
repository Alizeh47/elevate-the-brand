import dynamic from 'next/dynamic'

// Import the component with no SSR
const TestimonialSection = dynamic(() => import('./TestimonialSection'), {
  ssr: false
})

export { TestimonialSection } 
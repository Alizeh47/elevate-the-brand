import dynamic from 'next/dynamic'

// Import the component with no SSR
const WhyChooseUsSection = dynamic(() => import('./WhyChooseUsSection'), {
  ssr: false
})

export { WhyChooseUsSection } 
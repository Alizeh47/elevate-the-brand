import { Hexagon, Circle, Triangle, Square, Search, ChartBar, Brain } from 'lucide-react'
import Header from '@/components/layout/Header'

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden pt-20">
        {/* Dynamic Background with Blur */}
        <div 
          className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
          style={{
            background: `
              radial-gradient(circle at 0% 0%, 
                rgba(168, 85, 247, 0.15) 0%,
                rgba(236, 72, 153, 0.15) 30%,
                rgba(99, 102, 241, 0.15) 70%
              )
            `,
            backdropFilter: 'blur(100px)'
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="fixed inset-0 pointer-events-none -z-5">
          <div className="absolute top-20 left-10 animate-float opacity-10">
            <Search className="w-32 h-32 text-purple-500" />
          </div>
          <div className="absolute bottom-40 right-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
            <ChartBar className="w-24 h-24 text-pink-500" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
            <Brain className="w-20 h-20 text-indigo-500" />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <div className="relative mb-20">
            <h1 className="text-6xl font-letterform text-center mb-6 relative z-10">
              Research
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"></div>
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Deep market analysis and strategic insights to power your content strategy
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
            {/* Methodology Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-500/5 rounded-2xl transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-letterform mb-6 text-purple-600">Our Methodology</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                    <span>Comprehensive market analysis and competitor research</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></div>
                    <span>Data-driven insights and trend identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></div>
                    <span>Target audience profiling and behavior analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tools Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-600/5 rounded-2xl transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-letterform mb-6 text-pink-500">Our Tools</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-lg font-letterform mb-2 text-purple-500">Analytics</h3>
                    <p className="text-sm text-gray-600">Advanced data analysis tools for market insights</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-lg font-letterform mb-2 text-pink-500">Surveys</h3>
                    <p className="text-sm text-gray-600">Direct audience feedback and preferences</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-lg font-letterform mb-2 text-indigo-500">Tracking</h3>
                    <p className="text-sm text-gray-600">Real-time performance monitoring</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-lg font-letterform mb-2 text-purple-500">Reports</h3>
                    <p className="text-sm text-gray-600">Comprehensive insight documentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="relative group md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-500/5 to-indigo-500/5 rounded-2xl transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-letterform mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Benefits of Our Research
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-500/10 flex items-center justify-center">
                      <ChartBar className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-letterform mb-2 text-gray-800">Data-Driven</h3>
                    <p className="text-gray-600">Make informed decisions based on solid data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-600/10 flex items-center justify-center">
                      <Search className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-letterform mb-2 text-gray-800">Targeted</h3>
                    <p className="text-gray-600">Reach the right audience effectively</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center">
                      <Brain className="w-8 h-8 text-indigo-500" />
                    </div>
                    <h3 className="text-xl font-letterform mb-2 text-gray-800">Strategic</h3>
                    <p className="text-gray-600">Long-term growth and success planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
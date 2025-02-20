'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/utils/supabase'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { Lock, Mail, KeyRound, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'

export default function SignInPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const message = searchParams.get('message')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden pt-20">
        {/* Dynamic Background with Blur */}
        <div 
          className="fixed inset-0 transition-all duration-1000 ease-in-out -z-10"
          style={{
            background: `
              radial-gradient(circle at 100% 0%, 
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
            <Lock className="w-32 h-32 text-purple-500" />
          </div>
          <div className="absolute bottom-40 right-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
            <Shield className="w-24 h-24 text-pink-500" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
            <KeyRound className="w-20 h-20 text-indigo-500" />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-md mx-auto">
            {/* Header Section */}
            <div className="relative mb-12 text-center">
              <h1 className="text-5xl font-letterform text-center mb-6 relative z-10">
                Sign In
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"></div>
              </h1>
              <p className="text-lg text-center text-gray-600">
                Welcome back! Sign in to your account
              </p>
            </div>

            {/* Sign In Form */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-500/5 rounded-2xl transform transition-transform group-hover:scale-[1.01]"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <form onSubmit={handleSignIn} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-letterform mb-2 text-gray-600">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-10 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none text-gray-800 placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-letterform mb-2 text-gray-600">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none text-gray-800 placeholder-gray-400"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg hover:shadow-xl"
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-purple-600 hover:text-purple-500 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
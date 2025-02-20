'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase'
import type { User } from '@supabase/supabase-js'

export default function Header() {
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const isTeamPage = pathname === '/team'

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 ${isTeamPage ? 'text-white' : ''}`}>
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className={`w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 transform rotate-45 hover:scale-110 transition-transform ${isTeamPage ? 'opacity-90' : ''}`}></div>
              <span className={`ml-2 text-xl font-semibold ${isTeamPage ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600'}`}>
                BrandElevate
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm border-b-2 border-transparent hover:border-purple-600 transition-all ${
                isTeamPage ? 'text-white hover:text-purple-300 hover:border-purple-300' : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              home
            </Link>
            <Link 
              href="/case-studies" 
              className={`text-sm border-b-2 border-transparent hover:border-purple-600 transition-all ${
                isTeamPage ? 'text-white hover:text-purple-300 hover:border-purple-300' : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              case studies
            </Link>
            <Link 
              href="/team" 
              className={`text-sm border-b-2 transition-all ${
                isTeamPage 
                  ? 'text-white border-white hover:text-purple-300 hover:border-purple-300' 
                  : 'text-gray-900 border-transparent hover:text-purple-600 hover:border-purple-600'
              }`}
            >
              our team
            </Link>
            <Link 
              href="/story" 
              className={`text-sm border-b-2 border-transparent hover:border-purple-600 transition-all ${
                isTeamPage ? 'text-white hover:text-purple-300 hover:border-purple-300' : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              customer story
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm border-b-2 border-transparent hover:border-purple-600 transition-all ${
                isTeamPage ? 'text-white hover:text-purple-300 hover:border-purple-300' : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              contact
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className={`text-sm font-medium transition-colors ${
                      isTeamPage ? 'text-white hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      isTeamPage 
                        ? 'bg-white text-purple-600 hover:bg-purple-100' 
                        : 'text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90'
                    } shadow-md hover:shadow-lg`}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className={`text-sm font-medium transition-colors ${
                      isTeamPage ? 'text-white hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
                    }`}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      isTeamPage 
                        ? 'bg-white text-purple-600 hover:bg-purple-100' 
                        : 'text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90'
                    } shadow-md hover:shadow-lg transform hover:scale-105`}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 
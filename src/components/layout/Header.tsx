'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { supabase } from '@/utils/supabase'
import type { User } from '@supabase/supabase-js'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'home', href: '/' },
  { name: 'case study', href: '/case-studies' },
  { name: 'our team', href: '/team' },
  { name: 'customer story', href: '/story' },
  { name: 'contact', href: '/contact' }
]

export default function Header() {
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className="relative bg-white shadow">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Rotating Circle */}
        <div className="absolute -right-20 -top-20 w-80 h-80">
          <div className="absolute inset-0 border-[3px] border-purple-300/30 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-8 border-2 border-purple-200/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-purple-100/10 rounded-full animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Left Square Pattern */}
        <div className="absolute -left-16 -top-16 w-64 h-64">
          <div className="absolute inset-0 border-[3px] border-purple-300/30 rotate-45 animate-[spin_50s_linear_infinite]" />
          <div className="absolute inset-6 border-2 border-purple-200/20 rotate-[60deg] animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-12 border border-purple-100/10 rotate-[30deg] animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
              style={{ 
                top: `${(i + 1) * 16.66}%`,
                transform: i % 2 === 0 ? 'translateX(10px)' : 'translateX(-10px)'
              }}
            />
          ))}

          {/* Vertical Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"
              style={{ 
                left: `${(i + 1) * 8.33}%`,
                transform: i % 2 === 0 ? 'translateY(5px)' : 'translateY(-5px)'
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32">
          <div className="absolute inset-0 border-[3px] border-purple-300/40 rotate-45 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border-2 border-purple-200/30 rotate-[60deg] animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-8 border border-purple-100/20 rotate-[30deg] animate-[spin_10s_linear_infinite]" />
        </div>

        {/* Enhanced Corner Decorations */}
        <div className="absolute top-0 right-0 w-48 h-48">
          <div className="absolute top-6 right-6 w-24 h-24 border-t-[3px] border-r-[3px] border-purple-300/40 rounded-tr-[40px]" />
          <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-purple-200/30 rounded-tr-[30px]" />
        </div>

        {/* Floating Dots Pattern */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`dots-${i}`}
            className="absolute flex gap-3"
            style={{
              top: `${20 + i * 20}%`,
              left: `${15 + i * 25}%`,
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400/50 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            <div className="w-2 h-2 rounded-full bg-purple-300/40 animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-200/50 animate-pulse" style={{ animationDelay: `${i * 400}ms` }} />
          </div>
        ))}

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <React.Fragment key={`d-${i}`}>
              <div
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent origin-center"
                style={{ 
                  top: '50%',
                  transform: `rotate(${30 + i * 30}deg) scale(1.5)`,
                }}
              />
              <div
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent origin-center"
                style={{ 
                  top: '50%',
                  transform: `rotate(-${30 + i * 30}deg) scale(1.5)`,
                }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-purple-600 rotate-45"></div>
              <span className="ml-2 text-xl font-semibold">BrandElevate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 transition-colors hover:text-purple-600"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                href="/signin"
                className="group relative overflow-hidden rounded-lg px-6 py-2 text-purple-600 transition-all hover:text-purple-700"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 -translate-x-full transform bg-purple-50 transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-purple-600 transition-all duration-300 group-hover:h-full group-hover:bg-purple-100"></div>
              </Link>
              <Link
                href="/signup"
                className="group relative overflow-hidden rounded-lg bg-purple-600 px-6 py-2 transition-all hover:bg-purple-700"
              >
                <span className="relative z-10 text-white">Sign Up</span>
                <div className="absolute -right-2 -top-2 h-8 w-8 rotate-45 transform bg-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                <div className="absolute -bottom-2 -left-2 h-8 w-8 rotate-45 transform bg-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-2 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="space-y-2 pt-2">
                <Link
                  href="/signin"
                  className="group relative block overflow-hidden rounded-lg px-3 py-2 text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 -translate-x-full transform bg-purple-50 transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-purple-600 transition-all duration-300 group-hover:h-full group-hover:bg-purple-100"></div>
                </Link>
                <Link
                  href="/signup"
                  className="group relative block overflow-hidden rounded-lg bg-purple-600 px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 text-white">Sign Up</span>
                  <div className="absolute -right-2 -top-2 h-8 w-8 rotate-45 transform bg-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                  <div className="absolute -bottom-2 -left-2 h-8 w-8 rotate-45 transform bg-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 
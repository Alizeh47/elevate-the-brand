'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sigmar } from 'next/font/google';
import { Phudu } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import type { User } from '@supabase/supabase-js';

const sigmar = Sigmar({ subsets: ['latin'], weight: ['400'] });
const phudu = Phudu({ subsets: ['latin'] });

const HeroSection = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const isTeamPage = pathname === '/team';

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Header */}
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

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/client.jpg"
          alt="People in meeting"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-purple-900/30"></div>
      </div>

      {/* Main Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Circle */}
        <div className="absolute -top-20 -left-20">
          <div className="w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-8 border-8 border-purple-300/20 rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Bottom Right Square */}
        <div className="absolute -bottom-32 -right-32">
          <div className="w-[32rem] h-[32rem] bg-purple-400/20 rotate-45 blur-3xl animate-pulse delay-300"></div>
        </div>
      </div>

      {/* Decorative Lines - Reduced */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-40 w-[2px] h-48 bg-gradient-to-b from-transparent via-purple-300/40 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-[2px] h-64 bg-gradient-to-b from-transparent via-pink-300/30 to-transparent transform -rotate-45"></div>
      </div>

      {/* Enhanced Purple Overlay */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 via-purple-500/90 to-pink-500/85 
          backdrop-blur-xl transform -skew-x-12 translate-x-20 transition-all duration-700 
          hover:backdrop-blur-xl hover:from-purple-600/95 hover:to-pink-500/90 shadow-2xl">
          
          {/* Simplified Inner Patterns */}
          <div className="absolute inset-0">
            {/* Dotted Pattern */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 left-0 w-full h-full 
                bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_2px,transparent_2px)] 
                [background-size:24px_24px] animate-shift-left"></div>
            </div>

            {/* Single Geometric Shape */}
            <div className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 border-4 border-purple-300/40 rotate-45"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-transparent rotate-45 animate-pulse"></div>
            </div>

            {/* Moving Lines */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-pink-300/50 to-transparent animate-shift-left delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Random Geometric Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Hexagons */}
        <div className="absolute top-1/4 left-20 w-16 h-16 border-2 border-purple-300/30 transform rotate-[30deg] animate-float">
          <div className="absolute inset-0 border-2 border-purple-200/20 transform rotate-[30deg]"></div>
        </div>
        <div className="absolute bottom-1/3 right-32 w-12 h-12 border-2 border-pink-300/20 transform rotate-[30deg] animate-float delay-300">
          <div className="absolute inset-0 border-2 border-pink-200/10 transform rotate-[30deg]"></div>
        </div>

        {/* Random Dots Pattern */}
        <div className="absolute top-1/3 left-1/4 flex gap-2">
          <div className="w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-purple-400/30 rounded-full animate-ping delay-150"></div>
          <div className="w-2 h-2 bg-purple-400/30 rounded-full animate-ping delay-300"></div>
        </div>

        {/* Diagonal Lines */}
        <div className="absolute top-1/4 right-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-pink-300/30 to-transparent transform -rotate-45"></div>

        {/* Spinning Square */}
        <div className="absolute top-2/3 right-1/4 w-20 h-20">
          <div className="absolute inset-0 border-2 border-purple-300/20 transform rotate-45 animate-spin-slow"></div>
          <div className="absolute inset-4 border-2 border-purple-200/10 transform -rotate-45 animate-spin-slow delay-150"></div>
        </div>

        {/* Pulsing Circle */}
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24">
          <div className="absolute inset-0 border-2 border-pink-300/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 border-2 border-pink-200/10 rounded-full animate-pulse delay-150"></div>
          <div className="absolute inset-4 border-2 border-pink-100/5 rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Random Small Squares */}
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-purple-400/20 rotate-12 animate-bounce"></div>
        <div className="absolute bottom-1/3 right-24 w-3 h-3 bg-pink-400/20 -rotate-12 animate-bounce delay-150"></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-purple-400/20 rotate-45 animate-bounce delay-300"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-pink-400/10 to-purple-400/10 blur-xl animate-pulse delay-200"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight relative">
          <span className="relative">
            <span className={`text-black relative z-10 ${phudu.className} inline-block hover:scale-105 transition-transform duration-300`}>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200">o</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[50ms]">u</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[100ms]">r</span>
              <span className="inline-block mx-2"></span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[150ms]">c</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[200ms]">l</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[250ms]">i</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[300ms]">e</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[350ms]">n</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[400ms]">t</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[450ms]">'</span>
              <span className="inline-block hover:translate-y-[-2px] transition-transform duration-200 delay-[500ms]">s</span>
            </span>
            {/* Geometric Effects with Animation */}
            <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-purple-400 opacity-60 animate-pulse"></div>
            <div className="absolute -right-4 -top-4 w-8 h-8 border-t-2 border-r-2 border-purple-400 opacity-60 animate-pulse delay-100"></div>
            <div className="absolute -left-4 -bottom-4 w-8 h-8 border-b-2 border-l-2 border-purple-400 opacity-60 animate-pulse delay-200"></div>
            <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-purple-400 opacity-60 animate-pulse delay-300"></div>
            {/* Decorative line with animation */}
            <div className="absolute -right-4 top-1/2 w-8 h-[2px] bg-purple-300 transform -translate-y-1/2 animate-pulse"></div>
            {/* Subtle Dots with animation */}
            <div className="absolute -left-6 top-1/2 w-2 h-2 bg-purple-400/40 rounded-full transform -translate-y-1/2 animate-ping"></div>
            <div className="absolute -right-6 top-1/2 w-2 h-2 bg-purple-400/40 rounded-full transform -translate-y-1/2 animate-ping delay-300"></div>
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 px-4 animate-color-shift">story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 transform -skew-x-12 
              shadow-lg backdrop-blur-sm bg-[length:200%_200%] animate-gradient-shift"></div>
          </span>
        </h1>

        {/* Single Geometric Decoration */}
        <div className="absolute right-1/4 top-1/4 w-20 h-20">
          <div className="absolute inset-0 border-4 border-purple-300/40 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 border-4 border-purple-200/30 rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
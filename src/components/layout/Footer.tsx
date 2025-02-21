import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Rotating Circle */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px]">
          <div className="absolute inset-0 border-[3px] border-purple-300/30 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-12 border-2 border-purple-200/20 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
          <div className="absolute inset-24 border border-purple-100/10 rounded-full animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Left Square Pattern */}
        <div className="absolute -left-20 top-0 w-80 h-80">
          <div className="absolute inset-0 border-[3px] border-purple-300/30 rotate-45 animate-[spin_50s_linear_infinite]" />
          <div className="absolute inset-8 border-2 border-purple-200/20 rotate-[60deg] animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-purple-100/10 rotate-[30deg] animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
              style={{ 
                top: `${(i + 1) * 12.5}%`,
                transform: i % 2 === 0 ? 'translateX(15px)' : 'translateX(-15px)'
              }}
            />
          ))}

          {/* Vertical Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"
              style={{ 
                left: `${(i + 1) * 6.66}%`,
                transform: i % 2 === 0 ? 'translateY(10px)' : 'translateY(-10px)'
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40">
          <div className="absolute inset-0 border-[3px] border-purple-300/40 rotate-45 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-6 border-2 border-purple-200/30 rotate-[60deg] animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-12 border border-purple-100/20 rotate-[30deg] animate-[spin_10s_linear_infinite]" />
        </div>

        <div className="absolute bottom-1/4 left-1/4 w-32 h-32">
          <div className="absolute inset-0 border-[3px] border-purple-300/40 rotate-12 animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-4 border-2 border-purple-200/30 rotate-45 animate-[spin_20s_linear_infinite_reverse]" />
          <div className="absolute inset-8 border border-purple-100/20 rotate-[60deg] animate-[spin_15s_linear_infinite]" />
        </div>

        {/* Enhanced Corner Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64">
          <div className="absolute top-8 left-8 w-32 h-32 border-t-[3px] border-l-[3px] border-purple-300/40 rounded-tl-[60px]" />
          <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-purple-200/30 rounded-tl-[45px]" />
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64">
          <div className="absolute bottom-8 right-8 w-32 h-32 border-b-[3px] border-r-[3px] border-purple-300/40 rounded-br-[60px]" />
          <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-purple-200/30 rounded-br-[45px]" />
        </div>

        {/* Floating Dots Pattern */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`dots-${i}`}
            className="absolute flex gap-4"
            style={{
              top: `${15 + i * 20}%`,
              left: `${10 + i * 20}%`,
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400/50 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            <div className="w-2 h-2 rounded-full bg-purple-300/40 animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-200/50 animate-pulse" style={{ animationDelay: `${i * 400}ms` }} />
          </div>
        ))}

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <React.Fragment key={`d-${i}`}>
              <div
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent origin-center"
                style={{ 
                  top: '50%',
                  transform: `rotate(${45 + i * 30}deg) scale(1.5)`,
                }}
              />
              <div
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent origin-center"
                style={{ 
                  top: '50%',
                  transform: `rotate(-${45 + i * 30}deg) scale(1.5)`,
                }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Elevate
            </Link>
            <p className="mt-4 max-w-md text-gray-600">
              Elevating brands through strategic digital solutions. We help businesses grow and succeed in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 transition-colors hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
            <ul className="mt-4 space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-600 transition-colors hover:text-purple-600"
                  >
                    <item.icon className="size-5" />
                    <span className="ml-2">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Elevate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
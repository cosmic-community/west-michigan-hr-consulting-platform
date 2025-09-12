'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Award, ArrowRight, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-soft sticky top-0 z-50 border-b border-vibrant-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-vibrant rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-vibrant">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-black text-secondary-900 group-hover:text-vibrant-600 transition-colors duration-300">
                MOMENTX
              </div>
              <div className="text-sm text-vibrant-600 font-bold -mt-1">
                HR Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-700 hover:text-vibrant-600 font-bold transition-colors duration-200 hover:scale-105 transform text-sm"
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-secondary-900 text-white font-bold text-sm px-8 py-3 rounded-2xl hover:bg-vibrant-600 hover:shadow-vibrant transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              SIGN IN
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-secondary-600 hover:text-vibrant-600 hover:bg-vibrant-50 focus:outline-none focus:ring-2 focus:ring-vibrant-500 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-vibrant-200/30">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-700 hover:text-vibrant-600 font-bold py-3 px-4 rounded-xl hover:bg-vibrant-50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="bg-secondary-900 text-white font-bold text-center w-full mt-4 py-4 rounded-2xl hover:bg-vibrant-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                SIGN IN
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
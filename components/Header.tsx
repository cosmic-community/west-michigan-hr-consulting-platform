'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart, Sparkles } from 'lucide-react'

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
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-4 border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:animate-wiggle transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-900 font-whimsy group-hover:text-accent-600 transition-colors duration-300">
                HR Magic
              </div>
              <div className="text-handwriting text-sm text-accent-600 -mt-1">
                West Michigan
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-700 hover:text-accent-600 font-medium transition-colors duration-200 font-whimsy hover:scale-105 transform"
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn-whimsy flex items-center gap-2 text-sm px-6 py-3"
            >
              <Sparkles className="w-4 h-4" />
              Free Magic Session
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-2xl text-secondary-600 hover:text-accent-600 hover:bg-warm-100 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300"
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
          <div className="md:hidden py-6 border-t border-warm-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-700 hover:text-accent-600 font-medium py-3 px-4 rounded-2xl hover:bg-warm-100 transition-all duration-200 font-whimsy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="btn-whimsy flex items-center justify-center gap-2 w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="w-4 h-4" />
                Free Magic Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
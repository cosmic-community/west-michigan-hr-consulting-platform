'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Top Banner */}
      <div className="banner-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <span>📞 CONSULTATIONS NOW AVAILABLE FOR 2024</span>
            <span className="hidden sm:inline">✨</span>
            <span className="hidden md:inline">HR SOLUTIONS NOW AVAILABLE FOR 2024</span>
            <span className="hidden lg:inline">✨</span>
            <span className="hidden lg:inline">WORKPLACE TRANSFORMATION NOW AVAILABLE FOR 2024</span>
          </div>
        </div>
      </div>

      <header className="bg-cream-50 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/services" 
                className="text-warm-olive-700 hover:text-warm-olive-900 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-warm-olive-700 hover:text-warm-olive-900 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Portfolio
              </Link>
            </nav>

            {/* Centered Logo */}
            <Link href="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
              <div className="text-2xl font-serif font-bold text-warm-olive-800 tracking-tight">
                West Michigan HR
              </div>
            </Link>

            {/* Right Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/services" 
                className="text-warm-olive-700 hover:text-warm-olive-900 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Packages
              </Link>
              <Link 
                href="/contact" 
                className="text-warm-olive-700 hover:text-warm-olive-900 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-warm-olive-700 hover:bg-cream-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-cream-200 bg-cream-50">
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/services" 
                  className="px-4 py-3 text-warm-olive-700 hover:text-warm-olive-900 hover:bg-cream-100 rounded-lg font-medium transition-all duration-200 text-sm uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-3 text-warm-olive-700 hover:text-warm-olive-900 hover:bg-cream-100 rounded-lg font-medium transition-all duration-200 text-sm uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  href="/services" 
                  className="px-4 py-3 text-warm-olive-700 hover:text-warm-olive-900 hover:bg-cream-100 rounded-lg font-medium transition-all duration-200 text-sm uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Packages
                </Link>
                <Link 
                  href="/contact" 
                  className="px-4 py-3 text-warm-olive-700 hover:text-warm-olive-900 hover:bg-cream-100 rounded-lg font-medium transition-all duration-200 text-sm uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
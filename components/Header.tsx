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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-vibrant-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">WM</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-black text-gray-900 text-xl leading-tight">
                West Michigan
              </div>
              <div className="text-sm text-gray-600 font-medium leading-tight">
                HR Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              href="/about" 
              className="px-4 py-2 text-gray-700 hover:text-vibrant-500 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 text-gray-700 hover:text-vibrant-500 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Blog
            </Link>
            <Link 
              href="/services" 
              className="px-4 py-2 text-gray-700 hover:text-vibrant-500 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="ml-4 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-vibrant-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
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
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/about" 
                className="px-4 py-3 text-gray-700 hover:text-vibrant-500 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="px-4 py-3 text-gray-700 hover:text-vibrant-500 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-3 text-gray-700 hover:text-vibrant-500 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="mx-4 mt-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-vibrant-500 transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
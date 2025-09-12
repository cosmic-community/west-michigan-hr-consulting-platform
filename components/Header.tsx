'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Users } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Products', href: '/services' },
    { name: 'Exchange now', href: '/about' },
    { name: 'Wallet', href: '/blog' },
    { name: 'Features', href: '/case-studies' },
    { name: 'Help', href: '/contact' },
    { name: 'About us', href: '/about' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-vibrant-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              WestMich HR
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-gray-900 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-vibrant-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              SIGN IN
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
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
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="bg-gray-900 text-white font-bold text-center w-full mt-4 py-4 rounded-xl hover:bg-vibrant-500 transition-all duration-300"
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
import Link from 'next/link'
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HR Consulting</h3>
            <p className="text-secondary-300 mb-4">
              Expert HR services for West Michigan businesses. Building stronger workplaces through strategic human resources consulting.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-secondary-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-secondary-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>HR Strategy & Planning</li>
              <li>Employee Relations</li>
              <li>Compliance & Risk Management</li>
              <li>Organizational Development</li>
              <li>Training & Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-secondary-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>West Michigan Region</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:yourname@yourfirm.com" className="hover:text-white transition-colors">
                  yourname@yourfirm.com
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-300">
          <p>&copy; {currentYear} HR Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
import Link from 'next/link'
import { MapPin, Phone, Mail, Users } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-vibrant-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-black text-gray-900 tracking-tight">WestMich HR</div>
            </div>
            <p className="text-gray-600 mb-8 text-lg max-w-lg leading-relaxed">
              Providing innovative HR solutions to help West Michigan businesses 
              thrive through expert guidance and modern methodologies.
            </p>
            <div className="text-sm font-bold text-vibrant-500">
              Serving West Michigan since 2020
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-8 text-gray-900">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'HR Strategy', href: '/services' },
                { name: 'Compliance', href: '/services' },
                { name: 'Employee Relations', href: '/services' },
                { name: 'Training & Development', href: '/services' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-8 text-gray-900">Contact</h4>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-gray-600" />
                </div>
                <span className="text-sm">West Michigan Region</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-3 h-3 text-gray-600" />
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-gray-900 transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-3 h-3 text-gray-600" />
                </div>
                <a 
                  href="mailto:hello@westmichhr.com" 
                  className="hover:text-gray-900 transition-colors text-sm"
                >
                  hello@westmichhr.com
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-bold text-sm rounded-xl hover:bg-vibrant-500 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} WestMich HR Consulting. Professional HR solutions for growing businesses.
          </p>
          <div className="text-vibrant-500 font-bold mt-2 text-sm">
            Excellence in Human Resources
          </div>
        </div>
      </div>
    </footer>
  )
}
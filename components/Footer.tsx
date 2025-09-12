import Link from 'next/link'
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/80 backdrop-blur-lg border-t border-vibrant-200/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-vibrant rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-secondary-900">MOMENTX</h3>
                <div className="text-vibrant-600 font-bold">HR Consulting</div>
              </div>
            </div>
            <p className="text-secondary-700 mb-6 text-lg max-w-lg leading-relaxed">
              Providing innovative HR solutions to help West Michigan businesses 
              thrive through expert guidance and modern methodologies.
            </p>
            <div className="inline-block bg-gradient-vibrant bg-clip-text text-transparent font-black">
              Serving West Michigan since 2020
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-6 text-secondary-900">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'HR Strategy', href: '/services' },
                { name: 'Compliance', href: '/services' },
                { name: 'Employee Relations', href: '/services' },
                { name: 'Training & Development', href: '/services' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-700 hover:text-vibrant-600 transition-colors font-medium hover:underline decoration-2 decoration-vibrant-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-6 text-secondary-900">Contact</h4>
            <div className="space-y-4 text-secondary-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-vibrant-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-vibrant-600" />
                </div>
                <span>West Michigan Region</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-vibrant-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-vibrant-600" />
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-vibrant-600 transition-colors hover:underline decoration-2 decoration-vibrant-400"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-vibrant-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 text-vibrant-600" />
                </div>
                <a 
                  href="mailto:hello@westmichiganhr.com" 
                  className="hover:text-vibrant-600 transition-colors hover:underline decoration-2 decoration-vibrant-400"
                >
                  hello@momentx.com
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary text-sm px-6 py-3"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-vibrant-200/50 mt-12 pt-8 text-center">
          <p className="text-secondary-600">
            &copy; {currentYear} MOMENTX HR Consulting. Professional HR solutions for growing businesses.
          </p>
          <div className="text-vibrant-600 font-bold mt-2">
            Excellence in Human Resources
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-vibrant-300/10 rounded-2xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-vibrant-400/10 rounded-xl animate-bounce-soft animation-delay-400"></div>
    </footer>
  )
}
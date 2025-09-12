import Link from 'next/link'
import { MapPin, Phone, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-whimsy border-t-4 border-warm-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 font-whimsy">HR Magic</h3>
                <div className="text-handwriting text-accent-600">West Michigan</div>
              </div>
            </div>
            <p className="text-secondary-700 mb-6 text-lg font-whimsy max-w-lg leading-relaxed">
              We believe every West Michigan business deserves a workplace that sparkles with 
              joy, compliance, and amazing culture. Let's create some magic together! ✨
            </p>
            <div className="text-handwriting text-lg text-accent-600">
              Spreading workplace joy since 2020 💜
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary-900 font-whimsy">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Services', href: '/services' },
                { name: 'About Our Magic', href: '/about' },
                { name: 'Success Stories', href: '/case-studies' },
                { name: 'Wisdom Blog', href: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-700 hover:text-accent-600 transition-colors font-whimsy hover:underline decoration-2 decoration-accent-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary-900 font-whimsy">Let's Connect</h4>
            <div className="space-y-4 text-secondary-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warm-200 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-warm-700" />
                </div>
                <span className="font-whimsy">West Michigan Magic Zone</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warm-200 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-warm-700" />
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-accent-600 transition-colors font-whimsy hover:underline decoration-2 decoration-accent-400"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warm-200 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-warm-700" />
                </div>
                <a 
                  href="mailto:hello@hrmagic.com" 
                  className="hover:text-accent-600 transition-colors font-whimsy hover:underline decoration-2 decoration-accent-400"
                >
                  hello@hrmagic.com
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-whimsy text-sm px-6 py-3"
              >
                Start Your Magic ✨
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-300 mt-12 pt-8 text-center">
          <p className="text-secondary-600 font-whimsy">
            &copy; {currentYear} HR Magic West Michigan. Made with 💜 for amazing businesses.
          </p>
          <div className="text-handwriting text-accent-600 text-lg mt-2">
            Keep spreading the workplace magic!
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-accent-300/20 rounded-full floating-element"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-warm-400/20 rounded-blob floating-element animation-delay-400"></div>
      <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 floating-element animation-delay-600">✨</div>
      <div className="absolute bottom-10 right-1/3 text-3xl opacity-15 floating-element animation-delay-800">💜</div>
    </footer>
  )
}
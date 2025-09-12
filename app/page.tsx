import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Shield, Star, Award, Zap, Target } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import TestimonialCard from '@/components/TestimonialCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import WhimsicalElements from '@/components/WhimsicalElements'
import { 
  getFeaturedServices, 
  getFeaturedBlogPosts, 
  getHomepageTestimonials,
  getFeaturedCaseStudies 
} from '@/lib/cosmic'

export default async function HomePage() {
  const [services, blogPosts, testimonials, caseStudies] = await Promise.all([
    getFeaturedServices(),
    getFeaturedBlogPosts(),
    getHomepageTestimonials(),
    getFeaturedCaseStudies()
  ])

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Hero Section - Reduced top padding to bring closer to nav */}
      <section className="relative py-8 lg:py-12 xl:py-16 bg-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content - Better width control and centering */}
            <div className="lg:col-span-7 animate-fade-in-up flex flex-col justify-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-[0.9] tracking-tight max-w-4xl">
                Build Great
                <br />
                <span className="text-vibrant-500">Workplaces</span> in
                <br />
                West Michigan.
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-10 lg:mb-12 leading-relaxed max-w-2xl font-medium">
                Expert HR consulting tailored for West Michigan's unique business landscape. From Grand Rapids to Kalamazoo, we help companies thrive.
              </p>
              
              {/* Community badge */}
              <div className="flex items-center gap-6 mb-12 lg:mb-16">
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-2xl">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-vibrant-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-xs font-black text-gray-500">75+</div>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  West Michigan<br />
                  companies served.
                </div>
              </div>
              
              {/* Stats row - Better responsive layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-16 max-w-2xl">
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-vibrant-500 mb-3">15+</div>
                  <p className="text-sm text-gray-600 leading-tight">Years serving<br />West Michigan businesses</p>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-vibrant-500 mb-3">40%</div>
                  <p className="text-sm text-gray-600 leading-tight">Average turnover<br />reduction achieved</p>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black text-vibrant-500 mb-3">100%</div>
                  <p className="text-sm text-gray-600 leading-tight">Michigan employment<br />law compliant</p>
                </div>
              </div>
            </div>
            
            {/* Right Content - Aligned to top to match text positioning */}
            <div className="lg:col-span-5 animate-slide-up animation-delay-400 relative flex items-start justify-center pt-0">
              <div className="relative max-w-lg mx-auto lg:max-w-none w-full flex items-start justify-center">
                {/* Main hero shape with floating elements - Aligned to top */}
                <div className="relative flex items-start justify-center pt-0">
                  {/* Large pink organic shape */}
                  <div className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-vibrant-500 rounded-full opacity-20 blur-3xl absolute top-8"></div>
                  <div className="relative bg-white rounded-[3rem] p-6 lg:p-8 shadow-xl border border-gray-100">
                    
                    {/* Professional image - Better sizing and centering */}
                    <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-vibrant-400 to-vibrant-600 rounded-3xl flex items-center justify-center relative overflow-hidden mx-auto">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&auto=format,compress"
                        alt="West Michigan HR Consulting Professional"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Floating badges - Better responsive positioning */}
                    <div className="absolute -top-3 -right-3 bg-white p-2 lg:p-3 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-vibrant-500 rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                        </div>
                        <span className="text-xs font-bold text-gray-900 hidden sm:inline">Local Expert</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white p-2 lg:p-3 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-900 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                        </div>
                        <span className="text-xs font-bold text-gray-900 hidden sm:inline">Growth Focused</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Trust badge - Better positioning */}
                <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 bg-white p-3 lg:p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full"></div>
                    <div>
                      <div className="text-xs lg:text-sm font-black text-gray-900">Michigan Based</div>
                      <div className="text-xs text-gray-600 leading-tight hidden sm:block">Deep local market<br />knowledge</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-vibrant-500 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-4 h-4 bg-vibrant-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full"></div>
      </section>

      {/* Why Choose Us - Minimal white section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="w-16 h-16 bg-vibrant-500 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <span className="text-2xl">+</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Why West Michigan
              <br />
              <span className="text-vibrant-500">Trusts</span> Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-vibrant-500 transition-all duration-300">
                <Users className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Born & Raised Local
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lifelong West Michigan residents who understand our region's unique business culture, from lakeshore manufacturing to downtown tech startups.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-vibrant-500 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Proven Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Consistently deliver 40%+ turnover reduction and measurable culture improvements for companies across Kent, Ottawa, and Kalamazoo counties.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-vibrant-500 transition-all duration-300">
                <Shield className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Michigan Law Experts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead of Michigan's evolving employment landscape with expertise in state-specific regulations and regional compliance requirements.
              </p>
            </div>
          </div>
        </div>
        
        {/* Minimal decorative elements */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-vibrant-500 rounded-full opacity-5 blur-2xl"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-blue-400 rounded-full opacity-10 blur-xl"></div>
      </section>

      {/* Featured Services */}
      {services.length > 0 && (
        <section className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                HR Solutions for
                <br />
                <span className="text-vibrant-500">Every</span> West Michigan Business
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From Zeeland startups to Kalamazoo manufacturers, we've got you covered
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/services" className="inline-flex items-center px-12 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-vibrant-500 transition-all duration-300 transform hover:-translate-y-1">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                West Michigan
                <br />
                <span className="text-vibrant-500">Success</span> Stories
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Clean white */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">
            Ready to Transform
            <br />
            Your Workplace?
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join the growing community of West Michigan businesses creating exceptional workplaces. 
            Let's start with a free consultation to explore what's possible for your team.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-vibrant-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
        
        {/* Minimal background elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-vibrant-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-gray-400 rounded-full"></div>
      </section>
    </div>
  )
}
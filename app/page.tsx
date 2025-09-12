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
      {/* Hero Section - Clean white with minimal elements */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
                Be Ready
                <br />
                <span className="text-vibrant-500">Challenge</span> Best
                <br />
                Moments.
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg font-medium">
                Professional HR brings valuable insights to people's wellbeing.
              </p>
              
              {/* Community badge similar to original */}
              <div className="flex items-center gap-6 mb-16">
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-2xl">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-vibrant-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-xs font-black text-gray-500">150+</div>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Join our ever<br />
                  growing community.
                </div>
              </div>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-12 mb-16">
                <div>
                  <div className="text-4xl font-black text-vibrant-500 mb-3">08+</div>
                  <p className="text-sm text-gray-600 leading-tight">Years of experience<br />in HR consulting</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-vibrant-500 mb-3">8M+</div>
                  <p className="text-sm text-gray-600 leading-tight">Trust People<br />Around Worldwide</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-vibrant-500 mb-3">26</div>
                  <p className="text-sm text-gray-600 leading-tight">Exclusive assets<br />crosschain swaps</p>
                </div>
              </div>
            </div>
            
            {/* Right Content - Hero Image Area */}
            <div className="animate-slide-up animation-delay-400 relative">
              <div className="relative">
                {/* Main hero shape with floating elements */}
                <div className="relative">
                  {/* Large pink organic shape */}
                  <div className="w-96 h-96 bg-vibrant-500 rounded-full opacity-20 blur-3xl absolute -top-10 -right-10"></div>
                  <div className="relative bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
                    
                    {/* Minimal professional image */}
                    <div className="w-80 h-80 bg-gradient-to-br from-vibrant-400 to-vibrant-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&auto=format,compress"
                        alt="Professional HR Consulting"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-vibrant-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">Community</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">Leveling Up</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Trust badge */}
                <div className="absolute bottom-20 right-20 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full"></div>
                    <div>
                      <div className="text-base font-black text-gray-900">Most Trusted</div>
                      <div className="text-xs text-gray-600 leading-tight">Security in Limitless<br />exchange</div>
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
              Join our ever
              <br />
              <span className="text-vibrant-500">growing</span> community.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-vibrant-500 transition-all duration-300">
                <Users className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Local Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of West Michigan's business culture and market dynamics.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-vibrant-500 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Measurable Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Data-driven approach delivering reduced turnover and improved culture.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-vibrant-500 transition-all duration-300">
                <Shield className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Complete Protection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead of compliance with our proactive HR management approach.
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
                Services Tailored
                <br />
                to <span className="text-vibrant-500">Your Needs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From strategic planning to day-to-day operations
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
                View All Services
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
                What Our
                <br />
                <span className="text-vibrant-500">Clients Say</span>
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
            Let's Build Success
            <br />
            Together
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary consultation to discuss how we can help your 
            West Michigan business achieve its HR goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-vibrant-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule Free Consultation
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
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
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section - Modern vibrant design */}
      <section className="section-hero relative">
        <WhimsicalElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <div className="inline-block mb-6">
                  <span className="bg-gradient-vibrant bg-clip-text text-transparent text-lg font-bold px-4 py-2 rounded-full border border-vibrant-300 bg-white/50 backdrop-blur-sm">
                    ✨ Transform Your Workplace
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-secondary-900 mb-6 leading-tight">
                  Be Ready
                  <br />
                  <span className="text-vibrant-gradient">Challenge</span> Best
                  <br />
                  Moments.
                </h1>
                <p className="text-2xl font-bold text-vibrant-600 mb-6">
                  Professional HR brings valuable insights to people's wellbeing.
                </p>
              </div>
              
              <p className="text-xl mb-10 text-secondary-700 leading-relaxed max-w-lg">
                Navigate the complexities of human resources with confidence. 
                Expert guidance for West Michigan businesses to thrive in today's dynamic workplace.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link href="/contact" className="btn-primary text-lg px-12 py-5 group">
                  Schedule Consultation
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="btn-soft text-lg px-12 py-5">
                  Explore Services
                </Link>
              </div>
              
              {/* Stats row similar to original image */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="animate-scale-in animation-delay-600">
                  <div className="text-4xl font-black text-vibrant-600 mb-2">08+</div>
                  <p className="text-sm text-secondary-600 font-medium">Years of experience<br />in HR consulting</p>
                </div>
                <div className="animate-scale-in animation-delay-800">
                  <div className="text-4xl font-black text-vibrant-600 mb-2">8M+</div>
                  <p className="text-sm text-secondary-600 font-medium">Trust People<br />Around Worldwide</p>
                </div>
                <div className="animate-scale-in animation-delay-1000">
                  <div className="text-4xl font-black text-vibrant-600 mb-2">26</div>
                  <p className="text-sm text-secondary-600 font-medium">Exclusive assets<br />crosschain swaps</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-400 relative">
              <div className="relative">
                {/* Main hero image with modern styling */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[3rem] p-8 shadow-vibrant border border-white/50">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&auto=format,compress"
                    alt="Professional HR Consulting"
                    className="rounded-[2rem] shadow-lg w-full"
                  />
                  
                  {/* Floating badges similar to original */}
                  <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-soft border border-vibrant-200 animate-bounce-soft">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-vibrant rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-bold text-secondary-800">Community</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-soft border border-vibrant-200 animate-float animation-delay-400">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-soft-400 to-soft-600 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-bold text-secondary-800">Leveling Up</span>
                    </div>
                  </div>
                </div>
                
                {/* Trust badge */}
                <div className="absolute bottom-16 right-16 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-vibrant border border-vibrant-200 animate-pulse-soft animation-delay-600">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-vibrant-400 to-vibrant-600 rounded-full"></div>
                    <div>
                      <div className="text-lg font-black text-secondary-900">Most Trusted</div>
                      <div className="text-sm text-secondary-600">Security in Limitless<br />exchange</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern card layout */}
      <section className="section-modern bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <span className="bg-gradient-vibrant bg-clip-text text-transparent text-lg font-bold px-4 py-2 rounded-full border border-vibrant-300 bg-white/50 backdrop-blur-sm">
                🚀 Why West Michigan Businesses Choose Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-secondary-900 mb-6">
              Join our ever
              <br />
              <span className="text-vibrant-gradient">growing</span> community.
            </h2>
            <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
              We combine deep HR expertise with innovative solutions for the modern workplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-10 text-center group hover:shadow-vibrant">
              <div className="w-20 h-20 bg-gradient-vibrant rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900 mb-6">
                Local Expertise
              </h3>
              <p className="text-secondary-700 leading-relaxed text-lg">
                Deep understanding of West Michigan's business culture and market dynamics.
              </p>
            </div>
            
            <div className="card-elevated p-10 text-center group hover:shadow-vibrant animation-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-soft-400 to-soft-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900 mb-6">
                Measurable Results
              </h3>
              <p className="text-secondary-700 leading-relaxed text-lg">
                Data-driven approach delivering reduced turnover and improved culture.
              </p>
            </div>
            
            <div className="card-elevated p-10 text-center group hover:shadow-vibrant animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-vibrant-500 to-vibrant-700 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-secondary-900 mb-6">
                Complete Protection
              </h3>
              <p className="text-secondary-700 leading-relaxed text-lg">
                Stay ahead of compliance with our proactive HR management approach.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-vibrant-300/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-soft-400/30 rounded-full animate-bounce-soft animation-delay-400 blur-lg"></div>
      </section>

      {/* Featured Services */}
      {services.length > 0 && (
        <section className="section-modern bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-white/80 backdrop-blur-sm text-vibrant-600 text-lg font-bold px-4 py-2 rounded-full border border-vibrant-300">
                  💼 Comprehensive HR Solutions
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-secondary-900 mb-6">
                Services Tailored
                <br />
                to <span className="text-vibrant-gradient">Your Needs</span>
              </h2>
              <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
                From strategic planning to day-to-day operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={service.id} className={`animate-fade-in-up animation-delay-${index * 200}`}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/services" className="btn-primary text-lg px-12 py-5">
                View All Services
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="section-modern bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-gradient-vibrant bg-clip-text text-transparent text-lg font-bold px-4 py-2 rounded-full border border-vibrant-300 bg-white/50 backdrop-blur-sm">
                  ⭐ Client Success Stories
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-secondary-900 mb-6">
                What Our
                <br />
                <span className="text-vibrant-gradient">Clients Say</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`animate-fade-in-up animation-delay-${index * 200}`}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-modern card-vibrant mx-4 sm:mx-8 my-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 py-20 text-center relative z-10">
          <div className="text-2xl font-bold mb-6 text-white/90">
            🎯 Ready to Transform Your HR?
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            Let's Build Success
            <br />
            Together
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary consultation to discuss how we can help your 
            West Michigan business achieve its HR goals.
          </p>
          <Link 
            href="/contact" 
            className="btn-soft text-lg px-12 py-5 group shadow-glow"
          >
            Schedule Free Consultation
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* CTA floating elements */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full animate-bounce-soft animation-delay-400"></div>
        <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-full animate-pulse-soft animation-delay-600"></div>
      </section>
    </div>
  )
}
import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Shield, Star, Award } from 'lucide-react'
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
      {/* Hero Section */}
      <section className="section-accent min-h-screen flex items-center relative">
        <WhimsicalElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <span className="text-accent-script text-3xl md:text-4xl font-display block mb-4">
                  Transform Your Workplace
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-4">
                  Professional HR Solutions
                </h1>
                <div className="text-xl text-accent-600 mb-6 font-medium">
                  Expert guidance for West Michigan businesses
                </div>
              </div>
              
              <p className="text-xl mb-8 text-secondary-700 leading-relaxed">
                Navigate the complexities of human resources with confidence. 
                From compliance and employee relations to strategic planning and culture development, 
                we provide the expertise your business needs to thrive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary group">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-secondary-600">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-500" />
                  <span>Certified HR Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-500" />
                  <span>100+ Local Businesses Served</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-400 relative">
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-warm-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&auto=format,compress"
                  alt="Professional HR Consulting"
                  className="rounded-xl shadow-lg"
                />
                
                {/* Professional stats overlay */}
                <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg border border-warm-200">
                  <div className="text-2xl font-bold text-secondary-900">98%</div>
                  <p className="text-sm text-secondary-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-warm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-accent-script text-2xl font-display text-accent-600 mb-4">
              Why West Michigan Businesses Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Proven Expertise & Local Focus
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              We combine deep HR expertise with intimate knowledge of the West Michigan business landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Local Expertise
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Deep understanding of West Michigan's business culture, employment laws, 
                and market dynamics ensures relevant, practical solutions.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center group hover:scale-105 transition-transform duration-300 animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Measurable Results
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Our data-driven approach delivers tangible outcomes: reduced turnover, 
                improved compliance, and stronger organizational culture.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center group hover:scale-105 transition-transform duration-300 animation-delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Comprehensive Protection
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Stay ahead of compliance requirements and mitigate risks with our 
                proactive approach to HR management and legal protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {services.length > 0 && (
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-accent-script text-2xl font-display text-accent-600 mb-4">
                Comprehensive HR Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Services Tailored to Your Needs
              </h2>
              <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
                From strategic planning to day-to-day operations, we provide the full spectrum of HR services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={service.id} className={`animate-fade-in-up animation-delay-${index * 200}`}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/services" className="btn-primary">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 section-accent relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-accent-script text-2xl font-display text-accent-600 mb-4">
                Client Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                What Our Clients Say
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
      <section className="py-20 bg-gradient-accent text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-accent-script text-3xl font-display mb-6 text-purple-100">
            Ready to Transform Your HR?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Success Together
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss how we can help your 
            West Michigan business achieve its HR goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-5 bg-white text-accent-600 font-bold text-lg rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            Schedule Free Consultation
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Subtle background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-xl subtle-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-300/10 rounded-full subtle-float animation-delay-400"></div>
      </section>
    </div>
  )
}
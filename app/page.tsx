import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import TestimonialCard from '@/components/TestimonialCard'
import CaseStudyCard from '@/components/CaseStudyCard'
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert HR Solutions for West Michigan Businesses
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Transform your workplace with strategic human resources consulting. 
                From compliance to culture, we help you build a thriving organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-secondary-100">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900">
                  View Services
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img
                src="https://imgix.cosmicjs.com/815c42d0-8fe7-11f0-973b-81e514691025-photo-1507003211169-0a1dd7228f2d-1757688491656.jpg?w=1200&h=800&fit=crop&auto=format,compress"
                alt="Professional HR Consultant"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why West Michigan Businesses Choose Us
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              With deep local expertise and proven results, we help businesses navigate 
              the complex world of human resources with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Local Expertise
              </h3>
              <p className="text-secondary-700">
                Deep understanding of West Michigan's unique business landscape and 
                employment challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Proven Results
              </h3>
              <p className="text-secondary-700">
                Track record of helping businesses reduce turnover, improve compliance, 
                and build stronger cultures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Risk Management
              </h3>
              <p className="text-secondary-700">
                Proactive approach to compliance and risk mitigation, protecting 
                your business from costly penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {services.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-secondary-700">
                Comprehensive HR solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
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

      {/* Featured Case Study */}
      {caseStudies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-secondary-700">
                Real results for West Michigan businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {caseStudies.slice(0, 2).map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/case-studies" className="btn-primary">
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-secondary-700">
                Stay informed with the latest HR trends and employment law updates
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogPosts.slice(0, 2).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/blog" className="btn-primary">
                Read More Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get expert HR guidance tailored to your West Michigan business. 
            Schedule your free consultation today.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary bg-white text-primary-900 hover:bg-secondary-100 text-lg px-8 py-4"
          >
            Schedule Free Consultation
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
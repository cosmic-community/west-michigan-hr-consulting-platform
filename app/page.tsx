import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Shield, Star, Award, Zap, Target } from 'lucide-react'
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
    <div className="flex flex-col bg-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #B7C4D5 0%, #DED8D8 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-tight">
                Crafting content
                <br />
                that <em className="text-white/90">reigns supreme.</em>
              </h1>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl lg:max-w-none">
                Take your social media platform to the next level with expert social media management!
              </p>
              
              {/* CTA Button */}
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-warm-olive-600 text-white font-bold rounded-2xl hover:bg-warm-olive-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                WORK WITH ME
              </Link>
            </div>

            {/* Right Content - Hero Image - moved closer to text */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-8">
                {/* Hero image with oval mask - no border */}
                <div className="relative aspect-[4/5] rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&auto=format,compress"
                    alt="Social Media Content Creator"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Inner oval gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-full"></div>
                </div>
                
                {/* Decorative sparkles/dots around the oval */}
                <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-20 left-12 w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-16 left-4 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-8 right-6 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-28 right-2 w-1 h-1 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                <div className="absolute bottom-24 left-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-32 left-2 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '3.5s' }}></div>
                <div className="absolute bottom-12 right-12 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-serif text-lg text-warm-olive-700 mb-8 uppercase tracking-wider">
              WHERE OUR CLIENTS HAVE BEEN FEATURED
            </h3>
          </div>
          
          {/* Mock client logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16 opacity-60">
            <div className="font-serif text-2xl text-warm-olive-600 font-bold">LOGO</div>
            <div className="font-serif text-2xl text-warm-olive-600 font-bold italic">logo</div>
            <div className="font-serif text-2xl text-warm-olive-600 font-bold">LOGO</div>
            <div className="font-serif text-2xl text-warm-olive-600 font-bold italic">Logo</div>
            <div className="font-serif text-2xl text-warm-olive-600 font-bold">LOGO</div>
          </div>
        </div>
      </section>

      {/* About Section - "Hey, I'm Jessica" with Two-Colored Background */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{
        background: 'linear-gradient(to right, #D7C2BF 0%, #D7C2BF 50%, #DFD9B9 50%, #DFD9B9 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Right side - Portrait */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&auto=format,compress"
                  alt="HR Consulting Professional"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cream-300 rounded-full opacity-40"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-warm-olive-300 rounded-full opacity-40"></div>
              </div>
            </div>
            
            {/* Left side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl lg:text-5xl text-warm-olive-800 mb-8 leading-tight">
                Hey, I'm Jessica!
              </h2>
              
              <div className="prose prose-lg text-warm-olive-700 leading-relaxed space-y-6">
                <p>
                  With over 15 years of experience in West Michigan's dynamic business landscape, I've dedicated my career to helping organizations build exceptional workplaces that attract and retain top talent.
                </p>
                
                <p>
                  From Grand Rapids startups to Kalamazoo manufacturers, I understand the unique challenges facing Michigan businesses. My approach combines deep local knowledge with proven HR strategies to create sustainable workplace cultures.
                </p>
                
                <p>
                  Whether you're navigating complex employment law, building your first HR policies, or scaling your team culture, I'm here to help you create a workplace where both your business and your people can thrive.
                </p>
                
                <p>
                  Let's work together to transform your workplace into something extraordinary - because great businesses deserve great HR support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-warm-olive-600 text-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
              Services I Offer
            </h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto leading-relaxed">
              Every business is unique, which is why I'm dedicated to tailoring my approach to fit your specific needs and stay ahead of the curve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cream-300 transition-all duration-300">
                <div className="w-8 h-8 bg-warm-olive-600 rounded-full flex items-center justify-center">
                  <span className="text-cream-50 text-xs font-bold">★</span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-4 font-semibold">
                HR STRATEGY
                <br />
                DEVELOPMENT
              </h3>
              <p className="text-cream-200 text-sm leading-relaxed">
                Build comprehensive HR frameworks that align with your business goals and support sustainable growth.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cream-300 transition-all duration-300">
                <div className="w-8 h-8 bg-warm-olive-600 rounded-full flex items-center justify-center">
                  <span className="text-cream-50 text-xs font-bold">★</span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-4 font-semibold">
                COMPLIANCE &
                <br />
                RISK MANAGEMENT
              </h3>
              <p className="text-cream-200 text-sm leading-relaxed">
                Navigate Michigan employment law with confidence while protecting your organization from HR risks.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cream-300 transition-all duration-300">
                <div className="w-8 h-8 bg-warm-olive-600 rounded-full flex items-center justify-center">
                  <span className="text-cream-50 text-xs font-bold">★</span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-4 font-semibold">
                TALENT
                <br />
                DEVELOPMENT
              </h3>
              <p className="text-cream-200 text-sm leading-relaxed">
                Create programs that attract top talent, develop your team, and build a workplace culture people love.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-4 bg-cream-100 text-warm-olive-800 font-bold rounded-2xl hover:bg-cream-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 lg:py-32 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl text-warm-olive-800 mb-8 leading-tight">
                What West Michigan
                <br />
                <span className="text-cream-600">Leaders</span> Are Saying
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

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-warm-brown-50">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl lg:text-5xl mb-8 text-warm-olive-800 leading-tight">
            Ready to Build Something
            <br />
            <em className="text-cream-600">Extraordinary?</em>
          </h2>
          <p className="text-xl mb-12 text-warm-olive-700 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to create an HR strategy that transforms your workplace culture 
            and drives sustainable business growth throughout West Michigan.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-4 bg-warm-olive-600 text-cream-50 font-bold rounded-2xl hover:bg-warm-olive-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  )
}
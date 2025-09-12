import Link from 'next/link'
import { ArrowRight, Heart, Users, TrendingUp, Shield, Star, Sparkles } from 'lucide-react'
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
      <section className="section-whimsy min-h-screen flex items-center relative">
        <WhimsicalElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <span className="text-handwriting text-6xl md:text-7xl block mb-2 animate-bounce-soft">
                  Transform Your
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-4 font-whimsy">
                  Workplace Magic
                </h1>
                <div className="text-handwriting text-2xl text-accent-600 mb-6">
                  with West Michigan's most trusted HR experts
                </div>
              </div>
              
              <p className="text-xl mb-8 text-secondary-700 leading-relaxed font-whimsy">
                Let's admit it - managing people is hard. Employee relations, compliance, 
                culture building, performance management - it can all fall on your shoulders. 
                <span className="italic text-accent-600"> That's where we come in to work our magic! ✨</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-whimsy group">
                  Schedule Your Magic Session
                  <Sparkles className="w-5 h-5 ml-2 group-hover:animate-wiggle" />
                </Link>
                <Link href="/services" className="btn-outline-whimsy">
                  Explore Our Services
                </Link>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-secondary-600 font-whimsy">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-accent-500" />
                  <span>Trusted by 100+ West Michigan businesses</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-400 relative">
              {/* Decorative floating elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent-200 rounded-full floating-element animation-delay-200 opacity-60"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-warm-300 rounded-blob floating-element animation-delay-600 opacity-70"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-warm-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&auto=format,compress"
                  alt="Whimsical HR Consulting"
                  className="rounded-2xl shadow-lg"
                />
                
                {/* Floating testimonial bubble */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-accent text-white p-4 rounded-2xl shadow-lg max-w-xs floating-element">
                  <p className="text-sm font-whimsy">
                    "They turned our HR headaches into pure joy!" 
                    <span className="text-pink-200">💜</span>
                  </p>
                  <p className="text-xs mt-1 opacity-90">- Sarah, Local Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Whimsical Style */}
      <section className="py-20 section-warm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-handwriting text-5xl text-accent-600 mb-4">
              Why West Michigan businesses
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-whimsy">
              Choose Our Magic Touch
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto font-whimsy">
              We believe every business deserves to have a workplace that sparkles ✨
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-whimsy p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 font-whimsy">
                Local Love & Expertise
              </h3>
              <p className="text-secondary-700 font-whimsy">
                Born and raised in West Michigan, we understand your unique challenges 
                and celebrate your local culture! 🏔️
              </p>
            </div>
            
            <div className="card-whimsy p-8 text-center group hover:scale-105 transition-transform duration-300 animation-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-warm-400 to-warm-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 font-whimsy">
                Proven Magic Results
              </h3>
              <p className="text-secondary-700 font-whimsy">
                Our clients see reduced turnover, happier employees, and stronger cultures. 
                The proof is in the smiles! 😊
              </p>
            </div>
            
            <div className="card-whimsy p-8 text-center group hover:scale-105 transition-transform duration-300 animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 font-whimsy">
                Protective Shield Magic
              </h3>
              <p className="text-secondary-700 font-whimsy">
                We keep the scary compliance monsters away so you can focus on 
                growing your amazing business! 🛡️
              </p>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-accent-300 rounded-full floating-element opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-warm-400 rounded-blob floating-element opacity-40"></div>
      </section>

      {/* Featured Services - Whimsical */}
      {services.length > 0 && (
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-handwriting text-5xl text-accent-600 mb-4">
                Our magical services include
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-whimsy">
                Everything Your Heart Desires
              </h2>
              <p className="text-xl text-secondary-700 font-whimsy max-w-2xl mx-auto">
                From strategy to smiles, we've got all your HR needs covered 💫
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
              <Link href="/services" className="btn-whimsy">
                Discover All Our Magic
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials - Love Letters */}
      {testimonials.length > 0 && (
        <section className="py-20 section-whimsy relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-handwriting text-5xl text-accent-600 mb-4">
                Love letters from our clients
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-whimsy">
                What Our Friends Say
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
          
          {/* Decorative hearts */}
          <div className="absolute top-10 right-20 text-4xl text-pink-300 floating-element">💜</div>
          <div className="absolute bottom-20 left-16 text-3xl text-pink-400 floating-element animation-delay-400">💖</div>
        </section>
      )}

      {/* CTA Section - Magic Time */}
      <section className="py-20 bg-gradient-accent text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-handwriting text-6xl mb-6 animate-bounce-soft">
            Ready for some
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-whimsy">
            Workplace Magic?
          </h2>
          <p className="text-xl mb-8 text-purple-100 font-whimsy max-w-2xl mx-auto">
            Let's transform your HR challenges into success stories! 
            Schedule your magical consultation today - it's absolutely free! ✨
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-5 bg-white text-accent-600 font-bold text-lg rounded-3xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 font-whimsy group"
          >
            <Sparkles className="w-6 h-6 mr-3 group-hover:animate-wiggle" />
            Cast Your Magic Spell Now
            <Heart className="w-6 h-6 ml-3 group-hover:animate-wiggle animation-delay-200" />
          </Link>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full floating-element"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-pink-300/20 rounded-blob floating-element animation-delay-400"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-yellow-300/30 rounded-full floating-element animation-delay-600"></div>
      </section>
    </div>
  )
}
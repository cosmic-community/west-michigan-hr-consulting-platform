import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Users, Briefcase, Heart, Sparkles } from 'lucide-react'
import WhimsicalElements from '@/components/WhimsicalElements'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'About Our Magic | West Michigan HR Consulting',
  description: 'Learn about our whimsical approach to HR consulting and meet the magical team helping West Michigan businesses succeed.',
}

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-whimsy py-20 relative">
        <WhimsicalElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-handwriting text-6xl text-accent-600 mb-6">
              About our little
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-8 font-whimsy">
              Magic Kingdom
            </h1>
            <p className="text-xl text-secondary-700 max-w-4xl mx-auto font-whimsy leading-relaxed">
              We're not your typical stuffy HR consultants. We believe work should be joyful, 
              compliant, and sprinkled with just the right amount of magic! ✨ 
              Based right here in beautiful West Michigan, we're passionate about helping 
              local businesses create workplaces where people actually want to be.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 section-warm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-whimsy p-12 text-center max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 text-4xl opacity-20 floating-element">💜</div>
            <div className="absolute bottom-6 right-6 text-3xl opacity-30 floating-element animation-delay-400">✨</div>
            
            <div className="text-handwriting text-4xl text-accent-600 mb-6">Our mission is simple</div>
            <h2 className="text-4xl font-bold text-secondary-900 mb-8 font-whimsy">
              Spread Workplace Magic Throughout West Michigan
            </h2>
            <p className="text-lg text-secondary-700 leading-relaxed font-whimsy max-w-3xl mx-auto">
              Every business - from the tiniest startup to the most established company - deserves 
              access to HR expertise that actually makes sense. We're here to transform your people 
              challenges into your greatest strengths, all while keeping things fun, compliant, 
              and authentically YOU. Because let's be honest - work is too big a part of life 
              to not enjoy it! 🌟
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Whimsical Stats */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-handwriting text-5xl text-accent-600 mb-4">
              Why we're absolutely magical
            </div>
            <h2 className="text-4xl font-bold text-secondary-900 font-whimsy">
              Our Special Powers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="card-whimsy p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div className="text-handwriting text-3xl text-accent-600 mb-2">15+ Years</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 font-whimsy">
                  of HR Magic Experience
                </h3>
                <p className="text-secondary-700 font-whimsy">
                  From Fortune 500 corporate worlds to cozy local businesses - 
                  we've seen it all and loved every minute! 💼
                </p>
              </div>
            </div>
            
            <div className="text-center group animation-delay-200">
              <div className="card-whimsy p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-warm-400 to-warm-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-handwriting text-3xl text-accent-600 mb-2">100% Local</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 font-whimsy">
                  West Michigan Love
                </h3>
                <p className="text-secondary-700 font-whimsy">
                  Born, raised, and deeply rooted in our beautiful region. 
                  We get the lake effect - and the business effect too! 🏔️
                </p>
              </div>
            </div>
            
            <div className="text-center group animation-delay-400">
              <div className="card-whimsy p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <div className="text-handwriting text-3xl text-accent-600 mb-2">Real Results</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 font-whimsy">
                  That Make Hearts Sing
                </h3>
                <p className="text-secondary-700 font-whimsy">
                  Reduced turnover, happier employees, stronger cultures, 
                  and way less HR stress. The magic is real! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {teamMembers.length > 0 && (
        <section className="py-20 section-whimsy relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-handwriting text-5xl text-accent-600 mb-4">
                Meet our magical crew
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-whimsy">
                The Dream Team
              </h2>
              <p className="text-xl text-secondary-700 font-whimsy max-w-2xl mx-auto">
                Experienced professionals who believe work should be wonderful 💫
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={member.id} className={`animate-fade-in-up animation-delay-${index * 200} group`}>
                  <div className="card-whimsy text-center p-8 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    {/* Floating sparkle on hover */}
                    <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-soft">
                      ✨
                    </div>
                    
                    {member.metadata?.headshot && (
                      <div className="mb-6 relative">
                        <div className="w-32 h-32 mx-auto relative">
                          <img
                            src={`${member.metadata.headshot.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                            alt={member.metadata?.full_name}
                            className="w-full h-full rounded-3xl object-cover border-4 border-warm-200 group-hover:border-accent-400 transition-colors duration-300"
                          />
                          {/* Magic glow effect */}
                          <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2 font-whimsy group-hover:text-accent-600 transition-colors duration-300">
                        {member.metadata?.full_name}
                      </h3>
                      <div className="text-handwriting text-lg text-accent-600 mb-4">
                        {member.metadata?.title}
                      </div>
                      
                      {member.metadata?.specialties && member.metadata.specialties.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {member.metadata.specialties.map((specialty, index) => (
                            <span 
                              key={index}
                              className="inline-block px-3 py-1 text-xs font-medium bg-warm-100 text-warm-700 rounded-full border border-warm-300 font-whimsy"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div 
                        className="text-secondary-700 text-sm mb-6 line-clamp-4 font-whimsy"
                        dangerouslySetInnerHTML={{ 
                          __html: member.metadata?.bio?.substring(0, 300) + '...' || '' 
                        }}
                      />
                      
                      {member.metadata?.years_experience && (
                        <p className="text-handwriting text-accent-600 text-base">
                          {member.metadata.years_experience} years of magic ✨
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-handwriting text-6xl mb-6 animate-bounce-soft">
            Ready to join our
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-whimsy">
            Magic Circle?
          </h2>
          <p className="text-xl mb-8 text-purple-100 font-whimsy max-w-3xl mx-auto leading-relaxed">
            Let's create something absolutely magical together! We can't wait to learn about 
            your business and sprinkle some HR magic into your workplace. The best part? 
            Your first consultation is completely free - no strings attached! 🎁
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-5 bg-white text-accent-600 font-bold text-lg rounded-3xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 font-whimsy group"
          >
            <Heart className="w-6 h-6 mr-3 group-hover:animate-wiggle" />
            Let's Create Magic Together
            <Sparkles className="w-6 h-6 ml-3 group-hover:animate-wiggle animation-delay-200" />
          </Link>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full floating-element"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-pink-300/20 rounded-blob floating-element animation-delay-400"></div>
        <div className="absolute top-1/2 left-16 text-6xl opacity-10 floating-element animation-delay-600">💜</div>
        <div className="absolute bottom-32 right-32 text-4xl opacity-15 floating-element animation-delay-800">✨</div>
      </section>
    </div>
  )
}
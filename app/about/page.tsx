import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Users, Briefcase, Heart, Sparkles, MapPin } from 'lucide-react'
import WhimsicalElements from '@/components/WhimsicalElements'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'About Our Story | West Michigan HR Consulting',
  description: 'Learn about our journey helping West Michigan businesses build exceptional workplaces. From Grand Rapids to Kalamazoo, we\'re your local HR partner.',
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
              About our West Michigan
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-8 font-whimsy">
              HR Story
            </h1>
            <p className="text-xl text-secondary-700 max-w-4xl mx-auto font-whimsy leading-relaxed">
              We're not your typical corporate HR firm. Born and raised in West Michigan, 
              we understand the unique spirit of our region - from the entrepreneurial energy 
              of Grand Rapids to the manufacturing heritage of Kalamazoo. We believe work should 
              be fulfilling, compliant, and authentically Midwestern! ✨ 
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 section-warm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-whimsy p-12 text-center max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 text-4xl opacity-20 floating-element">🏔️</div>
            <div className="absolute bottom-6 right-6 text-3xl opacity-30 floating-element animation-delay-400">⭐</div>
            
            <div className="text-handwriting text-4xl text-accent-600 mb-6">Our mission is clear</div>
            <h2 className="text-4xl font-bold text-secondary-900 mb-8 font-whimsy">
              Strengthen West Michigan's Workforce, One Business at a Time
            </h2>
            <p className="text-lg text-secondary-700 leading-relaxed font-whimsy max-w-3xl mx-auto">
              Every business in our beautiful region - from Holland's growing tech scene to 
              Battle Creek's established industries - deserves world-class HR support. We're 
              here to bring Fortune 500-level expertise to hometown businesses, helping you 
              build workplaces where people thrive and communities prosper. Because when 
              West Michigan businesses succeed, we all win! 🌟
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Local Focus */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-handwriting text-5xl text-accent-600 mb-4">
              Why we're West Michigan's choice
            </div>
            <h2 className="text-4xl font-bold text-secondary-900 font-whimsy">
              Our Local Advantage
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="card-whimsy p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <div className="text-handwriting text-3xl text-accent-600 mb-2">Born Here</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 font-whimsy">
                  Authentic West Michigan Roots
                </h3>
                <p className="text-secondary-700 font-whimsy">
                  Lifelong residents who understand everything from lake-effect snow days 
                  to the unique culture of West Michigan manufacturing and innovation! 🏔️
                </p>
              </div>
            </div>
            
            <div className="text-center group animation-delay-200">
              <div className="card-whimsy p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-warm-400 to-warm-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div className="text-handwriting text-3xl text-accent-600 mb-2">15+ Years</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 font-whimsy">
                  of Regional HR Excellence
                </h3>
                <p className="text-secondary-700 font-whimsy">
                  From startup incubators in Grand Rapids to established manufacturers 
                  in Kalamazoo - we've helped them all build amazing workplaces! 💼
                </p>
              </div>
            </div>
            
            <div className="text-center group animation-delay-400">
              <div className="card-whimsy p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-soft">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <div className="text-handwriting text-3xl text-accent-600 mb-2">Proven Results</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 font-whimsy">
                  That Transform Communities
                </h3>
                <p className="text-secondary-700 font-whimsy">
                  Happier employees, stronger companies, and thriving neighborhoods 
                  across Kent, Ottawa, Allegan, and Kalamazoo counties! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Connection Section */}
      <section className="py-20 section-whimsy relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-whimsy p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="text-handwriting text-4xl text-accent-600 mb-6">Why West Michigan?</div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-whimsy">
              Because This is Home
            </h2>
            <p className="text-lg text-secondary-700 leading-relaxed font-whimsy">
              From cheering on the Griffins to enjoying ArtPrize, from hiking the lakeshore 
              to supporting local farmers markets - we're not just consultants, we're neighbors. 
              We understand the values that make West Michigan special: hard work, community 
              spirit, and genuine care for each other. That's exactly what we bring to your 
              business's HR challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {teamMembers.length > 0 && (
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-handwriting text-5xl text-accent-600 mb-4">
                Meet your West Michigan
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-whimsy">
                HR Partners
              </h2>
              <p className="text-xl text-secondary-700 font-whimsy max-w-2xl mx-auto">
                Experienced professionals who call West Michigan home 🏡
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={member.id} className={`animate-fade-in-up animation-delay-${index * 200} group`}>
                  <div className="card-whimsy text-center p-8 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    {/* Floating sparkle on hover */}
                    <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-soft">
                      ⭐
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
                          {member.metadata.years_experience} years serving West Michigan ⭐
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
            Ready to build something
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-whimsy">
            Amazing Together?
          </h2>
          <p className="text-xl mb-8 text-purple-100 font-whimsy max-w-3xl mx-auto leading-relaxed">
            Let's create an exceptional workplace that reflects West Michigan values - 
            collaborative, innovative, and genuinely caring. Your first consultation is 
            completely free, because that's how neighbors help neighbors! 🤝
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-5 bg-white text-accent-600 font-bold text-lg rounded-3xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 font-whimsy group"
          >
            <Heart className="w-6 h-6 mr-3 group-hover:animate-wiggle" />
            Start Our Partnership Today
            <Sparkles className="w-6 h-6 ml-3 group-hover:animate-wiggle animation-delay-200" />
          </Link>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full floating-element"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-pink-300/20 rounded-blob floating-element animation-delay-400"></div>
        <div className="absolute top-1/2 left-16 text-6xl opacity-10 floating-element animation-delay-600">🏔️</div>
        <div className="absolute bottom-32 right-32 text-4xl opacity-15 floating-element animation-delay-800">⭐</div>
      </section>
    </div>
  )
}
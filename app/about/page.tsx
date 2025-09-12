import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'About Us | West Michigan HR Consulting',
  description: 'Learn about our experienced HR consulting team and our commitment to helping West Michigan businesses succeed.',
}

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About Our Firm
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Dedicated to helping West Michigan businesses build stronger, more effective workplaces 
            through strategic human resources consulting and expert guidance.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary-50 rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Mission</h2>
            <p className="text-lg text-secondary-700 leading-relaxed">
              We believe every West Michigan business deserves access to enterprise-level HR expertise. 
              Our mission is to provide strategic, practical, and results-driven human resources 
              consulting that helps organizations thrive while building positive workplace cultures 
              that attract and retain top talent.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">
              15+ Years Experience
            </h3>
            <p className="text-secondary-700">
              Extensive experience in corporate HR and consulting across diverse industries.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">
              Local Expertise
            </h3>
            <p className="text-secondary-700">
              Deep understanding of West Michigan's business landscape and employment challenges.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">
              Proven Results
            </h3>
            <p className="text-secondary-700">
              Track record of helping businesses reduce costs and improve workplace effectiveness.
            </p>
          </div>
        </div>

        {/* Team Section */}
        {teamMembers.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-secondary-700">
                Experienced professionals dedicated to your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="card text-center">
                  {member.metadata?.headshot && (
                    <div className="mb-6">
                      <img
                        src={`${member.metadata.headshot.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                        alt={member.metadata?.full_name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {member.metadata?.full_name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-4">
                      {member.metadata?.title}
                    </p>
                    
                    {member.metadata?.specialties && member.metadata.specialties.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {member.metadata.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div 
                      className="text-secondary-700 text-sm mb-4 line-clamp-4"
                      dangerouslySetInnerHTML={{ 
                        __html: member.metadata?.bio?.substring(0, 300) + '...' || '' 
                      }}
                    />
                    
                    {member.metadata?.years_experience && (
                      <p className="text-secondary-600 text-sm">
                        {member.metadata.years_experience} years experience
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-primary-900 text-white rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Let's discuss how our expertise can help your West Michigan business 
            overcome HR challenges and achieve your goals.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary bg-white text-primary-900 hover:bg-secondary-100"
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
import { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'HR Services for West Michigan | West Michigan HR Consulting',
  description: 'Comprehensive HR services including strategy, compliance, employee relations, and organizational development tailored for West Michigan businesses.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            HR Solutions for West Michigan Businesses
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            From Grand Rapids startups to Kalamazoo manufacturers, we provide comprehensive 
            human resources solutions designed to help West Michigan businesses build stronger, 
            more compliant, and more effective organizations.
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-600">No services available at this time.</p>
          </div>
        )}

        {/* West Michigan Advantage */}
        <div className="mt-20 bg-secondary-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">
            The West Michigan Advantage
          </h2>
          <p className="text-lg text-secondary-700 mb-8 max-w-4xl mx-auto">
            As lifelong West Michigan residents, we understand the unique challenges and opportunities 
            facing businesses in our region. From navigating seasonal workforce fluctuations to 
            understanding local industry dynamics, we bring insights that only come from calling 
            this place home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600 mb-2">Local Knowledge</div>
              <p className="text-secondary-600">Deep understanding of West Michigan's business landscape</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600 mb-2">Regional Network</div>
              <p className="text-secondary-600">Connected to local resources and professional communities</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600 mb-2">Community Commitment</div>
              <p className="text-secondary-600">Invested in the success of our neighbors and region</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-accent text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom HR Solution for Your West Michigan Business?
          </h2>
          <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
            Every business is unique, especially in our diverse region. From Holland's growing 
            tech sector to Battle Creek's established industries, let's discuss how we can 
            tailor our services to meet your specific needs and challenges.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-10 py-4 bg-white text-accent-600 font-bold text-lg rounded-3xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Your Free West Michigan Consultation
          </a>
        </div>
      </div>
    </div>
  )
}
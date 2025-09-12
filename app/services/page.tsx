import { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'HR Services | West Michigan HR Consulting',
  description: 'Comprehensive HR services including strategy, compliance, employee relations, and organizational development for West Michigan businesses.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our HR Services
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Comprehensive human resources solutions designed to help West Michigan 
            businesses build stronger, more compliant, and more effective organizations.
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

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-secondary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Need a Custom HR Solution?
          </h2>
          <p className="text-secondary-700 mb-6">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific needs.
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  )
}
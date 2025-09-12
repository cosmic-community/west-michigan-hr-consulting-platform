import { Metadata } from 'next'
import CaseStudyCard from '@/components/CaseStudyCard'
import { getCaseStudies } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Case Studies | West Michigan HR Consulting',
  description: 'Success stories and proven results from our HR consulting work with West Michigan businesses.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Real results for West Michigan businesses. See how our HR consulting 
            services have helped organizations overcome challenges and achieve their goals.
          </p>
        </div>

        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-600">No case studies available at this time.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-secondary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-secondary-700 mb-6">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <a href="/contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  )
}
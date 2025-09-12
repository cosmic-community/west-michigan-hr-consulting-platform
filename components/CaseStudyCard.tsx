import Link from 'next/link'
import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="card card-hover h-full">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 text-sm">
          {caseStudy.metadata?.industry && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded">
              {caseStudy.metadata.industry.value}
            </span>
          )}
          
          {caseStudy.metadata?.company_size && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary-100 text-secondary-700 rounded">
              {caseStudy.metadata.company_size.value}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
          <Link 
            href={`/case-studies/${caseStudy.slug}`}
            className="hover:text-primary-600 transition-colors"
          >
            {caseStudy.metadata?.title}
          </Link>
        </h3>
        
        <div className="mb-4 flex-1">
          <h4 className="text-sm font-medium text-secondary-900 mb-2">Challenge:</h4>
          <div 
            className="text-secondary-700 text-sm line-clamp-3"
            dangerouslySetInnerHTML={{ 
              __html: caseStudy.metadata?.challenge?.substring(0, 200) + '...' || '' 
            }}
          />
        </div>
        
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors mt-auto"
        >
          Read Full Case Study →
        </Link>
      </div>
    </article>
  )
}
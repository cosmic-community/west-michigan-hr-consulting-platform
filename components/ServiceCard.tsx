import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-cream-100 rounded-3xl p-8 border border-cream-200 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
      {/* Service Icon */}
      {service.metadata?.service_icon && (
        <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden bg-warm-olive-100 flex items-center justify-center">
          <img 
            src={`${service.metadata.service_icon.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
            alt={service.metadata?.service_name || service.title}
            className="w-8 h-8 object-contain"
          />
        </div>
      )}
      
      <h3 className="font-serif text-2xl text-warm-olive-800 mb-4 font-semibold group-hover:text-warm-olive-900 transition-colors duration-300">
        {service.metadata?.service_name || service.title}
      </h3>
      
      <p className="text-warm-olive-700 mb-6 leading-relaxed">
        {service.metadata?.description || service.content || ''}
      </p>
      
      {service.metadata?.key_benefits && (
        <div className="mb-6">
          <div className="text-sm text-warm-olive-600 font-medium mb-2">Key Benefits:</div>
          <div className="text-sm text-warm-olive-700">{service.metadata.key_benefits}</div>
        </div>
      )}
      
      <div className="flex items-center justify-between pt-4 border-t border-cream-300">
        {service.metadata?.price_range && (
          <div className="text-warm-olive-800 font-bold">
            {service.metadata.price_range}
          </div>
        )}
        <Link 
          href={`/services#${service.slug}`}
          className="inline-flex items-center text-warm-olive-600 font-medium hover:text-warm-olive-800 transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
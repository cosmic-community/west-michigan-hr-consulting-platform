import Link from 'next/link'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card card-hover h-full">
      {service.metadata?.service_icon && (
        <div className="aspect-w-16 aspect-h-9 bg-secondary-100">
          <img
            src={`${service.metadata.service_icon.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={service.metadata?.service_name}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-secondary-900 mb-3">
          {service.metadata?.service_name}
        </h3>
        
        <div 
          className="text-secondary-700 mb-4 flex-1"
          dangerouslySetInnerHTML={{ __html: service.metadata?.description || '' }}
        />
        
        {service.metadata?.key_benefits && (
          <div className="mb-4">
            <div 
              className="text-sm text-secondary-600"
              dangerouslySetInnerHTML={{ __html: service.metadata.key_benefits }}
            />
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto pt-4">
          {service.metadata?.price_range && (
            <span className="text-sm text-primary-600 font-medium">
              {service.metadata.price_range}
            </span>
          )}
          
          <Link
            href="/contact"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  )
}
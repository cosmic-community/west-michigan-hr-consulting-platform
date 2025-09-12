import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card-whimsy h-full group overflow-hidden">
      {service.metadata?.service_icon && (
        <div className="relative overflow-hidden">
          <img
            src={`${service.metadata.service_icon.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={service.metadata?.service_name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Floating sparkle on hover */}
          <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-soft">
            ✨
          </div>
        </div>
      )}
      
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-secondary-900 mb-4 font-whimsy group-hover:text-accent-600 transition-colors duration-300">
          {service.metadata?.service_name}
        </h3>
        
        <div 
          className="text-secondary-700 mb-6 flex-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: service.metadata?.description || '' }}
        />
        
        {service.metadata?.key_benefits && (
          <div className="mb-6 p-4 bg-warm-50 rounded-2xl border border-warm-200">
            <div 
              className="text-sm text-secondary-600 font-whimsy"
              dangerouslySetInnerHTML={{ __html: service.metadata.key_benefits }}
            />
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-warm-100">
          {service.metadata?.price_range && (
            <div className="text-handwriting text-xl text-accent-600 font-medium">
              {service.metadata.price_range}
            </div>
          )}
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-all duration-300 hover:gap-3 font-whimsy"
          >
            Let's Chat
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
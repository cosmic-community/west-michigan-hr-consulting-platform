import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating
      return (
        <Star
          key={index}
          className={`w-4 h-4 ${filled ? 'text-cream-500 fill-current' : 'text-cream-300'}`}
        />
      )
    })
  }

  const rating = testimonial.metadata?.rating 
    ? parseInt(testimonial.metadata.rating.value || testimonial.metadata.rating.toString()) 
    : 5

  return (
    <div className="bg-cream-100 rounded-3xl p-8 border border-cream-200 hover:shadow-lg transition-all duration-300">
      <div className="flex mb-4">
        {renderStars(rating)}
      </div>
      
      <blockquote className="text-warm-olive-800 text-lg mb-6 leading-relaxed font-medium">
        "{testimonial.metadata?.quote || testimonial.title}"
      </blockquote>
      
      <div className="border-t border-cream-300 pt-6">
        <div className="font-bold text-warm-olive-900">
          {testimonial.metadata?.client_name || 'Anonymous'}
        </div>
        {testimonial.metadata?.job_title && (
          <div className="text-warm-olive-600 text-sm">
            {testimonial.metadata.job_title}
          </div>
        )}
        {testimonial.metadata?.company_type && (
          <div className="text-warm-olive-500 text-sm">
            {testimonial.metadata.company_type}
          </div>
        )}
      </div>
    </div>
  )
}
import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating;
      return (
        <span key={index} className={`text-2xl ${filled ? 'text-yellow-400' : 'text-warm-300'}`}>
          ⭐
        </span>
      );
    });
  };

  const ratingNumber = testimonial.metadata?.rating ? parseInt(testimonial.metadata.rating.key) : 5;

  return (
    <div className="card-whimsy p-8 relative group hover:scale-105 transition-transform duration-300">
      {/* Decorative quote mark */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
        "
      </div>
      
      <div className="flex items-center mb-6 justify-center">
        <div className="flex gap-1">
          {renderStars(ratingNumber)}
        </div>
      </div>
      
      <blockquote className="text-secondary-700 mb-8 text-lg leading-relaxed font-whimsy text-center italic">
        "{testimonial.metadata?.quote}"
      </blockquote>
      
      <div className="text-center">
        <p className="font-bold text-secondary-900 text-xl font-whimsy">
          {testimonial.metadata?.client_name}
        </p>
        {testimonial.metadata?.job_title && (
          <div className="text-handwriting text-lg text-accent-600 mt-1">
            {testimonial.metadata.job_title}
            {testimonial.metadata?.company_type && (
              <span className="block text-sm text-secondary-600 font-whimsy mt-1">
                {testimonial.metadata.company_type}
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Floating heart on hover */}
      <div className="absolute -bottom-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-soft">
        💜
      </div>
    </div>
  )
}
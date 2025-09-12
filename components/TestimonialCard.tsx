import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating ? 'text-yellow-400' : 'text-secondary-300';
      return { filled, index };
    });
  };

  const ratingNumber = testimonial.metadata?.rating ? parseInt(testimonial.metadata.rating.key) : 5;

  return (
    <div className="card p-6">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {renderStars(ratingNumber).map(({ filled, index }) => (
            <svg
              key={index}
              className={`w-5 h-5 ${filled}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>
      
      <blockquote className="text-secondary-700 mb-6">
        "{testimonial.metadata?.quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-secondary-900">
            {testimonial.metadata?.client_name}
          </p>
          {testimonial.metadata?.job_title && (
            <p className="text-sm text-secondary-600">
              {testimonial.metadata.job_title}
              {testimonial.metadata?.company_type && (
                <span>, {testimonial.metadata.company_type}</span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
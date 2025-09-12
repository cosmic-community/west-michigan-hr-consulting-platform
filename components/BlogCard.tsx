import Link from 'next/link'
import { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const publishDate = post.metadata?.publish_date ? 
    new Date(post.metadata.publish_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : null

  return (
    <article className="card card-hover h-full">
      {post.metadata?.featured_image && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={post.metadata?.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 text-sm">
          {publishDate && (
            <span className="text-secondary-600">{publishDate}</span>
          )}
          
          {post.metadata?.author && (
            <>
              <span className="text-secondary-400">•</span>
              <span className="text-secondary-600">{post.metadata.author}</span>
            </>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-primary-600 transition-colors"
          >
            {post.metadata?.title}
          </Link>
        </h3>
        
        {post.metadata?.excerpt && (
          <p className="text-secondary-700 mb-4 flex-1 line-clamp-3">
            {post.metadata.excerpt}
          </p>
        )}
        
        {post.metadata?.tags && post.metadata.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.metadata.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors mt-auto"
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}
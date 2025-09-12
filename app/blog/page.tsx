import { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import { getBlogPosts } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'HR Blog | West Michigan HR Consulting',
  description: 'Expert insights on employment law, HR best practices, and workplace trends for West Michigan businesses.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            HR Insights & Updates
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Stay informed with the latest employment law updates, HR best practices, 
            and workplace trends affecting West Michigan businesses.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-600">No blog posts available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}
// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { getBlogPost, getBlogPosts } from '@/lib/cosmic'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.metadata?.title} | West Michigan HR Consulting`,
    description: post.metadata?.excerpt || 'HR insights and employment law updates for West Michigan businesses.',
    openGraph: {
      title: post.metadata?.title,
      description: post.metadata?.excerpt,
      images: post.metadata?.featured_image ? [post.metadata.featured_image.imgix_url] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const publishDate = post.metadata?.publish_date ? 
    new Date(post.metadata.publish_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : null

  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Featured Image */}
        {post.metadata?.featured_image && (
          <div className="mb-8">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={post.metadata?.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
            {post.metadata?.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-secondary-600 mb-6">
            {publishDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
            )}

            {post.metadata?.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.metadata.author}</span>
              </div>
            )}
          </div>

          {post.metadata?.tags && post.metadata.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-secondary-600" />
              <div className="flex flex-wrap gap-2">
                {post.metadata.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose-custom max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.metadata?.content || '' }} />
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-primary-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            Need Expert HR Guidance?
          </h3>
          <p className="text-secondary-700 mb-6">
            Our team is here to help you navigate complex HR challenges and build a stronger workplace.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </article>
  )
}
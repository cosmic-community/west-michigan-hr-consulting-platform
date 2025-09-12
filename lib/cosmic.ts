import { createBucketClient } from '@cosmicjs/sdk'
import { 
  Service, 
  BlogPost, 
  CaseStudy, 
  TeamMember, 
  Testimonial, 
  CosmicResponse 
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Service[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch services');
  }
}

// Get featured services
export async function getFeaturedServices(): Promise<Service[]> {
  try {
    const services = await getServices();
    return services.filter(service => service.metadata?.featured_service === 'Yes');
  } catch (error) {
    console.error('Error fetching featured services:', error);
    return [];
  }
}

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const posts = response.objects as BlogPost[];
    
    // Manual sorting by publish date (newest first)
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata?.publish_date || '').getTime();
      const dateB = new Date(b.metadata?.publish_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch blog posts');
  }
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await getBlogPosts();
    return posts.filter(post => post.metadata?.featured_post === 'Yes');
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
}

// Get single blog post
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'blog-posts',
      slug
    }).depth(1);
    
    const post = response.object as BlogPost;
    
    if (!post || !post.metadata) {
      return null;
    }
    
    return post;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Get all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as CaseStudy[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch case studies');
  }
}

// Get featured case studies
export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  try {
    const caseStudies = await getCaseStudies();
    return caseStudies.filter(study => study.metadata?.featured_case_study === 'Yes');
  } catch (error) {
    console.error('Error fetching featured case studies:', error);
    return [];
  }
}

// Get single case study
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'case-studies',
      slug
    }).depth(1);
    
    const caseStudy = response.object as CaseStudy;
    
    if (!caseStudy || !caseStudy.metadata) {
      return null;
    }
    
    return caseStudy;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Get all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch team members');
  }
}

// Get all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Get homepage testimonials
export async function getHomepageTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonials = await getTestimonials();
    return testimonials.filter(testimonial => testimonial.metadata?.display_homepage === 'Yes');
  } catch (error) {
    console.error('Error fetching homepage testimonials:', error);
    return [];
  }
}
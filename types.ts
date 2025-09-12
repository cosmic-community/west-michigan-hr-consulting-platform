// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service types
interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    key_benefits?: string;
    price_range?: string;
    duration?: string;
    featured_service?: 'Yes' | 'No';
    service_icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Blog post types
interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title: string;
    content: string;
    excerpt?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: string;
    publish_date?: string;
    tags?: string[];
    featured_post?: 'Yes' | 'No';
  };
}

// Case study types
interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title: string;
    industry?: {
      key: string;
      value: string;
    };
    company_size?: {
      key: string;
      value: string;
    };
    challenge: string;
    solution: string;
    results: string;
    featured_case_study?: 'Yes' | 'No';
  };
}

// Team member types
interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    title: string;
    bio: string;
    credentials?: string;
    years_experience?: number;
    specialties?: string[];
    headshot?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin_url?: string;
  };
}

// Testimonial types
interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote: string;
    client_name: string;
    job_title?: string;
    company_type?: string;
    display_homepage?: 'Yes' | 'No';
    rating?: {
      key: string;
      value: string;
    };
  };
}

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Form types
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  service_interest?: string;
}

// Type guards
function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}

function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export type {
  CosmicObject,
  Service,
  BlogPost,
  CaseStudy,
  TeamMember,
  Testimonial,
  CosmicResponse,
  ContactFormData,
}

export {
  isService,
  isBlogPost,
  isCaseStudy,
  isTeamMember,
  isTestimonial,
}
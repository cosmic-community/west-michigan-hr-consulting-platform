# West Michigan HR Consulting Platform

![App Preview](https://imgix.cosmicjs.com/815c42d0-8fe7-11f0-973b-81e514691025-photo-1507003211169-0a1dd7228f2d-1757688491656.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional website for HR consulting services in West Michigan. This platform showcases expertise, services, and thought leadership while providing easy access to consultation booking.

## Features

- **Professional Service Showcase** - Comprehensive display of HR consulting services
- **Expert Blog Platform** - Employment law updates and HR insights
- **Success Stories** - Case studies demonstrating proven results
- **Team Expertise** - Professional profiles with credentials and specialties
- **Client Testimonials** - Social proof through success stories and ratings
- **Consultation Booking** - Easy contact forms for free consultation requests
- **Responsive Design** - Optimized for desktop and mobile experiences
- **SEO Optimized** - Built for search engine visibility

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c430d02bc0a45649cdbf3d&clone_repository=68c433f62bc0a45649cdbf69)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to create a website to promote my hr consulting firm, servicing clients in West Michigan. I want to the page to promote my skills, have a blog, and have a way to reach out to book a free consultation."

### Code Generation Prompt

> "Based on the content model I created for "I want to create a website to promote my hr consulting firm, servicing clients in West Michigan. I want to the page to promote my skills, have a blog, and have a way to reach out to book a free consultation.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling and responsive design
- **Cosmic CMS** - Headless content management
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form handling and validation

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your HR consulting content

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Set up your environment variables:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Cosmic SDK Examples

### Fetching Services
```typescript
const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Getting Blog Posts
```typescript
const posts = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Retrieving Team Members
```typescript
const team = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This application integrates with your Cosmic bucket to display:

- **Services**: HR consulting service offerings with descriptions and benefits
- **Blog Posts**: Professional articles on employment law and HR topics
- **Case Studies**: Success stories with challenge, solution, and results
- **Team Members**: Professional profiles with credentials and expertise
- **Testimonials**: Client feedback with ratings and company information

All content is dynamically loaded from your Cosmic CMS and can be updated in real-time through the Cosmic dashboard.

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy automatically on every commit

### Netlify
1. Connect your repository to Netlify
2. Set your build command to `bun run build`
3. Add environment variables in Netlify's dashboard

For production deployments, make sure to set your environment variables in your hosting platform's dashboard.

<!-- README_END -->
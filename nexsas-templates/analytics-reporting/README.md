# Analytics & Reporting - Next.js SaaS Platform

A comprehensive, modern Next.js SaaS platform for analytics and reporting businesses. Built with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies. This platform provides a complete solution for analytics and reporting SaaS companies, featuring customer success stories, case studies, integrations, documentation, and more.

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project with App Router
- ✅ **50+ Pages** - Comprehensive page collection for SaaS businesses
- ✅ **200+ Components** - Reusable React components
- ✅ **Markdown Content** - Blog posts, customer stories, case studies, whitepapers
- ✅ **Dark/Light Mode** - Seamless theme switching
- ✅ **Documentation** - Comprehensive setup and development guide
- ✅ **Production Ready** - Optimized for performance and SEO

## ✨ Features

### 🎯 **Core Pages**

- **Homepage**: Modern landing page with hero, features, integrations, and testimonials
- **Analytics**: Detailed analytics platform showcase
- **Features**: Comprehensive feature listings and details
- **Pricing**: Multiple pricing plans with feature comparisons
- **Customer Success**: Customer stories and detailed case studies
- **Integrations**: Integration showcase and documentation
- **Blog**: Blog listing with markdown support and detailed blog posts
- **Documentation**: Complete documentation system
- **Whitepapers**: Research papers and whitepaper downloads
- **Case Studies**: Detailed case studies with before/after comparisons
- **Team**: Team member profiles and company culture
- **About**: Company mission, vision, and manifesto
- **Services**: Service listings and detailed service pages
- **Contact**: Contact forms with integrated maps
- **Support**: FAQ, help center, and support resources
- **Legal**: Privacy policy, terms & conditions, GDPR compliance, refund policy
- **Career**: Job listings and career opportunities
- **Security**: Security and compliance information
- **Testimonials**: Customer testimonials and reviews

### 🎨 **Modern Design System**

- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Smooth Animations**: GSAP and Lenis for premium interactions
- **Interactive Components**: Sliders, modals, tabs, accordions, and dynamic elements
- **Professional UI**: Clean, modern design with consistent spacing and typography
- **Accessibility**: WCAG compliant components and semantic HTML

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with App Router and Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint
- **Markdown Support**: Gray-matter for content management
- **Image Optimization**: Automatic image optimization with Next.js Image component

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.8 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom component library
- **Animations**: GSAP 3.13, Lenis smooth scrolling
- **Maps**: Leaflet with React integration
- **Content**: Markdown support with gray-matter
- **Theme**: next-themes for dark/light mode
- **Development**: ESLint, Prettier, Husky, lint-staged

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone or Download

```bash
# If using Git
git clone <repository-url>
cd analytics-and-reporting-ns-next

# Or extract the downloaded ZIP file
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
analytics-and-reporting-ns-next/
├── public/                     # Static assets
│   ├── images/                # Images organized by components
│   ├── icons/                 # SVG icons and graphics
│   └── favicon.ico           # Site favicon
├── src/
│   ├── app/                  # Next.js 16 App Router
│   │   ├── analytics/        # Analytics page
│   │   ├── blog/            # Blog pages
│   │   ├── customer/        # Customer success stories
│   │   ├── case-study/      # Case study pages
│   │   ├── whitepaper/      # Whitepaper pages
│   │   ├── integration/     # Integration pages
│   │   ├── pricing/         # Pricing page
│   │   ├── features/        # Features page
│   │   ├── team/            # Team pages
│   │   ├── services/        # Service pages
│   │   ├── documentation/   # Documentation
│   │   ├── globals.css      # Global styles
│   │   └── layout.tsx      # Root layout component
│   ├── components/          # React components
│   │   ├── home/            # Homepage components
│   │   ├── analytics/      # Analytics page components
│   │   ├── customer/       # Customer components
│   │   ├── case-study/     # Case study components
│   │   ├── whitepaper/     # Whitepaper components
│   │   ├── blog/           # Blog components
│   │   ├── shared/         # Reusable components
│   │   │   ├── navbar/     # Navigation components
│   │   │   ├── footer/     # Footer components
│   │   │   └── ui/         # Base UI components
│   │   └── animation/      # Animation components
│   ├── context/            # React contexts
│   ├── data/               # Static data and content
│   │   ├── blogs/         # Markdown blog posts
│   │   ├── customer/      # Customer markdown files
│   │   ├── case-study/    # Case study markdown files
│   │   ├── whitepaper/    # Whitepaper markdown files
│   │   └── services/      # Service descriptions
│   ├── hooks/             # Custom React hooks
│   ├── interface/         # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── styles/            # CSS modules and styles
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Available Pages

### Main Pages

- `/` - Homepage
- `/analytics` - Analytics platform showcase
- `/features` - Features listing
- `/pricing` - Pricing plans
- `/integration` - Integration showcase
- `/about` - About us page
- `/contact-us` - Contact page
- `/services` - Service listings
- `/our-services/[slug]` - Individual service details
- `/services/[slug]` - Service details

### Content Pages

- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog posts
- `/customer` - Customer success stories
- `/customer/[slug]` - Individual customer stories
- `/case-study` - Case study listings
- `/case-study/[slug]` - Individual case studies
- `/whitepaper` - Whitepaper listings
- `/whitepaper/[slug]` - Individual whitepapers
- `/success-stories` - Success stories showcase

### Company Pages

- `/team` - Team listing
- `/team/[slug]` - Individual team member profiles
- `/career` - Career opportunities
- `/career/[slug]` - Individual job listings
- `/our-manifesto` - Company manifesto
- `/why-choose-us` - Why choose us page
- `/process` - Company process
- `/press` - Press and awards

### Support & Legal

- `/documentation` - Documentation
- `/faq` - Frequently asked questions
- `/support` - Support center
- `/tutorial` - Tutorials
- `/changelog` - Product changelog
- `/glossary` - Glossary of terms
- `/privacy-policy` - Privacy policy
- `/terms-conditions` - Terms and conditions
- `/gdpr` - GDPR compliance
- `/refund-policy` - Refund policy
- `/affiliate-policy` - Affiliate policy
- `/legal` - Legal notice
- `/security` - Security and compliance

### Additional Pages

- `/affiliates` - Affiliate program
- `/referral-program` - Referral program
- `/testimonial` - Customer testimonials
- `/use-case` - Use cases
- `/brandkit` - Brand kit
- `/download` - Downloads
- `/login` - Login page
- `/signup` - Signup page

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality Tools

This project uses several tools to maintain code quality:

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **Commitlint**: Enforce conventional commit messages

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
feat: add new analytics dashboard component
fix: resolve customer story markdown parsing issue
docs: update installation guide
style: format code with prettier
refactor: restructure component architecture
```

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/app/globals.css` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/`
4. **Tailwind**: Update `tailwind.config.ts` for design tokens

### Content Management

- **Blog Posts**: Add markdown files in `src/data/blogs/`
- **Customer Stories**: Add markdown files in `src/data/customer/`
- **Case Studies**: Add markdown files in `src/data/case-study/`
- **Whitepapers**: Add markdown files in `src/data/whitepaper/`
- **Services**: Update service data in `src/data/services/`
- **Team Members**: Modify team data in `src/data/team/`

### Adding New Content

#### Adding a New Blog Post

1. Create a markdown file in `src/data/blogs/` with frontmatter:

```markdown
---
title: 'Your Blog Post Title'
description: 'Blog post description'
date: '2024-01-15'
author: 'Author Name'
category: 'Analytics'
featured: true
thumbnail: '/images/blog/thumbnail.jpg'
---

# Your Blog Post Content

Your markdown content here...
```

2. The blog post will automatically appear in the blog listing

#### Adding a New Customer Story

1. Create a markdown file in `src/data/customer/` with frontmatter:

```markdown
---
title: 'Company Name'
description: 'Customer story description'
industry: 'fintech'
product: 'analytics'
service: 'consulting'
solution: 'cloud'
lightImage: '/images/icons/company.svg'
darkImage: '/images/icons/company-dark.svg'
alt: 'Company Name'
detailsTitle: 'How Company Name Improved Their Analytics'

overview:
  titleOne: 'Overview'
  titleTwo: 'Main headline'
  description: 'Overview description'

problemBlock:
  titleOne: 'The problem'
  titleTwo: 'Problem headline'
  description: 'Problem description'
  testimonial:
    image: '/images/avatar.png'
    name: 'John Doe'
    role: 'CEO, Company Name'
    description: 'Testimonial text'
    rating: 5
    xLink: 'https://x.com'

solutionBlock:
  titleOne: 'The solution'
  titleTwo: 'Solution headline'
  description: 'Solution description'

resultBlock:
  titleOne: 'The result'
  titleTwo: 'Result headline'
  description: 'Result description'
---
```

2. Access the customer story at `/customer/[slug]`

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Build Output

- Static assets are optimized and compressed
- JavaScript is minified and tree-shaken
- CSS is purged and optimized
- Images are automatically optimized by Next.js
- Markdown content is pre-rendered

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **SEO Optimization**: Meta tags, Open Graph, and structured data

## 🚀 Deployment

### Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to:

- **Netlify**: Static site deployment with automatic builds
- **Railway**: Full-stack deployment with database support
- **DigitalOcean**: App Platform with automatic scaling
- **AWS**: Amplify or EC2 for enterprise solutions
- **Hostinger**: Shared hosting with Node.js support

### Deployment Guide

1. **Build the project**: Run `npm run build` locally to test
2. **Choose platform**: Select your preferred hosting provider
3. **Configure environment**: Set up any required environment variables
4. **Deploy**: Follow platform-specific deployment instructions

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 Documentation

For detailed documentation, visit:

- Component usage and examples
- API reference
- Customization guide
- Deployment instructions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support, email [hello@pixel71.com](mailto:hello@pixel71.com) or open an issue in the repository.

## 📄 License

This project is licensed under the terms specified in your purchase agreement.

---

**Made with ❤️ for Analytics & Reporting SaaS Businesses**

_Happy coding!_

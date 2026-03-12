# Crypto Marketing - Next.js SaaS Template

A comprehensive, modern Next.js SaaS template specifically designed for crypto marketing businesses, cryptocurrency platforms, and blockchain service providers. Built with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies.

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project with App Router
- ✅ **50+ Pages** - Comprehensive page collection for crypto marketing businesses
- ✅ **500+ Components** - Reusable React components with crypto-focused designs
- ✅ **Dark/Light Mode** - Seamless theme switching
- ✅ **SEO Optimized** - Proper metadata and structured data
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Smooth Animations** - GSAP and Lenis for premium interactions

## ✨ Features

### 🏠 **Homepage**

- Modern hero section with crypto marketing focus
- Service showcase and integration timeline
- Customer testimonials and success stories
- FAQ section and blog preview
- Call-to-action sections

### 📄 **Complete Page Collection**

#### **Core Pages**

- **Home**: `/` - Main landing page
- **About**: `/about` - Company story, mission, vision, and team
- **Services**: `/services` - Service listings and detailed service pages
- **Our Services**: `/our-services` and `/our-services/[slug]` - Service details
- **Features**: `/features` - Feature showcase and capabilities
- **Pricing**: `/pricing` - Pricing plans and feature comparisons
- **Team**: `/team` and `/team/[slug]` - Team members and profiles

#### **Content & Resources**

- **Blog**: `/blog` and `/blog/[slug]` - Blog listing and detailed posts
- **Case Study**: `/case-study` and `/case-study/[slug]` - Success stories
- **Whitepaper**: `/whitepaper` and `/whitepaper/[slug]` - Research and documentation
- **Documentation**: `/documentation` - User guides and API docs
- **Tutorial**: `/tutorial` - Step-by-step guides
- **Use Case**: `/use-case` - Real-world applications
- **Glossary**: `/glossary` - Crypto and blockchain terminology

#### **Customer & Success**

- **Customer**: `/customer` and `/customer/[slug]` - Customer stories
- **Success Stories**: `/success-stories` - Client achievements
- **Testimonial**: `/testimonial` - Customer reviews
- **Press**: `/press` - Media coverage and awards

#### **Authentication**

- **Login**: `/login` - User authentication
- **Signup**: `/signup` - User registration

#### **Support & Help**

- **Support**: `/support` - Help center and contact
- **FAQ**: `/faq` - Frequently asked questions
- **Contact Us**: `/contact-us` - Contact form and information

#### **Legal & Compliance**

- **Privacy Policy**: `/privacy-policy` - Privacy and data protection
- **Terms & Conditions**: `/terms-conditions` - Terms of service
- **Refund Policy**: `/refund-policy` - Refund and cancellation policy
- **Affiliate Policy**: `/affiliate-policy` - Affiliate program terms
- **GDPR**: `/gdpr` - GDPR compliance information
- **Legal**: `/legal` - Legal notices

#### **Business Pages**

- **Why Choose Us**: `/why-choose-us` - Competitive advantages
- **Our Manifesto**: `/our-manifesto` - Company values and principles
- **Process**: `/process` - How we work
- **Security**: `/security` - Security and compliance
- **Integration**: `/integration` - Third-party integrations
- **Analytics**: `/analytics` - Analytics and reporting features

#### **Programs & Resources**

- **Referral Program**: `/referral-program` - Referral program details
- **Affiliates**: `/affiliates` - Affiliate program
- **Career**: `/career` and `/career/[slug]` - Job openings and applications
- **Brand Kit**: `/brandkit` - Brand assets and guidelines
- **Download**: `/download` - Resource downloads
- **Changelog**: `/changelog` - Product updates and version history

### 🎨 **Modern Design System**

- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Smooth Animations**: GSAP and Lenis for premium interactions
- **Interactive Components**: Sliders, modals, tabs, and dynamic elements
- **Professional UI**: Clean, modern design optimized for crypto marketing
- **Accessibility**: WCAG compliant components

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with App Router and Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint
- **Markdown Support**: Blog posts and content in Markdown format

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
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

1. **Download** the template files
2. **Extract** the ZIP file to your development directory
3. **Navigate** to the project folder:

```bash
cd crypto-marketing-ns-next
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
crypto-marketing-ns-next/
├── public/                     # Static assets
│   ├── images/                # Images organized by components
│   ├── icons/                 # SVG icons and graphics
│   └── favicon.ico           # Site favicon
├── src/
│   ├── app/                  # Next.js 16 App Router
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog pages
│   │   ├── services/        # Service pages
│   │   ├── team/            # Team pages
│   │   ├── globals.css      # Global styles
│   │   └── layout.tsx       # Root layout component
│   ├── components/          # React components
│   │   ├── home/           # Homepage components
│   │   ├── about/          # About page components
│   │   ├── blog/           # Blog components
│   │   ├── services/       # Service components
│   │   ├── shared/         # Reusable components
│   │   │   ├── navbar/     # Navigation components
│   │   │   ├── footer/     # Footer components
│   │   │   ├── cta/        # Call-to-action components
│   │   │   └── ui/         # Base UI components
│   │   └── ui/             # Core UI components
│   ├── context/            # React contexts
│   ├── data/               # Static data and content
│   │   ├── blogs/          # Markdown blog posts
│   │   ├── services/       # Service descriptions
│   │   ├── team/           # Team member data
│   │   ├── case-study/     # Case study data
│   │   └── whitepaper/     # Whitepaper content
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # CSS modules and styles
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Available Pages

### Core Pages

- `/` - Homepage
- `/about` - About us
- `/services` - Services listing
- `/services/[slug]` - Service details
- `/our-services` - Our services
- `/our-services/[slug]` - Service details
- `/features` - Features showcase
- `/pricing` - Pricing plans
- `/team` - Team members
- `/team/[slug]` - Team member details

### Content Pages

- `/blog` - Blog listing
- `/blog/[slug]` - Blog post details
- `/case-study` - Case studies
- `/case-study/[slug]` - Case study details
- `/whitepaper` - Whitepapers
- `/whitepaper/[slug]` - Whitepaper details
- `/documentation` - Documentation
- `/tutorial` - Tutorials
- `/use-case` - Use cases
- `/glossary` - Glossary

### Customer & Success

- `/customer` - Customers
- `/customer/[slug]` - Customer details
- `/success-stories` - Success stories
- `/testimonial` - Testimonials
- `/press` - Press and media

### Authentication

- `/login` - Login page
- `/signup` - Signup page

### Support & Help

- `/support` - Support center
- `/faq` - Frequently asked questions
- `/contact-us` - Contact us

### Legal & Compliance

- `/privacy-policy` - Privacy policy
- `/terms-conditions` - Terms and conditions
- `/refund-policy` - Refund policy
- `/affiliate-policy` - Affiliate policy
- `/gdpr` - GDPR compliance
- `/legal` - Legal notices

### Business Pages

- `/why-choose-us` - Why choose us
- `/our-manifesto` - Our manifesto
- `/process` - Our process
- `/security` - Security
- `/integration` - Integrations
- `/analytics` - Analytics

### Programs & Resources

- `/referral-program` - Referral program
- `/affiliates` - Affiliates
- `/career` - Careers
- `/career/[slug]` - Job details
- `/brandkit` - Brand kit
- `/download` - Downloads
- `/changelog` - Changelog

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
feat: add new crypto marketing feature
fix: resolve responsive layout issue
docs: update installation guide
```

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `tailwind.config.ts` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/`
4. **Global Styles**: Update `src/app/globals.css`

### Adding New Pages

Here's an example of creating a new "Resources" page:

#### Step 1: Create the Page Route

Create `src/app/resources/page.tsx`:

```tsx
import Resources from '@/components/resources/Resources';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Resources - Crypto Marketing || NextSaaS',
  description: 'Educational resources and guides for crypto marketing',
};

const ResourcesPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Resources />
    </main>
  );
};

export default ResourcesPage;
```

#### Step 2: Create Page Components

Create `src/components/resources/Resources.tsx`:

```tsx
const Resources = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <h1>Resources</h1>
        {/* Add your content here */}
      </div>
    </section>
  );
};

export default Resources;
```

#### Step 3: Add Navigation Link

Update the navigation component to include the new page link.

### Content Management

- **Blog Posts**: Add markdown files in `src/data/blogs/`
- **Services**: Update service data in `src/data/services/`
- **Team Members**: Modify team data in `src/data/team/`
- **Case Studies**: Add case studies in `src/data/case-study/`
- **Whitepapers**: Add whitepapers in `src/data/whitepaper/`

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

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **SEO Optimization**: Proper metadata and structured data

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

For detailed documentation and component usage:

- Check component files in `src/components/` for implementation details
- Review page examples in `src/app/` for routing patterns
- See utility functions in `src/utils/` for helper methods

## 📧 Support & Contact

For support and inquiries:

- **Email Support**: Contact the template provider
- **Documentation**: Review component files and code comments
- **Issues**: Check for common solutions in the FAQ section

## 📝 License

This is a premium template. Please refer to your purchase agreement for licensing terms.

---

**Crypto Marketing Template - Built with Next.js 16**

_Happy coding!_

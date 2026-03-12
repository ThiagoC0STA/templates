# NextSaaS - AI Chatbot SaaS Template

A modern, production-ready Next.js 16 SaaS template built for AI chatbot and SaaS businesses. Features a complete set of pages, components, and functionality with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies.

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project with App Router
- ✅ **40+ Pages** - Comprehensive page collection for SaaS businesses
- ✅ **200+ Components** - Reusable React components with TypeScript
- ✅ **Markdown Support** - Blog posts, whitepapers, case studies, and more
- ✅ **Dark/Light Mode** - Seamless theme switching
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Built-in metadata and optimization

## ✨ Features

### 🏠 **Homepage**

- Modern hero section with animations
- Feature showcases
- Pricing preview
- Integration highlights
- Customer testimonials
- Call-to-action sections

### 📄 **Complete Page Collection**

#### Company Pages

- **About Us** - Company story, mission, vision, and team
- **Services** - Service listings with detailed service pages
- **Team** - Team member profiles and details
- **Career** - Job listings and career opportunities
- **Case Studies** - Success stories and customer stories
- **Customers** - Customer showcase and testimonials
- **Why Choose Us** - Value propositions and differentiators
- **Our Manifesto** - Company values and principles

#### Platform Pages

- **Features** - Product features and capabilities
- **Integrations** - Integration options and capabilities
- **Analytics** - Analytics and reporting features
- **Security** - Security and compliance information
- **Process** - How it works and workflows
- **Use Cases** - Industry use cases and applications
- **Whitepaper** - Technical whitepapers and research
- **Brandkit** - Brand assets and guidelines
- **Download** - Download resources

#### Resources Pages

- **Blog** - Blog listing with markdown support and category filtering
- **Blog Details** - Individual blog post pages
- **Tutorial** - Tutorials and guides
- **FAQ** - Frequently asked questions
- **Glossary** - Terminology and definitions
- **Documentation** - Product documentation
- **Support** - Support and help center

#### Business Pages

- **Pricing** - Pricing plans and comparisons
- **Testimonials** - Customer reviews and testimonials
- **Press** - Press releases and media
- **Changelog** - Product updates and changelog
- **Referral Program** - Referral program details
- **Affiliates** - Affiliate program information

#### Authentication Pages

- **Login** - User login page
- **Signup** - User registration page

#### Legal & Policy Pages

- **Privacy Policy** - Privacy policy and data handling
- **Terms & Conditions** - Terms of service
- **GDPR** - GDPR compliance information
- **Refund Policy** - Refund and cancellation policy
- **Affiliate Policy** - Affiliate program terms
- **Legal Notice** - Legal notices and disclaimers

#### Other Pages

- **Contact Us** - Contact form with map integration
- **404 Page** - Custom not-found page

### 🎨 **Modern Design System**

- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP and Lenis for premium interactions
- **Interactive Components**: Sliders, modals, accordions, and dynamic elements
- **Professional UI**: Clean, modern design with consistent spacing
- **Accessibility**: WCAG compliant components

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint
- **Markdown Content**: Easy content management with gray-matter

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.8 with App Router
- **Language**: TypeScript 5.0
- **UI Library**: React 19.2.1
- **Styling**: Tailwind CSS 4.0
- **Animations**: GSAP 3.13.0, Lenis 1.3.8
- **Maps**: Leaflet with React integration
- **Content**: Markdown support with gray-matter and react-markdown
- **Theme**: next-themes for dark/light mode
- **Icons**: Custom SVG icon system
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
cd ai-chatbot

# Or download and extract the ZIP file
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
ai-chatbot/
├── public/                     # Static assets
│   ├── images/                 # Images organized by components
│   ├── fonts/                  # Custom fonts
│   └── video/                  # Video assets
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages
│   │   │   └── [slug]/       # Dynamic blog post pages
│   │   ├── career/            # Career pages
│   │   │   └── [slug]/       # Dynamic job pages
│   │   ├── services/          # Services pages
│   │   │   └── [slug]/       # Dynamic service pages
│   │   ├── team/              # Team pages
│   │   │   └── [slug]/       # Dynamic team member pages
│   │   ├── whitepaper/        # Whitepaper pages
│   │   │   └── [slug]/       # Dynamic whitepaper pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── home/              # Homepage components
│   │   ├── about/             # About page components
│   │   ├── blog/              # Blog components
│   │   ├── services/          # Services components
│   │   ├── pricing/           # Pricing components
│   │   ├── team/              # Team components
│   │   ├── shared/            # Reusable components
│   │   │   ├── navbar/        # Navigation components
│   │   │   ├── footer/        # Footer components
│   │   │   ├── cta/           # CTA components
│   │   │   └── ui/            # Base UI components
│   │   └── ui/                # Core UI components
│   ├── context/               # React contexts
│   │   ├── AppContext.tsx      # Main app context
│   │   ├── MobileMenuContext.tsx
│   │   ├── ModalContext.tsx
│   │   └── TabContext.tsx
│   ├── data/                  # Static data and content
│   │   ├── blogs/             # Markdown blog posts
│   │   ├── services/          # Markdown service descriptions
│   │   ├── team/              # Markdown team member data
│   │   ├── career/            # Markdown job listings
│   │   ├── case-study/        # Markdown case studies
│   │   ├── customer/          # Markdown customer stories
│   │   ├── whitepaper/        # Markdown whitepapers
│   │   ├── json/              # JSON data files
│   │   ├── navbar-data.ts     # Navigation menu data
│   │   ├── footer-data.ts     # Footer links data
│   │   └── faq.ts             # FAQ data
│   ├── hooks/                  # Custom React hooks
│   │   ├── useModal.ts
│   │   ├── useMobileMenu.ts
│   │   ├── useScrollHeader.ts
│   │   └── ...                # More custom hooks
│   ├── icons/                  # Icon components
│   ├── interface/              # TypeScript interfaces
│   ├── styles/                 # CSS modules and styles
│   │   ├── variables.css      # CSS variables
│   │   ├── base.css           # Base styles
│   │   └── ...                # Component styles
│   └── utils/                  # Utility functions
│       ├── generateMetaData.ts
│       ├── getMarkDownData.ts
│       ├── getMarkDownContent.ts
│       └── ...                # More utilities
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎯 Available Pages

### Core Pages

- **Homepage**: `/` - Main landing page
- **About**: `/about` - About us page
- **Services**: `/services` - Services listing
- **Services Details**: `/services/[slug]` - Individual service pages
- **Team**: `/team` - Team listing
- **Team Details**: `/team/[slug]` - Individual team member pages
- **Career**: `/career` - Job listings
- **Career Details**: `/career/[slug]` - Individual job pages
- **Case Studies**: `/case-study` - Case studies listing
- **Case Study Details**: `/case-study/[slug]` - Individual case study pages
- **Customers**: `/customer` - Customer showcase
- **Customer Details**: `/customer/[slug]` - Individual customer pages
- **Blog**: `/blog` - Blog listing with category filtering
- **Blog Details**: `/blog/[slug]` - Individual blog post pages
- **Whitepaper**: `/whitepaper` - Whitepaper listing
- **Whitepaper Details**: `/whitepaper/[slug]` - Individual whitepaper pages

### Platform & Features

- **Features**: `/features` - Product features
- **Integrations**: `/integration` - Integration options
- **Analytics**: `/analytics` - Analytics features
- **Security**: `/security` - Security information
- **Process**: `/process` - How it works
- **Use Cases**: `/use-case` - Use case examples
- **Brandkit**: `/brandkit` - Brand assets
- **Download**: `/download` - Download resources

### Resources

- **Tutorial**: `/tutorial` - Tutorials and guides
- **FAQ**: `/faq` - Frequently asked questions
- **Glossary**: `/glossary` - Terminology
- **Documentation**: `/documentation` - Product documentation
- **Support**: `/support` - Support center

### Business

- **Pricing**: `/pricing` - Pricing plans
- **Testimonials**: `/testimonial` - Customer testimonials
- **Press**: `/press` - Press releases
- **Changelog**: `/changelog` - Product updates
- **Referral Program**: `/referral-program` - Referral program
- **Affiliates**: `/affiliates` - Affiliate program

### Authentication

- **Login**: `/login` - User login
- **Signup**: `/signup` - User registration

### Legal & Policies

- **Privacy Policy**: `/privacy-policy`
- **Terms & Conditions**: `/terms-conditions`
- **GDPR**: `/gdpr`
- **Refund Policy**: `/refund-policy`
- **Affiliate Policy**: `/affiliate-policy`
- **Legal Notice**: `/legal`

### Other

- **Contact Us**: `/contact-us` - Contact form
- **Why Choose Us**: `/why-choose-us`
- **Our Manifesto**: `/our-manifesto`
- **404 Page**: Custom not-found page

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
feat: add new feature page
fix: resolve responsive layout issue
docs: update installation guide
refactor: improve component structure
```

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/styles/variables.css` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/`
4. **Tailwind**: Update Tailwind configuration for design tokens

### Content Management

- **Blog Posts**: Add markdown files in `src/data/blogs/`
- **Services**: Add markdown files in `src/data/services/`
- **Team Members**: Add markdown files in `src/data/team/`
- **Case Studies**: Add markdown files in `src/data/case-study/`
- **Whitepapers**: Add markdown files in `src/data/whitepaper/`
- **Career Listings**: Add markdown files in `src/data/career/`
- **Navigation**: Update `src/data/navbar-data.ts`
- **Footer Links**: Update `src/data/footer-data.ts`

### Adding New Pages

1. Create a new directory in `src/app/` (e.g., `src/app/new-page/`)
2. Add `page.tsx` file with your page component
3. Create corresponding components in `src/components/`
4. Update navigation data if needed in `src/data/navbar-data.ts`

Example:

```tsx
// src/app/new-page/page.tsx
import NewPageComponent from '@/components/new-page/NewPageComponent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'New Page - NextSaaS',
  description: 'Description of the new page',
};

const NewPage = () => {
  return (
    <main>
      <NewPageComponent />
    </main>
  );
};

export default NewPage;
```

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
- Static pages are pre-rendered for better performance

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **SEO Optimization**: Built-in metadata and Open Graph support

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

### Deployment Steps

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

- [Development Guide](./DEVELOPMENT.md) - Detailed development workflow
- Component documentation available in code comments

## 📧 Support

For support and questions:

- **Email**: [hello@pixel71.com](mailto:hello@pixel71.com)
- **Response Time**: Within 24 hours on business days

## 📝 License

This project is a premium template. Please refer to your purchase agreement for licensing terms.

---

**Made with ❤️ by [Pixel71](mailto:hello@pixel71.com)**

_Happy coding!_

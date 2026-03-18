# NextSaaS - Modern SaaS Template Collection

A comprehensive, modern Next.js 16 SaaS template with complete inner pages for payment solutions and SaaS businesses. Built with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies for SaaS businesses, startups, and web applications.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project
- ✅ **40+ Complete Pages** - Authentication, pricing, blog, services, and more
- ✅ **200+ Components** - Reusable React components organized by feature
- ✅ **Markdown Content Support** - Blog posts, case studies, whitepapers, and more
- ✅ **Documentation** - Comprehensive setup guide
- ✅ **Free Updates** - Future improvements included
- ✅ **Premium Support** - Email support from our team

## ✨ Features

### 🏠 **Modern Homepage**

- Payment solution focused design
- Modern layouts with hero sections and feature showcases
- Trust indicators, pricing sections, and integration highlights

### 📄 **Complete Page Collection**

- **Authentication**: Login and Signup pages
- **Pricing**: Pricing page with feature comparisons
- **Blog**: Blog listing and details with markdown support
- **About**: Company story, mission, and vision pages
- **Services**: Service listings and detailed service pages with markdown
- **Team**: Team listing and individual team member pages
- **Case Studies**: Case study listings and detailed case study pages
- **Career**: Career listings and job detail pages
- **Customer**: Customer success stories and testimonials
- **Whitepaper**: Whitepaper listings and detailed whitepaper pages
- **Glossary**: Glossary terms with alphabetical filtering
- **Contact**: Contact forms with integrated maps
- **Legal**: Privacy policy, terms, GDPR, refund policy, and affiliate policy pages
- **Support**: FAQ, documentation, and help pages
- **Analytics**: Analytics showcase page
- **Security**: Security and compliance information
- **Integration**: Integration showcase page

### 🎨 **Modern Design System**

- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP and Lenis for premium interactions
- **Interactive Components**: Sliders, modals, and dynamic elements
- **Professional UI**: Clean, modern design with consistent spacing

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components organized by feature
- **Custom Hooks**: Reusable React hooks for common functionality
- **Context Providers**: React contexts for state management
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom component library
- **Animations**: GSAP 3.13.0, Lenis 1.3.8 smooth scrolling
- **Maps**: Leaflet with React Leaflet integration
- **Content**: Markdown support with gray-matter and react-markdown
- **Theme**: next-themes for dark/light mode
- **Swiper**: Swiper for carousels and sliders
- **Development**: ESLint, Prettier, Husky, lint-staged, Commitlint

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Download & Extract

1. **Download** the template files from ThemeForest
2. **Extract** the ZIP file to your development directory
3. **Navigate** to the project folder:

```bash
cd nextsaas-next
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
nextsaas-next/
├── public/                     # Static assets
│   ├── images/                # Images organized by components
│   ├── fonts/                 # Custom font files
│   └── video/                 # Video assets
├── src/
│   ├── app/                   # Next.js 16 App Router
│   │   ├── about/             # About page
│   │   ├── affiliate-policy/  # Affiliate policy page
│   │   ├── affiliates/        # Affiliates page
│   │   ├── analytics/         # Analytics page
│   │   ├── blog/              # Blog listing and [slug] pages
│   │   ├── brandkit/          # Brand kit page
│   │   ├── career/            # Career listing and [slug] pages
│   │   ├── case-study/        # Case study listing and [slug] pages
│   │   ├── changelog/         # Changelog page
│   │   ├── contact-us/        # Contact page
│   │   ├── customer/          # Customer listing and [slug] pages
│   │   ├── documentation/     # Documentation page
│   │   ├── download/          # Download page
│   │   ├── faq/               # FAQ page
│   │   ├── features/          # Features page
│   │   ├── gdpr/              # GDPR page
│   │   ├── glossary/          # Glossary listing and [slug] pages
│   │   ├── integration/       # Integration page
│   │   ├── legal/             # Legal notice page
│   │   ├── login/             # Login page
│   │   ├── our-manifesto/     # Manifesto page
│   │   ├── press/             # Press page
│   │   ├── pricing/           # Pricing page
│   │   ├── privacy-policy/    # Privacy policy page
│   │   ├── process/           # Process page
│   │   ├── referral-program/  # Referral program page
│   │   ├── refund-policy/     # Refund policy page
│   │   ├── security/          # Security page
│   │   ├── services/          # Services listing and [slug] pages
│   │   ├── signup/            # Signup page
│   │   ├── success-stories/   # Success stories page
│   │   ├── support/           # Support page
│   │   ├── team/              # Team listing and [slug] pages
│   │   ├── terms-conditions/  # Terms and conditions page
│   │   ├── testimonial/       # Testimonial page
│   │   ├── tutorial/          # Tutorial page
│   │   ├── use-case/          # Use case page
│   │   ├── whitepaper/        # Whitepaper listing and [slug] pages
│   │   ├── why-choose-us/     # Why choose us page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Homepage
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # React components
│   │   ├── about/             # About page components
│   │   ├── affiliate-policy/  # Affiliate policy components
│   │   ├── affiliates/        # Affiliates components
│   │   ├── analytics/         # Analytics components
│   │   ├── animation/         # Animation components
│   │   ├── authentication/    # Login/signup components
│   │   ├── blog/              # Blog listing components
│   │   ├── blog-details/      # Blog detail components
│   │   ├── brand-kit/         # Brand kit components
│   │   ├── career/            # Career components
│   │   ├── case-study/        # Case study components
│   │   ├── change-log/        # Changelog components
│   │   ├── contact-page/      # Contact page components
│   │   ├── customer/          # Customer components
│   │   ├── customer-details/  # Customer detail components
│   │   ├── documentation/     # Documentation components
│   │   ├── download/          # Download components
│   │   ├── faq/               # FAQ components
│   │   ├── features/          # Features components
│   │   ├── gdpr/              # GDPR components
│   │   ├── glossary/          # Glossary components
│   │   ├── glossary-details/  # Glossary detail components
│   │   ├── home/              # Homepage components
│   │   ├── integration/       # Integration components
│   │   ├── legal-notice/      # Legal notice components
│   │   ├── our-manifesto/     # Manifesto components
│   │   ├── press/             # Press components
│   │   ├── pricing/           # Pricing components
│   │   ├── privacy/           # Privacy components
│   │   ├── process/           # Process components
│   │   ├── referral-program/  # Referral program components
│   │   ├── refund-policy/     # Refund policy components
│   │   ├── security-compliance/# Security components
│   │   ├── service-details/   # Service detail components
│   │   ├── services/          # Services components
│   │   ├── shared/            # Reusable shared components
│   │   │   ├── card/          # Card components
│   │   │   ├── cta/           # CTA components
│   │   │   ├── footer/        # Footer components
│   │   │   ├── mobile-menu/   # Mobile menu components
│   │   │   ├── navbar/        # Navigation components
│   │   │   ├── reviews/       # Review components
│   │   │   └── testimonial/   # Testimonial components
│   │   ├── success-stories/   # Success stories components
│   │   ├── support/           # Support components
│   │   ├── team/              # Team components
│   │   ├── team-details/      # Team detail components
│   │   ├── terms-conditions/  # Terms components
│   │   ├── testimonial/       # Testimonial components
│   │   ├── tutorial/          # Tutorial components
│   │   ├── ui/                # Core UI components
│   │   ├── use-case/          # Use case components
│   │   ├── white-paper/       # Whitepaper components
│   │   ├── whitepaper-details/# Whitepaper detail components
│   │   └── why-choose-us/     # Why choose us components
│   ├── context/               # React contexts
│   │   ├── MobileMenuContext.tsx
│   │   ├── ModalContext.tsx
│   │   └── TabContext.tsx
│   ├── data/                  # Static data and content
│   │   ├── blogs/             # Markdown blog posts
│   │   ├── career/            # Markdown career posts
│   │   ├── case-study/        # Markdown case studies
│   │   ├── customer/          # Markdown customer stories
│   │   ├── services/          # Markdown service descriptions
│   │   ├── team/              # Markdown team member profiles
│   │   ├── whitepaper/        # Markdown whitepapers
│   │   ├── achievements.ts    # Achievements data
│   │   ├── faq.ts             # FAQ data
│   │   ├── footer-data.ts     # Footer data
│   │   ├── navbar-data.ts     # Navigation data
│   │   └── json/              # JSON data files
│   ├── hooks/                 # Custom React hooks
│   │   ├── useActiveSection.ts
│   │   ├── useBeforeAfterImageSlider.ts
│   │   ├── useDividerExpand.ts
│   │   ├── useLineExpandAnimation.ts
│   │   ├── useMobileMenu.ts
│   │   ├── useModal.ts
│   │   ├── useParallaxEffect.ts
│   │   ├── useProgressAnimation.ts
│   │   ├── useProgressStepsAnimation.ts
│   │   ├── useScrollHeader.ts
│   │   └── useWordAnimation.ts
│   ├── icons/                 # Icon components
│   ├── interface/             # TypeScript interfaces
│   ├── styles/                # CSS styles
│   │   ├── badge.css
│   │   ├── base.css
│   │   ├── button.css
│   │   ├── common.css
│   │   ├── custom-swiper.css
│   │   ├── header.css
│   │   ├── icon-font.css
│   │   ├── lenis.css
│   │   ├── number-animation.css
│   │   ├── typography.css
│   │   ├── variables.css
│   │   └── vendor/            # Third-party styles
│   └── utils/                 # Utility functions
│       ├── cn.ts
│       ├── font.ts
│       ├── generateMetaData.ts
│       ├── generateTOC.ts
│       ├── getMarkDownContent.ts
│       ├── getMarkDownData.ts
│       └── springer.ts
├── types/                      # TypeScript type definitions
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── commitlint.config.cjs       # Commitlint configuration
├── eslint.config.mjs           # ESLint configuration
└── package.json                # Dependencies and scripts
```

## 🎯 Available Pages

### Homepage

- `/` - Main homepage with payment solution features

### Core Pages

- **Authentication**: `/login`, `/signup`
- **Pricing**: `/pricing`
- **About**: `/about`
- **Blog**: `/blog`, `/blog/[slug]`
- **Services**: `/services`, `/services/[slug]`
- **Team**: `/team`, `/team/[slug]`
- **Features**: `/features`
- **Contact**: `/contact-us`
- **Legal**: `/privacy-policy`, `/terms-conditions`, `/gdpr`, `/refund-policy`, `/affiliate-policy`, `/legal`
- **Support**: `/support`, `/faq`, `/documentation`
- **Case Studies**: `/case-study`, `/case-study/[slug]`
- **Career**: `/career`, `/career/[slug]`
- **Customer**: `/customer`, `/customer/[slug]`
- **Whitepaper**: `/whitepaper`, `/whitepaper/[slug]`
- **Glossary**: `/glossary`, `/glossary/[slug]`
- **Other Pages**: `/analytics`, `/security`, `/integration`, `/testimonial`, `/success-stories`, `/press`, `/brandkit`, `/changelog`, `/download`, `/tutorial`, `/use-case`, `/why-choose-us`, `/our-manifesto`, `/process`, `/referral-program`, `/affiliates`

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
feat: add new homepage variation.
fix: resolve responsive layout issue.
docs: update installation guide.
```

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/styles/variables.css` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/ui/`
4. **Tailwind**: Update `tailwind.config.ts` for design tokens

### Adding New Pages

Here's a complete example of creating a new "Portfolio" page:

#### Step 1: Create the Page Route

Create `src/app/portfolio/page.tsx`:

```tsx
import Portfolio from '@/components/portfolio/Portfolio';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - NextSaaS',
  description: 'Showcase of our amazing projects and work',
};

const PortfolioPage = () => {
  return (
    <>
      <NavbarOne />
      <Portfolio />
      <FooterOne />
    </>
  );
};

export default PortfolioPage;
```

#### Step 2: Create Page Components

Create `src/components/portfolio/Portfolio.tsx`:

```tsx
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';

const portfolioData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern e-commerce solution built with Next.js',
  },
  // Add more portfolio items...
];

const Portfolio = () => {
  return (
    <section className="pt-[100px] pb-[100px]">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h1 className="mx-auto max-w-[742px]">Our Portfolio</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[482px]">Discover our latest projects and creative solutions</p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {portfolioData.map((item, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={item.id}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="bg-background-2 dark:bg-background-5 overflow-hidden rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover"
                  />
                  <div className="space-y-3 p-6">
                    <span className="text-primary text-sm">{item.category}</span>
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="text-body-text">{item.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
```

#### Step 3: Add Navigation Link

Update the navigation data to include the new page. In `src/data/navbar-data.ts`, add:

```tsx
// Add to the navigation items array
{
  id: 7,
  name: 'Portfolio',
  path: '/portfolio',
},
```

#### Step 4: Add Data (Optional)

Create `src/data/portfolio.ts` for dynamic content:

```tsx
export const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern e-commerce solution built with Next.js',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com',
  },
  // Add more items...
];
```

#### Step 5: Add Images

Place your portfolio images in:

```
public/images/portfolio/
├── project-1.jpg
├── project-2.jpg
└── project-3.jpg
```

#### Step 6: Test Your Page

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000/portfolio`
3. Check that the page loads correctly
4. Test navigation from the header menu

**That's it!** Your new portfolio page is ready with proper routing, components, navigation, and SEO metadata.

### Content Management

- **Blog Posts**: Add markdown files in `src/data/blogs/`
- **Services**: Add markdown files in `src/data/services/`
- **Team Members**: Add markdown files in `src/data/team/`
- **Case Studies**: Add markdown files in `src/data/case-study/`
- **Career Posts**: Add markdown files in `src/data/career/`
- **Customer Stories**: Add markdown files in `src/data/customer/`
- **Whitepapers**: Add markdown files in `src/data/whitepaper/`
- **Navigation**: Update `src/data/navbar-data.ts` for menu items
- **Footer**: Update `src/data/footer-data.ts` for footer content
- **FAQ**: Update `src/data/faq.ts` for FAQ content
- **Static Content**: Edit component files directly

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
- **Bundle Analysis**: Built-in bundle analyzer

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

Need help with deployment? Contact us at [hello@pixel71.com](mailto:hello@pixel71.com)

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 Documentation

- [Development Guide](./DEVELOPMENT.md) - Detailed development workflow
- [Component Documentation](https://nextsaas-documentation.vercel.app/nextjs/get-started) - Usage guide

## 📧 Support & Contact

We provide comprehensive support for all our customers:

- **Email Support**: [hello@pixel71.com](mailto:hello@pixel71.com)
- **Response Time**: Within 24 hours on business days
- **Support Includes**:
  - Installation assistance
  - Bug fixes and troubleshooting
  - Customization guidance
  - Feature clarifications

---

**Made by [Pixel71](mailto:hello@pixel71.com)**

\_Happy coding!

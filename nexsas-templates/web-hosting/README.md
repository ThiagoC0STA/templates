# NextSaaS - Web Hosting Template

A modern, production-ready Next.js 16 Web Hosting SaaS template with 40+ pages. Built with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies for web hosting businesses, SaaS startups, and service-based web applications.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project with App Router
- ✅ **40+ Pages** - Homepage, authentication, pricing, blog, legal, and more
- ✅ **150+ Components** - Reusable React components organized by feature
- ✅ **Dark/Light Mode** - Built-in theme switching
- ✅ **Documentation** - Comprehensive setup guide
- ✅ **Free Updates** - Future improvements included
- ✅ **Premium Support** - Email support from our team

## ✨ Features

### 📄 **Complete Page Collection**

- **Homepage**: Hero, services, pricing, process, reviews, and blog sections
- **Authentication**: Login and Signup pages
- **Pricing**: Pricing plans with benefits and features comparison
- **Blog**: Blog listing with pagination and detailed blog pages
- **About**: Company vision, mission, success stories, and team
- **Services**: Service listings and detailed service pages
- **Team**: Team listing and individual team member pages
- **Contact**: Contact form with integrated Leaflet maps
- **Legal**: Privacy policy, terms & conditions, GDPR, refund policy
- **Support**: FAQ, documentation, and tutorial pages
- **Marketing**: Case studies, testimonials, success stories, whitepapers
- **Resources**: Glossary, changelog, download, brand kit
- **Programs**: Affiliates, referral program, career pages

### 🎨 **Modern Design System**

- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Smooth Animations**: GSAP and Lenis for premium scroll interactions
- **Interactive Components**: Swiper carousels, modals, and dynamic elements
- **Professional UI**: Clean, modern design with consistent spacing

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with Turbopack support
- **React 19**: Cutting-edge React with server components
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom component library
- **Animations**: GSAP 3.13, Lenis smooth scrolling
- **Carousels**: Swiper 11
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

### 1. Download & Extract

1. **Download** the template files from ThemeForest
2. **Extract** the ZIP file to your development directory
3. **Navigate** to the project folder:

```bash
cd web-hosting-ns-next
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
web-hosting-ns-next/
├── public/                     # Static assets
│   ├── images/                 # Images organized by components
│   ├── fonts/                  # Custom icon fonts
│   └── video/                  # Video assets
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── about/              # About page
│   │   ├── affiliate-policy/   # Affiliate policy page
│   │   ├── affiliates/         # Affiliates program page
│   │   ├── analytics/          # Analytics page
│   │   ├── blog/               # Blog listing & [slug] details
│   │   ├── brandkit/           # Brand kit page
│   │   ├── career/             # Career listing & [slug] details
│   │   ├── case-study/         # Case studies & [slug] details
│   │   ├── changelog/          # Changelog page
│   │   ├── contact-us/         # Contact page with map
│   │   ├── customer/           # Customer stories & [slug] details
│   │   ├── documentation/      # Documentation page
│   │   ├── download/           # Download page
│   │   ├── faq/                # FAQ page
│   │   ├── features/           # Features page
│   │   ├── gdpr/               # GDPR compliance page
│   │   ├── glossary/           # Glossary & [slug] details
│   │   ├── integration/        # Integration page
│   │   ├── legal/              # Legal notice page
│   │   ├── login/              # Login page
│   │   ├── our-manifesto/      # Company manifesto page
│   │   ├── press/              # Press page
│   │   ├── pricing/            # Pricing page
│   │   ├── privacy-policy/     # Privacy policy page
│   │   ├── process/            # Process page
│   │   ├── referral-program/   # Referral program page
│   │   ├── refund-policy/      # Refund policy page
│   │   ├── security/           # Security compliance page
│   │   ├── services/           # Services & [slug] details
│   │   ├── signup/             # Signup page
│   │   ├── success-stories/    # Success stories page
│   │   ├── support/            # Support page
│   │   ├── team/               # Team listing & [slug] details
│   │   ├── terms-conditions/   # Terms & conditions page
│   │   ├── testimonial/        # Testimonials page
│   │   ├── tutorial/           # Tutorial page
│   │   ├── use-case/           # Use cases page
│   │   ├── whitepaper/         # Whitepapers & [slug] details
│   │   ├── why-choose-us/      # Why choose us page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── not-found.tsx       # 404 page
│   ├── components/             # React components
│   │   ├── about/              # About page components
│   │   ├── affiliates/         # Affiliate components
│   │   ├── analytics/          # Analytics components
│   │   ├── animation/          # Animation utilities
│   │   ├── authentication/     # Login/signup components
│   │   ├── blog/               # Blog components
│   │   ├── blog-details/       # Blog detail components
│   │   ├── career/             # Career components
│   │   ├── case-study/         # Case study components
│   │   ├── contact-page/       # Contact components
│   │   ├── faq/                # FAQ components
│   │   ├── features/           # Features components
│   │   ├── glossary/           # Glossary components
│   │   ├── home/               # Homepage components
│   │   ├── pricing/            # Pricing components
│   │   ├── shared/             # Shared/reusable components
│   │   │   ├── navbar/         # Navigation components
│   │   │   ├── footer/         # Footer components
│   │   │   ├── cta/            # Call-to-action components
│   │   │   ├── reviews/        # Review/testimonial components
│   │   │   └── testimonial/    # Testimonial components
│   │   ├── team/               # Team components
│   │   ├── ui/                 # Base UI components
│   │   └── ...                 # Other feature components
│   ├── context/                # React contexts
│   │   ├── MobileMenuContext.tsx
│   │   ├── ModalContext.tsx
│   │   └── TabContext.tsx
│   ├── data/                   # Static data and content
│   │   ├── blogs/              # Markdown blog posts (28 posts)
│   │   ├── career/             # Career markdown files (6 positions)
│   │   ├── case-study/         # Case study markdown (16 studies)
│   │   ├── customer/           # Customer stories markdown (11 stories)
│   │   ├── services/           # Service markdown files (20 services)
│   │   ├── team/               # Team member markdown (16 members)
│   │   ├── whitepaper/         # Whitepaper markdown (13 papers)
│   │   ├── json/               # JSON data files
│   │   ├── faq.ts              # FAQ data
│   │   ├── footer-data.ts      # Footer links data
│   │   └── navbar-data.ts      # Navigation data
│   ├── hooks/                  # Custom React hooks
│   │   ├── useActiveSection.ts
│   │   ├── useParallaxEffect.ts
│   │   ├── useProgressAnimation.ts
│   │   ├── useScrollHeader.ts
│   │   ├── useWordAnimation.ts
│   │   └── ...
│   ├── icons/                  # Icon components
│   ├── interface/              # TypeScript interfaces
│   ├── styles/                 # CSS styles
│   │   ├── variables.css       # CSS variables
│   │   ├── base.css            # Base styles
│   │   ├── typography.css      # Typography styles
│   │   ├── button.css          # Button styles
│   │   ├── badge.css           # Badge styles
│   │   └── ...
│   └── utils/                  # Utility functions
│       ├── cn.ts               # className utility
│       ├── font.ts             # Font configuration
│       ├── generateMetaData.ts # SEO metadata generator
│       ├── getMarkDownContent.ts
│       └── getMarkDownData.ts
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── postcss.config.mjs          # PostCSS configuration
├── commitlint.config.cjs       # Commitlint configuration
└── package.json                # Dependencies and scripts
```

## 🎯 Available Pages

### Main Pages

| Route              | Description                                    |
| ------------------ | ---------------------------------------------- |
| `/`                | Homepage with hero, services, pricing, reviews |
| `/about`           | Company about page                             |
| `/services`        | Services listing                               |
| `/services/[slug]` | Individual service details                     |
| `/pricing`         | Pricing plans                                  |
| `/features`        | Features overview                              |
| `/contact-us`      | Contact form with map                          |

### Authentication

| Route     | Description            |
| --------- | ---------------------- |
| `/login`  | User login page        |
| `/signup` | User registration page |

### Blog & Content

| Route                | Description                  |
| -------------------- | ---------------------------- |
| `/blog`              | Blog listing with pagination |
| `/blog/[slug]`       | Individual blog post         |
| `/case-study`        | Case studies listing         |
| `/case-study/[slug]` | Individual case study        |
| `/whitepaper`        | Whitepapers listing          |
| `/whitepaper/[slug]` | Individual whitepaper        |
| `/glossary`          | Glossary terms               |
| `/glossary/[slug]`   | Individual glossary term     |

### Team & Career

| Route            | Description            |
| ---------------- | ---------------------- |
| `/team`          | Team members listing   |
| `/team/[slug]`   | Individual team member |
| `/career`        | Job openings           |
| `/career/[slug]` | Job details & apply    |

### Legal & Compliance

| Route               | Description         |
| ------------------- | ------------------- |
| `/privacy-policy`   | Privacy policy      |
| `/terms-conditions` | Terms & conditions  |
| `/gdpr`             | GDPR compliance     |
| `/refund-policy`    | Refund policy       |
| `/legal`            | Legal notice        |
| `/security`         | Security compliance |

### Marketing & Resources

| Route              | Description               |
| ------------------ | ------------------------- |
| `/testimonial`     | Customer testimonials     |
| `/success-stories` | Success stories           |
| `/customer`        | Customer stories listing  |
| `/customer/[slug]` | Individual customer story |
| `/why-choose-us`   | Value proposition         |
| `/use-case`        | Use cases                 |
| `/process`         | How it works              |
| `/analytics`       | Analytics features        |
| `/integration`     | Integrations              |

### Support & Resources

| Route            | Description                |
| ---------------- | -------------------------- |
| `/faq`           | Frequently asked questions |
| `/support`       | Support page               |
| `/documentation` | Documentation              |
| `/tutorial`      | Tutorials                  |
| `/changelog`     | Product changelog          |
| `/download`      | Downloads                  |
| `/brandkit`      | Brand kit                  |

### Programs

| Route               | Description       |
| ------------------- | ----------------- |
| `/affiliates`       | Affiliate program |
| `/affiliate-policy` | Affiliate policy  |
| `/referral-program` | Referral program  |
| `/press`            | Press & media     |
| `/our-manifesto`    | Company manifesto |

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
- **Prettier**: Code formatting with Tailwind CSS plugin
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **Commitlint**: Enforce conventional commit messages

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
feat: add new pricing component.
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

Create a new page in `src/app/`:

```tsx
// src/app/portfolio/page.tsx
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Portfolio - Web Hosting || NextSaaS',
};

const PortfolioPage = () => {
  return <main className="bg-background-3 dark:bg-background-7">{/* Your content here */}</main>;
};

export default PortfolioPage;
```

### Content Management

- **Blog Posts**: Add markdown files in `src/data/blogs/`
- **Services**: Update service data in `src/data/services/`
- **Team Members**: Modify team data in `src/data/team/`
- **Case Studies**: Add case studies in `src/data/case-study/`
- **Whitepapers**: Add whitepapers in `src/data/whitepaper/`
- **Navigation**: Edit `src/data/navbar-data.ts`
- **Footer Links**: Edit `src/data/footer-data.ts`

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Turbopack**: Fast development builds with Turbopack

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

_Happy coding!_

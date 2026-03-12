# AI SaaS Software - NextSaaS Template

A modern, production-ready Next.js 16 SaaS template built for AI-powered software products. Features a complete set of pages, components, and functionality with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.17-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project with App Router
- ✅ **15+ Pages** - Home, About, Blog, Pricing, Process, Services, Team, Use Cases, Features, Contact, Login, Signup
- ✅ **130+ Components** - Reusable React components with TypeScript
- ✅ **Markdown Support** - Blog posts, services, use cases, and team profiles
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Built-in metadata and optimization

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with App Router
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint and Prettier for code formatting and linting
- **Markdown Content**: Easy content management with gray-matter

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5.0
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.0
- **Animations**: GSAP 3.14, Lenis 1.3.17
- **Icons**: Custom icon font system
- **Carousels**: Swiper for sliders and carousels
- **Marquee**: react-fast-marquee for ticker effects

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 20.0.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 2. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
ai-saas-software-ns-next/
├── public/                     # Static assets
│   └── images/                 # Images and icons
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── about/              # About page
│   │   ├── blog/               # Blog pages
│   │   │   └── [slug]/         # Dynamic blog post pages
│   │   ├── contact/            # Contact page
│   │   ├── features/           # Features page
│   │   ├── login/              # Login page
│   │   ├── pricing/            # Pricing page
│   │   ├── process/            # Process page
│   │   ├── services/           # Services pages
│   │   │   └── [slug]/         # Dynamic service pages
│   │   ├── signup/             # Signup page
│   │   ├── team/               # Team pages
│   │   │   └── [slug]/         # Dynamic team member pages
│   │   ├── use-case/           # Use case pages
│   │   │   └── [slug]/         # Dynamic use case pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   ├── not-found.tsx       # 404 page
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components (130+)
│   │   ├── about/              # About page components
│   │   ├── animation/          # Animation components
│   │   ├── auth/               # Auth components
│   │   ├── blog/               # Blog components
│   │   ├── contact/            # Contact components
│   │   ├── features/           # Features components
│   │   ├── home/               # Homepage components
│   │   ├── process/            # Process components
│   │   ├── pricing/            # Pricing components
│   │   ├── services/           # Services components
│   │   ├── shared/             # Shared/reusable components
│   │   │   ├── layout/         # Navbar, footer, mobile menu
│   │   │   └── ui/             # Buttons, cards, badges, etc.
│   │   ├── team/               # Team components
│   │   └── use-case/           # Use case components
│   ├── context/                # React contexts
│   │   └── MobileMenuContext.tsx
│   ├── data/                   # Static data and content
│   │   ├── blog/               # 15 Markdown blog posts
│   │   ├── services/           # 8 Markdown service descriptions
│   │   ├── team/               # 9 Markdown team member profiles
│   │   ├── use-cases/          # 11 Markdown use cases
│   │   ├── mobile-meu.ts       # Mobile menu / navigation data
│   │   ├── footer.ts           # Footer data
│   │   └── pricing.ts          # Pricing data
│   ├── hooks/                  # Custom React hooks
│   │   ├── useScrollHeader.ts
│   │   └── use-typewriter.ts
│   ├── components/shared/icon/ # Icon components
│   ├── interface/              # TypeScript interfaces
│   ├── styles/                 # CSS and styles
│   │   ├── variable.css        # Design tokens / variables
│   │   ├── common.css          # Common styles
│   │   ├── typography.css      # Typography
│   │   └── icon-fonts.css      # Icon fonts
│   └── utils/                  # Utility functions
│       ├── cn.ts               # Class name utility
│       ├── font.ts             # Font configuration
│       ├── generateMetaData.ts # SEO metadata generator
│       ├── generateTOC.ts      # Table of contents generator
│       ├── getMarkDownContent.ts
│       ├── getMarkDownData.ts
│       ├── parseUseCaseDate.ts
│       └── springer.ts         # Animation springs
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

### Code Quality Tools

This project uses several tools to maintain code quality:

- **ESLint 9**: JavaScript/TypeScript linting
- **Prettier 3**: Code formatting with Tailwind CSS plugin

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/styles/variable.css` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/`
4. **Tailwind**: Update Tailwind configuration for design tokens

### Content Management

| Content Type   | Location                | Count |
| -------------- | ----------------------- | ----- |
| Blog Posts     | `src/data/blog/`        | 15    |
| Services       | `src/data/services/`    | 8     |
| Team Members   | `src/data/team/`        | 9     |
| Use Cases      | `src/data/use-cases/`    | 11    |
| Pricing        | `src/data/pricing.ts`   | -     |
| Navigation     | `src/data/mobile-meu.ts`| -     |
| Footer         | `src/data/footer.ts`    | -     |

### Adding New Pages

1. Create a new directory in `src/app/` (e.g., `src/app/new-page/`)
2. Add `page.tsx` file with your page component
3. Create corresponding components in `src/components/`
4. Update navigation data in `src/data/mobile-meu.ts` if needed

Example:

```tsx
// src/app/new-page/page.tsx
import NewPageComponent from '@/src/components/new-page/NewPageComponent';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'New Page - AI SaaS Software',
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

- **Image Optimization**: Automatic optimization and lazy loading
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

## 📧 Support

For support and questions:

- **Email**: [hello@pixel71.com](mailto:hello@pixel71.com)
- **Response Time**: Within 24 hours on business days

---

**Made with ❤️ by [Pixel71](mailto:hello@pixel71.com)**

_Happy coding!_

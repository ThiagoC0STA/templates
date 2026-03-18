# NextSaaS – Email Marketing Template

Modern email marketing SaaS template built with **Next.js 16**, **React 19** and **TypeScript**. The repo ships with 40+ prebuilt pages, 200+ components, and markdown-driven content so teams can launch email marketing sites or landing flows quickly.

---

## Table of Contents

1. [Stack & Highlights](#stack--highlights)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Routes & Data Sources](#routes--data-sources)
5. [Development Scripts](#development-scripts)
6. [Customization Notes](#customization-notes)
7. [Maintenance Checklist](#maintenance-checklist)
8. [Deployment](#deployment)
9. [Support](#support)

---

## Stack & Highlights

| Layer      | Details                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| Framework  | Next.js 16 (App Router + Turbopack)                                                                          |
| Language   | TypeScript 5                                                                                                 |
| Styling    | Tailwind CSS 4 + custom CSS modules                                                                          |
| UI System  | 200+ components under `src/components` organized by feature/page                                             |
| Content    | Markdown (96 files: 28 blogs, 16 case studies, 11 customers, 6 services, 16 team, 6 careers, 13 whitepapers) |
| Animations | GSAP + Lenis for smooth interactions                                                                         |
| Theming    | Light/Dark via `next-themes`                                                                                 |
| Maps       | Leaflet + React Leaflet for interactive maps                                                                 |
| UI Library | Swiper for carousels, React Fast Marquee for scrolling text                                                  |
| Tooling    | ESLint, Prettier, lint-staged, Husky, Commitlint                                                             |

**Key capabilities**

- 40+ marketing pages (about, pricing, changelog, team, tutorials, FAQ, etc.).
- Dynamic routes: `blog/[slug]`, `case-study/[slug]`, `customer/[slug]`, `services/[slug]`, `team/[slug]`, `career/[slug]`, `whitepaper/[slug]`, `glossary/[slug]`.
- SEO-ready metadata helpers (`generateMetadata`) with enforced `"<Page Name> - Email Marketing \|\| NextSaaS"` convention.
- Global providers for smooth scrolling, modals, tab state and theme switching.
- 300+ images organized in `public/images/` plus brand icons and avatars.
- Comprehensive component library organized by feature/page for easy maintenance.

---

## Getting Started

```
# install dependencies
yarn install

# run locally (Turbopack)
yarn dev        # http://localhost:3000

# production build + preview
yarn build
yarn start
```

**Prerequisites**

- Node.js 18+
- Yarn 1.22+ (or npm/pnpm)

---

## Project Structure

```
email-marketing-ns-next/
├── public/
│   ├── fonts/               # custom font files (next-sass.*)
│   ├── icons/               # brand icons (asana, discord, stripe, etc.)
│   ├── images/              # marketing assets (300+ images)
│   ├── video/               # background video loops
│   ├── ns-avatar-*.png      # avatar images (1-27)
│   └── ns-img-*.{png,svg,jpg}  # main image assets
├── src/
│   ├── app/
│   │   ├── page.tsx         # home
│   │   ├── layout.tsx       # providers + navbar/footer
│   │   ├── globals.css      # base styles
│   │   ├── not-found.tsx    # 404 page
│   │   ├── <route>/page.tsx # static marketing pages
│   │   └── <route>/[slug]/page.tsx # dynamic routes (blog, case-study, etc.)
│   ├── components/
│   │   ├── shared/          # reusable components (navbar, footer, CTA, testimonials)
│   │   ├── home/            # homepage-specific components
│   │   ├── about/           # about page components
│   │   ├── blog/            # blog listing components
│   │   ├── blog-details/    # blog detail page components
│   │   ├── case-study/      # case study components
│   │   ├── customer/        # customer showcase components
│   │   ├── customer-details/# customer detail page components
│   │   ├── services/        # services listing components
│   │   ├── service-details/ # service detail page components
│   │   ├── team/            # team listing components
│   │   ├── team-details/    # team member detail components
│   │   ├── career/          # career listing components
│   │   ├── whitepaper/      # whitepaper listing components
│   │   ├── whitepaper-details/ # whitepaper detail components
│   │   ├── glossary/       # glossary listing components
│   │   ├── glossary-details/ # glossary detail components
│   │   ├── faq/             # FAQ page components
│   │   ├── pricing/         # pricing page components
│   │   ├── tutorial/       # tutorial page components
│   │   ├── animation/       # animation components
│   │   ├── authentication/  # login/signup components
│   │   └── ui/              # base UI primitives (buttons, inputs, cards)
│   ├── context/             # React contexts (App, Modal, MobileMenu, Tab)
│   ├── data/
│   │   ├── blogs/*.md       # blog markdown files (28 files)
│   │   ├── case-study/*.md  # case study markdown files (16 files)
│   │   ├── customer/*.md    # customer markdown files (11 files)
│   │   ├── services/*.md   # service markdown files (6 files)
│   │   ├── team/*.md        # team member markdown files (16 files)
│   │   ├── career/*.md     # career markdown files (6 files)
│   │   ├── whitepaper/*.md # whitepaper markdown files (13 files)
│   │   ├── json/            # JSON data files
│   │   │   ├── changelog/
│   │   │   ├── faq/
│   │   │   ├── glossary/
│   │   │   ├── pricing/
│   │   │   ├── team/
│   │   │   └── testimonials/
│   │   ├── achievements.ts  # achievements data
│   │   ├── faq.ts          # FAQ data
│   │   ├── footer-data.ts  # footer navigation data
│   │   └── navbar-data.ts # navbar navigation data
│   ├── hooks/              # custom React hooks (11 hooks)
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
│   ├── icons/              # SVG icon components
│   │   ├── index.tsx       # icon exports
│   │   └── menu-icon/      # menu icon components
│   ├── interface/          # TypeScript interfaces
│   │   └── index.ts
│   ├── styles/             # CSS files
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
│   │   └── vendor/         # third-party CSS
│   └── utils/              # utility functions
│       ├── cn.ts           # className utility
│       ├── font.ts         # font configuration
│       ├── generateMetaData.ts
│       ├── generateTOC.ts
│       ├── getMarkDownContent.ts
│       ├── getMarkDownData.ts
│       └── springer.ts
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── commitlint.config.cjs
├── package.json
└── yarn.lock
```

---

## Routes & Data Sources

| Route(s)             | Description                | Data Source                                                                  |
| -------------------- | -------------------------- | ---------------------------------------------------------------------------- |
| `/`                  | Default homepage           | `src/components/home/*` + static data                                        |
| `/about`             | About page                 | `src/components/about/*`                                                     |
| `/why-choose-us`     | Why choose us page         | `src/components/why-choose-us/*`                                             |
| `/use-case`          | Use case page              | `src/components/use-case/*`                                                  |
| `/features`          | Features page              | `src/components/features/*`                                                  |
| `/integration`       | Integration page           | `src/components/integration/*`                                               |
| `/pricing`           | Pricing page               | `src/components/pricing/*` + `src/data/json/pricing/*`                       |
| `/testimonial`       | Testimonials page          | `src/components/testimonial/*` + `src/data/json/testimonials/*`              |
| `/success-stories`   | Success stories page       | `src/components/success-stories/*`                                           |
| `/support`           | Support page               | `src/components/support/*`                                                   |
| `/faq`               | FAQ page                   | `src/components/faq/*` + `src/data/faq.ts` + `src/data/json/faq/*`           |
| `/gdpr`              | GDPR compliance page       | `src/components/gdpr/*`                                                      |
| `/legal`             | Legal notice page          | `src/components/legal-notice/*`                                              |
| `/privacy-policy`    | Privacy policy page        | `src/components/privacy/*`                                                   |
| `/terms-conditions`  | Terms & conditions page    | `src/components/terms-conditions/*`                                          |
| `/refund-policy`     | Refund policy page         | `src/components/refund-policy/*`                                             |
| `/security`          | Security & compliance page | `src/components/security-compliance/*`                                       |
| `/press`             | Press page                 | `src/components/press/*`                                                     |
| `/brandkit`          | Brand kit page             | `src/components/brand-kit/*`                                                 |
| `/our-manifesto`     | Manifesto page             | `src/components/our-manifesto/*`                                             |
| `/download`          | Download page              | `src/components/download/*`                                                  |
| `/contact-us`        | Contact page               | `src/components/contact-page/*`                                              |
| `/documentation`     | Documentation page         | `src/components/documentation/*`                                             |
| `/tutorial`          | Tutorial page              | `src/components/tutorial/*`                                                  |
| `/referral-program`  | Referral program page      | `src/components/referral-program/*`                                          |
| `/affiliate-policy`  | Affiliate policy page      | `src/components/affiliate-policy/*`                                          |
| `/affiliates`        | Affiliates page            | `src/components/affiliates/*`                                                |
| `/analytics`         | Analytics page             | `src/components/analytics/*`                                                 |
| `/services`          | Services listing page      | `src/components/services/*`                                                  |
| `/services/[slug]`   | Service detail page        | `src/data/services/*.md` + `src/components/service-details/*`                |
| `/process`           | Process page               | `src/components/process/*`                                                   |
| `/changelog`         | Changelog page             | `src/components/change-log/*` + `src/data/json/changelog/*`                  |
| `/customer`          | Customer listing page      | `src/components/customer/*`                                                  |
| `/customer/[slug]`   | Customer detail page       | `src/data/customer/*.md` + `src/components/customer-details/*`               |
| `/blog`              | Blog listing page          | `src/components/blog/*`                                                      |
| `/blog/[slug]`       | Blog detail page           | `src/data/blogs/*.md` + `src/components/blog-details/*`                      |
| `/case-study`        | Case study listing page    | `src/components/case-study/*`                                                |
| `/case-study/[slug]` | Case study detail page     | `src/data/case-study/*.md`                                                   |
| `/team`              | Team listing page          | `src/components/team/*` + `src/data/json/team/*`                             |
| `/team/[slug]`       | Team member detail page    | `src/data/team/*.md` + `src/components/team-details/*`                       |
| `/career`            | Career listing page        | `src/components/career/*`                                                    |
| `/career/[slug]`     | Career detail page         | `src/data/career/*.md`                                                       |
| `/whitepaper`        | Whitepaper listing page    | `src/components/white-paper/*`                                               |
| `/whitepaper/[slug]` | Whitepaper detail page     | `src/data/whitepaper/*.md` + `src/components/whitepaper-details/*`           |
| `/glossary`          | Glossary listing page      | `src/components/glossary/*`                                                  |
| `/glossary/[slug]`   | Glossary detail page       | `src/data/json/glossary/glossary.json` + `src/components/glossary-details/*` |
| `/login`             | Login page                 | `src/components/authentication/*`                                            |
| `/signup`            | Signup page                | `src/components/authentication/*`                                            |

> Dynamic pages rely on `generateStaticParams` to pre-render all markdown entries at build time.

---

## Development Scripts

```
yarn dev             # local dev
yarn build           # compile + generate static output
yarn start           # serve .next output

yarn lint            # ESLint flat config
yarn lint:fix        # ESLint with fixes
yarn format          # Prettier write
yarn format:check    # Prettier verify
```

Recommended workflow: run `yarn lint` + `yarn build` before pushing to catch bundle or type issues.

---

## Customization Notes

- **Branding**: update design tokens in `src/styles/variables.css`, base styles in `src/styles/base.css`, and fonts in `src/utils/font.ts`.
- **Styling**: CSS modules are organized in `src/styles/` (badge, button, typography, animations, etc.). Customize component styles in respective component folders.
- **Metadata**: use `generateMetadata(title, description)` from `src/utils/generateMetaData.ts` to keep OpenGraph/Twitter tags in sync. Follow the `"<Page Name> - Email Marketing \|\| NextSaaS"` naming format.
- **Assets**:
  - Add images under `public/images/` (300+ existing images)
  - Add brand icons under `public/icons/`
  - Add videos under `public/video/`
  - Avatar images can be placed in `public/` root or `public/images/`
  - Leverage Next.js `Image` component for optimization
- **Reusable layout**: `src/app/layout.tsx` wires SmoothScrollProvider, ThemeProvider, navbar and footer. Add new global providers there.
- **Markdown schema**: frontmatter fields such as `title`, `slug`, `author`, `thumbnail`, `authorImage`, `publishDate` are consumed by `getMarkDownData` and `getMarkDownContent` helpers in `src/utils/`.
- **Animation hooks**: utilities like `useProgressAnimation`, `useWordAnimation`, `useParallaxEffect`, `useScrollHeader` live in `src/hooks/`.
- **Component organization**: Components are organized by feature/page (e.g., `src/components/blog/`, `src/components/case-study/`). Shared components live in `src/components/shared/`.
- **TypeScript interfaces**: Shared type definitions are in `src/interface/index.ts`.

---

## Maintenance Checklist

Recent work:

- Verified all image references in markdown files (96 .md files checked).
- Copied 94 missing images from backup to ensure all content displays correctly.
- All image paths follow standard conventions (`images/ns-img-*`, `images/ns-avatar-*`, `images/icons/*`).
- Audited every `src/app/**/page.tsx` metadata block to ensure titles match the route.

Going forward:

- When adding assets/components, delete stale ones and rerun `yarn build`.
- Keep markdown file names aligned with slug fields (e.g., `src/data/customer/asana.md`).
- For new routes, implement `generateStaticParams` so content stays statically generated.
- When adding new images, ensure they're placed in `public/images/` and referenced with `/images/` path.
- Keep component organization consistent: feature-specific components in `src/components/<feature>/`, shared components in `src/components/shared/`.

---

## Deployment

```
yarn build
yarn start   # preview locally
```

Deploy to **Vercel** (recommended) or any Node-capable host. No runtime environment variables are required today. If you add integrations, document them here and in `.env.example`.

---

## Support

- Email: [hello@pixel71.com](mailto:hello@pixel71.com)
- Please include Node/Yarn versions plus `yarn build` output when filing issues.

Happy shipping! 🚀

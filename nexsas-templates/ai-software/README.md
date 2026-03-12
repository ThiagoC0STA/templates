# NextSaaS – AI Software Starter

Modern SaaS/AI marketing template built with **Next.js 16**, **React 19** and **TypeScript 5**. The repo ships with 48 prebuilt pages, 180+ components and markdown-driven content so teams can launch marketing sites or landing flows quickly.

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

| Layer      | Details                                                                    |
| ---------- | -------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router + Turbopack)                                        |
| Language   | TypeScript 5                                                               |
| Styling    | Tailwind CSS 4 + custom tokens                                             |
| UI System  | 180+ components under `src/components` (hero, CTA, pricing, testimonials)  |
| Content    | Markdown (blogs, case-study, services, customer, whitepaper, career, team) |
| Animations | GSAP + Lenis for smooth interactions                                       |
| Theming    | Light/Dark via `next-themes`                                               |
| Tooling    | ESLint 9, Prettier, lint-staged, Husky, Commitlint                         |

**Key capabilities**

- 48 total pages including 8 dynamic route types.
- Dynamic routes: `blog/[slug]`, `case-study/[slug]`, `customer/[slug]`, `services/[slug]`, `team/[slug]`, `career/[slug]`, `whitepaper/[slug]`, `glossary/[slug]`.
- SEO-ready metadata helpers (`generateMetadata`) with enforced `"<Page Name> - AI Software || NextSaaS"` convention.
- Global providers for smooth scrolling, modals, tab state and theme switching.

---

## Getting Started

```bash
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
ai-software-ns-next/
├── public/
│   ├── fonts/               # custom icon fonts (next-sass.woff, etc.)
│   ├── images/              # marketing assets (343 files)
│   └── video/               # background video loops
├── src/
│   ├── app/
│   │   ├── page.tsx         # home
│   │   ├── layout.tsx       # providers + navbar/footer
│   │   ├── globals.css      # Tailwind imports
│   │   ├── not-found.tsx    # 404 page
│   │   └── <route>/page.tsx # 40+ marketing pages
│   ├── components/
│   │   ├── shared/          # CTA, navbar, footer, testimonials (38 files)
│   │   ├── home/            # homepage sections (19 files)
│   │   ├── ui/              # base inputs, buttons, cards (10 files)
│   │   ├── animation/       # NumberAnimation, RevealAnimation
│   │   └── <feature>/       # page-specific sections
│   ├── context/
│   │   ├── AppContext.tsx
│   │   ├── MobileMenuContext.tsx
│   │   ├── ModalContext.tsx
│   │   └── TabContext.tsx
│   ├── data/
│   │   ├── blogs/*.md           # 28 blog posts
│   │   ├── career/*.md          # 6 job listings
│   │   ├── case-study/*.md      # 16 case studies
│   │   ├── customer/*.md        # 11 customer stories
│   │   ├── services/*.md        # 6 service pages
│   │   ├── team/*.md            # 16 team members
│   │   ├── whitepaper/*.md      # 13 whitepapers
│   │   ├── json/
│   │   │   ├── changelog/       # changelog.json
│   │   │   ├── faq/             # faq.json
│   │   │   ├── glossary/        # glossary.json
│   │   │   ├── team/            # team metadata
│   │   │   └── testimonials/    # testimonial data
│   │   ├── achievements.ts
│   │   ├── faq.ts
│   │   ├── footer-data.ts
│   │   └── navbar-data.ts
│   ├── hooks/
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
│   ├── icons/               # SVG icon components
│   ├── interface/           # TypeScript interfaces
│   ├── styles/
│   │   ├── variables.css    # design tokens
│   │   ├── base.css         # reset & foundations
│   │   ├── button.css       # button variants
│   │   ├── badge.css        # badge styles
│   │   ├── typography.css   # text styles
│   │   ├── header.css       # navbar styles
│   │   ├── common.css       # shared utilities
│   │   ├── icon-font.css    # icon font definitions
│   │   ├── lenis.css        # smooth scroll styles
│   │   ├── custom-swiper.css
│   │   ├── number-animation.css
│   │   └── vendor/          # third-party CSS
│   └── utils/
│       ├── cn.ts            # classname utility
│       ├── font.ts          # font configuration
│       ├── generateMetaData.ts
│       ├── generateTOC.ts
│       ├── getMarkDownContent.ts
│       ├── getMarkDownData.ts
│       ├── springer.ts
│       └── stack-card/
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── commitlint.config.cjs
└── package.json
```

---

## Routes & Data Sources

| Route(s)                                                                                              | Description          | Data Source                              |
| ----------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------- |
| `/`                                                                                                   | Homepage             | static component data                    |
| `/about`                                                                                              | About page           | `src/components/about/`                  |
| `/features`                                                                                           | Features overview    | `src/components/features/`               |
| `/pricing`                                                                                            | Pricing plans        | `src/components/pricing/`                |
| `/services`                                                                                           | Services listing     | `src/components/services/`               |
| `/services/[slug]`                                                                                    | Service detail       | `src/data/services/*.md`                 |
| `/blog`                                                                                               | Blog index           | `src/data/blogs/*.md`                    |
| `/blog/[slug]`                                                                                        | Blog post detail     | `src/data/blogs/*.md`                    |
| `/case-study`                                                                                         | Case studies listing | `src/data/case-study/*.md`               |
| `/case-study/[slug]`                                                                                  | Case study detail    | `src/data/case-study/*.md`               |
| `/customer`                                                                                           | Customer stories     | `src/data/customer/*.md`                 |
| `/customer/[slug]`                                                                                    | Customer detail      | `src/data/customer/*.md`                 |
| `/team`                                                                                               | Team listing         | `src/data/team/*.md`                     |
| `/team/[slug]`                                                                                        | Team member detail   | `src/data/team/*.md`                     |
| `/career`                                                                                             | Career listings      | `src/data/career/*.md`                   |
| `/career/[slug]`                                                                                      | Job detail           | `src/data/career/*.md`                   |
| `/whitepaper`                                                                                         | Whitepaper hub       | `src/data/whitepaper/*.md`               |
| `/whitepaper/[slug]`                                                                                  | Whitepaper detail    | `src/data/whitepaper/*.md`               |
| `/glossary`                                                                                           | Glossary index       | `src/data/json/glossary/glossary.json`   |
| `/glossary/[slug]`                                                                                    | Glossary term detail | `src/data/json/glossary/glossary.json`   |
| `/changelog`                                                                                          | Product changelog    | `src/data/json/changelog/changelog.json` |
| `/faq`                                                                                                | FAQ page             | `src/data/json/faq/faq.json`             |
| `/testimonial`                                                                                        | Testimonials         | `src/data/json/testimonials/`            |
| `/contact-us`                                                                                         | Contact page         | static component                         |
| `/login`, `/signup`                                                                                   | Authentication pages | static component                         |
| `/privacy-policy`, `/terms-conditions`, `/refund-policy`, `/gdpr`, `/legal`, `/affiliate-policy`      | Legal pages          | static component                         |
| `/analytics`, `/integration`, `/process`, `/use-case`, `/why-choose-us`                               | Feature pages        | static component                         |
| `/success-stories`, `/support`, `/documentation`, `/tutorial`                                         | Resource pages       | static component                         |
| `/referral-program`, `/affiliates`, `/press`, `/brandkit`, `/download`, `/our-manifesto`, `/security` | Marketing pages      | static component                         |

> Dynamic pages rely on `generateStaticParams` to pre-render all markdown entries at build time.

---

## Development Scripts

```bash
yarn dev             # local dev with Turbopack
yarn build           # compile + generate static output
yarn start           # serve .next output

yarn lint            # ESLint flat config
yarn lint:fix        # ESLint with auto-fixes
yarn format          # Prettier write
yarn format:check    # Prettier verify
```

Recommended workflow: run `yarn lint` + `yarn build` before pushing to catch bundle or type issues.

---

## Customization Notes

- **Branding**: update tokens in `src/styles/variables.css` and fonts in `src/utils/font.ts`.
- **Metadata**: use `generateMetadata(title, description)` to keep OpenGraph/Twitter tags in sync. Follow the `"<Page Name> - AI Software || NextSaaS"` naming format.
- **Assets**: add images under `public/images`. Leverage Next/Image for optimization.
- **Reusable layout**: `src/app/layout.tsx` wires SmoothScrollProvider, ThemeProvider, navbar and footer. Add new global providers there.
- **Markdown schema**: frontmatter fields such as `title`, `slug`, `author`, `thumbnail` are consumed by `getMarkDownData` and `getMarkDownContent` helpers.
- **Animation hooks**: utilities like `useProgressAnimation`, `useParallaxEffect`, `useWordAnimation` live in `src/hooks`.
- **Styles**: modular CSS files in `src/styles/` for buttons, badges, typography, etc.

---

## Maintenance Checklist

Recent work (Dec 2025):

- Audited all 48 `src/app/**/page.tsx` metadata blocks to ensure titles match routes.
- Fixed accessibility issues (form labels, ARIA attributes).
- Verified production builds with `yarn build` after updates.

Going forward:

- When adding assets/components, delete stale ones and rerun `yarn build`.
- Keep markdown file names aligned with slug fields (e.g., `src/data/customer/asana.md`).
- For new routes, implement `generateStaticParams` so content stays statically generated.

---

## Deployment

```bash
yarn build
yarn start   # preview locally
```

Deploy to **Vercel** (recommended) or any Node-capable host. No runtime environment variables are required today. If you add integrations, document them here and in `.env.example`.

---

## Support

- Email: [hello@pixel71.com](mailto:hello@pixel71.com)
- Please include Node/Yarn versions plus `yarn build` output when filing issues.

Happy shipping! 🚀

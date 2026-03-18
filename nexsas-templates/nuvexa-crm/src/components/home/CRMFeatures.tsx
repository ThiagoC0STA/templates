'use client';

import { cn } from '@/utils/cn';
import featureImg01 from '@public/images/ns-img-256.png';
import featureImg02 from '@public/images/ns-img-257.png';
import featureImg03 from '@public/images/ns-img-258.png';
import featureImg01Dark from '@public/images/ns-img-dark-171.png';
import featureImg02Dark from '@public/images/ns-img-dark-172.png';
import featureImg03Dark from '@public/images/ns-img-dark-173.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const FEATURES = [
  {
    id: 1,
    headingId: 'sales-management-heading',
    title: 'Sales & pipeline management',
    image: {
      light: featureImg01,
      dark: featureImg01Dark,
      alt: 'Sales pipeline management dashboard',
    },
    points: [
      'Visual sales pipelines for complete deal visibility.',
      'One-click proposal and contract generation.',
      'AI-powered lead scoring to prioritize high-value prospects.',
    ],
    variant: 'default',
  },
  {
    id: 2,
    headingId: 'customer-support-heading',
    title: 'Omnichannel customer support',
    image: {
      light: featureImg02,
      dark: featureImg02Dark,
      alt: 'Omnichannel customer support interface',
    },
    points: [
      'Handle tickets, chat, and calls in one place.',
      'Chatbots for quick customer replies.',
      'Customer portal to lower ticket requests.',
    ],
    variant: 'support',
  },
  {
    id: 3,
    headingId: 'marketing-automation-heading',
    title: 'AI-driven marketing automation',
    image: {
      light: featureImg03,
      dark: featureImg03Dark,
      alt: 'AI-driven marketing automation dashboard',
    },
    points: [
      'AI-powered email & SMS campaigns.',
      'Smart customer segmentation & personalized outreach.',
      'Performance tracking & analytics for marketing ROI.',
    ],
    variant: 'marketing',
  },
] as const;

export default function CRMFeatures() {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Heading */}
          <div className="mx-auto max-w-[724px] space-y-5 text-center md:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">Features</span>
            </RevealAnimation>

            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Key features of NextSaaS CRM</h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="text-secondar dark:text-accent">
                  NextSaaS CRM is designed to simplify and supercharge your customer relationship management. With a
                  clean, user-friendly interface and powerful automation tools
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-12 items-center justify-center gap-y-8 md:gap-x-8 md:gap-y-0">
            {FEATURES.map((f, idx) => (
              <RevealAnimation key={f.id} delay={0.4 + idx * 0.1}>
                <div
                  className={cn(
                    'bg-background-2 dark:bg-background-5 col-span-12 h-full max-h-[400px] max-w-[408px] space-y-6 rounded-[20px] px-8 py-[42px] sm:w-full md:col-span-6 lg:col-span-4',
                    f.variant === 'support' && 'md:py-[50px] lg:py-[42px]',
                  )}>
                  {/* Image */}
                  <figure
                    className={cn(
                      'w-full',
                      f.variant === 'default' && 'max-h-[174px] max-w-[371px]',
                      f.variant === 'support' && 'max-h-[174px] max-w-[344px] overflow-hidden',
                      f.variant === 'marketing' && 'max-w-[371px] overflow-hidden rounded-[10px]',
                    )}>
                    {/* Light */}
                    <Image
                      src={f.image.light}
                      alt={f.image.alt}
                      width={371}
                      height={174}
                      className={cn(
                        'size-full object-cover dark:hidden',
                        f.variant === 'marketing' && 'rounded-[10px]',
                      )}
                    />
                    {/* Dark */}
                    <Image
                      src={f.image.dark}
                      alt={f.image.alt}
                      width={371}
                      height={174}
                      className={cn(
                        'hidden size-full object-cover dark:inline-block',
                        f.variant === 'marketing' && 'rounded-[10px]',
                      )}
                    />
                  </figure>

                  {/* Text + bullets */}
                  <div className="space-y-3">
                    <h3 id={f.headingId} className="text-heading-5">
                      {f.title}
                    </h3>

                    <ul className="space-y-3" aria-label={`${f.title} features`}>
                      {f.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span
                            className="bg-secondary dark:bg-accent flex size-1.5 items-center justify-center overflow-hidden rounded-full"
                            aria-hidden="true"
                          />
                          <span className="text-secondary/60 dark:text-accent/60 text-xs leading-[150%] font-normal">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

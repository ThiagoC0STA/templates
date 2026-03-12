'use client';
import { cn } from '@/src/utils/cn';
import type { ComponentType } from 'react';
import {
  AffiliatePolicyIcon,
  AnalyticsIcon,
  CaseStudyICon,
  ChangeLogIcon,
  DocsIcon,
  FaqIcon,
  GDPRIcon,
  GlossaryIcon,
  LegalNoticeIcon,
  PressIcon,
  PrivacyIcon,
  RefundPolicyIcon,
  SecurityIcon,
  SuccessIcon,
  SupportIcon,
  TutorialIcon,
  UseCaseIcon,
  WhitePaperIcon,
} from '../../icon/menu-icon';
import ResourcesMenuLink from './ResourcesMenuLink';

type ResourceLink = {
  title: string;
  description?: string;
  href: string;
  icon: ComponentType;
};

type ResourceSection = {
  title: string;
  links: ResourceLink[];
  variant?: 'default' | 'compact';
};

const resourceSections: ResourceSection[] = [
  {
    title: 'Help & Documentation',
    links: [
      {
        title: 'Documentation',
        description: 'Detailed documentation of the product.',
        href: '#',
        icon: DocsIcon,
      },
      {
        title: 'Tutorials',
        description: 'Step-by-step guides to help you get started.',
        href: '#',
        icon: TutorialIcon,
      },
      {
        title: 'FAQ',
        description: 'Frequently asked questions and answers.',
        href: '#',
        icon: FaqIcon,
      },
      {
        title: 'Case Studies',
        description: 'Real-world examples of how the product is used.',
        href: '#',
        icon: CaseStudyICon,
      },
      {
        title: 'Whitepapers',
        description: 'Detailed whitepapers on the product.',
        href: '#',
        icon: WhitePaperIcon,
      },
      {
        title: 'Support',
        description: 'Get help and support from our team.',
        href: '#',
        icon: SupportIcon,
      },
    ],
  },
  {
    title: 'Knowledge & Research',
    links: [
      {
        title: 'Use Cases',
        description: 'Explore real-world scenarios where our web hosting delivers results.',
        href: '/use-case',
        icon: UseCaseIcon,
      },
      {
        title: 'Success Stories',
        description: 'Discover measurable outcomes achieved by clients.',
        href: '#',
        icon: SuccessIcon,
      },
      {
        title: 'Analytics',
        description: 'Dive into performance metrics and data insights.',
        href: '#',
        icon: AnalyticsIcon,
      },
      {
        title: 'Changelog',
        description: 'Stay updated with the latest changes and improvements.',
        href: '#',
        icon: ChangeLogIcon,
      },
      {
        title: 'Glossary',
        description: 'Terms and definitions.',
        href: '#',
        icon: GlossaryIcon,
      },
    ],
  },
  {
    title: 'Trust & Compliance',
    variant: 'compact',
    links: [
      {
        title: 'Security',
        href: '#',
        icon: SecurityIcon,
      },
      {
        title: 'GDPR Compliance',
        href: '#',
        icon: GDPRIcon,
      },
      {
        title: 'Privacy Policy',
        href: '#',
        icon: PrivacyIcon,
      },
      {
        title: 'Terms & Conditions',
        href: '#',
        icon: RefundPolicyIcon,
      },
      {
        title: 'Press Coverage',
        href: '#',
        icon: PressIcon,
      },
      {
        title: 'Affiliate Policy',
        href: '#',
        icon: AffiliatePolicyIcon,
      },
      {
        title: 'Legal',
        href: '#',
        icon: LegalNoticeIcon,
      },
    ],
  },
];

const ResourcesMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);
  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-10 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[1290px]',
          menuDropdownId === 'resources-mega-menu'
            ? 'pointer-events-auto! opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />
      <div
        id="resources-mega-menu"
        className={cn(
          'dropdown-menu border-stroke-2/50 pointer-events-none fixed top-full left-1/2 z-50 mt-1.5 w-full -translate-x-1/2 rounded-lg border bg-white p-6 opacity-0 transition-all duration-300 lg:w-[1290px]',
          menuDropdownId === 'resources-mega-menu'
            ? 'pointer-events-auto! translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-12">
          {resourceSections.map((section) => (
            <div
              key={section.title}
              className={cn(
                'col-span-4 space-y-3',
                section.variant === 'compact' && 'bg-background-7 rounded-[10px] px-3 pt-3 pb-3'
              )}
            >
              <p className="font-inter-tight text-tagline-3 cursor-none px-3 text-black/60">
                {section.title}
              </p>
              <ul>
                {section.links.map((link) => (
                  <ResourcesMenuLink
                    key={link.title}
                    {...link}
                    variant={section.variant}
                    onClose={handleClose}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;

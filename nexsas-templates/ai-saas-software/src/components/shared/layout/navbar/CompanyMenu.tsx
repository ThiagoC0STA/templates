'use client';

import opaiImg22 from '@/public/images/opai-img-22.jpg';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import { AboutIcon, BlogIcon, FeatureIcon, ServiceIcon } from '../../icon/menu-icon';
import CompanyMenuLink from './CompanyMenuLink';

type CompanyLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const companyLinks: CompanyLink[] = [
  {
    title: 'About Us',
    description: 'Learn about our mission, values, and dedicated team',
    href: '/about',
    icon: AboutIcon,
  },
  {
    title: 'Our Services',
    description: 'Explore our comprehensive hosting solutions',
    href: '/services',
    icon: ServiceIcon,
  },
  {
    title: 'Product Features',
    description: 'Discover powerful tools and capabilities',
    href: '/features',
    icon: FeatureIcon,
  },
  {
    title: 'Blog & News',
    description: 'Stay updated with latest articles and insights',
    href: '/blog',
    icon: BlogIcon,
  },
];

const CompanyMenu = ({
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[692px] -translate-x-1/2 bg-transparent opacity-0',
          menuDropdownId === 'company-mega-menu'
            ? 'pointer-events-auto! opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'dropdown-menu border-stroke-2/40 pointer-events-none absolute top-full left-1/2 z-50 mt-6 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-lg border bg-white p-4 opacity-0 transition-all duration-300 md:w-[692px] md:gap-x-8',
          menuDropdownId === 'company-mega-menu'
            ? 'pointer-events-auto! translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <ul className="w-full space-y-2 md:max-w-[284px]">
          {companyLinks.map((link) => (
            <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
          ))}
        </ul>
        <figure className="flex-1 space-y-3">
          <p className="font-manrope text-tagline-4 font-medium">What&apos;s New</p>
          <Link href="/blog/the-future-of-ai-content-tools" className="block">
            <figure className="group relative min-h-[272px] w-full max-w-full overflow-hidden rounded-[14px]">
              <Image
                src={opaiImg22}
                alt="What's New"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 size-full space-y-1 transition-all duration-500 ease-in-out group-hover:top-5 group-hover:left-5">
                <p className="font-manrope text-tagline-3 font-medium text-white">
                  Investment Management
                </p>
                <p className="font-inter-tight text-tagline-4 w-full max-w-[212px] font-normal text-white/90">
                  Investment Management is a platform that helps you manage your investments.
                </p>
              </div>
            </figure>
          </Link>
        </figure>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;

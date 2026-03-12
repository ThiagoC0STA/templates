'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { MobileMenuProvider, useMobileMenuContext } from '@/src/context/MobileMenuContext';
import { mobileMenuData } from '@/src/data/mobile-meu';
import { useNavbarScroll } from '@/src/hooks/useScrollHeader';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronIcon } from '../../icon';
import { LinkSecondary } from '../../ui/button';
import MobileMenu from '../mobile-menu/MobileMenu';
import CompanyMenu from './CompanyMenu';
import PartnershipMenu from './PartnershipMenu';
import PeopleAndCultureMenu from './PeopleAndCultureMenu';
import ResourcesMenu from './ResourcesMenu';

const navLinkClass =
  'footer-link flex items-center justify-center gap-1.5 font-ibm-plex-mono text-tagline-3 font-normal leading-[21.7px] tracking-[1.68px] text-white/60 transition-colors duration-500 group-hover/item:text-white';

const Navbar = () => {
  const { toggleMenu } = useMobileMenuContext();
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  const { isScrolled } = useNavbarScroll(100);

  return (
    <>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-lg transition-all duration-500 ease-in-out md:max-w-[640px] lg:max-w-[980px] xl:max-w-[1180px] 2xl:max-w-[1290px]',
          isScrolled && 'top-3'
        )}
      >
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="border-stroke-2/40 bg-background-6/60 flex w-full items-center justify-between rounded-lg border px-2.5 py-2.5 backdrop-blur-[25px]">
            {/* logo  */}
            <Link href="/" className="flex items-center gap-x-1.5">
              <span className="sr-only">Nexsas</span>
              <figure className="-mt-1 hidden h-11 w-[153px] xl:block">
                <Image
                  src="/images/logo/logo-white.svg"
                  alt="logo"
                  width={153}
                  height={44}
                  className="block h-full w-full object-contain"
                />
              </figure>
              <figure className="block size-11 xl:hidden">
                <Image
                  src="/images/logo/logo-small.svg"
                  alt="logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </figure>
            </Link>

            <div className="hidden items-center gap-10 lg:flex 2xl:gap-16">
              <ul className="flex items-center gap-8">
                <li
                  onMouseEnter={() => handleMenuHover('company-mega-menu')}
                  className="group/item relative cursor-pointer"
                  data-menu="company-mega-menu"
                >
                  <Link href="#" onClick={(e) => e.preventDefault()} className={navLinkClass}>
                    <span>Company</span>
                    <span className="transition-transform duration-500 ease-in-out group-hover/item:rotate-180">
                      <ChevronIcon />
                    </span>
                  </Link>
                  <CompanyMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li
                  onMouseEnter={() => handleMenuHover('partnership-dropdown-menu')}
                  className="group/item relative cursor-pointer"
                  data-menu="partnership-dropdown-menu"
                >
                  <Link href="#" onClick={(e) => e.preventDefault()} className={navLinkClass}>
                    <span>Collaborate</span>
                    <span className="transition-transform duration-500 ease-in-out group-hover/item:rotate-180">
                      <ChevronIcon />
                    </span>
                  </Link>
                  <PartnershipMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li
                  onMouseEnter={() => handleMenuHover('resources-mega-menu')}
                  className="group/item relative cursor-pointer"
                  data-menu="resources-mega-menu"
                >
                  <Link href="#" onClick={(e) => e.preventDefault()} className={navLinkClass}>
                    <span>Resources</span>
                    <span className="transition-transform duration-500 ease-in-out group-hover/item:rotate-180">
                      <ChevronIcon />
                    </span>
                  </Link>
                  <ResourcesMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li
                  onMouseEnter={() => handleMenuHover('people-dropdown-menu')}
                  className="group/item relative cursor-pointer"
                  data-menu="people-dropdown-menu"
                >
                  <Link href="#" onClick={(e) => e.preventDefault()} className={navLinkClass}>
                    <span>People &amp; Culture</span>
                    <span className="transition-transform duration-500 ease-in-out group-hover/item:rotate-180">
                      <ChevronIcon />
                    </span>
                  </Link>
                  <PeopleAndCultureMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li className="relative">
                  <Link href="/pricing" className={navLinkClass}>
                    <span>Pricing</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* contact button   */}
            <div className="hidden xl:block">
              <LinkSecondary href="/contact" className="h-10 py-[9px]">
                Learn More
              </LinkSecondary>
            </div>

            {/* mobile menu button  */}
            <button
              type="button"
              onClick={toggleMenu}
              className="nav-hamburger flex cursor-pointer flex-col items-end justify-center space-y-2 xl:hidden"
              aria-label="Toggle menu"
            >
              <span className="bg-background-7 block h-px w-9" />
              <span className="bg-background-7 block h-px w-6" />
            </button>
          </div>
        </RevealAnimation>
      </header>

      <MobileMenu menuData={mobileMenuData} />
    </>
  );
};

const NavbarWithProvider = () => (
  <MobileMenuProvider>
    <Navbar />
  </MobileMenuProvider>
);

export default NavbarWithProvider;

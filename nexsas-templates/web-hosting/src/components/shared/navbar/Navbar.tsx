'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import darkLogo from '@public/images/shared/dark-logo.svg';
import logoDark from '@public/images/shared/logo-dark.svg';
import logo from '@public/images/shared/logo.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import CompanyMenu from './CompanyMenu';
import PartnershipMenu from './PartnershipMenu';
import PeopleAndCultureMenu from './PeopleAndCultureMenu';
import ResourcesMenu from './ResourcesMenu';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <RevealAnimation direction="up" offset={100} delay={0.1} instant>
        <header
          onMouseLeave={() => handleMenuHover(null)}
          className={cn(
            'dark:bg-background-5 border-stroke-2 dark:border-stroke-6 fixed top-0 right-0 left-0 z-30 flex max-w-[1920px] items-center border-b bg-white',
          )}>
          <div className={cn('w-full py-5 transition-all duration-500 ease-in-out xl:py-0', isScrolled && 'px-2')}>
            <div className="mx-auto flex w-full items-center justify-between px-6">
              <div>
                <Link href="/" className="hidden md:inline-block">
                  <span className="sr-only">Home</span>
                  <Image src={mainLogo} className="block dark:hidden" alt="NextSass" priority />
                  <Image src={darkLogo} className="hidden dark:block" alt="NextSass" priority />
                </Link>
                <Link href="/" className="inline-block md:hidden">
                  <span className="sr-only">Home</span>
                  <Image src={logo} className="block dark:hidden" alt="NextSass" priority />
                  <Image src={logoDark} className="hidden dark:block" alt="NextSass" priority />
                </Link>
              </div>
              <div className="flex items-center gap-[76px]">
                <nav className="hidden items-center xl:flex">
                  <ul className="flex items-center gap-6">
                    <li
                      onMouseEnter={() => handleMenuHover('company-mega-menu')}
                      className="group/item relative cursor-pointer py-6"
                      data-menu="company-mega-menu">
                      <Link
                        href="/"
                        onClick={(event) => event.preventDefault()}
                        className="nav-item-link-border flex items-center gap-1">
                        <span>Company</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 ease-in-out group-hover/item:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </Link>
                      <CompanyMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                    </li>
                    <li
                      onMouseEnter={() => handleMenuHover('partnership-dropdown-menu')}
                      className="group/item relative cursor-pointer py-6"
                      data-menu="partnership-dropdown-menu">
                      <Link
                        href="/"
                        onClick={(event) => event.preventDefault()}
                        className="nav-item-link-border flex items-center gap-1">
                        <span>Collaborate</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 ease-in-out group-hover/item:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </Link>
                      <PartnershipMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                    </li>
                    <li
                      onMouseEnter={() => handleMenuHover('resources-mega-menu')}
                      className="group/item relative cursor-pointer py-6"
                      data-menu="resources-mega-menu">
                      <Link
                        href="/"
                        onClick={(event) => event.preventDefault()}
                        className="nav-item-link-border flex items-center gap-1">
                        <span>Resources</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 ease-in-out group-hover/item:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </Link>
                      <ResourcesMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                    </li>
                    <li
                      onMouseEnter={() => handleMenuHover('people-dropdown-menu')}
                      className="group/item relative cursor-pointer py-6"
                      data-menu="people-dropdown-menu">
                      <Link
                        href="/"
                        onClick={(event) => event.preventDefault()}
                        className="nav-item-link-border flex items-center gap-1">
                        <span>People &amp; Culture</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 ease-in-out group-hover/item:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </Link>
                      <PeopleAndCultureMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                    </li>
                    <li className="py-6">
                      <Link href="/pricing" className="nav-item-link-border">
                        {' '}
                        Pricing{' '}
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center gap-2">
                  <div className="hidden sm:block">
                    <Link href="/signup" className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white">
                      <span>Get started</span>
                    </Link>
                  </div>
                  <div className="block xl:hidden">
                    <button className="nav-hamburger bg-background-4 dark:bg-background-7 flex size-12 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full">
                      <span className="sr-only">Menu</span>
                      <span className="bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6" />
                      <span className="bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6" />
                      <span className="bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </RevealAnimation>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import LogoGreenMobileDark from '@public/images/shared/logo-dark.svg';
import LogoGreen from '@public/images/shared/logo-green.svg';
import LogoGreenMobile from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import CompanyMenu from './CompanyMenu';
import PartnershipMenu from './PartnershipMenu';
import PeopleAndCultureMenu from './PeopleAndCultureMenu';
import ResourcesMenu from './ResourcesMenu';

const dropdownNavItems = [
  { label: 'Company', dataMenu: 'company-mega-menu', MenuComponent: CompanyMenu },
  { label: 'Collaborate', dataMenu: 'partnership-dropdown-menu', MenuComponent: PartnershipMenu },
  { label: 'Resources', dataMenu: 'resources-mega-menu', MenuComponent: ResourcesMenu },
  { label: 'People & Culture', dataMenu: 'people-dropdown-menu', MenuComponent: PeopleAndCultureMenu },
];

interface NavbarProps {
  className?: string;
  btnClassName?: string;
}

const Navbar = ({ className, btnClassName }: NavbarProps) => {
  const pathname = usePathname();
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const { isScrolled } = useNavbarScroll(100);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <RevealAnimation direction="up" delay={0.1}>
        <header
          onMouseLeave={() => handleMenuHover(null)}
          className={cn(
            'fixed top-0 left-0 z-50 flex w-full items-center px-12 py-2.5 transition-all duration-500 ease-in-out md:top-0 xl:py-0',
            isScrolled && 'bg-black/40 px-5 backdrop-blur-3xl dark:bg-transparent',
            pathname !== '/' && 'bg-background-8',
            className,
          )}>
          <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between">
            <div>
              <Link href="/">
                <span className="sr-only">Home</span>
                <Image src={LogoGreen} alt="NextSass" className="hidden lg:block" />
                <Image src={LogoGreenMobile} alt="NextSass" className="block lg:hidden dark:hidden" />
                <Image src={LogoGreenMobileDark} alt="NextSass" className="hidden lg:hidden dark:block" />
              </Link>
            </div>
            <div className="flex items-center gap-[76px]">
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center gap-6">
                  {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                    <li
                      key={label}
                      className="group/nav relative cursor-pointer py-5"
                      data-menu={dataMenu}
                      onMouseEnter={() => handleMenuHover(dataMenu)}>
                      <Link
                        href="#"
                        className="text-tagline-1 group-hover/nav:text-accent text-accent group-hover/nav:before:bg-accent relative flex h-full items-center gap-1 font-normal transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:transition-all before:duration-300 before:content-[''] group-hover/nav:before:w-full">
                        <span className="sr-only">Menu Item</span>
                        <span>{label}</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav:rotate-180">
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
                      <MenuComponent menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                    </li>
                  ))}
                  <li className="relative cursor-pointer py-5">
                    <Link
                      href="/pricing"
                      className="flex items-center gap-1 px-4 py-2 text-base font-normal text-white/70 transition-all duration-200 hover:text-white">
                      <span>Pricing</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-2">
                <Link
                  href="/signup"
                  className={cn(
                    'btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white hidden md:block',
                    btnClassName,
                  )}>
                  <span>Get started</span>
                </Link>
                {/* mobile menu btn */}
                <MobileMenuButton />
              </div>
            </div>
          </div>
          <MobileMenu menuData={mobileMenuData} />
        </header>
      </RevealAnimation>
    </MobileMenuProvider>
  );
};

export default Navbar;

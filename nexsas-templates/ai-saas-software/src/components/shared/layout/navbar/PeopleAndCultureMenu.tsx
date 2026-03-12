'use client';
import { cn } from '@/src/utils/cn';
import type { ComponentType } from 'react';
import {
  CareerIcon,
  ContactIcon,
  CustomersIcon,
  PricingIcon,
  ProcessICon,
  TeamIcon,
  TestimonialIcon,
} from '../../icon/menu-icon';
import PeopleAndCultureMenuLink from './PeopleAndCultureMenuLink';

type PeopleAndCultureLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const peopleAndCultureLinks: PeopleAndCultureLink[] = [
  {
    title: 'Process',
    description: 'Explore our process',
    href: '/process',
    icon: ProcessICon,
  },
  {
    title: 'Team',
    description: 'Meet our experts',
    href: '/team',
    icon: TeamIcon,
  },
  {
    title: 'Career',
    description: 'View job openings',
    href: '#',
    icon: CareerIcon,
  },
  {
    title: 'Testimonial',
    description: 'Explore testimonials',
    href: '#',
    icon: TestimonialIcon,
  },
  {
    title: 'Customer',
    description: 'Plan, track, and deliver',
    href: '#',
    icon: CustomersIcon,
  },
  {
    title: 'Contact',
    description: 'Get support help',
    href: '/contact',
    icon: ContactIcon,
  },
  {
    title: 'Pricing',
    description: 'Plans and pricing',
    href: '/pricing',
    icon: PricingIcon,
  },
];

const PeopleAndCultureMenu = ({
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[320px] -translate-x-1/2 bg-transparent opacity-0',
          menuDropdownId === 'people-dropdown-menu'
            ? 'pointer-events-auto! opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />
      <ul
        id="people-dropdown-menu"
        className={cn(
          'dropdown-menu border-stroke-2/40 pointer-events-none absolute top-full left-1/2 z-50 mt-6 w-[320px] -translate-x-1/2 rounded-lg border bg-white p-3 opacity-0 transition-all duration-300',
          menuDropdownId === 'people-dropdown-menu'
            ? 'pointer-events-auto! translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        {peopleAndCultureLinks.map((link) => (
          <PeopleAndCultureMenuLink key={link.title} {...link} onClose={handleClose} />
        ))}
      </ul>
    </div>
  );
};

PeopleAndCultureMenu.displayName = 'PeopleAndCultureMenu';
export default PeopleAndCultureMenu;

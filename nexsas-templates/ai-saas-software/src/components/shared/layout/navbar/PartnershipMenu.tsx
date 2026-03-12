'use client';

import { cn } from '@/src/utils/cn';
import type { ComponentType } from 'react';
import {
  AffiliateIcon,
  DownloadIcon,
  IntegrationIcon,
  LoginIcon,
  ReferralProgramIcon,
  SignUpIcon,
} from '../../icon/menu-icon';
import PartnershipMenuLink from './PartnershipMenuLink';

type PartnershipLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const partnershipLinks: PartnershipLink[] = [
  {
    title: 'Affiliate',
    description: 'Partner program',
    href: '#',
    icon: AffiliateIcon,
  },
  {
    title: 'Referral',
    description: 'Invite and get rewards',
    href: '#',
    icon: ReferralProgramIcon,
  },
  {
    title: 'Login',
    description: 'Enter your account',
    href: '/login',
    icon: LoginIcon,
  },
  {
    title: 'Create Account',
    description: 'Join community',
    href: '/signup',
    icon: SignUpIcon,
  },
  {
    title: 'Download',
    description: 'Download now',
    href: '#',
    icon: DownloadIcon,
  },
  {
    title: 'Integration',
    description: 'Connect integrations',
    href: '#',
    icon: IntegrationIcon,
  },
];

const PartnershipMenu = ({
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
          menuDropdownId === 'partnership-dropdown-menu'
            ? 'pointer-events-auto! opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />
      <ul
        id="partnership-dropdown-menu"
        className={cn(
          'dropdown-menu border-stroke-2/40 pointer-events-none absolute top-full left-1/2 z-50 mt-6 w-[320px] -translate-x-1/2 rounded-lg border bg-white p-3 opacity-0 transition-all duration-300',
          menuDropdownId === 'partnership-dropdown-menu'
            ? 'pointer-events-auto! translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        {partnershipLinks.map((link) => (
          <PartnershipMenuLink key={link.title} {...link} onClose={handleClose} />
        ))}
      </ul>
    </div>
  );
};

PartnershipMenu.displayName = 'PartnershipMenu';
export default PartnershipMenu;

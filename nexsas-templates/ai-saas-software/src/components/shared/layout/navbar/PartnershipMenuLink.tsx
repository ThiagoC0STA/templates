'use client';
import Link from 'next/link';
import type { ComponentType } from 'react';
import HoverBgTransform from '../../hover-bg-transform';

type PartnershipMenuLinkProps = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClose?: () => void;
};

const PartnershipMenuLink = ({
  title,
  description,
  href,
  icon: Icon,
  onClose,
}: PartnershipMenuLinkProps) => (
  <li>
    <Link
      href={href}
      onClick={onClose}
      className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
    >
      <HoverBgTransform className="bg-background-2/10 opacity-0 group-hover:opacity-100" />
      <div className="border-stroke-2/40 group-hover:border-stroke-3/40 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3 transition-all duration-300">
        <Icon className="stroke-background-6 size-5 shrink-0" />
      </div>
      <div className="relative z-10">
        <p className="font-manrope text-tagline-2 font-normal">{title}</p>
        <p className="font-inter-tight text-tagline-4 font-normal">{description}</p>
      </div>
    </Link>
  </li>
);

PartnershipMenuLink.displayName = 'PartnershipMenuLink';
export default PartnershipMenuLink;

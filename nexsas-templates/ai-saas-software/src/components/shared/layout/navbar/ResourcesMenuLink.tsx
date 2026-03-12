'use client';
import Link from 'next/link';
import type { ComponentType } from 'react';
import HoverBgTransform from '../../hover-bg-transform';

type ResourcesMenuLinkProps = {
  title: string;
  description?: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClose?: () => void;
  variant?: 'default' | 'compact';
};

const ResourcesMenuLink = ({
  title,
  description,
  href,
  icon: Icon,
  onClose,
  variant = 'default',
}: ResourcesMenuLinkProps) => {
  if (variant === 'compact') {
    return (
      <li>
        <Link onClick={onClose} href={href} className="group relative flex items-center gap-2 p-3">
          <HoverBgTransform className="bg-background-2/10 opacity-0 group-hover:opacity-100" />
          <div className="border-stroke-2/70 group-hover:border-stroke-3/40 relative z-10 mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1">
            <Icon className="stroke-background-6 size-4 shrink-0" />
          </div>
          <div className="relative z-10">
            <p className="font-manrope text-tagline-2 font-medium">{title}</p>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} onClick={onClose} className="group relative flex items-start gap-2 p-3">
        <HoverBgTransform className="bg-background-2/10 opacity-0 group-hover:opacity-100" />
        <div className="border-stroke-2/70 group-hover:border-stroke-3/40 relative z-10 mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1">
          <Icon className="stroke-background-6 size-4 shrink-0" />
        </div>
        <div className="relative z-10">
          <p className="font-manrope text-tagline-2 font-medium">{title}</p>
          {description && (
            <p className="font-inter-tight text-tagline-4 font-normal">{description}</p>
          )}
        </div>
      </Link>
    </li>
  );
};

ResourcesMenuLink.displayName = 'ResourcesMenuLink';
export default ResourcesMenuLink;

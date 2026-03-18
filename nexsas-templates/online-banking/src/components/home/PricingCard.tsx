import { CheckIcon } from '@/icons';
import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import { cn } from '@/utils/cn';
import Link from 'next/link';

interface Feature {
  text: string;
  available: boolean;
  highlighted?: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  isFeatured?: boolean;
  features: Feature[];
}

const PricingCard = ({ plan, isAnnual, delay }: { plan: PricingPlan; isAnnual: boolean; delay: number }) => {
  const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
  const period = isAnnual ? '/Yearly' : '/Month';

  return (
    <RevealAnimation delay={delay}>
      <div className="col-span-12 lg:col-span-4">
        <div
          className={cn(
            'bg-background-1 relative mx-auto w-full max-w-[604px] rounded-[20px] px-14 py-[60px] lg:mx-0',
            plan.isFeatured ? 'overflow-hidden' : 'dark:bg-background-6',
          )}>
          {plan.isFeatured && (
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[598px] translate-x-[41%] -translate-y-[27%] rotate-[2deg] select-none max-[425]:translate-y-[30%] md:-translate-y-[47%] lg:-translate-y-[25%] xl:translate-x-[44%] xl:-translate-y-[33%]">
                <Image src={gradient4} alt="pricing bg" />
              </div>
              <span className="badge badge-blur bg-ns-green text-secondary lp:ms-64 absolute top-3 z-30 ms-44 rounded-[36px] px-1.5 py-1.5 text-sm font-medium max-[425]:ms-56 sm:px-3.5 md:ms-[420px] lg:ms-36 xl:ms-56">
                Save 40%
              </span>
            </>
          )}

          <div className={cn(plan.isFeatured && 'space-y-2')}>
            {price ? (
              <div className="flex items-center gap-1">
                <h3 className={cn('inline-block', plan.isFeatured && 'text-secondary')}>${price}</h3>
                <span
                  className={cn(
                    'text-tagline-2 text-secondary mt-3 font-normal',
                    !plan.isFeatured && 'dark:text-accent',
                  )}>
                  {period}
                </span>
              </div>
            ) : (
              <h3>{plan.name}</h3>
            )}
            <p className={cn(plan.isFeatured && 'text-secondary/60')}>{plan.description}</p>
          </div>

          <div className="mt-11">
            <ul className="space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3.5">
                  <span
                    className={cn(
                      'size-5 rounded-full',
                      feature.available
                        ? plan.isFeatured
                          ? 'bg-secondary'
                          : 'bg-secondary dark:bg-accent'
                        : plan.isFeatured
                          ? 'bg-secondary/20 dark:bg-secondary/60'
                          : 'bg-secondary/20 dark:bg-accent/20',
                    )}>
                    <CheckIcon
                      className={cn(
                        feature.available
                          ? plan.isFeatured && 'dark:fill-accent'
                          : plan.isFeatured
                            ? 'dark:fill-accent'
                            : feature.highlighted
                              ? 'dark:fill-accent/60'
                              : 'dark:fill-accent/80 fill-white',
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      'text-tagline-1 font-normal',
                      plan.isFeatured ? 'text-secondary/60' : 'text-secondary dark:text-accent',
                    )}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <Link
              href="/contact-us"
              className={cn(
                'btn-md w-full first-letter:uppercase before:content-none',
                plan.name === 'Professional'
                  ? 'btn btn-primary hover:btn-secondary dark:hover:btn-accent'
                  : 'btn btn-white dark:btn-transparent hover:btn-primary',
              )}>
              Get started
            </Link>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

PricingCard.displayName = 'PricingCard';
export default PricingCard;

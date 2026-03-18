'use client';
import pricingPlan from '@/data/json/pricing/pricing-plan.json';
import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  label: string;
  enabled: boolean;
}

interface PricingPlan {
  id: number;
  title: string;
  description: string;
  priceMonth: number;
  priceYear: number;
  variant: 'basic' | 'premium' | 'enterprise';
  highlight?: string;
  features: Feature[];
}

interface PricingCardProps {
  isAnnual: boolean;
}

const PricingCard = ({ isAnnual }: PricingCardProps) => {
  const typedPricingPlan = pricingPlan as PricingPlan[];

  return (
    <div className="grid grid-cols-12 items-center justify-center gap-y-8 lg:gap-x-8">
      {typedPricingPlan.map((plan, idx) => (
        <RevealAnimation key={plan.id} delay={0.5 + idx * 0.1}>
          <div
            className={cn(
              'col-span-12 mx-auto w-full max-w-[604px] rounded-[20px] lg:col-span-4',
              plan.variant === 'premium'
                ? 'bg-primary-100 dark:bg-background-9 p-2'
                : 'bg-background-3 dark:bg-background-7 p-8',
            )}>
            <div className={cn(plan.variant === 'premium' && 'bg-primary-500 rounded-[12px] p-8')}>
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="-mt-3 mb-2.5 flex justify-end">
                  <span className="bg-ns-green text-background-8 -mr-4 rounded-full px-3 py-1.5 font-normal capitalize">
                    {plan.highlight}
                  </span>
                </div>
              )}

              {/* Title + Description */}
              <h3
                id={`${plan.title.toLowerCase()}-plan`}
                className={cn('text-heading-5 mb-2 font-normal', plan.variant === 'premium' && 'text-white')}>
                {plan.title}
              </h3>
              <p
                className={cn(
                  'mb-6 max-w-[250px]',
                  plan.variant === 'premium' ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                )}>
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="mb-7" aria-label={`${isAnnual ? 'Yearly' : 'Monthly'} pricing`}>
                <h4 className={cn('text-heading-4 font-normal', plan.variant === 'premium' && 'text-white')}>
                  ${isAnnual ? plan.priceYear : plan.priceMonth}
                </h4>
                <p className={cn(plan.variant === 'premium' ? 'text-white' : 'text-secondary dark:text-accent')}>
                  Per {isAnnual ? 'Year' : 'Month'}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact-us"
                className={cn(
                  'btn btn-md mb-8 block w-full text-center first-letter:uppercase before:content-none',
                  plan.variant === 'basic' && 'btn-white hover:btn-primary dark:btn-white-dark',
                  plan.variant === 'premium' && 'btn-accent hover:btn-secondary dark:hover:btn-secondary',
                  plan.variant === 'enterprise' && 'btn-white hover:btn-primary dark:btn-white-dark',
                )}
                rel="noopener">
                Get started
              </Link>

              {/* Features */}
              <ul className="relative list-none space-y-2.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex shrink-0 items-center gap-2.5">
                    {/* Feature Icon */}
                    <span
                      className={cn(
                        'size-5 rounded-full',
                        feature.enabled
                          ? plan.variant === 'premium'
                            ? 'dark:bg-accent bg-white'
                            : 'bg-secondary dark:bg-accent'
                          : plan.variant === 'premium'
                            ? 'bg-accent/20'
                            : 'dark:bg-accent/10 bg-white',
                      )}>
                      <CheckIcon
                        className={cn(
                          cn(
                            feature.enabled
                              ? plan.variant === 'premium'
                                ? 'fill-secondary/60'
                                : 'dark:fill-accent fill-white'
                              : plan.variant === 'premium'
                                ? 'fill-accent/60'
                                : 'fill-secondary/60 dark:fill-accent/60',
                          ),
                        )}
                      />
                    </span>

                    <span
                      className={cn(
                        'text-tagline-1 font-normal',
                        feature.enabled
                          ? plan.variant === 'premium'
                            ? 'text-accent'
                            : 'text-secondary dark:text-accent'
                          : plan.variant === 'premium'
                            ? 'text-accent/60'
                            : 'text-secondary/60 dark:text-accent/60',
                      )}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default PricingCard;

import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { PricingFeature } from './FeatureList';

export interface PricingPlan {
  id: string;
  badge: string;
  title: string;

  description: string;
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
  features: PricingFeature[];
}

interface PricingCardProps {
  plan: PricingPlan;
  delay: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, delay }) => (
  <div className="col-span-12 md:col-span-6 xl:col-span-3">
    <RevealAnimation delay={delay}>
      <div>
        <div
          className={cn(
            'space-y-8 rounded-t-[20px] px-6 py-8',
            plan.isPopular
              ? 'bg-secondary dark:bg-background-5 relative overflow-hidden'
              : 'bg-background-3 dark:bg-background-7',
          )}>
          {plan.isPopular && (
            <div className="pointer-events-none absolute -top-28 -right-20 h-full w-full select-none">
              <Image src={gradient4} alt="pricing bg" />
            </div>
          )}
          <div>
            <p
              className={cn(
                'text-tagline-1 mb-3 font-medium',
                plan.isPopular ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
              )}>
              {plan.badge}
            </p>
            <h3
              className={cn(
                'text-heading-5 font-normal',
                plan.isPopular ? 'text-accent' : 'text-secondary dark:text-accent',
              )}>
              {plan.title}
            </h3>
            <p
              className={cn(
                'text-secondary/60 dark:text-accent/60',
                plan.isPopular ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
              )}>
              {plan.description}
            </p>
          </div>
          <Link
            href={plan.buttonHref}
            className={cn(
              'btn btn-md w-full first-letter:uppercase before:content-none',
              plan.isPopular
                ? 'btn-primary hover:btn-white dark:hover:btn-accent'
                : 'btn-white hover:btn-primary dark:btn-white-dark',
            )}>
            {plan.buttonText}
          </Link>
        </div>
        <div className="bg-background-1 dark:bg-background-5 rounded-b-[20px]">
          <ul>
            {plan.features.map((feature) => (
              <li
                key={feature.id}
                className={cn(
                  'border-b-stroke-4 dark:border-b-stroke-5 h-14 border-b px-6 py-4 text-center last:border-b-0',
                  feature.included && !feature.value && 'flex items-center justify-center',
                )}>
                {feature.value ? (
                  <p className="text-secondary/60 dark:text-accent/60 font-medium">{feature.value}</p>
                ) : (
                  feature.included && (
                    <span className="bg-secondary dark:bg-accent size-5 shrink-0 rounded-full">
                      <CheckIcon />
                    </span>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RevealAnimation>
  </div>
);

PricingCard.displayName = 'PricingCard';
export default PricingCard;

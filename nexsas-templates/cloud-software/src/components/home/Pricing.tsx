import pricingPlan from '@/data/json/pricing/pricing-plan.json';
import { CheckIcon } from '@/icons';
import gradient47Image from '@public/images/ns-img-535.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

// Types
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  ctaHref: string;
  ctaText: string;
  isSecondary?: boolean;
  withGradientImg?: boolean;
}

interface FeatureRow {
  id: string;
  label: string;
  features: {
    essential: boolean | string;
    advanced: boolean | string;
    enterprise: boolean | string;
  };
}

// Data - Easy to maintain and update
const featureRows: FeatureRow[] = [
  {
    id: 'pages',
    label: 'Pages included',
    features: {
      essential: 'Up to 5',
      advanced: 'Up to 10',
      enterprise: 'Unlimited',
    },
  },
  {
    id: 'design',
    label: 'Custom design',
    features: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'seo',
    label: 'SEO optimization',
    features: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'branding',
    label: 'Branding support',
    features: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'social',
    label: 'Social media integration',
    features: { essential: false, advanced: false, enterprise: true },
  },
];

// Utility functions
const getFeatureDisplay = (feature: boolean | string, planName: string) => {
  if (typeof feature === 'string') {
    return <p className="text-secondary dark:text-accent text-center font-medium">{feature}</p>;
  }

  if (feature === true) {
    return (
      <span className="bg-secondary dark:bg-accent size-5 rounded-full">
        <CheckIcon />
      </span>
    );
  }

  return <span className="sr-only">Not included in {planName} plan</span>;
};

// Main component
const Pricing = () => {
  const plans = pricingPlan as PricingPlan[];

  return (
    <section aria-label="Pricing Plans">
      <div className="mx-auto max-w-[1460px] px-4 md:px-0">
        <div className="bg-background-2 dark:bg-background-7 dark:border-background-6 rounded-[20px] border-[10px] border-white py-[70px] lg:px-[64px]">
          <div className="main-container">
            <div className="space-y-11 md:space-y-[70px]">
              {/* Header */}
              <div className="w-full space-y-3 text-center md:max-w-[610px] lg:text-left">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-white">Our pricing</span>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <h2 className="lg:text-heading-2 text-heading-4">
                    Select the pricing plan that best suits your needs.
                  </h2>
                </RevealAnimation>
              </div>

              <div className="space-y-3">
                {/* Pricing Cards */}
                <div className="flex flex-col items-center justify-center gap-3 md:flex-row xl:justify-end">
                  {plans.map((plan, index) => (
                    <RevealAnimation key={plan.name} delay={0.3 + index * 0.1}>
                      <div className="dark:bg-background-5 w-full rounded-[20px] bg-white p-2.5 md:max-w-full xl:max-w-[282px]">
                        <div
                          className={`${plan.isSecondary ? 'bg-secondary relative overflow-hidden' : 'bg-background-2'} dark:bg-background-7 rounded-xl px-6 py-8`}>
                          {plan.withGradientImg && (
                            <RevealAnimation delay={0.5} direction="right" offset={100} duration={0.9}>
                              <figure className="pointer-events-none select-none">
                                <Image
                                  className="pointer-events-none absolute top-[-80px] right-[-93px] z-[2] select-none"
                                  src={gradient47Image}
                                  alt="Advanced plan background decoration"
                                  width={200}
                                  height={200}
                                />
                              </figure>
                            </RevealAnimation>
                          )}

                          <p className={`mb-2 ${plan.isSecondary ? 'text-accent/60' : ''}`}>{plan.name}</p>

                          <div className="mb-8">
                            <h3 className={`text-heading-5 ${plan.isSecondary ? 'text-accent' : ''}`}>{plan.price}</h3>
                            <p className={plan.isSecondary ? 'text-accent' : ''}>{plan.description}</p>
                          </div>

                          <div>
                            <Link
                              href={plan.ctaHref}
                              className={
                                index !== 0 && index !== plans.length - 1
                                  ? 'btn btn-primary btn-lg hover:btn-white dark:hover:btn-accent w-full border-0 first-letter:uppercase before:content-none'
                                  : 'btn btn-base dark:btn-secondary-v2 btn-white hover:btn-primary w-full first-letter:uppercase before:content-none'
                              }
                              aria-label={`Get started with ${plan.name} plan for ${plan.price}`}>
                              {plan.ctaText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                {/* Feature Table */}
                <div className="w-full">
                  <RevealAnimation delay={0.6}>
                    <h4 className="text-heading-6 py-6">What&apos;s included</h4>
                  </RevealAnimation>

                  <div className="flex w-full flex-col" role="table">
                    {featureRows.map((row, rowIdx) => {
                      const delay = 0.7 + rowIdx * 0.1;
                      const rowBorder = rowIdx === 0 ? 'border-y' : 'border-b';

                      return (
                        <RevealAnimation key={row.id} delay={delay}>
                          <div
                            className={`flex items-center py-4 ${rowBorder} border-stroke-1 dark:border-stroke-6`}
                            role="row">
                            <p className="text-secondary dark:text-accent max-w-[420px] md:w-full">{row.label}</p>

                            <div className="flex flex-1 items-center justify-center" role="cell">
                              {getFeatureDisplay(row.features.essential, 'Essential')}
                            </div>

                            <div className="flex flex-1 items-center justify-center" role="cell">
                              {getFeatureDisplay(row.features.advanced, 'Advanced')}
                            </div>

                            <div className="flex flex-1 items-center justify-center" role="cell">
                              {getFeatureDisplay(row.features.enterprise, 'Enterprise')}
                            </div>
                          </div>
                        </RevealAnimation>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

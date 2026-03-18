import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  isPopular: boolean;
  features: {
    pages: string;
    customDesign: boolean;
    seoOptimization: boolean;
    brandingSupport: boolean;
    socialMediaIntegration: boolean;
  };
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: 'Free',
    description: 'Free plan for all users',
    isPopular: false,
    features: {
      pages: 'Up to 5',
      customDesign: true,
      seoOptimization: true,
      brandingSupport: false,
      socialMediaIntegration: false,
    },
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: '$99',
    description: 'Plans for advanced users',
    isPopular: true,
    features: {
      pages: 'Up to 10',
      customDesign: true,
      seoOptimization: true,
      brandingSupport: true,
      socialMediaIntegration: false,
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Enterprise',
    description: 'Contact us for enterprise users',
    isPopular: false,
    features: {
      pages: 'Unlimited',
      customDesign: true,
      seoOptimization: true,
      brandingSupport: true,
      socialMediaIntegration: true,
    },
  },
];

const featureLabels = [
  'Pages included',
  'Custom design',
  'SEO optimization',
  'Branding support',
  'Social media integration',
];

const Pricing = () => {
  return (
    <section className="relative pt-16 pb-16 md:pt-[100px] md:pb-[100px] xl:pt-[150px] xl:pb-[200px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-0">
        <div className="mb-[70px] space-y-14 text-center lg:mb-[150px]">
          <div className="mx-auto max-w-[450px] space-y-3 px-5 text-center sm:max-w-[600px] sm:px-0">
            <RevealAnimation delay={0.1}>
              <h2>Explore how we help you stay ahead of risk</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Our intelligent risk management software is designed to connect departments, eliminate silos, and
                deliver a real-time view of your organization’s risk landscape.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div>
              <LinkButton
                href="/pricing"
                className="btn hover:btn-primary dark:btn-transparent btn-secondary btn-md mx-auto w-[90%] md:w-auto">
                See the platform in action
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <div className="bg-background-2 dark:bg-background-5 space-y-[70px] rounded-4xl px-5 pt-16 pb-16 sm:px-16 md:pt-[100px] md:pb-[100px] xl:pt-[200px] xl:pb-[150px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2">Our pricing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h3 className="lg:text-heading-2 md:text-heading-3 text-heading-5 dark:text-accent text-black">
                Clear pricing, true roi
              </h3>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 xl:gap-x-8">
            {/* Features column */}
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.3}>
                <div>
                  <div className="md:w-[290px] xl:h-[195px]" />
                  <div className="space-y-2.5">
                    <h3 className="text-heading-6">What&apos;s included</h3>
                    <ul>
                      {featureLabels.map((label, index) => (
                        <li
                          key={label}
                          className={cn(
                            'text-secondary/60 dark:text-accent/60 text-tagline-1 py-4 pr-6 font-normal',
                            index < featureLabels.length - 1 && 'border-b-stroke-4 dark:border-b-stroke-8 border-b',
                          )}>
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Pricing plans */}
            {pricingPlans.map((plan, index) => {
              const featureValues = [
                plan.features.pages,
                plan.features.customDesign,
                plan.features.seoOptimization,
                plan.features.brandingSupport,
                plan.features.socialMediaIntegration,
              ];

              return (
                <div key={plan.id} className="col-span-12 md:col-span-6 xl:col-span-3">
                  <RevealAnimation delay={0.4 + index * 0.1}>
                    <div>
                      {/* Header */}
                      <div
                        className={cn(
                          'space-y-8 rounded-t-[20px] px-6 py-8',
                          plan.isPopular
                            ? 'bg-secondary dark:bg-background-7 relative z-10 overflow-hidden'
                            : 'bg-background-3 dark:bg-background-7',
                        )}>
                        {plan.isPopular && (
                          <div className="pointer-events-none absolute -top-28 -right-20 -z-1 h-full w-full">
                            <Image src={gradient4} alt="pricing bg" />
                          </div>
                        )}
                        <div>
                          <p
                            className={cn(
                              'text-tagline-1 mb-3 font-medium',
                              plan.isPopular ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                            )}>
                            {plan.name}
                          </p>
                          <h3 className={cn('text-heading-5 font-normal', plan.isPopular ? 'text-accent' : '')}>
                            {plan.price}
                          </h3>
                          <p className={cn(plan.isPopular ? 'text-accent/60' : '')}>{plan.description}</p>
                        </div>
                        <Link
                          href="/contact-us"
                          className={cn(
                            'btn btn-md w-full first-letter:uppercase before:content-none',
                            plan.isPopular
                              ? 'btn-primary hover:btn-white dark:hover:btn-accent border-0'
                              : plan.id === 'essential'
                                ? 'dark:btn-white-dark hover:btn-primary btn-white'
                                : 'btn-white hover:btn-primary dark:btn-white-dark',
                          )}>
                          Get started
                        </Link>
                      </div>

                      {/* Features list */}
                      <div className="dark:bg-background-6 rounded-b-[20px] bg-white">
                        <ul>
                          {featureValues.map((value, featureIndex) => (
                            <li
                              key={featureIndex}
                              className={cn(
                                'h-14 px-6 py-4 text-center',
                                featureIndex < featureValues.length - 1 &&
                                  'border-b-stroke-4 dark:border-b-stroke-8 border-b',
                                typeof value === 'boolean' && value && 'flex items-center justify-center',
                              )}>
                              {typeof value === 'string' ? (
                                <p className="text-secondary/60 dark:text-accent/60 font-medium">{value}</p>
                              ) : value ? (
                                <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                                  <CheckIcon />
                                </span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

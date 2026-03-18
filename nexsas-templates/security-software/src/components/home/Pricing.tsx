import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  label: string;
  value: string | boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  buttonText: string;
  planType: 'basic' | 'featured' | 'premium';
  features: Feature[];
}

const Pricing = () => {
  const featureLabels = [
    'Pages included',
    'Custom design',
    'SEO optimization',
    'Branding support',
    'Social media integration',
  ];

  const pricingPlans: PricingPlan[] = [
    {
      id: 'essential',
      name: 'Essential',
      price: 'Free',
      description: 'Free plan for all users',
      buttonText: 'Get started',
      planType: 'basic',
      features: [
        { label: 'Pages included', value: 'Up to 5' },
        { label: 'Custom design', value: true },
        { label: 'SEO optimization', value: true },
        { label: 'Branding support', value: false },
        { label: 'Social media integration', value: false },
      ],
    },
    {
      id: 'advanced',
      name: 'Advanced',
      price: '$99',
      description: 'Plans for advanced users',
      buttonText: 'Get started',
      planType: 'featured',
      features: [
        { label: 'Pages included', value: 'Up to 10' },
        { label: 'Custom design', value: true },
        { label: 'SEO optimization', value: true },
        { label: 'Branding support', value: true },
        { label: 'Social media integration', value: false },
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Enterprise',
      description: 'Contact us for enterprise users',
      buttonText: 'Get started',
      planType: 'premium',
      features: [
        { label: 'Pages included', value: 'Unlimited' },
        { label: 'Custom design', value: true },
        { label: 'SEO optimization', value: true },
        { label: 'Branding support', value: true },
        { label: 'Social media integration', value: true },
      ],
    },
  ];

  return (
    <section className="bg-background-3 dark:bg-background-7 relative py-[75px] md:py-[100px] lg:py-[150px]">
      <div className="mx-5 max-w-full min-[425px]:max-w-[350px] min-[475px]:max-w-[450px] sm:mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="bg-background-2 dark:bg-background-5 space-y-[70px] rounded-4xl px-8 py-10 sm:px-12 sm:py-20 2xl:px-16 2xl:py-[100px]">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto max-w-[350px] sm:max-w-[500px] lg:max-w-[678px]">
                Select the pricing plan that best suits your needs.
              </h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-y-6 md:gap-6 xl:gap-8">
            {/* Features Column */}
            <RevealAnimation delay={0.3}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div className="md:h-[195px] md:w-[290px]" />
                <div className="space-y-2.5">
                  <h3 className="text-heading-6">What&apos;s included</h3>
                  <ul>
                    {featureLabels.map((feature, index) => (
                      <li
                        key={feature}
                        className={cn(
                          'text-secondary/60 dark:text-accent/60 text-tagline-1 py-4 pr-6 font-normal',
                          index < featureLabels.length - 1 && 'border-b-stroke-4 dark:border-b-stroke-8 border-b',
                        )}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealAnimation>

            {/* Pricing Plans */}
            {pricingPlans.map((plan, index) => (
              <RevealAnimation key={plan.id} delay={0.4 + index * 0.1}>
                <div className="col-span-12 md:col-span-6 xl:col-span-3">
                  {/* Plan Header */}
                  <div
                    className={cn(
                      'space-y-8 rounded-t-[20px] px-6 py-8',
                      plan.planType === 'featured'
                        ? 'bg-secondary dark:bg-background-7 relative z-10 overflow-hidden'
                        : 'bg-background-3 dark:bg-background-7',
                    )}>
                    {/* Featured plan gradient background */}
                    {plan.planType === 'featured' && (
                      <div className="pointer-events-none absolute -top-28 -right-20 -z-1 h-full w-full">
                        <Image src={gradient4} alt="pricing bg" />
                      </div>
                    )}

                    <div>
                      <p
                        className={cn(
                          'text-tagline-1 mb-3 font-medium',
                          plan.planType === 'featured' ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                        )}>
                        {plan.name}
                      </p>
                      <h3 className={cn('text-heading-5 font-normal', plan.planType === 'featured' && 'text-accent')}>
                        {plan.price}
                      </h3>
                      <p className={cn(plan.planType === 'featured' && 'text-accent/60')}>{plan.description}</p>
                    </div>

                    <Link
                      href="/contact-us"
                      className={cn(
                        'btn btn-md w-full first-letter:uppercase before:content-none',
                        plan.planType === 'featured'
                          ? 'btn-primary hover:btn-white border-0'
                          : 'btn-white dark:btn-white-dark hover:btn-primary',
                      )}>
                      {plan.buttonText}
                    </Link>
                  </div>

                  {/* Features List */}
                  <div className="dark:bg-background-6 rounded-b-[20px] bg-white">
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={feature.label}
                          className={cn(
                            'flex h-14 items-center justify-center px-6 py-4 text-center',
                            featureIndex < plan.features.length - 1 &&
                              'border-b-stroke-4 dark:border-b-stroke-8 border-b',
                          )}>
                          {typeof feature.value === 'string' ? (
                            <p className="text-secondary/60 dark:text-accent/60 font-medium">{feature.value}</p>
                          ) : feature.value ? (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

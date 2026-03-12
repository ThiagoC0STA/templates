'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { CheckIcon } from '@/src/components/shared/icon';
import { PricingCard } from '@/src/components/shared/ui/card';
import { pricingData } from '@/src/data/pricing';
import { cn } from '@/src/utils/cn';
import { useState } from 'react';
import PricingToggle from './pricing-toggle';

const CheckCell = ({
  className,
  iconClassName = 'h-2 w-[12px] stroke-black',
}: {
  className?: string;
  iconClassName?: string;
}) => (
  <li className={cn('flex items-center justify-center px-6 py-4 text-white/90', className)}>
    <span
      className="flex size-2 items-center justify-center px-1.5 py-[2.5px]"
      aria-label="Included"
    >
      <CheckIcon className={iconClassName} />
    </span>
  </li>
);

const CheckCellDesktop = ({
  className,
  iconClassName = 'h-3 w-[17px] shrink-0 stroke-black',
}: {
  className?: string;
  iconClassName?: string;
}) => (
  <li className={cn('flex items-center justify-center px-6 py-4 text-white/90', className)}>
    <span
      className="flex size-6 items-center justify-center px-1.5 py-[3.5px]"
      aria-label="Included"
    >
      <CheckIcon className={iconClassName} />
    </span>
  </li>
);

const Pricing = ({ className }: { className?: string }) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      className={cn(
        'price-scope overflow-x-hidden py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44',
        className
      )}
      aria-labelledby="pricing-heading"
    >
      <div className="main-container">
        <div className="space-y-8 md:space-y-20">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <h2
                id="pricing-heading"
                className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]"
              >
                Simple pricing for{' '}
                <span className="font-instrument-serif text-background-13/30 italic">
                  Any <br className="hidden md:block" />
                  stage of growth
                </span>
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.1}>
            <div className="bg-background-8 rounded-[20px] px-6 pt-12 pb-6 md:px-12 md:pt-16 md:pb-12 lg:space-y-18 lg:px-14 lg:pt-28 lg:pb-[70px] xl:px-[70px]">
              <RevealAnimation delay={0.2}>
                <div className="mr-0 ml-auto flex max-w-[780px] flex-col items-center justify-end gap-y-8 max-lg:mb-6 lg:gap-y-[72px]">
                  {/* Toggle */}
                  <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
                </div>
              </RevealAnimation>
              {/* Pricing cards + mobile tables */}
              <div
                className="flex flex-col items-center justify-end gap-y-6 max-lg:w-full md:gap-y-6 lg:flex-row"
                aria-label="Pricing plans"
              >
                {pricingData.map((plan, index) => (
                  <RevealAnimation key={plan.id} delay={0.1 + index * 0.1}>
                    <PricingCard plan={plan} isYearly={isYearly} />
                  </RevealAnimation>
                ))}

                {pricingData[0].featureCategories.map((category, rowIndex) => (
                  <RevealAnimation key={category.features[0]} delay={0.1 + rowIndex * 0.1}>
                    <table
                      className={
                        rowIndex < pricingData[0].featureCategories.length - 1
                          ? 'mb-8 block w-full px-4.5 max-sm:overflow-x-scroll lg:hidden'
                          : 'block w-full px-4.5 max-sm:overflow-x-scroll lg:hidden'
                      }
                      aria-hidden
                    >
                      <thead className="sr-only">
                        <tr>
                          <th>
                            <ul>
                              <li>{category.features[0]}</li>
                            </ul>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="md:block md:w-[617px] lg:w-auto">
                        <tr className="border-stroke-1/11 flex items-start justify-center border-b">
                          <td className="w-full">
                            <ul className="min-w-[200px]">
                              {category.features.map((f) => (
                                <li
                                  key={f}
                                  className="font-inter-tight text-tagline-3 sm:text-tagline-2 py-[9px] text-left font-normal text-black"
                                >
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </td>
                          {pricingData.map((plan) => (
                            <td
                              key={plan.id}
                              aria-label={`${plan.name} plan features`}
                              className="w-full"
                            >
                              <ul>
                                <li
                                  className="font-inter-tight text-tagline-3 sm:text-tagline-2 flex items-center justify-center py-2 font-normal text-black"
                                  aria-label={`${plan.name} plan limit: ${plan.featureCategories[rowIndex].limit}`}
                                >
                                  {plan.featureCategories[rowIndex].limit}
                                </li>
                                {Array.from({
                                  length: plan.featureCategories[rowIndex].checks,
                                }).map((__, i) => (
                                  <CheckCell key={`check-${plan.id}-${i}`} />
                                ))}
                              </ul>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </RevealAnimation>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden space-y-5 lg:block" aria-labelledby="features-heading">
                <h3 id="features-heading" className="sr-only">
                  Feature comparison table
                </h3>
                <table className="w-full">
                  <thead className="sr-only">
                    <tr>
                      <th>
                        <ul>
                          <li>Smart Discount Suggestions</li>
                        </ul>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData[0].featureCategories.map((category, rowIndex) => (
                      <RevealAnimation key={category.features[0]} delay={0.1 + rowIndex * 0.1}>
                        <tr className="border-stroke-1/11 flex items-start justify-center border-b py-5">
                          <td
                            className={cn(
                              'h-[280px] w-[370px]',
                              rowIndex > 0 && 'w-full max-w-[370px]'
                            )}
                          >
                            <ul className={cn('w-[260px]', rowIndex > 0 && 'w-full')}>
                              {category.features.map((f) => (
                                <li
                                  key={f}
                                  className="font-inter-tight text-tagline-2 py-4 text-left font-normal text-black xl:pr-6"
                                >
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </td>
                          {pricingData.map((plan) => (
                            <td
                              key={plan.id}
                              className={cn(
                                'h-[280px] w-full max-w-[260px]',
                                plan.id !== 'enterprise' && 'border-stroke-1/11 border-r'
                              )}
                              aria-label={`${plan.name} plan features`}
                            >
                              <ul>
                                <li
                                  className="font-inter-tight text-tagline-3 sm:text-tagline-2 flex items-center justify-center py-2 font-normal text-black"
                                  aria-label={`${plan.name} plan limit: ${plan.featureCategories[rowIndex].limit}`}
                                >
                                  {plan.featureCategories[rowIndex].limit}
                                </li>
                                {Array.from({
                                  length: plan.featureCategories[rowIndex].checks,
                                }).map((_, i) => (
                                  <CheckCellDesktop key={`check-${plan.id}-${i}`} />
                                ))}
                              </ul>
                            </td>
                          ))}
                        </tr>
                      </RevealAnimation>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

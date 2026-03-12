'use client';

import { cn } from '@/src/utils/cn';
import { useEffect, useLayoutEffect, useRef } from 'react';

type PricingToggleProps = {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
};

const PricingToggle = ({ isYearly, setIsYearly }: PricingToggleProps) => {
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const activeTabRef = useRef<HTMLDivElement>(null);
  const monthlyTabRef = useRef<HTMLLabelElement>(null);
  const yearlyTabRef = useRef<HTMLLabelElement>(null);

  const updateActivePill = () => {
    const fieldset = fieldsetRef.current;
    const active = activeTabRef.current;
    const target = isYearly ? yearlyTabRef.current : monthlyTabRef.current;

    if (!fieldset || !active || !target) return;

    // position relative to fieldset
    const left = target.offsetLeft;
    const width = target.offsetWidth;

    active.style.width = `${width}px`;
    active.style.transform = `translateX(${left}px)`;
  };

  useLayoutEffect(() => {
    updateActivePill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateActivePill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isYearly]);

  return (
    <div className="mx-auto h-[42px] w-full max-w-[251px]">
      <fieldset
        ref={fieldsetRef}
        className="relative inline-flex gap-x-0 rounded-full bg-white p-1 backdrop-blur-[20px]"
      >
        <legend className="sr-only">Choose billing period</legend>

        <input
          type="radio"
          name="pricing-toggle"
          id="monthly"
          value="monthly"
          className="peer/monthly sr-only"
          aria-describedby="monthly-description"
          checked={!isYearly}
          onChange={() => setIsYearly(false)}
        />

        <input
          type="radio"
          name="pricing-toggle"
          id="yearly"
          value="yearly"
          className="peer/yearly sr-only"
          aria-describedby="yearly-description"
          checked={isYearly}
          onChange={() => setIsYearly(true)}
        />

        <label
          ref={monthlyTabRef}
          htmlFor="monthly"
          className={cn(
            'font-inter-tight text-tagline-2 relative z-20 flex h-9 cursor-pointer items-center justify-center rounded-full px-5 py-[5px] font-normal',
            isYearly ? 'text-background-13' : 'text-background-7'
          )}
          id="monthly-description"
        >
          <span className="relative z-20">Monthly</span>
        </label>

        <label
          ref={yearlyTabRef}
          htmlFor="yearly"
          className={cn(
            'font-inter-tight text-tagline-2 relative z-20 flex h-9 cursor-pointer items-center justify-between gap-x-2 rounded-full px-5 py-[5px] font-normal transition-colors duration-300 ease-in-out',
            isYearly ? 'text-background-7' : 'text-background-13'
          )}
          id="yearly-description"
        >
          <span className="relative z-20">Yearly</span>
          <span
            className="bg-background-7 text-tagline-4 font-inter-tight text-background-5 relative z-20 shrink-0 rounded-full px-[9px] py-[5px] font-normal"
            aria-label="Save 25% with yearly billing"
          >
            Save 25%
          </span>
        </label>

        {/* Active pill */}
        <div
          ref={activeTabRef}
          className="bg-background-13 absolute top-1 left-0 z-10 h-9 rounded-full transition-[transform,width] duration-300 ease-in-out"
        />
      </fieldset>
    </div>
  );
};

export default PricingToggle;

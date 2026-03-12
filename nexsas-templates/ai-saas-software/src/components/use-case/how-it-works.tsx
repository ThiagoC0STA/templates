import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import type { FC } from 'react';
import BrowseResults from './how-it-works-browse-results';
import CreateContext from './how-it-works-create-context';
import SelectTemplate from './how-it-works-select-template';

const HowItWorks: FC = () => {
  return (
    <section className="py-16 md:py-28 lg:py-36 xl:py-44 2xl:py-50">
      <div className="main-container space-y-8 md:space-y-14">
        {/* Content Section */}
        <div className="space-y- pb-4 text-center">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="How it's work" className="border-transparent! bg-white" />
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
              So, how does{' '}
              <span className="font-instrument-serif text-background-13/30 italic">
                Nexsas work?{' '}
              </span>
            </h2>
          </RevealAnimation>
        </div>

        {/* How it's work cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RevealAnimation delay={0.1}>
            <SelectTemplate />
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <CreateContext />
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <BrowseResults />
          </RevealAnimation>
        </div>

        {/* Button */}
        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <LinkPrimary href="/process">Get started now</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default HowItWorks;

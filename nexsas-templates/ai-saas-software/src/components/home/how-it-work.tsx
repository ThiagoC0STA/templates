import RevealAnimation from '@/src/components/animation/reveal-animation';
import CreateContext from '@/src/components/home/create-context';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import SelectTemplate from '@/src/components/use-case/how-it-works-select-template';
import BrowseTemplate from './browse-template';

export const HowItWork = () => {
  return (
    <section className="bg-[url('/images/opai-img-137.jpg')] bg-cover bg-center bg-no-repeat object-contain object-bottom py-16 md:py-28 lg:py-36 xl:py-44 2xl:py-50">
      <div className="main-container space-y-8 md:space-y-14">
        {/* Content Section */}
        <div className="space-y-4 pb-4 text-center">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="How it's work" className="border-transparent! bg-white/50" />
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
          {/* Card 01 */}
          <RevealAnimation delay={0.1}>
            <SelectTemplate />
          </RevealAnimation>

          {/* Card 02 */}
          <RevealAnimation delay={0.2}>
            <CreateContext />
          </RevealAnimation>

          {/* Card 03 */}
          <RevealAnimation delay={0.3}>
            <BrowseTemplate />
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

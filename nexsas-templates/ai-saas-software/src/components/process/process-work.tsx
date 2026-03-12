import RevealAnimation from '@/src/components/animation/reveal-animation';
import BrowseResults from '@/src/components/process/browse-results';
import CreateContext from '@/src/components/process/create-context';
import SelectTemplate from '@/src/components/process/select-template';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';

const ProcessWork = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-[url('/images/opai-img-137.jpg')] bg-cover bg-center bg-no-repeat object-contain object-bottom pt-28 pb-16 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 xl:pt-48 xl:pb-44 2xl:pt-52 2xl:pb-50">
        <div className="main-container space-y-8 md:space-y-14">
          <div className="space-y-4 pb-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="How it's work" className="border-transparent! bg-white/50" />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
                So, how does{' '}
                <span className="font-instrument-serif text-background-13/30 italic">
                  Nexsas work?
                </span>
              </h2>
            </RevealAnimation>
          </div>

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

          <RevealAnimation delay={0.1}>
            <div className="flex justify-center">
              <LinkPrimary href="/contact">Get started now</LinkPrimary>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default ProcessWork;

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { UseCaseCard } from '@/src/components/shared/ui/card';
import type { UseCasePost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import parseUseCaseDate from '@/src/utils/parseUseCaseDate';
import type { FC } from 'react';

const Showcase: FC = () => {
  const allUseCases = getMarkDownData<UseCasePost>('src/data/use-cases');
  const useCases = allUseCases.toSorted(
    (a, b) => parseUseCaseDate(b.completionDate) - parseUseCaseDate(a.completionDate)
  );

  return (
    <section className="pt-28 pb-13 md:pt-36 md:pb-20 lg:pt-44 lg:pb-36 xl:pt-48 2xl:pt-52 2xl:pb-44">
      <div className="main-container space-y-12 md:space-y-18">
        <div className="space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="Use Cases" />
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
              Everything you need{' '}
              <span className="font-instrument-serif text-background-13/30 italic">
                to create <br className="hidden md:block" />
                smarter, faster
              </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Our services are designed for the globally minded—people with
              <br className="hidden md:block" />
              international lives, assets, and ambitions.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          {useCases?.map((item, index) => (
            <RevealAnimation key={item?.slug} delay={index % 2 === 0 ? 0.1 : 0.2}>
              <div className="col-span-12 md:col-span-6">
                <UseCaseCard
                  title={item?.title ?? ''}
                  description={item?.description ?? ''}
                  imageSrc={item?.image ?? ''}
                  imageAlt={item?.title}
                  href={`/use-case/${item?.slug}`}
                />
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;

import RevealAnimation from '@/src/components/animation/reveal-animation';
import type { FC } from 'react';

const WHY_USE_ITEMS = [
  'Save hours building visual workflows manually',
  'Create professional diagrams in minutes',
  'Access a wide range of templates',
  'Easy to use and navigate',
  'Perfect for quick ideas and presentations',
];

const WhyUseSection: FC = () => {
  return (
    <section className="bg-[url('/images/opai-img-137.jpg')] bg-cover bg-center bg-no-repeat object-contain object-bottom py-16 md:py-28 lg:py-36 xl:py-44 2xl:py-50">
      <div className="main-container space-y-8 md:space-y-14">
        <RevealAnimation delay={0.2}>
          <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
            Why use Nexsas
            <span className="font-instrument-serif text-background-13/30 italic">
              {' '}
              for diagrams?{' '}
            </span>
          </h2>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <div className="col-span-12 h-[374px] w-full rounded-xl bg-white/3 p-2 backdrop-blur-[30px]">
            <div className="bg-background-7 h-full space-y-6 rounded-lg p-7 md:p-10.5">
              <h3 className="font-sora text-sora-heading-5 text-background-13/90 tracking-[-0.72px]">
                Tools and features
              </h3>
              <ul className="space-y-4">
                {WHY_USE_ITEMS.map((item, i) => (
                  <li
                    key={i + 1}
                    className="font-inter-tight text-tagline-2 text-background-13/90 before:bg-background-13/90 relative pl-4 font-normal before:absolute before:top-1/2 before:left-0 before:size-1.5 before:-translate-y-[38%] before:rounded-full before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default WhyUseSection;

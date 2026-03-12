import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';
import type { FC } from 'react';

const CORE_VALUES = [
  {
    title: 'Collaboration',
    description:
      'We work together across disciplines to build better products and support each other.',
  },
  {
    title: 'Integrity',
    description:
      'We are transparent, accountable, and committed to doing the right thing for our users.',
  },
  {
    title: 'Innovation',
    description: 'Increase open and click rates with AI-optimized content and continuous improvement.',
  },
  {
    title: 'Inclusion',
    description:
      'We value diverse perspectives and create a place where everyone can contribute and grow.',
  },
];

const CoreValue: FC = () => {
  return (
    <section className="pb-13 md:pb-24 lg:pb-28 xl:pb-36 2xl:pb-44">
      <div className="main-container space-y-8 md:space-y-14">
        <RevealAnimation delay={0.1}>
          <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 text-center font-medium max-md:leading-[1.1]">
            Our Core <span className="font-instrument-serif text-background-13/30 italic">Values</span>
          </h2>
        </RevealAnimation>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 pb-5 md:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((item, i) => (
            <RevealAnimation key={item.title} delay={0.1 + i * 0.1}>
              <div className="text-center">
                <h3 className="text-is-heading-5 text-background-13/90 font-medium">{item.title}</h3>
                <p className="text-tagline-2 font-inter-tight text-background-13/60 md:mx-auto md:max-w-[260px]">
                  {item.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.2}>
          <figure className="border-background-6/5 h-[360px] w-full overflow-hidden rounded-[18px] border-8 md:h-[614px]">
            <Image
              src="/images/opai-img-15.png"
              alt="Core Value"
              width={1200}
              height={614}
              className="h-full w-full rounded-xl object-cover"
            />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CoreValue;

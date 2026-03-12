import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import type { FC } from 'react';

const ServicesHero: FC = () => {
  return (
    <section className="overflow-hidden pt-32 pb-6.5 md:pt-37 md:pb-10 lg:pt-42 lg:pb-14 xl:pt-47 xl:pb-18 2xl:pt-50 2xl:pb-22">
      <div className="main-container">
        <div className="space-y-10 md:space-y-14">
          <div className="space-y-1.5 text-center md:space-y-3">
            <RevealAnimation delay={0.1}>
              <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
                Transform ideas into <br className="hidden md:block" />
                <span className="font-instrument-serif text-background-13/30 italic">
                  stunning visuals
                </span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 md:mx-auto md:max-w-[480px]">
                Nexsas was founded to turn AI into practical solutions for real business challenges,
                intuitive tools that make a lasting impact.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.1}>
            <div className="flex justify-center">
              <LinkPrimary href="/contact">Talk to our AI experts</LinkPrimary>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

'use client';

import gradient10 from '@/public/images/gradient/opai-10.png';
import gradient29 from '@/public/images/gradient/opai-29.png';
import heroCardImage from '@/public/images/opai-img-1.png';
import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import Image from 'next/image';

const AWARDS = [
  'AI Excellence Awards',
  'Innovative UI Design Awards for AI Creatives',
  'Award for Minimalist AI Design',
  'Adobe AI Design Achievement Awards',
];

const Hero = () => {
  return (
    <section className="overflow-hidden pt-32 pb-13 md:pt-37 md:pb-20 lg:pt-42 lg:pb-28 xl:pt-47 xl:pb-36 2xl:pt-50 2xl:pb-44">
      <div className="main-container">
        <div className="space-y-18">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="About Story" />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
                How Nexsas{' '}
                <span className="font-instrument-serif text-background-13/30 italic">began</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 md:mx-auto md:max-w-[480px]">
                Nexsas was founded to turn AI into practical solutions for real business challenges,
                intuitive tools that make a lasting impact.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-12 items-center justify-center max-md:gap-y-10 md:gap-x-10 lg:items-end lg:gap-x-[90px]">
            <RevealAnimation delay={0.1} direction="left">
              <div className="relative col-span-12 h-[500px] w-full overflow-hidden rounded-lg p-8 md:col-span-6 lg:col-span-4 lg:max-w-[380px]">
                <figure className="absolute inset-0 size-full" aria-hidden>
                  <Image src={heroCardImage} alt="" fill className="size-full object-cover" />
                </figure>
                <div className="absolute -top-[53%] -left-[60%] z-10 h-[400px] w-[400px] -rotate-45 lg:-top-[68%] xl:-top-[53%]">
                  <Image src={gradient10} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="h-[180px]" aria-hidden />
              </div>
            </RevealAnimation>

            <div className="col-span-12 w-full space-y-6 md:col-span-6 md:space-y-8 lg:col-span-4">
              <RevealAnimation delay={0.2} start="top 95%">
                <div className="space-y-6 md:space-y-8">
                  <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90">
                    Awards
                  </h2>
                  <ul className="space-y-3">
                    {AWARDS.map((text) => (
                      <li key={text} className="flex items-start gap-1">
                        <span className="bg-background-13/90 mt-2 size-1.5 shrink-0 rounded-full" />
                        <p className="font-inter-tight text-tagline-2 text-background-13/60">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3} direction="right">
              <aside className="bg-background-5 relative col-span-12 flex w-full flex-col justify-between overflow-hidden rounded-lg p-8 md:col-span-6 md:h-[300px] md:p-12 lg:col-span-4">
                <div className="pointer-events-none absolute -top-28 left-[165px] z-0 h-[330px] w-[300px] rotate-60">
                  <Image src={gradient29} alt="" className="size-full object-cover blur-[10px]" />
                </div>
                <div className="ns-shape-47 text-[56px] text-white" />
                <div className="relative z-10 space-y-2">
                  <p className="font-inter-tight text-tagline-2 text-white/90">
                    Customer satisfaction rate
                  </p>
                  <p className="font-instrument-serif text-is-heading-2 flex items-center text-white">
                    <NumberAnimation
                      number={95}
                      speed={2000}
                      interval={200}
                      rooms={2}
                      heightSpaceRatio={2.9}
                      showPercentage
                    />
                  </p>
                </div>
              </aside>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

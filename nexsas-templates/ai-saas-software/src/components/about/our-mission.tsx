'use client';

import missionImage from '@/public/images/opai-img-2.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import Image from 'next/image';

const OurMission = () => {
  return (
    <section className="overflow-hidden py-13 md:py-20 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container">
        <div className="space-y-12 md:space-y-18">
          <div className="grid grid-cols-12 items-center gap-y-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-25">
            <div className="col-span-12 space-y-4 md:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="Our Mission" />
              </RevealAnimation>
              <div>
                <RevealAnimation delay={0.2}>
                  <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
                    Building the{' '}
                    <span className="font-instrument-serif text-background-13/30 italic">
                      future of AI
                    </span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60">
                    A commitment to innovation and simplicity.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="col-span-12 space-y-2 md:col-span-3">
                <h3 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 text-background-13/90">
                  Vision
                </h3>
                <p className="font-inter-tight text-tagline-2 text-background-13/60">
                  To empower every business with tools that drive smarter, faster decisions.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4} direction="right">
              <div className="col-span-12 space-y-2 md:col-span-3">
                <h3 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 text-background-13/90">
                  Mission
                </h3>
                <p className="font-inter-tight text-tagline-2 text-background-13/60">
                  To develop easy-to-use AI solutions that solve real-world challenges and help
                  businesses thrive.
                </p>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <figure className="max-h-[650px] overflow-hidden rounded-xl">
              <Image src={missionImage} alt="Our Mission" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

import opaiImg3 from '@/public/images/opai-img-3.jpg';
import opaiImg4 from '@/public/images/opai-img-4.jpg';
import opaiImg5 from '@/public/images/opai-img-5.jpg';
import opaiImg6 from '@/public/images/opai-img-6.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import Image from 'next/image';
import type { FC } from 'react';

const WhyChoose: FC = () => {
  return (
    <section className="py-13 md:py-20 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-14">
        <RevealAnimation delay={0.2}>
          <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 text-center font-medium max-md:leading-[1.2]">
            Why <span className="font-instrument-serif text-background-13/30 italic">Nexsas?</span>
          </h2>
        </RevealAnimation>

        <div className="relative grid w-full grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-[url('/images/opai-img-138.jpg')] bg-cover bg-center bg-no-repeat p-4 md:grid-cols-2 md:p-8 lg:grid-cols-4">
          <RevealAnimation delay={0.1}>
            <figure className="overflow-hidden rounded-xl">
              <Image
                src={opaiImg3}
                alt="Core Features"
                width={400}
                height={300}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <figure className="overflow-hidden rounded-xl">
              <Image
                src={opaiImg4}
                alt="Core Features"
                width={400}
                height={300}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="flex flex-col justify-end rounded-xl bg-white p-5">
              <h3 className="font-manrope text-background-13/90 text-2xl font-medium">
                Scale visual content across formats, styles, and platforms
              </h3>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col justify-end rounded-xl bg-white p-5">
              <h3 className="font-manrope text-background-13/90 text-2xl font-medium">
                Customize outputs with ease—no design background required
              </h3>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <div className="flex flex-col justify-end rounded-xl bg-white p-5">
              <h3 className="font-manrope text-background-13/90 text-2xl font-medium">
                Save hours of design and rendering time
              </h3>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="flex flex-col justify-end rounded-xl bg-white p-5">
              <h3 className="font-manrope text-background-13/90 text-2xl font-medium">
                Export ready-to-use assets for web, print, or AR/VR
              </h3>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <figure className="overflow-hidden rounded-xl">
              <Image
                src={opaiImg5}
                alt="Core Features"
                width={400}
                height={300}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <figure className="overflow-hidden rounded-xl">
              <Image
                src={opaiImg6}
                alt="Core Features"
                width={400}
                height={300}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <LinkPrimary href="/contact">Talk to our AI experts</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default WhyChoose;

'use client';

import gradient15 from '@/public/images/gradient/opai-15.png';
import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import TestimonialStars from '@/src/components/home/testimonial-star';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import Image from 'next/image';

const testimonialData = [
  {
    quote:
      'Their innovative and strategic approach has transformed our operations. With their creative solutions, we gain new insights that enhance our outcomes.',
    name: 'Sofia Patel',
    role: 'Data Scientist',
    image: '/images/opai-avatar-img-01.png',
  },
  {
    quote:
      'Innovative, strategic, and results-driven—exactly what we needed. Their creative approaches consistently provide new insights.',
    name: 'Liam Thompson',
    role: 'Software Engineer',
    image: '/images/opai-avatar-img-02.png',
  },
  {
    quote: 'Visionary, focused, and just what we were looking for.',
    name: 'Ethan Garcia',
    role: 'Product Designer',
    image: '/images/opai-avatar-img-03.png',
  },
] as const;

const PricingTestimonial = () => {
  return (
    <section className="py-14 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-14">
        <div className="space-y-4 text-center md:pb-5">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="Testimonial" />
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
              People love{' '}
              <span className="font-instrument-serif text-background-13/30 italic">
                Using Nexsas
              </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Hear from real users who have transformed their workflows with Nexsas.
              <br className="hidden md:block" />
              Their stories of productivity, creativity, and efficiency.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {testimonialData.map((item, i) => {
            const delays = [0.2, 0.1, 0.3];
            return (
              <RevealAnimation key={item.name} delay={delays[i] ?? 0.2}>
                <div className="bg-background-8 flex h-[397px] w-full flex-col justify-between rounded-xl p-7 md:p-10.5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <TestimonialStars className="fill-background-6!" />
                    </div>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                      {item.quote}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <figure className="size-12 overflow-hidden rounded-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="size-full object-cover"
                      />
                    </figure>
                    <h4 className="font-instrument-serif text-is-heading-6 text-background-6">
                      {item.name}
                    </h4>
                    <p className="font-inter-tight text-tagline-3 text-background-13/60">
                      {item.role}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
          <RevealAnimation delay={0.4}>
            <div className="bg-background-8 relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden rounded-xl p-7 md:p-10.5">
              <figure className="pointer-events-none absolute -top-[28%] -right-[33%] z-0 h-[280px] w-[280px] rotate-7">
                <Image
                  src={gradient15}
                  alt=""
                  width={280}
                  height={280}
                  className="size-full object-cover"
                />
              </figure>
              <div className="relative z-10 flex flex-col justify-end gap-1 sm:gap-2">
                <h3 className="font-instrument-serif text-is-heading-4 text-background-6 flex items-center">
                  <NumberAnimation
                    number={85}
                    speed={2000}
                    interval={200}
                    rooms={2}
                    heightSpaceRatio={2.9}
                    showPercentage
                  />
                </h3>
                <p className="font-inter-tight text-tagline-3 text-background-13/60">
                  Ai resolution
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        <div className="flex justify-center">
          <LinkPrimary href="/process">View All reviews</LinkPrimary>
        </div>
      </div>
    </section>
  );
};

export default PricingTestimonial;

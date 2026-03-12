import RevealAnimation from '@/src/components/animation/reveal-animation';
import type { ServicePost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import Link from 'next/link';
import type { FC } from 'react';

const ServicesShowcase: FC = () => {
  const services = getMarkDownData<ServicePost>('src/data/services');

  return (
    <section className="pt-6.5 pb-13 md:pt-10 md:pb-20 lg:pt-14 lg:pb-28 xl:pt-18 xl:pb-36 2xl:pt-22 2xl:pb-44">
      <div className="main-container space-y-10 md:space-y-14">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
              What you
              <span className="font-instrument-serif text-background-13/30 italic">can create</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60 md:mx-auto md:max-w-[480px]">
              Nexsas Creative & Visual AI tools let you generate high-quality visuals instantly, no
              design or coding skills needed.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-y-4 sm:gap-x-1 sm:gap-y-1 md:[&>div:nth-child(5n)]:col-span-6 md:[&>div:nth-child(5n-1)]:col-span-6">
          {services?.map((service, index) => {
            return (
              <RevealAnimation key={service?.slug} delay={0.1 + (index % 3) * 0.1}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <Link
                    href={`/services/${service?.slug}`}
                    className="bg-background-8 flex min-h-[370px] flex-col justify-between space-y-2 rounded-xl p-7 transition-opacity hover:opacity-90 md:p-10"
                  >
                    <div className="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4">
                      <span
                        className={`${service?.icon ?? 'ns-shape-71'} shrink-0 text-[35px] text-white`}
                        aria-hidden
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <h3 className="font-instrument-serif text-is-heading-5 text-background-13/80">
                        {service?.title}
                      </h3>
                      <p className="font-inter-tight text-tagline-2 text-background-13/50">
                        {service?.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;

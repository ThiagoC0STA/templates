import RevealAnimation from '@/src/components/animation/reveal-animation';
import {
  StatChartIcon,
  StatCustomersIcon,
  StatRoiIcon,
  StatSparkleIcon,
} from '@/src/components/shared/icon';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';

export const About = () => {
  return (
    <section className="overflow-hidden py-13 md:px-16 md:py-20 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container text-center lg:mb-17.5">
        {/* Badge – desktop only */}
        <div className="mb-4 hidden md:block">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="About Nexsas" className="mb-0" />
          </RevealAnimation>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row 2xl:gap-14">
          {/* Left Stats Column */}
          <div className="max-lg:flex max-lg:w-full max-lg:items-center max-lg:justify-between lg:space-y-[74px] 2xl:max-w-[250px]">
            <RevealAnimation delay={0.1} start="top 95%" duration={2} direction="left" useSpring>
              <div className="bg-background-9 -rotate-10 rounded-full p-0.5 md:p-1">
                <div className="bg-background-7 flex items-center gap-2 rounded-full py-1 pr-5 pl-1 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.10)] 2xl:pr-8">
                  <div className="bg-opai-purple flex size-[20px] shrink-0 items-center justify-center rounded-full p-6 md:size-[60px]">
                    <StatRoiIcon className="fill-none" />
                  </div>
                  <div className="text-left">
                    <p className="font-instrument-serif text-tagline-1 text-background-6/90 md:text-is-heading-6">
                      300%
                    </p>
                    <p className="font-inter-tight text-tagline-4 text-background-6/50 md:text-tagline-3 text-nowrap">
                      Return on investment
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} start="top 95%" duration={2} direction="left" useSpring>
              <div className="bg-background-9 rotate-[7deg] rounded-full p-0.5 md:p-1">
                <div className="bg-background-7 flex items-center gap-2 rounded-full py-1 pr-5 pl-1 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.10)] 2xl:pr-8">
                  <div className="bg-opai-blue flex size-[25px] shrink-0 items-center justify-center rounded-full p-6 md:size-[60px]">
                    <StatChartIcon className="fill-none" />
                  </div>
                  <div className="text-left">
                    <p className="font-instrument-serif text-tagline-1 text-background-6/90 md:text-is-heading-6">
                      100+
                    </p>
                    <p className="font-inter-tight text-tagline-4 text-background-6/50 md:text-tagline-2 text-nowrap">
                      5-star reviews
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Center Content */}
          <div className="space-y-4 text-center lg:max-w-[600px] lg:space-y-18 2xl:max-w-[710px]">
            {/* Badge – mobile only */}
            <div className="block md:hidden">
              <RevealAnimation delay={0.1}>
                <BadgeDefault text="About Nexsas" />
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.1}>
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
                We provide AI tools for writing, designing and planning{' '}
                <span className="font-instrument-serif text-background-13/50 italic">
                  streamlining your workflow for faster results.
                </span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="inline-block text-center max-md:mt-4">
                <LinkPrimary href="/about">More about us</LinkPrimary>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Stats Column */}
          <div className="max-lg:flex max-lg:w-full max-lg:items-center max-lg:justify-between lg:space-y-[74px] 2xl:max-w-[250px]">
            <RevealAnimation
              delay={0.1}
              start="top 100%"
              duration={2}
              direction="right"
              offset={40}
              useSpring
            >
              <div className="bg-background-9 rotate-10 rounded-full p-0.5 md:p-1">
                <div className="bg-background-7 flex items-center gap-2 rounded-full py-1 pr-5 pl-1 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.10)] 2xl:pr-8">
                  <div className="bg-opai-lemon flex size-[25px] shrink-0 items-center justify-center rounded-full p-6 md:size-[60px]">
                    <StatSparkleIcon className="fill-none" />
                  </div>
                  <div className="text-left">
                    <p className="font-instrument-serif text-tagline-1 text-background-6/90 md:text-is-heading-6">
                      100+
                    </p>
                    <p className="font-inter-tight text-tagline-4 text-background-6/50 md:text-tagline-2 text-nowrap">
                      5-star reviews
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation
              delay={0.3}
              start="top 100%"
              duration={2}
              direction="right"
              offset={40}
              useSpring
            >
              <div className="bg-background-9 -rotate-[7deg] rounded-full p-0.5 md:p-1">
                <div className="bg-background-7 flex items-center gap-2 rounded-full py-1 pr-5 pl-1 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.10)] 2xl:pr-8">
                  <div className="bg-opai-red flex size-[25px] shrink-0 items-center justify-center rounded-full p-6 md:size-[60px]">
                    <StatCustomersIcon className="fill-none" />
                  </div>
                  <div className="text-left">
                    <p className="font-instrument-serif text-tagline-1 text-background-6/90 md:text-is-heading-6">
                      5K+
                    </p>
                    <p className="font-inter-tight text-tagline-2 text-background-6/50 text-nowrap">
                      Happy customers
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

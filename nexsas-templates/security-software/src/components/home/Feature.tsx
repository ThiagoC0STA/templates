import personTablet from '@public/images/ns-img-117.png';
import marketSalesCard from '@public/images/ns-img-118.png';
import personTabletDark from '@public/images/ns-img-dark-87.png';
import marketSalesCardDark from '@public/images/ns-img-dark-88.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container flex flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-24">
        <div className="flex flex-col items-center text-center md:flex-1 lg:items-start lg:text-left">
          <div className="mb-14 space-y-5">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 className="max-w-[465px]">NextSaaS your smart email choice</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="max-w-[508px]">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before
                  &amp; After magazine.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <ul className="flex flex-row flex-wrap items-start justify-start gap-y-2 md:justify-center lg:flex-col lg:flex-nowrap lg:items-start">
            <RevealAnimation delay={0.3}>
              <li className="lg:text-tagline-1 text-tagline-2 dark:text-accent text-secondary flex items-center gap-4 px-0 py-2 font-medium md:basis-1/2 lg:basis-0">
                <span className="ns-shape-50 text-secondary dark:text-accent text-[24px] md:text-[36px]" />
                Enterprise-level security
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <li className="lg:text-tagline-1 text-tagline-2 dark:text-accent text-secondary flex items-center gap-4 px-0 py-2 font-medium md:basis-1/2 lg:basis-0">
                <span className="ns-shape-52 text-secondary dark:text-accent text-[24px] md:text-[36px]" />
                Automated email flows
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="lg:text-tagline-1 text-tagline-2 dark:text-accent text-secondary flex items-center gap-4 px-0 py-2 font-medium md:basis-1/2 lg:basis-0">
                <span className="ns-shape-41 text-secondary dark:text-accent text-[24px] md:text-[36px]" />
                Real-time analytics
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="lg:text-tagline-1 text-tagline-2 dark:text-accent text-secondary flex items-center gap-4 px-0 py-2 font-medium md:basis-1/2 lg:basis-0">
                <span className="ns-shape-47 text-secondary dark:text-accent text-[24px] md:text-[36px]" />
                Live data insights
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="relative flex w-full justify-end md:flex-1 lg:w-auto">
          <RevealAnimation delay={0.3} offset={100}>
            <figure className="mx-auto h-auto w-full max-w-[400px] lg:mx-0 lg:max-w-[605px]">
              <Image
                src={personTablet}
                alt="Smiling man using a tablet"
                className="block h-auto w-full dark:hidden"
                width={583}
                height={707}
                priority
              />
              <Image
                src={personTabletDark}
                alt="Smiling man using a tablet"
                className="hidden h-auto w-full dark:block"
                width={583}
                height={707}
                priority
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.6} offset={100} direction="right">
            <figure
              className="lp:max-w-[324px] absolute right-2 -bottom-4 max-w-[200px] overflow-hidden rounded-[10px] md:right-[104px] md:bottom-7 lg:right-2 lg:-bottom-4 lg:max-w-[250px] lg:rounded-[20px] 2xl:-right-10"
              aria-hidden="true">
              <Image
                src={marketSalesCard}
                alt="Market sales dashboard card"
                width={324}
                height={340}
                className="block dark:hidden"
              />
              <Image
                src={marketSalesCardDark}
                alt="Market sales dashboard card"
                width={324}
                height={340}
                className="shadow-2 hidden dark:block"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;

'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import { DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import heroBadge1 from '@public/images/ns-img-64.svg';
import heroBadge3 from '@public/images/ns-img-66.svg';
import heroVisaCard from '@public/images/ns-img-75.png';
import heroBadge1Dark from '@public/images/ns-img-dark-41.svg';
import heroBadge3Dark from '@public/images/ns-img-dark-43.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../home/Progress';

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section className="relative mt-3" aria-label="Mortgage Solutions Hero" ref={sceneRef} id="scene">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 bg-[url('/images/ns-img-128.svg')] bg-cover bg-no-repeat md:mb-[100px] md:rounded-t-[20px] dark:bg-[url('/images/ns-img-dark-97.svg')]">
          <div className="main-container">
            {/* hero heading  */}
            <div className="pt-[140px] pb-[50px] text-center max-lg:pb-20 sm:pt-[170px] md:pb-[80px] lg:pt-[176px] lg:pb-[100px]">
              <RevealAnimation delay={0.2}>
                <h1 className="mx-auto mb-4 max-w-[976px] md:w-full">
                  Smart, simple, and stress-free mortgage solutions.
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto mb-14 max-w-[719px] md:w-full">
                  Take the hassle out of home financing. With NextSaaS, you get personalized mortgage plans, expert
                  support every step of the way, and lightning-fast approval.
                </p>
              </RevealAnimation>
              {/* hero form  */}
              <RevealAnimation delay={0.4}>
                <div className="hero-form mx-auto flex w-[90%] items-center justify-center md:w-auto">
                  <form className="flex w-full max-w-[500px] flex-col items-center gap-3 md:flex-row">
                    <input
                      aria-label="Email address"
                      type="email"
                      placeholder="Enter your email"
                      required={true}
                      autoComplete="email"
                      className="bg-background-1 shadow-1 dark:bg-background-6 placeholder:text-secondary/50 placeholder:text-tagline-1 border-stroke-3 focus-visible:border-stroke-5/40 dark:border-stroke-7 dark:focus-visible:border-stroke-3/20 dark:placeholder:text-accent/60 text-secondary dark:text-accent focus-within:ring-primary-500 h-12 w-full max-w-[340px] rounded-full border px-5 py-3 font-normal placeholder:font-normal focus:ring-[0.7px] focus:outline-none sm:flex-1"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg hover:btn-secondary dark:hover:btn-white h-12 w-full md:w-auto">
                      <span>Get a free quote</span>
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
            {/* hero images  */}
            <div className="relative mx-auto flex max-w-[787px] items-center justify-center">
              {/* yellow badge   */}
              <RevealAnimation delay={0.6}>
                <figure
                  className="parallax-effect absolute top-[68px] left-[-11px] hidden w-[125px] overflow-hidden sm:w-[172px] md:top-[48px] md:left-[28px] md:block lg:top-14 lg:left-14"
                  data-parallax-value="1.2"
                  data-parallax-y="1.2"
                  data-parallax-x="1.2">
                  <Image src={heroBadge1} alt="Gold badge icon" className="dark:hidden" />
                  <Image src={heroBadge1Dark} alt="Gold badge icon" className="hidden dark:block" />
                </figure>
              </RevealAnimation>
              {/* credit limit  */}
              <RevealAnimation delay={0.6} direction="left" offset={50} animationType="from">
                <div className="absolute top-[70px] left-1 z-30 w-full max-w-[240px] space-y-4 rounded-xl bg-white p-4 md:top-[128px] md:left-20 md:max-w-[288px] dark:bg-black">
                  {/* heading  */}
                  <div className="flex items-center justify-between">
                    <p className="text-secondary dark:text-accent leading-[150%]">Credit limit</p>
                    <p className="text-secondary dark:text-accent flex items-center text-lg leading-[150%] font-medium">
                      $
                      <NumberAnimation
                        number={80224}
                        speed={2000}
                        interval={200}
                        rooms={5}
                        heightSpaceRatio={2.5}></NumberAnimation>
                    </p>
                  </div>
                  {/* progress bar  */}
                  <Progress />
                </div>
              </RevealAnimation>
              {/* transfer success  */}
              <RevealAnimation delay={0.7} instant>
                <div className="bg-secondary dark:bg-accent absolute right-[-10px] bottom-[90px] z-20 flex h-24 w-[153px] flex-col items-center gap-1 rounded-xl p-4 md:bottom-8 md:left-28">
                  <span>
                    <TransferSuccessIcon />
                  </span>
                  <span className="text-white dark:text-black"> Transfer success! </span>
                </div>
              </RevealAnimation>
              {/* visa card  */}
              <RevealAnimation delay={0.8} direction="up" offset={50} useSpring duration={1.9}>
                <figure className="relative z-10 w-full max-w-[280px] overflow-hidden rounded-[20px]">
                  <Image src={heroVisaCard} alt="VISA Card" />
                </figure>
              </RevealAnimation>
              {/* green badge   */}
              <RevealAnimation delay={0.6}>
                <figure
                  className="parallax-effect absolute top-[68px] right-[-8px] hidden w-[100px] sm:block md:top-[32px] md:right-[67px] md:w-[131px] lg:top-14 lg:right-24"
                  data-parallax-value="1.2"
                  data-parallax-y="1.2"
                  data-parallax-x="-1.2">
                  <Image src={heroBadge3} alt="badge-2" className="dark:hidden" />
                  <Image src={heroBadge3Dark} alt="badge-2" className="hidden dark:block" />
                </figure>
              </RevealAnimation>
              {/* personal load  */}
              <RevealAnimation delay={0.8} instant>
                <div className="absolute top-[204px] left-[-3px] z-10 flex h-[91px] w-[120px] flex-col items-start gap-1 rounded-2xl bg-white p-4 md:top-[105px] md:left-[530px] md:w-[148px] lg:top-[128px] lg:left-[565px] dark:bg-black">
                  <h3 className="text-tagline-2 text-secondary dark:text-accent font-normal">Personal load</h3>
                  <p className="text-secondary dark:text-accent flex items-center gap-0.5 text-lg leading-[150%] font-medium">
                    $
                    <NumberAnimation number={40345} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                  </p>
                </div>
              </RevealAnimation>
              {/* total balance  */}
              <RevealAnimation delay={0.9} offset={90} instant>
                <div className="absolute z-10 hidden rounded-2xl bg-white shadow-lg md:-right-0.5 md:bottom-[-40px] md:block md:max-w-[250px] md:p-4 lg:right-[-60px] lg:bottom-[-97px] lg:max-w-[288px] lg:p-6 dark:bg-black">
                  <div className="text-left">
                    <span className="text-tagline-2 text-secondary dark:text-accent font-normal">Total balance</span>
                    <h3 className="text-heading-5 lg:text-heading-3 mt-2 mb-[30px] flex items-center leading-[1.2] font-normal">
                      $
                      <NumberAnimation number={45324} speed={2500} interval={300} rooms={5} heightSpaceRatio={2} />
                    </h3>
                  </div>
                  <div className="flex gap-1 lg:gap-3">
                    <div className="bg-background-4 dark:bg-background-9 flex-1 space-y-2 rounded-xl p-4 text-left">
                      <div className="text-tagline-2 text-secondary dark:text-accent flex items-center justify-start gap-2">
                        <span className="bg-ns-red flex size-[18px] items-center justify-center rounded-full p-1">
                          <DownArrowIcon className="dark:fill-background-5 size-[8px]" />
                        </span>
                        Income
                      </div>
                      <div className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                        $
                        <NumberAnimation number={48000} speed={2000} interval={170} rooms={5} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                    <div className="bg-background-4 dark:bg-background-9 flex-1 space-y-2 rounded-xl p-4 text-left">
                      <div className="text-tagline-2 text-secondary dark:text-accent flex items-center justify-start gap-2">
                        <span className="bg-ns-green flex size-[18px] items-center justify-center rounded-full p-1">
                          <UpArrowIcon className="dark:fill-background-5 size-[9px]" />
                        </span>
                        Expenses
                      </div>
                      <div className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                        $
                        <NumberAnimation number={2321} speed={2000} interval={170} rooms={4} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

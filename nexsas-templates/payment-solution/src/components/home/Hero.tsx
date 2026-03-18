'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import { DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import heroAvatar from '@public/images/ns-avatar-9.png';
import heroPattern from '@public/images/ns-img-508.png';
import heroPattern2 from '@public/images/ns-img-534.png';
import heroBadge1 from '@public/images/ns-img-64.svg';
import heroBadge2 from '@public/images/ns-img-65.svg';
import heroBadge3 from '@public/images/ns-img-66.svg';
import heroVisaCard from '@public/images/ns-img-75.png';
import heroBadgeDark1 from '@public/images/ns-img-dark-41.svg';
import heroBadgeDark2 from '@public/images/ns-img-dark-42.svg';
import heroBadgeDark3 from '@public/images/ns-img-dark-43.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../home/Progress';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section
      className="relative pt-44 pb-24 lg:pt-[200px] lg:pb-[120px]"
      aria-label="Hero section"
      ref={sceneRef}
      id="scene">
      {/* Hero gradient left */}
      <RevealAnimation delay={0.1} direction="up" offset={100} useSpring duration={2}>
        <figure className="pointer-events-none absolute top-[9%] -left-[4%] hidden w-full max-w-[204px] select-none md:block lg:top-[15%] lg:left-[1%]">
          <Image src={heroPattern} alt="Hero gradient img" />
        </figure>
      </RevealAnimation>
      {/* Hero gradient right */}
      <RevealAnimation delay={0.1} direction="up" offset={100} useSpring duration={2}>
        <figure className="pointer-events-none absolute top-[5%] -right-3 hidden w-full max-w-[242px] select-none md:block lg:right-[1%]">
          <Image src={heroPattern2} alt="Hero gradient img" />
        </figure>
      </RevealAnimation>
      <div className="main-container text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-yellow mb-5">Digital payment solution</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="mb-4 font-medium">
            Smart payment solution for
            <br className="hidden md:block" />
            your business
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mb-7 md:mb-14">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
            though it looks like it
          </p>
        </RevealAnimation>
        <ul className="mx-auto mb-7 flex flex-col justify-center gap-4 max-md:w-[90%] md:mx-0 md:mb-14 md:flex-row">
          <RevealAnimation delay={0.3} direction="left" offset={50}>
            <li>
              <LinkButton
                href="/contact-us"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-white btn-lg md:btn-xl w-[90%] sm:w-auto">
                Get started
              </LinkButton>
            </li>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="left" offset={50}>
            <li>
              <LinkButton
                href="/pricing"
                className="btn btn-white hover:btn-primary dark:btn-transparent btn-lg md:btn-xl w-[90%] sm:w-auto">
                Try it for free
              </LinkButton>
            </li>
          </RevealAnimation>
        </ul>
        <div className="flex flex-col items-center justify-around gap-y-3 md:flex-row lg:gap-y-10 2xl:justify-evenly">
          <article>
            <RevealAnimation delay={0.5}>
              <figure className="parallax-effect" data-parallax-value="1" data-parallax-y="1" data-parallax-x="-1">
                <Image
                  src={heroBadge1}
                  className="mb-6 block lg:mb-11 dark:pointer-events-none dark:absolute dark:opacity-0"
                  alt="Gold badge icon"
                />
                <Image
                  src={heroBadgeDark1}
                  className="pointer-events-none absolute mb-6 opacity-0 lg:mb-11 dark:pointer-events-auto dark:relative dark:opacity-100"
                  alt="Gold badge icon"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} instant>
              <figure className="dark:bg-background-6 mb-6 max-h-[100px] min-h-[100px] max-w-[297px] space-y-2 rounded-xl bg-white p-4">
                <figcaption className="flex justify-between gap-2">
                  <span className="text-tagline-1 dark:text-accent font-normal"> Credit limit </span>
                  <p className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                    <span className="font-inherit"> $ </span>
                    <NumberAnimation number={53224} speed={1500} interval={180} rooms={5} heightSpaceRatio={2.4}>
                      53224
                    </NumberAnimation>
                  </p>
                </figcaption>
                <Progress />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.7} instant>
              <figure className="mb-6 flex items-center gap-6 lg:mb-[58px]">
                <div className="bg-secondary dark:bg-background-6 flex h-24 w-[153px] flex-col items-center gap-1 rounded-xl p-4">
                  <span>
                    <TransferSuccessIcon />
                  </span>
                  <span className="dark:text-accent text-white"> Transfer success! </span>
                </div>
                <div
                  className="dark:bg-background-6 min-h-[100px] max-w-[119px] min-w-[119px] rounded-xl bg-white p-6"
                  aria-label="User avatar">
                  <Image
                    className="inline-block size-14 rounded-md bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                    src={heroAvatar}
                    alt="Avatar 1"
                  />
                </div>
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.8}>
              <figure
                className="parallax-effect"
                data-parallax-value="-1.5"
                data-parallax-y="-1"
                data-parallax-x="-1.5">
                <Image
                  src={heroBadge2}
                  alt="badge-2"
                  className="block justify-self-end dark:pointer-events-none dark:absolute dark:opacity-0"
                />
                <Image
                  src={heroBadgeDark2}
                  alt="badge-2"
                  className="pointer-events-none absolute justify-self-end opacity-0 dark:pointer-events-auto dark:relative dark:opacity-100"
                />
              </figure>
            </RevealAnimation>
          </article>
          <RevealAnimation delay={0.3} instant direction="up">
            <figure
              aria-label="Visa card illustration"
              className="hero-asset-center block w-full max-w-[280px] overflow-hidden rounded-[20px] md:hidden lg:block">
              <Image src={heroVisaCard} alt="VISA Card" />
            </figure>
          </RevealAnimation>
          <article className="space-y-[37px]">
            <RevealAnimation delay={0.4}>
              <figure
                className="parallax-effect items-start"
                data-parallax-value="1.5"
                data-parallax-y="1"
                data-parallax-x="-1.5">
                <Image
                  src={heroBadge3}
                  className="inline-block dark:pointer-events-none dark:absolute dark:opacity-0"
                  alt="badge-3"
                />
                <Image
                  src={heroBadgeDark3}
                  className="pointer-events-none absolute opacity-0 dark:pointer-events-auto dark:inline-block dark:opacity-100"
                  alt="badge-3"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.9} instant>
              <figure
                className="bg-secondary dark:bg-background-6 flex h-[91px] w-[148px] flex-col items-start gap-1 rounded-2xl p-4"
                aria-label="Investment target">
                <h3 className="text-tagline-2 text-accent font-normal">Investment target</h3>
                <h3 className="text-heading-5 gap-05 text-ns-green flex items-center font-normal">
                  <NumberAnimation number={76} speed={2500} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    76
                  </NumberAnimation>
                  %
                </h3>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={1} instant>
              <figure className="dark:bg-background-6 max-w-[288px] min-w-[288px] rounded-2xl bg-white p-6">
                <div className="text-left">
                  <span className="text-tagline-2 text-secondary dark:text-accent font-normal">Balance</span>
                  <h3 className="mt-2 mb-[30px] flex items-center text-[40px] leading-[1.2] font-normal">
                    <span className="font-inherit"> $ </span>
                    <NumberAnimation
                      number={45257}
                      speed={1500}
                      interval={180}
                      rooms={5}
                      heightSpaceRatio={2.1}
                      space={23}>
                      45257
                    </NumberAnimation>
                  </h3>
                </div>
                <div className="flex gap-3">
                  <div className="bg-background-4 dark:bg-background-9 flex-1 space-y-2 rounded-xl p-4 text-left">
                    <div className="text-tagline-2 text-secondary dark:text-accent flex items-center justify-start gap-2">
                      <span className="bg-ns-red flex size-[18px] items-center justify-center rounded-full p-1">
                        <DownArrowIcon className="size-2.5" />
                      </span>
                      Income
                    </div>
                    <div className="dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                      <span className="font-inherit"> $ </span>
                      <NumberAnimation number={48000} speed={1500} interval={180} rooms={5} heightSpaceRatio={2.5}>
                        48000
                      </NumberAnimation>
                    </div>
                  </div>
                  <div className="bg-background-4 dark:bg-background-9 flex-1 space-y-2 rounded-xl p-4 text-left">
                    <div className="text-tagline-2 text-secondary dark:text-accent flex items-center justify-start gap-2">
                      <span className="bg-ns-green flex size-[18px] items-center justify-center rounded-full p-1">
                        <UpArrowIcon className="size-2.5" />
                      </span>
                      Expenses
                    </div>
                    <div className="dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                      <span className="font-inherit"> $ </span>
                      <NumberAnimation number={2321} speed={1500} interval={180} rooms={4} heightSpaceRatio={2.5}>
                        2321
                      </NumberAnimation>
                    </div>
                  </div>
                </div>
              </figure>
            </RevealAnimation>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;

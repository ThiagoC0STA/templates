'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import heroImage from '@public/images/ns-img-124.png';
import heroImageDark from '@public/images/ns-img-dark-93.png';
import heroDotBg from '@public/images/ns-img-hero-dot-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroShape from './HeroShape';

const Hero = () => {
  const parallax = useParallaxEffect();
  return (
    <section ref={parallax} className="dark:bg-background-9 relative z-0 bg-white" id="scene">
      {/* border area */}

      <RevealAnimation delay={0.8} offset={0}>
        <div className="absolute top-5 left-0 hidden h-full w-full before:absolute before:top-0 before:left-[6%] before:z-0 before:h-[90%] before:w-[1px] before:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] before:content-[''] after:absolute after:top-0 after:right-[6%] after:-z-10 after:h-[90%] after:w-[1px] after:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] after:content-[''] md:block dark:before:bg-[linear-gradient(180deg,_#303B49_0%,_rgba(48,_59,_73,_0.00)_100%)] dark:after:bg-[linear-gradient(180deg,_#303B49_0%,_rgba(48,_59,_73,_0.00)_100%)]">
          <RevealAnimation delay={0.8} offset={0}>
            <div className="bg-stroke-1 dark:bg-stroke-8 before:bg-stroke-1 dark:before:ring-background-9 after:bg-stroke-1 dark:after:ring-background-9 absolute top-[6.5%] h-[1px] w-[100%] before:absolute before:-top-1 before:left-[5.8%] before:z-30 before:h-2 before:w-2 before:rotate-45 before:ring-8 before:ring-white before:content-[''] after:absolute after:-top-1 after:right-[5.8%] after:z-30 after:h-2 after:w-2 after:rotate-[-45deg] after:ring-8 after:ring-white after:content-['']" />
          </RevealAnimation>
        </div>
      </RevealAnimation>
      <div className="relative pt-[160px] pb-[50px] lg:pt-[230px] lg:pb-[100px]">
        {/* Background shape*/}
        <HeroShape />
        {/* Content */}
        <div className="main-container relative z-40 flex flex-col items-center text-center">
          <RevealAnimation delay={1} duration={2} useSpring={true} offset={0}>
            <figure className="absolute -top-20 left-1/2 -z-1 -translate-x-1/2 animate-pulse">
              <Image src={heroDotBg} alt="Hero background" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Your world, one message away.</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h1 className="mb-4 font-medium">
              Engage, support &amp; convert with <br className="hidden md:block" />
              smart messaging
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mb-7 max-w-[625px] md:mb-14">
              Deliver real-time, personalized messaging experiences across your website, mobile apps, social media, and
              business communication channels.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="mb-18 inline-block w-full">
              <LinkButton
                href="/login"
                className="btn btn-primary btn-lg md:btn-xl hover:btn-secondary dark:hover:btn-accent w-[90%] md:w-auto">
                Start your free trial
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6}>
          <figure className="hero-perspective mx-auto max-w-[780px] max-sm:mx-5">
            <Image src={heroImage} alt="hero image" className="w-full rounded-[20px] dark:hidden" />
            <Image src={heroImageDark} alt="hero image" className="hidden w-full rounded-[20px] dark:block" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;

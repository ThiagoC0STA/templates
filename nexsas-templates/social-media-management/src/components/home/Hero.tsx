import hero1 from '@public/images/ns-img-243.png';
import hero2 from '@public/images/ns-img-244.png';
import hero3 from '@public/images/ns-img-245.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import GradientAnimation from './GradientAnimation';

const Hero = () => {
  return (
    <section className="dark:bg-background-5 relative bg-white pt-[180px] pb-[100px] lg:pt-[230px] lg:pb-[200px]">
      <div className="main-container relative z-10">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light">Keep an eye on your finances</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto max-w-[400px] leading-[1.3] sm:max-w-[600px] md:max-w-[900px] xl:max-w-[1110px]">
                <span className="hero-text-gradient hero-text-color-2 block">
                  Elevate your property management game with NextSaaS!
                </span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-full">
                All-in-one cloud-based software to streamline operations, boost sales, and generate leads effortlessly.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="flex justify-center py-[72px]">
            <LinkButton
              href="/pricing"
              className="btn dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-secondary btn-xl">
              Get a free demo
            </LinkButton>
          </div>
        </RevealAnimation>
        <div className="relative z-10 flex items-end justify-center -space-x-28">
          <RevealAnimation delay={0.5} direction="right" offset={100} instant>
            <figure className="relative -z-10 w-full max-w-[200px] overflow-hidden rounded-[20px] md:max-w-[250px] lg:max-w-[326px]">
              <Image src={hero3} alt="hero" className="h-full w-full rounded-[20px] object-cover" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2} offset={100} instant>
            <figure className="shadow-6 relative z-10 w-full max-w-[250px] overflow-hidden rounded-[30px] md:max-w-[300px] lg:max-w-[370px]">
              <Image src={hero1} alt="hero" className="h-full w-full object-cover" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} offset={100} direction="left" instant>
            <figure className="relative -z-10 w-full max-w-[200px] overflow-hidden rounded-[20px] md:max-w-[250px] lg:max-w-[326px]">
              <Image src={hero2} alt="hero" className="h-full w-full rounded-[20px] object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute top-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default Hero;

import heroPattern from '@public/images/ns-img-76.png';
import hero1 from '@public/images/ns-img-77.png';
import hero2 from '@public/images/ns-img-78.png';
import hero3 from '@public/images/ns-img-79.png';
import heroPatternDark from '@public/images/ns-img-dark-51.png';
import hero1Dark from '@public/images/ns-img-dark-52.png';
import hero3Dark from '@public/images/ns-img-dark-53.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="relative pt-[170px] pb-20 xl:pt-[230px] xl:pb-[100px]">
      {/* hero bg  */}
      <RevealAnimation delay={0.1} offset={0}>
        <figure className="lp:!top-[15%] absolute top-[13%] left-0 h-[765px] w-full max-w-[2560px] md:top-[11%] lg:top-[10%] xl:top-[13%] dark:hidden">
          <Image src={heroPattern} alt="hero" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.2} offset={0}>
        <figure className="absolute top-[15%] left-0 hidden h-[765px] w-full dark:block">
          <Image src={heroPatternDark} alt="hero" className="h-full w-full" />
        </figure>
      </RevealAnimation>

      <div className="main-container mb-[70px]">
        <div className="flex flex-col items-center justify-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Keep an eye on your finances</span>
          </RevealAnimation>
          <div className="mx-auto mt-5 mb-14 w-full max-w-[822px] space-y-4 text-center">
            <RevealAnimation delay={0.2}>
              <h1>The landscape of commerce is evolving.</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-xl">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                Latin, though it looks like it
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="w-full text-center">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl w-[90%] md:w-auto">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
      <div className="lp:max-w-[1416px] relative mx-auto max-w-[980px] lg:max-w-[1140px] xl:max-w-[1280px]">
        <RevealAnimation delay={0.8} offset={100} direction="up" useSpring duration={2} instant>
          <figure className="absolute -top-10 left-10 z-20 max-w-[120px] overflow-hidden rounded-[20px] sm:max-w-[200px] lg:top-20 lg:left-20 lg:max-w-[282px] xl:top-1/2 xl:left-0 xl:-translate-y-1/2">
            <Image src={hero1} alt="hero" className="block h-full w-full object-cover dark:hidden" />
            <Image src={hero1Dark} alt="hero" className="hidden h-full w-full object-cover dark:block" />
          </figure>
        </RevealAnimation>

        <figure className="relative z-10 mx-auto max-w-[860px] overflow-hidden rounded-[20px] px-10 lg:px-0 xl:mx-0 xl:translate-x-[36%]">
          <Image src={hero2} alt="hero" className="h-full w-full rounded-[20px] object-cover lg:rounded-none" />
        </figure>

        <RevealAnimation delay={0.8} offset={100} direction="right" useSpring duration={2} instant>
          <figure className="absolute right-[11%] bottom-0 z-20 max-w-[150px] overflow-hidden rounded-[20px] sm:right-14 sm:bottom-14 sm:max-w-[200px] lg:right-20 lg:bottom-5 lg:max-w-[320px] xl:top-1/2 xl:-right-7 xl:bottom-auto xl:-translate-y-1/2">
            <Image src={hero3} alt="hero" className="block h-full w-full dark:hidden" />
            <Image src={hero3Dark} alt="hero" className="hidden h-full w-full dark:block" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;

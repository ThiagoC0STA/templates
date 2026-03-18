import heroImage from '@public/images/ns-img-222.png';
import heroImageDark from '@public/images/ns-img-dark-150.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroAvatar from './HeroAvatar';

const Hero = () => {
  return (
    <section className="relative bg-[url('/images/ns-img-221.png')] bg-top bg-no-repeat pt-[150px] pb-[100px] md:pt-[180px] lg:pt-[200px] 2xl:pt-[230px]">
      {/* hero line  */}
      <div className="absolute top-0 left-0 z-[10] hidden h-full w-full before:absolute before:top-0 before:left-[110px] before:z-10 before:h-[100%] before:w-px before:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] before:content-[''] after:absolute after:top-0 after:right-[110px] after:z-10 after:h-[100%] after:w-px after:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] after:content-[''] md:block dark:before:bg-[linear-gradient(180deg,#303B49_0%,#748eaf00_100%)] dark:after:bg-[linear-gradient(180deg,#303B49_0%,#748eaf00_100%)]">
        <div className="bg-stroke-1 dark:bg-stroke-8 before:bg-stroke-1 dark:before:bg-accent dark:before:ring-background-7 after:bg-stroke-1 dark:after:bg-accent dark:after:ring-background-7 absolute top-[106px] h-px w-[100%] before:absolute before:-top-1 before:left-[106px] before:z-20 before:h-2 before:w-2 before:rotate-45 before:ring-8 before:ring-white before:content-[''] after:absolute after:-top-1 after:right-[106px] after:z-20 after:h-2 after:w-2 after:rotate-[-45deg] after:ring-8 after:ring-white after:content-['']" />
      </div>

      <div className="main-container">
        <div className="relative z-[20]">
          <div className="flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="mb-4 max-w-[450px] font-medium sm:max-w-[580px] md:max-w-[650px] lg:max-w-[850px] xl:max-w-[1000px]">
                Flexible insurance plans for your health, home, car, and future.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mb-7 max-w-[450px] sm:max-w-[500px] md:mb-14 md:max-w-[500px] lg:max-w-[650px] xl:max-w-[850px]">
                At NextSaaS, we help individuals and families secure financial protection with smart, personalized
                insurance coverage—fast, simple, and built around your life.
              </p>
            </RevealAnimation>
            <ul className="mb-7 flex w-full flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-4 md:mb-14">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/pricing"
                    className="btn btn-secondary btn-lg md:btn-xl hover:btn-primary dark:btn-accent w-[90%] sm:w-auto">
                    Get a quote
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/services"
                    className="btn btn-light btn-lg md:btn-xl hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent w-[90%] sm:w-auto">
                    Explore Coverage
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
        {/* Avatars and Trust Indicator */}
        <HeroAvatar />

        {/*Hero Main Image*/}
        <RevealAnimation delay={0.8}>
          <figure className="lp:max-w-[1240px] mx-auto w-full max-w-[320px] min-[425px]:max-w-[350px] min-[475px]:max-w-[450px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1140px]">
            <Image src={heroImage} alt="hero-image" className="dark:hidden" />
            <Image src={heroImageDark} alt="hero-image" className="hidden dark:block" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;

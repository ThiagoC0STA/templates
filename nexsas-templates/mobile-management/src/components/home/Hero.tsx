import { CheckIcon } from '@/icons';
import HeroImage from '@public/images/ns-img-205.jpg';
import HeroImageDark from '@public/images/ns-img-dark-140.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const heroList = [
  {
    id: 1,
    title: 'Free installation',
  },
  {
    id: 2,
    title: 'App version 3.9',
  },
  {
    id: 3,
    title: '4.4 rated by 1,300,000+ customers',
  },
];

const Hero = () => {
  return (
    <section className="relative pt-36 pb-12 sm:pb-0 md:pt-[180px] lg:pt-[150px]" aria-label="Hero section">
      <div className="main-container mb-10 md:mb-[70px]">
        <div className="space-y-8 text-center md:space-y-14">
          <div className="relative z-20 space-y-4">
            <RevealAnimation delay={0.1}>
              <h1 className="mx-auto max-w-[700px] text-center">Mobile device management software</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto w-full max-w-[450px] sm:max-w-[518px] md:max-w-[618px] lg:max-w-[818px]">
                NextSaaS empowers organizations to manage their mobile fleet with confidence. From security policies to
                remote configurations—manage every device without touching it.
              </p>
            </RevealAnimation>
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-9">
              {heroList.map((item, index) => (
                <RevealAnimation delay={0.3 + index * 0.1} key={item.id}>
                  <li className="flex items-center gap-1.5">
                    <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                      <CheckIcon />
                    </span>
                    <span className="text-secondary/60 text-tagline-2 dark:text-accent/60">{item.title}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <ul className="relative z-20 flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:gap-4">
            <RevealAnimation delay={0.6} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/case-study"
                  className="btn btn-primary btn-md md:btn-xl hover:btn-secondary dark:hover:btn-accent w-[90%] md:w-auto"
                  aria-label="Get started with NextSaaS">
                  Take a product tour
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.8} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-secondary btn-md md:btn-xl hover:btn-primary dark:btn-accent w-[90%] md:w-auto"
                  aria-label="Get started with NextSaaS">
                  Start free trial
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
      <RevealAnimation delay={0.9} duration={1.1}>
        <div className="lp:max-w-[1290px] mx-auto block w-full max-w-[420px] max-[500px]:max-w-[320px] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[940px] xl:max-w-[1140px] dark:hidden">
          <figure className="w-full overflow-hidden rounded-xl min-[500px]:mb-10 md:-mb-6 md:rounded-[20px] xl:-mb-7">
            <Image
              src={HeroImage}
              alt="NextSaaS mobile device management software"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </RevealAnimation>
      <RevealAnimation delay={0.9} duration={1.1}>
        <div className="lp:max-w-[1290px] mx-auto hidden w-full max-w-[420px] max-[500px]:max-w-[320px] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[940px] xl:max-w-[1140px] dark:block">
          <figure className="w-full overflow-hidden rounded-xl min-[500px]:-mb-10 md:-mb-6 md:rounded-[20px] xl:-mb-7">
            <Image
              src={HeroImageDark}
              alt="NextSaaS mobile device management software"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Hero;

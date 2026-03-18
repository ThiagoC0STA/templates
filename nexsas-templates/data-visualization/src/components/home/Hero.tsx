import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroLineGradient from './HeroLineGradient';

const Hero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-3 dark:bg-background-7 relative z-10 overflow-hidden pt-[150px] md:pt-[200px]">
        <HeroLineGradient />
        <div className="main-container">
          <div>
            <div className="space-y-3 text-center md:space-y-4">
              <RevealAnimation delay={0.2}>
                <h1 className="mx-auto max-w-[350px] leading-[1.2] sm:max-w-[450px] md:max-w-[600px] xl:max-w-[846px]">
                  <span className="hero-text-gradient hero-text-color-1 block">
                    Transform your data into clear insights.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[450px] sm:max-w-[600px] md:max-w-[818px]">
                  NextSaaS helps businesses of all sizes visualize, understand, and share data with stunning dashboards,
                  real-time reports, and powerful analytics—without complex setup or code.
                </p>
              </RevealAnimation>
            </div>
            <ul className="mt-8 mb-8 flex flex-col items-center justify-center gap-4 md:mt-14 md:mb-8 md:flex-row">
              <RevealAnimation delay={0.4} direction="left">
                <li className="w-full text-center sm:w-auto sm:text-left">
                  <LinkButton
                    href="/services"
                    className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto">
                    Take a product tour
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left">
                <li className="w-full text-center sm:w-auto sm:text-left">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white dark:btn-white-dark hover:btn-primary btn-lg md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto">
                    Get started now
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
            <div className="flex flex-col items-center justify-center gap-y-3 pb-20 sm:flex-row sm:gap-4 md:pb-[130px]">
              <div className="flex -space-x-3.5">
                <RevealAnimation delay={0.6} direction="right">
                  <Image
                    className="dark:ring-background-5 bg-ns-yellow inline-block size-10 rounded-full ring-2 ring-white sm:size-12"
                    src="/images/ns-avatar-1.png"
                    alt="Avatar 1"
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.7} direction="right">
                  <Image
                    className="dark:ring-background-5 bg-ns-red inline-block size-10 rounded-full ring-2 ring-white sm:size-12"
                    src="/images/ns-avatar-2.png"
                    alt="Avatar 2"
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.8} direction="right">
                  <Image
                    className="dark:ring-background-5 bg-ns-green inline-block size-10 rounded-full ring-2 ring-white sm:size-12"
                    src="/images/ns-avatar-3.png"
                    alt="Avatar 3"
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.9} direction="right">
                  <div className="text-secondary/80 bg-background-3 dark:bg-background-9 dark:ring-background-5 dark:text-accent text-tagline-3 inline-flex size-10 shrink-0 items-center justify-center rounded-full font-medium ring-2 ring-white sm:size-12">
                    99+
                  </div>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={1.0} direction="right">
                <div className="text-center sm:text-left">
                  <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Join 36,000+</p>
                  <p className="text-tagline-3">Use NextSaaS for smarter decisions.</p>
                </div>
              </RevealAnimation>
            </div>
            <div>
              <RevealAnimation delay={1.1} instant={true}>
                <figure className="mx-auto w-full overflow-hidden rounded-t-2xl md:max-w-[640px] lg:max-w-[1240px]">
                  <Image
                    src="/images/ns-img-285.jpg"
                    alt="Hero"
                    className="w-full dark:hidden"
                    width={1240}
                    height={800}
                  />
                  <Image
                    src="/images/ns-img-dark-194.jpg"
                    alt="Hero"
                    className="hidden w-full dark:block"
                    width={1240}
                    height={800}
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;

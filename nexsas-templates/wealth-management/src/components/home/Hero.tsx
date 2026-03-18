import Avatar1 from '@public/images/ns-avatar-1.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroDivider from './HeroDivider';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <section className="bg-[url('/images/ns-img-261.svg')] bg-top-right bg-no-repeat pt-[230px] pb-[100px] lg:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-1 max-sm:space-y-18 md:grid-cols-2 2xl:gap-x-[100px]">
          <div>
            <div className="space-y-14">
              <div className="space-y-5 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-cyan">Finance</span>
                </RevealAnimation>
                <div className="space-y-4">
                  <RevealAnimation delay={0.2}>
                    <h1>Manage and protect your wealth with confidence.</h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[550px]">
                      We combine modern technology with experienced advisors to help you plan for retirement, grow your
                      portfolio, and make smarter financial decisions.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="text-center md:text-left">
                  <LinkButton
                    href="/contact-us"
                    className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-lg">
                    Start managing
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="my-8">
              <HeroDivider />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <RevealAnimation delay={0.5}>
                <p className="max-w-[320px]">
                  “I finally feel in control of my financial future — and I barely have to lift a finger.”
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Image
                    src={Avatar1}
                    alt="author image"
                    className="bg-ns-yellow border-ns-yellow size-9 rounded-full border-2 dark:border-black"
                  />
                  <p className="text-tagline-2 text-secondary dark:text-accent">– Alex Monroe.</p>
                </div>
              </RevealAnimation>
            </div>
          </div>

          <HeroImages />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import gradient32 from '@public/images/ns-img-520.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="relative">
      <div className="lg:main-container relative z-10 mx-auto -mb-10 w-full px-5 md:-mb-8 lg:-mb-6 lg:px-0 xl:-mb-14 xl:max-w-[1440px]">
        <div className="bg-secondary dark:bg-background-8 relative z-10 overflow-hidden rounded-4xl py-[76px]">
          <RevealAnimation delay={0.3} direction="left" offset={100}>
            <figure className="cta-bg-gradient pointer-events-none absolute -top-[90%] -left-[30%] -z-10 size-[550px] select-none md:-top-[190%] md:-left-[30%] md:size-[1050px] lg:-top-[190%] lg:-left-[30%] xl:-left-[15%]">
              <Image src={gradient32} alt="gradient" />
            </figure>
          </RevealAnimation>
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-green">Let’s started</span>
            </RevealAnimation>
            <div className="space-y-6">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="mx-auto max-w-[830px] text-white">Ready to build real wealth?</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-accent/60 px-4 sm:px-0">Let’s take the guesswork out of your financial future.</p>
                </RevealAnimation>
              </div>
              <ul className="flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:gap-x-3">
                <RevealAnimation delay={0.4} direction="left" offset={50}>
                  <li className="w-full sm:w-auto">
                    <LinkButton
                      href="/signup"
                      className="btn btn-primary hover:btn-white btn-md w-[90%] border-0 sm:w-auto">
                      Sign up free
                    </LinkButton>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4} direction="right" offset={50}>
                  <li className="w-full sm:w-auto">
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-white hover:btn-primary btn-md dark:btn-transparent w-[90%] sm:w-auto">
                      Talk to a wealth coach
                    </LinkButton>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

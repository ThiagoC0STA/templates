import heroBottomImage from '@public/images/ns-img-171.png';
import gradient12 from '@public/images/ns-img-504.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
const Invitation = () => {
  return (
    <section className="mt-[50px] sm:mt-[100px] md:mt-[150px] lg:mt-[220px]">
      <div className="main-container">
        <div className="relative z-[20]">
          <div className="relative z-0">
            <div className="dark:bg-background-8 absolute -z-10 h-full w-full overflow-hidden rounded-[20px] bg-white">
              <RevealAnimation delay={0.5} direction="right" offset={100} start="top 10%">
                <figure className="pointer-events-none absolute -top-[110%] -right-[75%] -z-10 size-[1060px] rotate-[10deg] select-none sm:-top-[75%] md:-top-[65%] md:-right-[70%] md:rotate-[60deg] lg:-top-[170%] lg:-right-[40%]">
                  <Image src={gradient12} alt="gradient" />
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="px-6 py-10 sm:flex-1/2 sm:px-0 sm:py-6 sm:pl-10 md:py-10 lg:py-16 lg:pl-14">
                <div className="mx-auto mb-6 max-w-[340px] text-center sm:mx-0 sm:mb-10 sm:text-left md:mb-14 md:max-w-[420px]">
                  <RevealAnimation delay={0.1}>
                    <h5 className="lg:text-heading-5 md:text-heading-6 text-tagline-1 mb-3 sm:mb-5 md:mb-7">
                      Join thousands of people who trust NextSaaS to protect what matters most—affordably and
                      efficiently.
                    </h5>
                  </RevealAnimation>
                  <RevealAnimation delay={0.1}>
                    <p className="text-secondary dark:text-accent font-medium">Jhon Lee</p>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="text-tagline-2">Head of customer Success</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div className="text-center sm:text-left">
                    <LinkButton
                      href="/services"
                      className="text-tagline-2 btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md mx-auto w-[90%] font-medium md:mx-0 md:w-auto">
                      Learn More
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <div className="sm:flex-1/2 lg:pe-[42px] 2xl:pe-[200px]">
                <div className="relative h-full">
                  <RevealAnimation delay={0.4} direction="left" offset={100}>
                    <figure className="mx-auto max-w-[250px] max-md:flex max-md:items-center max-md:justify-center sm:max-w-[300px] md:absolute md:right-0 md:bottom-0 md:mx-0 md:max-w-[350px] lg:max-w-[525px]">
                      <Image src={heroBottomImage} alt="shape" className="h-full w-full" />
                    </figure>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Invitation.displayName = 'Invitation';
export default Invitation;

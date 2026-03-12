import ClientLogo1 from '@public/images/icons/client-logo-1.svg';
import ClientLogo2 from '@public/images/icons/client-logo-2.svg';
import ClientLogo3 from '@public/images/icons/client-logo-3.svg';
import ClientLogo4 from '@public/images/icons/client-logo-4.svg';
import ClientLogo5 from '@public/images/icons/client-logo-5.svg';
import ClientLogoDark1 from '@public/images/icons/client-logo-dark-1.svg';
import ClientLogoDark2 from '@public/images/icons/client-logo-dark-2.svg';
import ClientLogoDark3 from '@public/images/icons/client-logo-dark-3.svg';
import ClientLogoDark4 from '@public/images/icons/client-logo-dark-4.svg';
import ClientLogoDark5 from '@public/images/icons/client-logo-dark-5.svg';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import heroDotVectorBg from '@public/images/ns-img-161.svg';
import heroThumbnail from '@public/images/ns-img-162.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const clientLogos = [
  {
    src: ClientLogo1,
    darkSrc: ClientLogoDark1,
    alt: 'Client company logo 1',
  },
  {
    src: ClientLogo2,
    darkSrc: ClientLogoDark2,
    alt: 'Client company logo 2',
  },
  {
    src: ClientLogo3,
    darkSrc: ClientLogoDark3,
    alt: 'Client company logo 3',
  },
  {
    src: ClientLogo4,
    darkSrc: ClientLogoDark4,
    alt: 'Client company logo 4',
  },
  {
    src: ClientLogo5,
    darkSrc: ClientLogoDark5,
    alt: 'Client company logo 5',
  },
];

const Hero = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Hero Section">
      <div className="mx-auto max-w-[1440px]">
        <RevealAnimation delay={0.1}>
          <div className="relative top-4 h-auto overflow-hidden rounded-[20px] bg-linear-[180deg,_#B3C3DA_0%,_#93A5BE_100%] lg:top-8">
            <figure
              className="absolute inset-0 z-0 translate-x-3 animate-pulse lg:translate-x-4 xl:translate-x-[75px]"
              aria-hidden="true">
              <Image src={heroDotVectorBg} alt="Decorative background pattern" />
            </figure>
            <div className="main-container relative z-10">
              <div className="flex flex-col items-center justify-center gap-y-16 pt-36 md:flex-row md:pt-40 lg:pt-[150px] xl:pt-[170px]">
                <div>
                  <div className="mb-6 space-y-2 text-center md:mb-8 md:space-y-4 md:text-left">
                    <RevealAnimation delay={0.2}>
                      <h1 className="dark:text-secondary max-w-full lg:max-w-[507px]">Apps made for the future!</h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <p className="text-secondary/60 md:max-w-[429px]">
                        From concept to launch, we design and develop mobile and web apps that drive real results.
                      </p>
                    </RevealAnimation>
                  </div>
                  <div className="mb-10 flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:gap-x-4 md:justify-start lg:mb-14">
                    <div className="flex -space-x-3.5">
                      <RevealAnimation delay={0.2} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="bg-ns-yellow inline-block size-12 rounded-full ring-2 ring-white dark:ring-black"
                            src={avatar1}
                            alt="User avatar 1"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.3} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="bg-ns-red inline-block size-12 rounded-full ring-2 ring-white dark:ring-black"
                            src={avatar2}
                            alt="User avatar 2"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="bg-ns-green inline-block size-12 rounded-full ring-2 ring-white dark:ring-black"
                            src={avatar3}
                            alt="User avatar 3"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.5} direction="right" offset={50}>
                        <div className="text-tagline-3 inline-flex size-12 cursor-pointer items-center justify-center rounded-full bg-[#9DAEC6] font-medium text-white ring-2 ring-white dark:text-black dark:ring-black">
                          99+
                        </div>
                      </RevealAnimation>
                    </div>
                    <div>
                      <RevealAnimation delay={0.6} offset={40}>
                        <p className="text-secondary text-tagline-2 block text-left font-medium">Trusted by 20k+</p>
                      </RevealAnimation>
                      <RevealAnimation delay={0.7} offset={40}>
                        <p className="text-tagline-3 dark:text-secondary/60">Customers across the globe</p>
                      </RevealAnimation>
                    </div>
                  </div>
                  {/* btn-white */}
                  <RevealAnimation delay={0.8}>
                    <div className="mx-auto w-[95%] md:mx-0 md:w-full">
                      <LinkButton
                        href="/contact-us"
                        className="btn btn-white btn-xl hover:btn-secondary dark:btn-black dark:hover:btn-accent w-full md:w-auto"
                        aria-label="Book a free consultation call">
                        Book a free call
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.9}>
                  <figure className="w-full max-w-[643px]">
                    <Image src={heroThumbnail} alt="App showcase illustration" className="size-full object-cover" />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
      {/* Client Logos Section */}
      <aside className="main-container relative z-10 mt-[64px] lg:mt-[120px]" aria-label="Our Clients">
        <RevealAnimation delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:gap-x-4 lg:gap-x-8">
            {clientLogos.map((logo) => (
              <figure className="lg:ml-8 lg:min-w-36" key={logo.alt}>
                <Image src={logo.src} alt={logo.alt} className="inline-block lg:w-auto dark:hidden" />
                <Image src={logo.darkSrc} alt={logo.alt} className="hidden lg:w-auto dark:inline-block" />
              </figure>
            ))}
          </div>
        </RevealAnimation>
      </aside>
    </section>
  );
};

export default Hero;

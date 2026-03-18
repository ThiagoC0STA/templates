import avatar1Image from '@public/images/ns-avatar-1.png';
import avatar2Image from '@public/images/ns-avatar-2.png';
import avatar3Image from '@public/images/ns-avatar-3.png';
import services2Image from '@public/images/ns-img-46.png';
import services3Image from '@public/images/ns-img-47.png';
import services2DarkImage from '@public/images/ns-img-dark-25.png';
import services3DarkImage from '@public/images/ns-img-dark-26.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ServiceCardTwo = () => {
  return (
    <div className="main-container xl:pb-14">
      <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-[100px]">
        <div className="order-2 col-span-12 xl:order-1 xl:col-span-6">
          <div className="text-center xl:text-left">
            <div className="mb-14 space-y-3">
              <RevealAnimation delay={0.1}>
                <h3 className="mx-auto max-w-[509px] xl:mx-0">Instantaneous data insights and analytics</h3>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <p className="mx-auto max-w-[465px] xl:mx-0">
                  Instantaneous data insights and analytics refer to the real-time processing and interpretation of data
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div>
                <LinkButton
                  href="/services/instantaneous-data-insights-and-analytics"
                  className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md">
                  Read More
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="order-1 col-span-12 xl:order-2 xl:col-span-6">
          <div className="flex flex-row items-center justify-center gap-8 xl:justify-start">
            <RevealAnimation delay={0.4} direction="up">
              <figure className="h-auto w-full max-w-[350px] overflow-hidden rounded-[20px] xl:h-[345px]">
                <Image
                  src={services2Image}
                  alt="services-2"
                  className="h-full w-full object-fill dark:hidden"
                  priority
                />
                <Image src={services2DarkImage} alt="services-2" className="hidden w-full dark:block" priority />
              </figure>
            </RevealAnimation>

            <div className="mt-6 space-y-8 xl:mt-12">
              <RevealAnimation delay={0.5}>
                <figure className="h-auto w-full max-w-[233px] overflow-hidden rounded-[20px] xl:h-[186px]">
                  <Image
                    src={services3Image}
                    alt="services-3"
                    className="h-full w-full object-cover dark:hidden"
                    priority
                  />
                  <Image
                    src={services3DarkImage}
                    alt="services-3"
                    className="hidden size-full object-cover dark:block"
                    priority
                  />
                </figure>
              </RevealAnimation>

              <div className="flex flex-col space-y-4">
                <div className="flex -space-x-3.5">
                  <RevealAnimation delay={0.7} direction="right">
                    <Image
                      className="inline-block size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-4 ring-white dark:ring-black"
                      src={avatar1Image}
                      alt="Avatar 1"
                      width={44}
                      height={44}
                    />
                  </RevealAnimation>

                  <RevealAnimation delay={0.8} direction="right">
                    <Image
                      className="hidden size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#FFF_32.92%,#A585FF_91%] ring-4 ring-white sm:inline-block dark:ring-black"
                      src={avatar2Image}
                      alt="Avatar 2"
                      width={44}
                      height={44}
                    />
                  </RevealAnimation>

                  <RevealAnimation delay={0.9} direction="right">
                    <Image
                      className="relative z-0 inline-block size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-4 ring-white dark:ring-black"
                      src={avatar3Image}
                      alt="Avatar 3"
                      width={44}
                      height={44}
                    />
                  </RevealAnimation>

                  <RevealAnimation delay={1} direction="right">
                    <div className="bg-ns-green text-secondary/80 text-tagline-3 relative z-10 inline-flex size-11 items-center justify-center rounded-full font-medium ring-4 ring-white dark:ring-black">
                      99+
                    </div>
                  </RevealAnimation>
                </div>

                <RevealAnimation delay={1.1}>
                  <div>
                    <p className="text-heading-6 text-secondary dark:text-accent font-normal">Trusted by 20k+</p>
                    <p className="text-tagline-2">Customers across the globe</p>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCardTwo.displayName = 'ServiceCardTwo';
export default ServiceCardTwo;

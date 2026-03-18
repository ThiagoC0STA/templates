import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import services2 from '@public/images/ns-img-104.png';
import services1 from '@public/images/ns-img-201.png';
import services3 from '@public/images/ns-img-47.png';
import services4 from '@public/images/ns-img-48.png';
import balance from '@public/images/ns-img-51.svg';
import services1Dark from '@public/images/ns-img-dark-138.png';
import services4Dark from '@public/images/ns-img-dark-27.png';
import balanceDark from '@public/images/ns-img-dark-75.png';
import services2Dark from '@public/images/ns-img-dark-76.png';
import services3Dark from '@public/images/ns-img-dark-77.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Progress from './Progress';

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 space-y-[100px] overflow-hidden py-16 md:py-[100px] xl:py-[200px]">
      <div className="main-container space-y-20 sm:space-y-16 md:space-y-[80px] lg:space-y-[100px]">
        <div className="mx-auto w-full max-w-[650px] space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <h2>Manage the full risk lifecycle with ease</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              An in-depth overview of cryptocurrency solutions reveals a rapidly evolving ecosystem designed to
              revolutionize traditional financial systems.
            </p>
          </RevealAnimation>
        </div>
        {/* services-1 */}
        <div className="grid grid-cols-12 items-center gap-y-6 md:gap-y-14 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[595px]">
                <Image src={services1} alt="services-1" className="h-full w-full object-cover dark:hidden" />
                <Image src={services1Dark} alt="services-1" className="hidden h-full w-full object-cover dark:block" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="text-center lg:text-left">
              <div className="mb-8 space-y-1.5 sm:space-y-3 lg:mb-14">
                <RevealAnimation delay={0.2}>
                  <h3 className="mx-auto max-w-[509px] lg:mx-0">Policy &amp; program management</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>Centralize governance and automate policy workflows.</p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/services/policy-and-program-management"
                    className="btn dark:btn-accent hover:btn-primary btn-secondary btn-md service-button mx-auto w-[85%] md:w-auto">
                    Read More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        {/* services-2 */}
        <div className="grid grid-cols-12 items-center gap-y-3 sm:gap-y-5 md:gap-y-10 lg:gap-20 xl:gap-[100px]">
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-6">
            <div className="space-y-8 text-center md:space-y-14 lg:text-left">
              <div className="space-y-1.5 sm:space-y-3">
                <RevealAnimation delay={0.2}>
                  <h3 className="mx-auto w-full lg:mx-0 lg:max-w-[498px]">
                    Business continuity <br className="hidden lg:block" />
                    management
                  </h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto lg:mx-0 lg:max-w-[412px]">
                    Ensure operational resilience and minimize disruptions.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/services/business-continuity-management"
                    className="btn dark:btn-accent hover:btn-primary btn-secondary btn-md service-button mx-auto w-[85%] md:w-auto">
                    Read More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="order-1 col-span-12 lg:order-2 lg:col-span-6">
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row lg:items-start lg:justify-start lg:gap-8">
              <RevealAnimation delay={0.1}>
                <figure className="w-full max-w-[250px] overflow-hidden rounded-[20px] lg:max-w-[350px]">
                  <Image src={services2} alt="services-2" className="h-full w-full object-cover dark:hidden" />
                  <Image
                    src={services2Dark}
                    alt="services-2"
                    className="hidden h-full w-full object-cover dark:block"
                  />
                </figure>
              </RevealAnimation>
              <div className="flex flex-row items-center gap-5 space-y-8 max-[400px]:flex-col max-[400px]:gap-2 sm:mt-12 sm:flex-col sm:gap-0">
                <RevealAnimation delay={0.2}>
                  <figure className="w-full max-w-[200px] overflow-hidden rounded-[20px] lg:max-w-[233px]">
                    <Image src={services3} alt="services-3" className="h-full w-full object-cover dark:hidden" />
                    <Image
                      src={services3Dark}
                      alt="services-3"
                      className="hidden h-full w-full object-cover dark:block"
                    />
                  </figure>
                </RevealAnimation>
                <div className="flex flex-col space-y-4">
                  <div className="flex -space-x-2 max-[400px]:justify-center sm:-space-x-3.5">
                    <RevealAnimation delay={0.3}>
                      <figure>
                        <Image
                          className="inline-block size-7 shrink-0 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-4 ring-white sm:size-11"
                          src={avatar1}
                          alt="Avatar 1"
                        />
                      </figure>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <figure>
                        <Image
                          src={avatar2}
                          alt="Avatar 2"
                          className="inline-block size-7 shrink-0 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-4 ring-white sm:size-11"
                        />
                      </figure>
                    </RevealAnimation>
                    <RevealAnimation delay={0.5}>
                      <figure>
                        <Image
                          src={avatar3}
                          alt="Avatar 3"
                          className="inline-block size-7 shrink-0 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-4 ring-white sm:size-11"
                        />
                      </figure>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6}>
                      <div className="bg-ns-green text-secondary/80 text-tagline-3 relative z-10 inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full font-medium ring-4 ring-white sm:size-11">
                        99+
                      </div>
                    </RevealAnimation>
                  </div>
                  <RevealAnimation delay={0.7}>
                    <div className="max-[400px]:text-center">
                      <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                        Trusted by 20k+
                      </p>
                      <p className="text-tagline-2">Customers across the globe</p>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services-3 */}
        <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-10">
          <div className="col-span-12 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[595px] xl:mx-0">
              <RevealAnimation delay={0.4} direction="left" offset={100} useSpring duration={2}>
                <figure
                  data-progress-item=""
                  data-progress-value={88}
                  data-progress-duration="2.5"
                  className="shadow-1 dark:bg-background-6 absolute bottom-10 -left-0 z-[1] max-h-[101px] min-h-[100px] min-w-[288px] space-y-2 rounded-xl bg-white p-4 xl:-left-12">
                  <figcaption className="flex justify-between gap-2">
                    <span className="text-tagline-1 dark:text-accent font-normal"> Today&apos;s Revenue </span>
                    <p className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                      $ <NumberAnimation number={53224} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                    </p>
                  </figcaption>
                  <Progress />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.1}>
                <figure className="mx-auto max-h-[995px] w-full max-w-[495px] overflow-hidden rounded-[20px] xl:mx-0">
                  <Image src={services4} alt="services-4" className="h-full w-full object-cover dark:hidden" />
                  <Image
                    src={services4Dark}
                    alt="services-4"
                    className="hidden h-full w-full object-cover dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="right" offset={100} useSpring duration={2}>
                <figure className="shadow-9 absolute right-0 -bottom-8 z-[1] hidden overflow-hidden rounded-xl sm:block xl:right-20 xl:bottom-10">
                  <Image src={balance} alt="balance" className="h-full w-full dark:hidden" />
                  <Image src={balanceDark} alt="balance" className="hidden h-full w-full dark:block" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6">
            <div className="services-content-4 text-center xl:text-left">
              <div className="mb-8 space-y-3 lg:mb-14">
                <RevealAnimation delay={0.2}>
                  <h3 className="mx-auto max-w-[509px] xl:mx-0">Cost allocation &amp; calculation</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto max-w-[465px] xl:mx-0">
                    Accurately calculate exposure and allocate risk-related costs.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/services/cost-allocation-and-calculation"
                    className="btn btn-secondary btn-md dark:btn-accent hover:btn-primary mx-auto w-[85%] md:w-auto">
                    Read More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

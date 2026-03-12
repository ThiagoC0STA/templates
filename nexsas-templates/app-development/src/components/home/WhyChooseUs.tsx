import services1 from '@public/images/ns-img-144.png';
import timelineVector from '@public/images/ns-img-166.png';
import abstractBg from '@public/images/ns-img-167.png';
import servicesCard1 from '@public/images/ns-img-168.png';
import gradient40 from '@public/images/ns-img-528.png';
import services1Dark from '@public/images/ns-img-dark-100.png';
import servicesCard1Dark from '@public/images/ns-img-dark-102.png';
import timelineVectorDark from '@public/images/ns-img-dark-114.png';
import abstractBgDark from '@public/images/ns-img-dark-115.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const WhyChooseUs = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="mx-5 max-w-[1440px] sm:mx-auto">
        <div className="bg-background-3 dark:bg-background-7 rounded-[30px] py-14 md:py-[100px]">
          <div className="main-container">
            <div className="grid grid-cols-12 items-stretch justify-center gap-y-8 md:gap-x-8">
              {/* card-1 */}
              <RevealAnimation delay={0.2}>
                <div className="relative col-span-12 h-full overflow-hidden rounded-[20px] lg:col-span-8">
                  <RevealAnimation delay={0.5} direction="up" offset={90}>
                    <figure className="pointer-events-none absolute -top-[32%] -right-[55%] -z-0 size-[385px] -rotate-[82deg] select-none min-[575px]:-right-[21%] lg:-right-[24%] xl:-right-[18%]">
                      <Image
                        src={gradient40}
                        alt="why choice us"
                        className="h-full w-full object-cover object-center"
                      />
                    </figure>
                  </RevealAnimation>
                  <div className="bg-background-1 dark:bg-background-6 flex h-full flex-col items-center justify-between space-y-14 px-7 py-8 text-center lg:items-start lg:px-14 lg:py-[42px] lg:text-left">
                    <div className="">
                      <span className="badge badge-primary-light mb-5"> Why choose NextSaaS? </span>
                      <h2 className="max-w-[564px]">More than developers We&apos;re your tech Partners</h2>
                    </div>
                    <div>
                      <LinkButton
                        href="/affiliate-policy"
                        className="btn btn-secondary btn-lg xl:btn-xl dark:btn-transparent dark:hover:btn-accent hover:btn-white">
                        Let&apos;s talk strategy
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-2 */}
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 h-full md:col-span-6 lg:col-span-4">
                  <div className="bg-background-1 dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] p-8">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Strategy first approach</h3>
                      <p className="md:max-w-[252px]">We align every build with your long term business goals.</p>
                    </div>
                    <div className="bg-background-3 dark:bg-background-7 relative flex min-h-[170px] max-w-[344px] flex-col justify-between space-y-2.5 rounded-2xl px-[29px] py-4 pl-[70px]">
                      <figure className="h-full w-full">
                        <Image
                          src={timelineVector}
                          alt="services"
                          className="block h-full w-full object-cover dark:hidden"
                        />
                        <Image
                          src={timelineVectorDark}
                          alt="services"
                          className="hidden h-full w-full object-cover dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-3 */}
              <RevealAnimation delay={0.5}>
                <div className="col-span-12 h-full md:col-span-6 lg:col-span-4">
                  <div className="dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] bg-white p-8">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Reliable &amp; scalable code</h3>
                      <p className="md:max-w-[252px]">Our engineers deliver future-proof, maintainable apps.</p>
                    </div>
                    <div className="flex min-h-[170px] items-center">
                      <figure className="w-full max-w-[345px] overflow-hidden rounded-2xl">
                        <Image
                          src={services1}
                          alt="services"
                          className="block h-full w-full object-cover dark:hidden"
                        />
                        <Image
                          src={services1Dark}
                          alt="services"
                          className="hidden h-full w-full object-cover dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-4 */}
              <RevealAnimation delay={0.7}>
                <div className="col-span-12 h-full md:col-span-6 lg:col-span-4">
                  <div className="dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] bg-white p-8">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Full cycle testing</h3>
                      <p className="md:max-w-[252px]">Qa is embedded throughout the lifecycle—not just at the end.</p>
                    </div>
                    <div className="flex flex-1 items-center">
                      <figure className="min-h-[223px] w-full max-w-[345px] overflow-hidden rounded-2xl">
                        <Image
                          src={abstractBg}
                          alt="services"
                          className="block h-full w-full object-cover dark:hidden"
                        />
                        <Image
                          src={abstractBgDark}
                          alt="services"
                          className="hidden h-full w-full object-cover dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-5 */}
              <RevealAnimation delay={0.9}>
                <div className="col-span-12 h-full md:col-span-6 lg:col-span-4">
                  <div className="dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] bg-white p-8">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Transparent communication</h3>
                      <p className="md:max-w-[252px]">Weekly updates, live demo calls, and real-time collaboration.</p>
                    </div>
                    <div className="flex flex-1 items-center">
                      <figure className="min-h-[190px] w-full max-w-[345px]">
                        <Image
                          src={servicesCard1}
                          alt="services"
                          className="block h-full w-full object-cover dark:hidden"
                        />
                        <Image
                          src={servicesCard1Dark}
                          alt="services"
                          className="hidden h-full w-full object-cover dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

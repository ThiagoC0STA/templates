import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import arrowUpRightLight from '@public/images/icons/arrow-up-right-light.svg';
import arrowUpRight from '@public/images/icons/arrow-up-right.svg';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const services = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(0, 5);

const OurServices = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.3}>
            <span className="badge badge-green mb-3.5 md:mb-5">Our services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <h2>
              In-depth overview of crypto <br className="hidden md:block" />
              currency <span className="text-primary-500 inline-block">solutions.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <p className="mx-auto lg:max-w-[650px]">
              An in-depth overview of cryptocurrency solutions reveals a rapidly evolving ecosystem designed to
              revolutionize traditional financial systems.
            </p>
          </RevealAnimation>
        </div>
        {/* services */}
        <div className="mb-10 grid grid-cols-12 gap-y-8 sm:gap-6 md:mb-14 md:gap-[42px]">
          {/* First row - 2 services */}
          {services.slice(0, 2).map((service, index) => (
            <RevealAnimation delay={0.6 + index * 0.1} key={service?.slug}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <div className="dark:bg-background-6 flex flex-col items-center gap-8 overflow-hidden rounded-[20px] bg-white px-5 py-8 md:flex-row md:px-8 lg:py-14">
                  <div className="w-full md:w-1/2 lg:w-auto">
                    <div className="mb-4 inline-block md:mb-6">
                      <span className={`${service?.icon} text-secondary text-[52px] dark:text-white`} />
                    </div>
                    <h3 className="text-heading-6 xl:text-heading-5 md:text-heading-6 mb-2 font-normal">
                      {service?.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 max-w-[275px] md:mb-11">{service?.description}</p>
                    <div className="flex items-center justify-start">
                      <LinkButton
                        href={`/services/${service?.slug}`}
                        className="btn btn-md btn-accent dark:btn-white-dark dark:hover:btn-accent hover:btn-secondary block w-full md:inline-block md:w-auto">
                        View Service
                      </LinkButton>
                    </div>
                  </div>
                  <figure className="w-full overflow-hidden md:w-1/2 lg:max-w-[260px]">
                    <Image
                      src={service?.image}
                      alt={service?.imgAlt}
                      width={260}
                      height={223}
                      className="inline-block h-auto w-full rounded-[12px] object-cover dark:hidden"
                    />
                    <Image
                      src={service?.imageDark}
                      alt={service?.imgAlt}
                      width={260}
                      height={223}
                      className="hidden h-auto w-full rounded-[12px] object-cover dark:inline-block"
                    />
                  </figure>
                </div>
              </div>
            </RevealAnimation>
          ))}

          {/* 3rd service card */}
          <RevealAnimation delay={0.8} key={services[2]?.slug}>
            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
              <div className="group dark:bg-background-6 flex h-full flex-col items-center overflow-hidden rounded-[20px] bg-white px-5 py-8 md:px-8 md:py-14">
                <div className="w-full">
                  <div className="mb-4 inline-block md:mb-6">
                    <span className={cn(services[2]?.icon, 'text-secondary text-[52px] dark:text-white')} />
                  </div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-2 font-normal">{services[2]?.title}</h3>
                  <p className="line-clamp-3">{services[2]?.description}</p>

                  <div className="mt-8 mb-8 flex flex-col space-y-3 md:mt-12 md:mb-14">
                    <div className="flex -space-x-3.5">
                      <Image
                        className="ring-ns-yellow dark:ring-background-5 inline-block size-[38px] rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-2"
                        src={avatar1}
                        alt="Avatar 1"
                      />
                      <Image
                        className="ring-ns-green dark:ring-background-5 inline-block size-[38px] rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-2"
                        src={avatar2}
                        alt="Avatar 2"
                      />
                      <Image
                        className="ring-ns-red dark:ring-background-5 relative z-0 inline-block size-[38px] rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-2"
                        src={avatar3}
                        alt="Avatar 3"
                      />
                      <div className="ring-primary-400 dark:ring-background-5 text-secondary/80 text-tagline-3 relative z-10 inline-flex size-[38px] items-center justify-center overflow-hidden rounded-full bg-white font-medium ring-2 dark:bg-black">
                        <figure>
                          <Image
                            src={arrowUpRight}
                            alt="Arrow Icon"
                            className="absolute top-1/2 left-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:opacity-0 dark:hidden"
                          />
                          <Image
                            src={arrowUpRight}
                            alt="Arrow Icon"
                            className="absolute inline-block -translate-x-12 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[14px] group-hover:-translate-y-[49%] group-hover:opacity-100 dark:hidden"
                          />
                          <Image
                            src={arrowUpRightLight}
                            alt="Arrow Icon"
                            className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:opacity-0 dark:inline"
                          />
                          <Image
                            src={arrowUpRightLight}
                            alt="Arrow Icon"
                            className="absolute hidden -translate-x-12 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[14px] group-hover:-translate-y-[49%] group-hover:opacity-100 dark:inline"
                          />
                        </figure>
                      </div>
                    </div>
                    <p className="text-tagline-2">
                      <span className="text-secondary mb-1 block text-left text-xl leading-[1.5] font-normal dark:text-white">
                        Trusted by 20k+
                      </span>
                      Customers across the globe
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-start justify-start">
                  <LinkButton
                    href={`/services/${services[2]?.slug}`}
                    className="btn btn-md btn-accent dark:btn-white-dark dark:hover:btn-accent hover:btn-secondary block w-full md:inline-block md:w-auto">
                    View Service
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* last two services cards */}
          {services.slice(3, 5).map((service, index) => (
            <RevealAnimation delay={0.6 + index * 0.1} key={service.slug}>
              <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                <div
                  className={`${
                    index === 0 ? 'bg-secondary dark:bg-ns-green' : 'group dark:bg-background-6 bg-white'
                  } flex h-full flex-col items-center overflow-hidden rounded-[20px] px-5 py-8 md:px-8 md:py-14`}>
                  <div className="w-full">
                    <div className="mb-4 inline-block md:mb-6">
                      <span
                        className={`${service.icon || 'ns-shape-3'} text-secondary text-[52px] ${
                          index === 0 ? 'dark:text-secondary text-white' : 'dark:text-white'
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-heading-6 sm:text-heading-5 mb-2 font-normal ${
                        index === 0 ? 'dark:text-secondary text-white' : ''
                      }`}>
                      {service.title || service.slug}
                    </h3>
                    <p
                      className={`line-clamp-3 ${index === 0 ? 'text-accent/80 dark:text-secondary/80' : ''} ${index === 0 ? 'mb-0' : 'mb-6 md:mb-11'}`}>
                      {service.description}
                    </p>

                    <figure className="mt-8 flex w-full flex-col overflow-hidden rounded-[10px] md:mb-14 md:w-1/2 lg:w-full lg:max-w-[338px]">
                      <Image
                        src={service?.image}
                        alt={service?.imgAlt}
                        width={338}
                        height={110}
                        className="inline-block h-auto w-full object-cover dark:hidden"
                      />
                      <Image
                        src={service?.imageDark}
                        alt={service?.imgAlt}
                        width={338}
                        height={110}
                        className="hidden h-auto w-full object-cover dark:inline-block"
                      />
                    </figure>
                  </div>
                  <div className="flex w-full items-start justify-start">
                    <LinkButton
                      href={`/services/${service.slug}`}
                      className={`btn btn-md ${
                        index === 0
                          ? 'btn-accent dark:bg-ns-green dark:border-stroke-7 dark:hover:btn-accent hover:btn-primary'
                          : 'btn-accent dark:btn-white-dark dark:hover:btn-accent hover:btn-secondary'
                      } block w-full md:inline-block md:w-auto`}>
                      View Service
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
      <RevealAnimation delay={1.1}>
        <div className="flex justify-center">
          <LinkButton
            href="/services"
            className="btn btn-lg md:btn-xl dark:btn-transparent btn-white hover:btn-primary block w-full md:inline-block md:w-auto">
            View All Services
          </LinkButton>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default OurServices;

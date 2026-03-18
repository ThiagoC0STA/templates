import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import timeIncrease from '@public/images/ns-img-100.png';
import controlCard from '@public/images/ns-img-101.png';
import revenue from '@public/images/ns-img-102.png';
import balance from '@public/images/ns-img-103.png';
import earning from '@public/images/ns-img-104.png';
import dailyPayment from '@public/images/ns-img-105.png';
import timeIncreaseDark from '@public/images/ns-img-dark-72.png';
import controlCardDark from '@public/images/ns-img-dark-73.png';
import revenueDark from '@public/images/ns-img-dark-74.png';
import balanceDark from '@public/images/ns-img-dark-75.png';
import earningDark from '@public/images/ns-img-dark-76.png';
import dailyPaymentDark from '@public/images/ns-img-dark-77.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[60px] lg:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Enterprise-grade security &amp; intelligence</h2>
          </RevealAnimation>
        </div>
        <div className="space-y-[42px]">
          <RevealAnimation delay={0.3}>
            <div className="border-stroke-1 bg-background-1 dark:bg-background-6 dark:border-stroke-8 rounded-[20px] border p-5 md:p-8 lg:p-[42px]">
              <div className="grid grid-cols-12 items-center justify-between gap-y-8 md:gap-14 lg:gap-20 xl:gap-[100px]">
                <div className="col-span-12 md:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="lg:text-heading-3 text-heading-5">Big data consulting</h3>
                      <p className="lg:text-tagline-1 text-tagline-2 w-full max-w-[410px]">
                        Utilize comprehensive data security frameworks to effectively safeguard sensitive information
                        from unauthorized access and breaches.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/our-services/big-data-consulting"
                        className="btn hover:btn-secondary dark:hover:btn-white btn-primary btn-md mx-auto block w-[90%] sm:inline-block sm:w-auto">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-center gap-5 md:justify-end lg:gap-8">
                    <figure className="w-full max-w-[200px] overflow-hidden rounded-2xl xl:max-w-[233px]">
                      <Image src={timeIncrease} alt="time increase" className="size-full object-cover dark:hidden" />
                      <Image
                        src={timeIncreaseDark}
                        alt="time increase"
                        className="hidden size-full object-cover dark:block"
                      />
                    </figure>
                    <figure className="w-full max-w-[200px] overflow-hidden rounded-2xl xl:max-w-[350px]">
                      <Image src={controlCard} alt="control car" className="size-full object-cover dark:hidden" />
                      <Image
                        src={controlCardDark}
                        alt="control card"
                        className="hidden size-full object-cover dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="border-stroke-1 bg-background-1 dark:bg-background-6 dark:border-stroke-8 rounded-[20px] border p-5 md:p-8 lg:p-[42px]">
              <div className="grid grid-cols-12 items-center justify-between gap-y-8 md:gap-14 lg:gap-20 xl:gap-[100px]">
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-center gap-5 md:gap-8">
                    <figure className="h-full max-h-[317px] w-full max-w-[200px] overflow-hidden rounded-2xl xl:max-w-[326px]">
                      <Image src={revenue} alt="revenue" className="size-full object-cover dark:hidden" />
                      <Image src={revenueDark} alt="revenue" className="hidden size-full object-cover dark:block" />
                    </figure>
                    <figure className="h-full max-h-[178px] w-full max-w-[200px] overflow-hidden rounded-2xl xl:max-w-[255px]">
                      <Image src={balance} alt="balance" className="size-full object-cover dark:hidden" />
                      <Image src={balanceDark} alt="balance" className="hidden size-full object-cover dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="lg:text-heading-3 text-heading-5">Machine learning &amp; AI</h3>
                      <p className="lg:text-tagline-1 text-tagline-2 w-full max-w-[493px]">
                        Utilize advanced predictive analytics to proactively identify potential threats before they
                        escalate. by analyzing patterns and trends in data.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/our-services/machine-learning-and-ai"
                        className="btn btn-white dark:btn-transparent hover:btn-primary btn-md mx-auto block w-[90%] sm:inline-block sm:w-auto">
                        View more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="border-stroke-1 bg-background-1 dark:bg-background-6 dark:border-stroke-8 rounded-[20px] border p-5 md:p-8 lg:p-[42px]">
              <div className="grid grid-cols-12 items-center justify-between gap-y-8 md:gap-14 lg:gap-20 xl:gap-[100px]">
                <div className="col-span-12 md:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="lg:text-heading-3 text-heading-5">Business analysis</h3>
                      <p className="lg:text-tagline-1 text-tagline-2 w-full max-w-[380px]">
                        Continuously monitor for vulnerabilities and implement proactive measures to prevent cyber
                        attacks before they can occur.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/our-services/business-analysis"
                        className="btn dark:btn-transparent btn-white btn-md hover:btn-primary mx-auto block w-[90%] sm:inline-block sm:w-auto">
                        View more
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="flex flex-col items-start gap-5 sm:flex-row md:gap-8">
                    <figure className="h-full max-h-[345px] w-full overflow-hidden rounded-2xl sm:max-w-[200px] xl:max-w-[350px]">
                      <Image src={earning} alt="earning" className="size-full sm:object-cover dark:hidden" />
                      <Image src={earningDark} alt="earning" className="hidden size-full sm:object-cover dark:block" />
                    </figure>
                    <div className="space-y-8">
                      <figure className="h-full max-h-[190px] w-full overflow-hidden rounded-2xl sm:max-w-[200px] xl:max-w-[286px]">
                        <Image
                          src={dailyPayment}
                          alt="daily payment"
                          className="size-full sm:object-cover dark:hidden"
                        />
                        <Image
                          src={dailyPaymentDark}
                          alt="daily payment"
                          className="hidden size-full sm:object-cover dark:block"
                        />
                      </figure>
                      <div>
                        <div className="space-y-4">
                          <div className="flex cursor-pointer justify-center -space-x-2 sm:justify-start sm:-space-x-3.5">
                            <Image
                              className="bg-ns-green inline-block size-7 shrink-0 rounded-full ring-4 ring-white sm:size-11 dark:ring-black"
                              src={avatar1}
                              alt="Avatar 1"
                            />
                            <Image
                              className="bg-ns-green inline-block size-7 shrink-0 rounded-full ring-4 ring-white sm:size-11 dark:ring-black"
                              src={avatar2}
                              alt="Avatar 2"
                            />
                            <Image
                              className="bg-ns-green relative z-0 inline-block size-7 shrink-0 rounded-full ring-4 ring-white sm:size-11 dark:ring-black"
                              src={avatar3}
                              alt="Avatar 3"
                            />
                            <div className="bg-ns-green text-secondary/80 text-tagline-3 relative z-10 inline-flex size-7 shrink-0 items-center justify-center rounded-full font-medium ring-4 ring-white sm:size-11 dark:ring-black">
                              99+
                            </div>
                          </div>
                          <div className="text-center sm:text-left">
                            <p className="text-secondary dark:text-accent font-medium">Trusted by 20k+</p>
                            <p className="text-tagline-2 font-normal">Customers across the globe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;

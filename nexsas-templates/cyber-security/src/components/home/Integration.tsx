import figma from '@public/images/icons/figma.svg';
import shopify from '@public/images/icons/shopify.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import tiktok from '@public/images/icons/tiktok.svg';
import zapier from '@public/images/icons/zapier.svg';
import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const integrations = [
  { id: 1, src: zapier, alt: 'Zapier', category: 'Communication' },
  { id: 2, src: snapchat, alt: 'Snapchat', category: 'Messaging App' },
  { id: 3, src: shopify, alt: 'Shopify', category: 'e-commerce' },
  { id: 4, src: figma, alt: 'Figma', category: 'Design Tool' },
  { id: 5, src: slack, alt: 'Slack', category: 'Communication' },
  { id: 6, src: tiktok, alt: 'Tiktok', category: 'Video Tool' },
];

const Integration = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="border-stroke-1 dark:border-stroke-5 dark:bg-background-5 bg-background-2 relative z-10 overflow-hidden rounded-[25px] border py-[50px] sm:py-[100px]">
          <div className="mb-[50px] space-y-5 text-center sm:mb-[70px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Integrations</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto max-w-[300px] sm:mx-0 sm:max-w-full">Link up with your favorite tools.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto w-full max-w-[300px] sm:max-w-[510px]">
                  We assist startups in standing out with exceptional messaging that effectively engages their audience.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div>
            <div className="mx-auto grid grid-cols-12 gap-y-6 px-6 md:max-w-[700px] md:gap-6 lg:max-w-[852px] lg:gap-8 lg:px-0">
              {integrations.map((integration, index) => (
                <RevealAnimation key={integration.id} delay={0.4 + index * 0.1}>
                  <div className="group col-span-12 md:col-span-6">
                    <Link href="/integration">
                      <div className="dark:bg-background-8 group-hover:shadow-1 flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-white p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] sm:rounded-2xl sm:p-8">
                        <div className="flex items-center gap-4">
                          <figure className="transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12">
                            <span className="size-14 overflow-hidden">
                              <Image src={integration.src} alt={integration.alt} />
                            </span>
                          </figure>
                          <div className="transform transition-transform duration-500 group-hover:translate-x-1.5 group-hover:transition-transform">
                            <p className="lg:text-heading-5 text-heading-6 text-secondary dark:text-accent font-normal">
                              {integration.alt}
                            </p>
                            <p>{integration.category}</p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-background-4 dark:bg-background-9 dark:group-hover:bg-primary-500 group-hover:bg-secondary relative flex size-10 items-center justify-center overflow-hidden rounded-full transition-all duration-[600ms] ease-in-out sm:size-14">
                            <span className="sr-only">Arrow Icon</span>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="absolute size-5 -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100 sm:size-6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.75 12H20.25"
                                className="stroke-black transition-colors duration-700 group-hover:stroke-white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.5 5.25L20.25 12L13.5 18.75"
                                className="stroke-black transition-colors duration-700 group-hover:stroke-white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="absolute size-5 translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0 sm:size-6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.75 12H20.25"
                                className="stroke-black transition-colors duration-700 dark:stroke-white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.5 5.25L20.25 12L13.5 18.75"
                                className="stroke-black transition-colors duration-700 dark:stroke-white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
          {/* bg gradient overlay*/}
          <RevealAnimation delay={1} direction="right">
            <div className="pointer-events-none absolute -right-[30%] -bottom-[50%] -z-10 h-full w-[840px] rotate-[353deg] opacity-70 select-none">
              <Image src={gradient4} alt="integrations bg" className="rotate-x-[180deg]" />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;

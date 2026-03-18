import { CheckIcon } from '@/icons';
import whyUs from '@public/images/ns-img-209.png';
import gradient5 from '@public/images/ns-img-497.png';
import whyUsDark from '@public/images/ns-img-dark-142.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const whyUsData = [
  {
    id: '1',
    title: 'Fast, paperless quotes and digital claims',
  },
  {
    id: '2',
    title: 'Expert advisors, real-time support',
  },
  {
    id: '3',
    title: 'Affordable rates tailored to your life',
  },
];

const WhyUs = () => {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="bg-secondary relative z-0 mx-auto grid max-w-max grid-cols-12 items-center gap-y-10 overflow-hidden rounded-[32px] px-6 py-8 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:mx-0 lg:max-w-full lg:gap-10 lg:px-14 lg:py-14">
          <RevealAnimation delay={0.5} direction="up" offset={200} start="top 10%">
            <figure className="pointer-events-none absolute -top-[54%] -right-[67%] -z-10 size-[600px] -rotate-[20deg] select-none md:-top-[47%] md:-right-[37%] lg:-top-[63%] lg:-right-[22%] xl:-top-[46%] xl:-right-[15%] xl:size-[650px]">
              <Image src={gradient5} alt="gradient" />
            </figure>
          </RevealAnimation>
          <div className="col-span-12 space-y-10 md:space-y-14 lg:col-span-6 xl:col-span-5">
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-1.5 sm:space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="text-white">Why Choose NextSaaS?</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-accent/60">Track key indicators, spot trends early, and turn data into action.</p>
                </RevealAnimation>
              </div>
              <ul className="mx-auto flex max-w-xl flex-row flex-wrap items-center gap-2 sm:justify-center sm:gap-4 lg:mx-0 lg:max-w-full lg:flex-col lg:flex-nowrap lg:items-start lg:justify-start lg:gap-y-4">
                {whyUsData.map((item, index) => (
                  <RevealAnimation delay={0.3 + index * 0.1} key={item.id}>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <span className="size-6 rounded-full bg-white/15">
                        <CheckIcon className="dark:fill-white" />
                      </span>
                      <span className="text-accent/60 sm:text-tagline-1 text-tagline-2">{item.title}</span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
            <RevealAnimation delay={0.6}>
              <div className="text-center lg:text-left">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-dark btn-base hover:btn-primary mx-auto inline-block w-[85%] border-0 font-medium md:mx-0 md:w-auto">
                  Talk to an Advisor
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <RevealAnimation delay={0.7} offset={100}>
              <figure className="mx-auto flex w-full max-w-[350px] items-center justify-center lg:max-w-[595px]">
                <Image src={whyUs} alt="whyUs-image" className="h-full w-full dark:hidden" />
                <Image src={whyUsDark} alt="whyUs-image" className="hidden dark:block" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

import { cn } from '@/utils/cn';
import holdMobile from '@public/images/ns-img-206.png';
import gradient11 from '@public/images/ns-img-503.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Flexible & user-friendly',
    description: 'Designed for freelancers, startups, and large enterprises alike.',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'AI-Powered insights',
    description: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: 3,
    icon: 'ns-shape-52',
    title: 'Cloud-based & secure',
    description: 'Get access to fair rates with zero hidden fees or surprises.',
  },
  {
    id: 4,
    icon: 'ns-shape-35',
    title: 'Fast pre-approvals',
    description: 'Know where you stand quickly—get pre-approved in hours, not days.',
  },
  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Simple process',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: 6,
    icon: 'ns-shape-27',
    title: 'Free 3-month trial',
    description: 'Try our service risk-free before you commit! Enjoy a trial period with no credit card',
  },
];

const WhyUs = () => {
  return (
    <section className="bg-background-4 dark:bg-background-6 py-16 md:py-20 lg:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="dark:bg-background-8 relative overflow-hidden rounded-4xl bg-white px-6 pt-[100px] lg:px-14">
          <RevealAnimation delay={0.1} direction="right" offset={150}>
            <figure className="pointer-events-none absolute -top-[14%] -right-[20%] -z-0 rotate-[247deg] select-none min-[445px]:-top-[17%] min-[500px]:-top-[20%] sm:-top-[22%] md:-top-[65%] md:-right-[36%] lg:-top-[75%] 2xl:-top-[65%]">
              <Image
                src={gradient11}
                alt="Investment platform interface showing key features"
                className="inline-block"
              />
            </figure>
          </RevealAnimation>
          <div className="relative z-10 space-y-[70px]">
            <div className="space-y-3 md:w-full">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-green-v2 mb-5">&nbsp;Why choose NextSaaS?</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 id="features-heading" className="max-w-[571px]">
                  Why our software is the smart choice
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="max-w-[448px] md:w-full">
                  Discover a platform designed to simplify your financial journey while maximizing long-term growth.
                </p>
              </RevealAnimation>
            </div>

            <div className="mx-auto flex max-w-[1178px] flex-col items-center gap-10 lg:flex-row lg:gap-0">
              <div className="order-first flex w-full flex-col gap-8 px-2 sm:px-0 md:flex-row lg:max-w-[300px] lg:flex-col">
                {features.slice(0, 3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="left" offset={100}>
                    <div className="space-y-2 md:space-y-3">
                      <div className="inline-block overflow-hidden">
                        <span className={`${feature.icon} text-secondary dark:text-accent text-[36px]`}> </span>
                      </div>
                      <div>
                        <h3 className="text-tagline-1 text-secondary dark:text-accent font-medium">{feature.title}</h3>
                        <p className="text-tagline-2">{feature.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              <RevealAnimation delay={0.6} offset={100}>
                <figure className="order-last max-w-[590px] md:-mb-[70px] md:w-full lg:order-none lg:mt-10 xl:mt-0 xl:-mb-0">
                  <Image
                    src={holdMobile}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                    width={590}
                    height={600}
                    priority
                  />
                </figure>
              </RevealAnimation>
              <div className="flex w-full flex-col gap-8 px-2 sm:px-0 md:flex-row lg:ml-4 lg:flex-col xl:ml-0 xl:max-w-[300px]">
                {features.slice(3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.5 + index * 0.1} direction="right" offset={100}>
                    <div className="space-y-2 md:space-y-3">
                      <div className="inline-block overflow-hidden">
                        <span className={cn('text-secondary dark:text-accent text-[36px]', feature.icon)}> </span>
                      </div>
                      <div>
                        <h3 className="text-tagline-1 text-secondary dark:text-accent font-medium">{feature.title}</h3>
                        <p className="text-tagline-2">{feature.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

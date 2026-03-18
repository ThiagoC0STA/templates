import { cn } from '@/utils/cn';
import holdMobile from '@public/images/ns-img-206.png';
import gradient from '@public/images/ns-img-503.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Simple process',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'Personalized guidance',
    description: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: 3,
    icon: 'ns-shape-36',
    title: 'Competitive interest rates',
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
    icon: 'ns-shape-30',
    title: 'Ongoing support',
    description: 'We stay with you post-closing to ensure a smooth transition.',
  },
];

const WhyChooseNextSaas = () => {
  return (
    <section className="py-20 md:py-[90px] lg:py-[100px]" aria-label="Why choose NextSaaS">
      <div className="main-container">
        <div className="dark:bg-background-8 relative overflow-hidden rounded-4xl bg-white px-5 pt-16 max-lg:pb-10 sm:px-7 md:px-14 md:pt-[100px]">
          <RevealAnimation delay={0.8} duration={0.9} offset={200} direction="up">
            <figure className="pointer-events-none absolute top-[-407px] right-[-145px] size-[650px] rotate-[240deg] rounded-t-4xl opacity-90 select-none md:top-[-354px] md:right-[-149px] md:rotate-[238deg]">
              <Image src={gradient} alt="Gradient background" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="space-y-[70px]">
            {/* heading  */}
            <div className="space-y-[20px] text-center md:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-yellow">Why choose NextSaaS?</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Stress-free mortgage solutions.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Smart solutions and human support—everything you need for a stress-free mortgage experience.</p>
                </RevealAnimation>
              </div>
            </div>
            {/* content  */}
            <div className="mx-auto flex max-w-[1178px] flex-col items-center gap-10 lg:flex-row lg:gap-0">
              <div className="flex w-full flex-col gap-8 md:flex-row lg:flex-col">
                {data.slice(0, 3).map((item, index) => (
                  <RevealAnimation delay={0.6 + index * 0.1} direction="left" key={item.id}>
                    <div className="w-full space-y-3 md:max-w-[300px]">
                      <span className={cn('text-secondary dark:text-accent block text-[36px]', item.icon)} />
                      <div>
                        <h3 className="text-tagline-1 font-medium">{item.title}</h3>
                        <p className="text-tagline-2">{item.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              {/* feature img  */}
              <RevealAnimation delay={0.7} duration={0.7} offset={80}>
                <figure className="order-first w-full flex-shrink-0 lg:order-none lg:mt-[66px] lg:mr-6 lg:h-[640px] lg:w-[538.95px] xl:mt-0 xl:mr-0">
                  <Image
                    src={holdMobile}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              {/* right side feature  */}
              <div className="flex w-full flex-col gap-8 md:flex-row lg:ml-4 lg:flex-col xl:ml-0">
                {data.slice(3).map((item, index) => (
                  <RevealAnimation delay={0.6 + index * 0.1} direction="right" key={item.id}>
                    <div className="w-full space-y-3 md:max-w-[300px]">
                      <span className={cn('text-secondary dark:text-accent block text-[36px]', item.icon)} />
                      <div>
                        <h3 className="text-tagline-1 font-medium">{item.title}</h3>
                        <p className="text-tagline-2">{item.description}</p>
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

export default WhyChooseNextSaas;

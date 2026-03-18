'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: 'ns-shape-3',
    title: 'Trustless by design',
    description: 'No banks, no brokers. your assets are secured by smart contracts, not gatekeepers.',
  },
  {
    id: 2,
    icon: 'ns-shape-35',
    title: 'Built on proven tech',
    description: 'Audited protocols, hardened smart contracts, and years of real-world uptime.',
  },
  {
    id: 3,
    icon: 'ns-shape-46',
    title: 'Globally borderless',
    description: 'No more limitations NextSaaS works wherever you are, whenever you need it.',
  },
];

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[100px] lg:py-[150px]">
      <div className="main-container">
        {/* Header Section */}
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto max-[375px]:max-w-[270px] sm:max-w-[600px] md:max-w-[828px]">
              Why NextSaaS is the smarter way to manage your digital assets.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[390px] sm:max-w-[400px] md:max-w-[606px]">
              NextSaaS offers a smarter approach to managing your digital assets by providing intuitive tools and expert
              guidance tailored to your needs.
            </p>
          </RevealAnimation>
        </div>
        {/* Services Grid */}
        <div className="mb-14 grid grid-cols-12 gap-y-6 md:gap-8 lg:gap-9">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn('col-span-12 lg:col-span-4', index < 2 ? 'md:col-span-6' : 'md:col-span-12')}>
              <RevealAnimation delay={0.3 + index * 0.1}>
                <div className="dark:bg-background-6 space-y-4 rounded-[20px] bg-white p-6 sm:space-y-6 sm:p-8">
                  {/* Service Icon */}
                  <div>
                    <span
                      className={cn(service.icon, 'text-secondary dark:text-accent text-[40px] sm:text-[52px]')}></span>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-2">
                    <h3 className="sm:text-heading-5 text-heading-6">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <RevealAnimation delay={0.6}>
            <LinkButton href="/services" className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md">
              <span>Explore the platform</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;

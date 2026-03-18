import { cn } from '@/utils/cn';
import HoldMobile from '@public/images/ns-img-206.png';
import Gradient42 from '@public/images/ns-img-530.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import FeatureList from './FeatureList';

const featureList = [
  {
    id: '1',
    title: 'Enforce passcode policies',
    icon: 'ns-shape-34',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '2',
    title: 'Lock devices in kiosk mode',
    icon: 'ns-shape-36',
    description: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: '3',
    title: 'Real-time sync across devices',
    icon: 'ns-shape-10',
    description: 'Get access to fair rates with zero hidden fees or surprises.',
  },
  {
    id: '4',
    title: 'App whitelisting &amp; blacklisting',
    icon: 'ns-shape-34',
    description: 'Know where you stand quickly—get pre-approved in hours, not days.',
  },
  {
    id: '5',
    title: 'Configure Wi-Fi &amp; network settings',
    icon: 'ns-shape-36',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '6',
    title: 'Remote wipe &amp; factory reset',
    icon: 'ns-shape-10',
    description: 'We stay with you post-closing to ensure a smooth transition.',
  },
];

const Feature = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-[100px] xl:py-[200px] dark:bg-black" aria-label="Hero section">
      <div className="main-container">
        <div className="sm:bg-background-2 sm:dark:bg-background-5 relative mb-16 w-full overflow-hidden rounded-4xl px-4 pt-[50px] md:mb-20 md:px-8 lg:mb-[90px] lg:px-14 lg:pt-[100px] xl:mb-[100px]">
          <RevealAnimation delay={0.4} direction="up" start="top top" offset={200}>
            <figure className="pointer-events-none absolute top-[-510px] right-[-579px] size-[850px] rotate-[-3deg] overflow-hidden select-none sm:top-[-486px] sm:right-[-532px]">
              <Image src={Gradient42} alt="feature-bg-gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="mb-14 space-y-3 md:mb-[70px]">
            <RevealAnimation delay={0.2}>
              <h2>Why teams love NextSaaS</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Manage your entire mobile infrastructure from one platform</p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-y-8 lg:items-center lg:gap-4 xl:gap-8">
            <div className="order-1 col-span-12 space-y-8 last:mb-[50px] sm:col-span-6 lg:order-1 lg:col-span-3">
              {featureList.slice(0, 3).map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1} direction="left">
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className={cn('text-secondary dark:text-accent text-[36px]', item.icon)} />
                    </div>
                    <div>
                      <p className="text-secondary dark:text-accent max-sm:text-heading-6 sm:sm:font-medium">
                        {item.title}
                      </p>
                      <p className="text-tagline-2 w-full max-w-[294px]">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.5}>
              <div className="order-3 col-span-12 lg:order-2 lg:col-span-6">
                <figure className="mx-auto h-auto w-full max-w-[390px] lg:h-[670px] lg:max-w-[590px]">
                  <Image src={HoldMobile} alt="hold mobile" className="h-full w-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>
            <div className="order-2 col-span-12 space-y-8 last:mb-[50px] sm:col-span-6 lg:order-3 lg:col-span-3">
              {featureList.slice(3).map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1} direction="right">
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className={cn('text-secondary dark:text-accent text-[36px]', item.icon)} />
                    </div>
                    <div>
                      <p className="text-secondary dark:text-accent max-sm:text-heading-6 sm:sm:font-medium">
                        {item.title}
                      </p>
                      <p className="text-tagline-2 w-full max-w-[294px]">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
        <FeatureList />
      </div>
    </section>
  );
};

export default Feature;

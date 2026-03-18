import { cn } from '@/utils/cn';
import clientLogo5Dark from '@public/images/icons/client-logo-10-dark.svg';
import clientLogo5 from '@public/images/icons/client-logo-10.svg';
import clientLogo1Dark from '@public/images/icons/client-logo-6-dark.svg';
import clientLogo1 from '@public/images/icons/client-logo-6.svg';
import clientLogo2Dark from '@public/images/icons/client-logo-7-dark.svg';
import clientLogo2 from '@public/images/icons/client-logo-7.svg';
import clientLogo3Dark from '@public/images/icons/client-logo-8-dark.svg';
import clientLogo3 from '@public/images/icons/client-logo-8.svg';
import clientLogo4Dark from '@public/images/icons/client-logo-9-dark.svg';
import clientLogo4 from '@public/images/icons/client-logo-9.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

export const clientLogos = [
  {
    id: 1,
    light: clientLogo1,
    dark: clientLogo1Dark,
    alt: 'client-logo-1',
  },
  {
    id: 2,
    light: clientLogo2,
    dark: clientLogo2Dark,
    alt: 'client-logo-2',
  },

  {
    id: 3,
    light: clientLogo3,
    dark: clientLogo3Dark,
    alt: 'client-logo-3',
  },

  {
    id: 4,
    light: clientLogo4,
    dark: clientLogo4Dark,
    alt: 'client-logo-4',
  },

  {
    id: 5,
    light: clientLogo5,
    dark: clientLogo5Dark,
    alt: 'client-logo-5',
  },
];

const Clients = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
        <div className="max-w-full xl:mx-auto xl:max-w-[1260px] 2xl:max-w-[1440px]">
          <div className="bg-background-1 dark:bg-background-6 rounded-none py-7 md:py-14 xl:rounded-[20px]">
            <div className="relative mx-auto max-w-[85%]">
              <div className="from-background-1 dark:from-background-6 absolute top-0 bottom-0 left-0 z-10 w-[100px] bg-gradient-to-r to-transparent md:w-[200px] lg:w-[400px]" />
              <div className="from-background-1 dark:from-background-6 absolute top-0 right-0 bottom-0 z-10 w-[100px] bg-gradient-to-l to-transparent md:w-[200px] lg:w-[400px]" />
              <Marquee autoFill speed={40}>
                <div className="flex items-center justify-center gap-8">
                  {clientLogos.map((logo, index) => (
                    <figure key={logo.id} className={cn('min-w-[140px] md:min-w-[201px]', index === 0 && 'ml-8')}>
                      <Image src={logo.light} className="h-full w-full dark:hidden" alt="clients" />
                      <Image src={logo.dark} className="hidden h-full w-full dark:block" alt="clients" />
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Clients;

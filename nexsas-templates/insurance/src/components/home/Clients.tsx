import clientLogo10Dark from '@public/images/icons/client-logo-10-dark.svg';
import clientLogo10 from '@public/images/icons/client-logo-10.svg';
import clientLogo6Dark from '@public/images/icons/client-logo-6-dark.svg';
import clientLogo6 from '@public/images/icons/client-logo-6.svg';
import clientLogo7Dark from '@public/images/icons/client-logo-7-dark.svg';
import clientLogo7 from '@public/images/icons/client-logo-7.svg';
import clientLogo8Dark from '@public/images/icons/client-logo-8-dark.svg';
import clientLogo8 from '@public/images/icons/client-logo-8.svg';
import clientLogo9Dark from '@public/images/icons/client-logo-9-dark.svg';
import clientLogo9 from '@public/images/icons/client-logo-9.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

export const clientLogos = [
  {
    id: 1,
    image: clientLogo6,
    imageDark: clientLogo6Dark,
  },
  {
    id: 2,
    image: clientLogo7,
    imageDark: clientLogo7Dark,
  },
  {
    id: 3,
    image: clientLogo8,
    imageDark: clientLogo8Dark,
  },
  {
    id: 4,
    image: clientLogo9,
    imageDark: clientLogo9Dark,
  },

  {
    id: 5,
    image: clientLogo10,
    imageDark: clientLogo10Dark,
  },
];

const Clients = () => {
  return (
    <section className="space-y-4 py-[50px] text-center md:space-y-8 md:py-[100px]">
      <RevealAnimation delay={0.1}>
        <h5>Trusted by thousands</h5>
      </RevealAnimation>
      {/* Client Logos */}
      <RevealAnimation delay={0.2}>
        <div className="relative mx-auto max-w-[1100px]">
          <div className="from-background-3 dark:!from-background-7 absolute top-0 left-0 z-40 hidden h-full w-[10%] bg-gradient-to-r to-transparent sm:block" />
          <div className="from-background-3 dark:!from-background-7 absolute top-0 right-0 z-40 hidden h-full w-[10%] bg-gradient-to-l to-transparent sm:block" />
          <Marquee>
            <div className="flex items-center justify-center gap-8">
              {clientLogos.map((logo) => (
                <figure className="ml-8 min-w-[140px] md:min-w-[201px]" key={logo.id}>
                  <Image src={logo.image} alt="Client logo" className="lg:w-auto dark:hidden" />
                  <Image src={logo.imageDark} alt="Client logo" className="hidden lg:w-auto dark:block" />
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Clients;

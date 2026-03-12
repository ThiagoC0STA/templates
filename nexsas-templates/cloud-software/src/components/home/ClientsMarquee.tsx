import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import { clientLogos } from '../home/Clients';

const ClientsMarquee = () => {
  return (
    <RevealAnimation delay={0.6} instant>
      <section className="py-14" aria-label="Trusted partners">
        <div className="main-container">
          <div className="space-y-[22px] text-center">
            <h2 className="text-heading-6">Trusted by Industry leaders</h2>
            {/* marquee */}
            <div className="relative">
              <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
              <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
              <Marquee autoFill speed={45}>
                <div className="flex items-center justify-center gap-8 py-2.5">
                  {clientLogos.map((logo) => (
                    <figure key={logo.id} className="min-w-[140px] first:ml-8 md:min-w-[201px]">
                      <Image
                        src={logo.light}
                        alt="Client 1 logo"
                        loading="lazy"
                        className="dark:hidden"
                        width={201}
                        height={60}
                      />
                      <Image
                        src={logo.dark}
                        alt="Client 1 logo"
                        loading="lazy"
                        className="hidden dark:inline-block"
                        width={201}
                        height={60}
                      />
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

export default ClientsMarquee;

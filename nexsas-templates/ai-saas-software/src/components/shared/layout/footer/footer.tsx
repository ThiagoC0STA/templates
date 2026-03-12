import { BorderExpand } from '@/src/components/animation/border-expand';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import { footerData } from '@/src/data/footer';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import FooterAddress from './footer-address';
import FooterForm from './footer-form';

const Footer: FC = () => {
  const { logo, address, contact, social, linkGroups, bottomBar } = footerData;

  return (
    <RevealAnimation delay={0.1}>
      <footer className="bg-background-8">
        <div className="mx-5 sm:mx-0">
          <div className="mx-auto max-w-[1920px] pt-16 pb-[30px] sm:pt-20 md:pt-28">
            <div className="bg-background-4 mx-auto rounded-[20px] py-12 sm:max-w-[540px] md:max-w-[680px] lg:max-w-[950px] lg:py-16 xl:max-w-[1200px] 2xl:max-w-[1440px]">
              <div className="mx-auto px-5 sm:max-w-[450px] sm:px-0 md:max-w-[550px] lg:max-w-[850px] xl:max-w-[1080px] 2xl:max-w-[1290px]">
                <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
                  <RevealAnimation delay={0.1}>
                    <div className="text-center lg:text-left">
                      <p className="text-background-11 text-it-heading-5 font-medium">
                        Join our newsletter
                      </p>
                      <p className="text-tagline-2 font-normal text-white/50">
                        Stay up to date with the latest news, product updates, and exclusive offers
                        from Nexsas.
                      </p>
                    </div>
                  </RevealAnimation>

                  <RevealAnimation delay={0.2}>
                    <FooterForm />
                  </RevealAnimation>
                </div>

                <div className="py-12 lg:py-16">
                  <BorderExpand delay={0.6} duration={2}>
                    <div className="bg-stroke-1/10 relative left-1/2 h-px w-full -translate-x-1/2" />
                  </BorderExpand>
                </div>

                <div className="grid grid-cols-12 gap-y-10 lg:gap-6">
                  <div className="col-span-12 lg:col-span-4">
                    <RevealAnimation delay={0.1}>
                      <div className="space-y-8">
                        <Link href={logo.href} className="block">
                          <span className="sr-only">{logo.alt}</span>
                          <figure className="relative h-[40px] w-[150px]">
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              fill
                              className="object-contain object-left"
                            />
                          </figure>
                        </Link>
                        <FooterAddress address={address} contact={contact} />
                        <div>
                          <SocialIcons links={social} />
                        </div>
                      </div>
                    </RevealAnimation>
                  </div>

                  <div className="col-span-12 grid grid-cols-12 lg:col-span-8 lg:gap-8">
                    {linkGroups.map((group, idx) => (
                      <div key={group.title} className="col-span-12 md:col-span-4">
                        <RevealAnimation delay={0.2 + idx * 0.1}>
                          <div className="space-y-2 text-left lg:text-right">
                            <p className="text-tagline-2 font-semibold text-white/90">
                              {group.title}
                            </p>
                            <ul>
                              {group.links.map((link) => (
                                <li key={link.href + link.label} className="py-2">
                                  <Link
                                    href={link.href}
                                    className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </RevealAnimation>
                      </div>
                    ))}
                  </div>
                </div>

                <RevealAnimation delay={0.5} instant>
                  <div className="border-stroke-1/10 mt-8 flex flex-col items-start justify-between gap-2.5 border-y py-4 sm:items-center sm:px-5 md:mt-12 md:flex-row md:gap-0 lg:mt-16 lg:py-5">
                    <p className="text-tagline-4 font-normal text-white/50">
                      &copy; {new Date().getFullYear()} pixels71. All rights reserved.
                    </p>
                    <ul className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-6">
                      {bottomBar.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link
                            href={link.href}
                            className="footer-link font-inter-tight text-tagline-4 font-normal text-white/50 duration-500 hover:text-white"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </RevealAnimation>
  );
};

export default Footer;

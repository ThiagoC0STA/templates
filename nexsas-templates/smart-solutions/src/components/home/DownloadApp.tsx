import appleLogo from '@public/images/icons/apple-dark.svg';
import googlePlayLogo from '@public/images/icons/google-playstore.svg';
import qrCode from '@public/images/ns-img-191.svg';
import gradient49 from '@public/images/ns-img-537.png';
import qrCodeDark from '@public/images/ns-img-dark-130.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const storeButtons = [
  {
    id: 'apple-store',
    href: '#',
    logo: appleLogo,
    logoAlt: 'Apple logo',
    text: 'Apple Store',
  },
  {
    id: 'google-play',
    href: '#',
    logo: googlePlayLogo,
    logoAlt: 'Google Play logo',
    text: 'Google Play',
  },
];
const DownloadApp = () => {
  return (
    <section>
      <div className="main-container">
        <div>
          <RevealAnimation delay={0.2}>
            <div className="bg-secondary dark:bg-background-5 relative overflow-hidden rounded-2xl py-[50px] md:rounded-4xl lg:py-[100px]">
              {/* gradient bg  */}
              <RevealAnimation delay={0.4}>
                <figure className="pointer-events-none absolute top-[76%] left-1/2 w-full max-w-[1290px] -translate-x-1/2 rotate-[40deg] select-none md:top-[58%] xl:top-[45%]">
                  <Image src={gradient49} alt="gradient bg" className="size-full object-cover" />
                </figure>
              </RevealAnimation>
              <div className="relative z-0 mb-[70px] space-y-5 text-center">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-blur">Download your app</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h3 className="lg:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5 text-white">
                      App download &amp; access
                    </h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="text-accent/60">&nbsp;Manage Anywhere. Anytime.</p>
                  </RevealAnimation>
                </div>
              </div>
              <div className="relative z-0 mx-auto flex max-w-[900px] items-center justify-center overflow-hidden px-5 lg:px-0">
                <RevealAnimation delay={0.4}>
                  <div className="flex max-w-[260px] flex-col items-center justify-center space-y-6 rounded-[20px] bg-white p-6 sm:max-w-[310px] sm:p-8 dark:bg-black">
                    <div className="space-y-2 text-center">
                      <figure className="overflow-hidden rounded-2xl">
                        <Image src={qrCode} alt="qr-code" className="dark:hidden" />
                        <Image src={qrCodeDark} alt="qr-code" className="hidden dark:block" />
                      </figure>
                      <p className="dark:text-accent">Scan the QR code to start!</p>
                    </div>
                    <div className="space-y-3">
                      {storeButtons.map((button) => (
                        <Link
                          key={button.id}
                          href={button.href}
                          className="dark:bg-background-5 flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 lg:rounded-2xl lg:px-8 lg:py-4">
                          <figure className="size-8 lg:size-12">
                            <Image className="h-full w-full object-contain" src={button.logo} alt={button.logoAlt} />
                          </figure>
                          <span className="text-background-3 lg:text-heading-5 text-tagline-1 mt-1 font-normal">
                            {button.text}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <div className="absolute left-1/2 -z-1 size-[510px] -translate-x-1/2 rounded-full">
                    <div className="flex size-[510px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                      <div className="flex size-[428px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                        <div className="flex size-[346px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                          <div className="flex size-[265px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60" />
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

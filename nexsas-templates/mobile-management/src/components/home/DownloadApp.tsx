import { cn } from '@/utils/cn';
import AppleDark from '@public/images/icons/apple-dark.svg';
import GooglePlay from '@public/images/icons/google-playstore.svg';
import QrCode from '@public/images/ns-img-191.svg';
import Gradient44 from '@public/images/ns-img-532.png';
import QrCodeDark from '@public/images/ns-img-dark-130.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

type StaticImageData = typeof AppleDark;

interface DownloadLink {
  id: string;
  name: string;
  icon: StaticImageData;
  href: string;
}
const downloadLinksData: DownloadLink[] = [
  {
    id: '1',
    name: 'Apple Store',
    icon: AppleDark,
    href: '#',
  },
  {
    id: '2',
    name: 'Google Play',
    icon: GooglePlay,
    href: '#',
  },
];
const DownloadApp = () => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="bg-secondary dark:bg-background-5 relative overflow-hidden rounded-2xl py-[50px] md:rounded-4xl lg:py-[100px]">
        <RevealAnimation delay={0.7} offset={200}>
          <figure className="pointer-events-none absolute top-[520px] left-[-136px] size-[700px] rotate-[-597deg] select-none sm:left-[-72px] sm:size-[900px] lg:left-[-41px] lg:size-[1100px] xl:left-[100px]">
            <Image src={Gradient44} alt="download-bg" className="size-full object-cover" />
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
            <div className="flex flex-col items-center justify-center space-y-6 rounded-[20px] bg-white p-6 sm:max-w-[310px] sm:p-8 dark:bg-black">
              <div className="space-y-2 text-center">
                <figure className="max-w-[246px] overflow-hidden rounded-2xl">
                  <Image src={QrCode} alt="qr-code" className="dark:hidden" />
                  <Image src={QrCodeDark} alt="qr-code" className="hidden dark:block" />
                </figure>
                <p className="dark:text-accent">Scan the QR code to start!</p>
              </div>
              <div className="w-full space-y-3">
                {downloadLinksData.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="hover:bg-secondary dark:bg-background-9 flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 transition-all duration-300 lg:rounded-2xl lg:px-8 lg:py-4">
                    <figure>
                      <Image className="h-full w-full object-contain" src={link.icon} alt={`${link.name} logo`} />
                    </figure>
                    <span
                      className={cn(
                        'text-background-3 lg:text-heading-5 text-tagline-1 font-normal',
                        link.id === '1' ? 'mt-1' : '',
                      )}>
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </RevealAnimation>
          <div className="publish-circle absolute left-1/2 -z-1 size-[510px] -translate-x-1/2 rounded-full">
            <div className="flex size-[510px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
              <div className="flex size-[428px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                <div className="flex size-[346px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                  <div className="flex size-[265px] items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default DownloadApp;

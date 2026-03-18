import appleDark from '@public/images/icons/apple-dark.svg';
import googlePlayStore from '@public/images/icons/google-playstore.svg';
import qrCode from '@public/images/ns-img-241.svg';
import qrCodeDark from '@public/images/ns-img-dark-162.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const HeroQR = () => {
  return (
    <>
      <RevealAnimation delay={0.5}>
        <div>
          <div className="dark:bg-background-9 mx-auto flex w-full max-w-[250px] items-center gap-3 rounded-[20px] bg-white py-2.5 pr-2.5 pl-2.5 max-[425px]:flex-col min-[425px]:max-w-[380px] lg:max-w-[535px] lg:gap-6 lg:rounded-[28px] lg:pr-6">
            <div className="w-full max-w-[240px] min-[425px]:max-w-[150px] lg:max-w-[234px]">
              <figure className="overflow-hidden rounded-[20px]">
                <Image src={qrCode} alt="QR code" className="block size-full dark:hidden" />
                <Image src={qrCodeDark} alt="QR code" className="hidden size-full dark:block" />
              </figure>
            </div>
            <div className="flex-1 space-y-3 max-[425px]:w-full">
              <Link
                href="#"
                className="hover:bg-secondary flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 transition-all duration-300 lg:rounded-2xl lg:px-8 lg:py-4">
                <figure className="size-8 lg:size-12">
                  <Image src={appleDark} alt="Apple logo" className="h-full w-full object-contain" />
                </figure>
                <span className="text-background-3 lg:text-heading-5 text-tagline-1 mt-1 font-normal">Apple Store</span>
              </Link>
              <Link
                href="#"
                className="hover:bg-secondary flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 transition-all duration-300 lg:rounded-2xl lg:px-8 lg:py-4">
                <figure className="size-8 lg:size-12">
                  <Image src={googlePlayStore} alt="Google Play logo" className="h-full w-full object-contain" />
                </figure>
                <span className="text-background-3 lg:text-heading-5 text-tagline-1 font-normal">Google Play</span>
              </Link>
            </div>
          </div>
        </div>
      </RevealAnimation>
      <div className="absolute bottom-[5%] left-1/2 -z-10 mx-auto max-w-[340px] -translate-x-1/2 min-[425px]:max-w-[400px] sm:-bottom-[40%] sm:max-w-[600px] lg:-bottom-[53%] lg:max-w-[800px] xl:max-w-[1020px]">
        <RevealAnimation delay={0.6} instant>
          <div className="dark:border-stroke-7 flex size-[300px] items-center justify-center rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 min-[425px]:size-[400px] sm:size-[600px] lg:size-[850px] xl:size-[1020px] dark:bg-[#1B202A]/60">
            <RevealAnimation delay={0.7} instant>
              <div className="dark:border-stroke-7 flex size-[260px] items-center justify-center rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 min-[425px]:size-[300px] sm:size-[500px] lg:size-[700px] xl:size-[857px] dark:bg-[#161B23]/60">
                <RevealAnimation delay={0.8} instant>
                  <div className="dark:border-stroke-7 flex size-[200px] items-center justify-center rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 min-[425px]:size-[300px] sm:size-[400px] lg:size-[550px] xl:size-[693px] dark:bg-[#12161C]/60">
                    <RevealAnimation delay={0.9} instant>
                      <div className="dark:border-stroke-7 flex size-[140px] items-center justify-center rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 min-[425px]:size-[200px] sm:size-[300px] lg:size-[400px] xl:size-[530px] dark:bg-[#0B0F15]/60" />
                    </RevealAnimation>
                  </div>
                </RevealAnimation>
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </>
  );
};

export default HeroQR;

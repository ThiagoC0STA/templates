import { DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import avatar9 from '@public/images/ns-avatar-9.png';
import heroBg from '@public/images/ns-img-187.svg';
import heroImg01 from '@public/images/ns-img-188.png';
import heroImg06 from '@public/images/ns-img-189.svg';
import heroImg07 from '@public/images/ns-img-190.png';
import heroBgDark from '@public/images/ns-img-dark-126.svg';
import heroImg01Dark from '@public/images/ns-img-dark-127.png';
import heroImg06Dark from '@public/images/ns-img-dark-128.svg';
import heroImg07Dark from '@public/images/ns-img-dark-129.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../home/Progress';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="overflow-hidden pt-[115px] pb-[97px]">
      <div className="mx-auto max-w-[1365px]">
        <div className="relative">
          {/* hero bg  */}
          <figure className="absolute -top-5 left-[50%] z-0 h-full w-full max-w-[1365px] translate-x-[-50%] animate-pulse overflow-hidden">
            <Image src={heroBg} alt="Decorative background pattern" className="size-full object-cover dark:hidden" />
            <Image
              src={heroBgDark}
              alt="Decorative background pattern"
              className="hidden size-full object-cover dark:inline-block"
            />
          </figure>
          <div className="main-container">
            <div className="flex flex-col items-start justify-between gap-12 pt-4 pb-[110px] lg:flex-row lg:pt-[200px] xl:gap-0">
              {/* hero content  */}
              <div className="w-full space-y-7 text-center md:text-left lg:max-w-[490px] lg:space-y-14 xl:max-w-[629px]">
                {/* heading text  */}
                <div className="space-y-4">
                  <RevealAnimation delay={0.2}>
                    <h1>Boost your business with smart apps</h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                      NextSaaS brings you a powerful, all-in-one smart application designed to streamline your
                      operations, empower your team, and accelerate growth—no matter your industry.
                    </p>
                  </RevealAnimation>
                </div>
                {/* heading btn  */}
                <RevealAnimation delay={0.4} className="w-full md:w-auto">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent w-[90%] md:w-auto">
                    <span>Book a strategy call</span>
                  </LinkButton>
                </RevealAnimation>
              </div>
              <div className="relative" aria-hidden="true">
                {/* income   */}
                <RevealAnimation delay={0.3}>
                  <div className="absolute top-[-5px] -left-0.5 md:left-[41px] lg:-top-[110px] lg:-left-[120px] xl:left-[-111px] 2xl:-left-[120px]">
                    <div className="dark:bg-background-8 max-w-[103px] flex-1 space-y-2 rounded-xl bg-white p-4 text-left">
                      <div className="text-tagline-2 text-secondary dark:text-accent flex items-center justify-start gap-2">
                        <span className="bg-ns-red flex size-[18px] items-center justify-center rounded-full p-1">
                          <DownArrowIcon className="dark:fill-background-5 size-[8px]" />
                        </span>
                        Income
                      </div>
                      <div className="dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                        $
                        <NumberAnimation number={48000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
                {/* avatar img  */}
                <RevealAnimation delay={0.4}>
                  <figure className="absolute top-[117px] left-[-5px] z-[1] max-w-[96px] overflow-hidden rounded-xl md:left-[23px] md:max-w-[119px] lg:top-2.5 lg:left-[-222px] lg:max-w-[104px] xl:top-6 xl:left-[-203px] xl:max-w-[119px] 2xl:top-2.5 2xl:-left-[132px]">
                    <div className="dark:bg-background-6 rounded-xl bg-white p-6">
                      <Image
                        className="inline-block size-16 h-auto rounded-full bg-linear-[156deg,_#FFF_32.92%,_#C6F56F_91%] sm:size-14"
                        src={avatar9}
                        alt="Avatar 1"
                      />
                    </div>
                  </figure>
                </RevealAnimation>
                {/* transfer success  */}
                <RevealAnimation delay={0.6}>
                  <figure className="absolute top-[250px] left-[-5px] z-[1] max-w-[153px] overflow-hidden rounded-xl md:top-[271px] md:left-[9px] md:max-w-[153px] lg:top-40 lg:left-[-223px] xl:left-[-206px] 2xl:-left-[151px]">
                    <div className="bg-secondary dark:bg-background-6 flex flex-col items-center gap-1 rounded-xl p-4">
                      <span>
                        <TransferSuccessIcon />
                      </span>
                      <span className="dark:text-accent text-white"> Transfer success! </span>
                    </div>
                  </figure>
                </RevealAnimation>
                {/* main img  */}
                <RevealAnimation delay={0.6}>
                  <figure className="dark:bg-background-9 relative top-[100px] left-[30px] w-full max-w-[280px] rounded-xl bg-white p-2.5 md:left-[160px] md:max-w-[403px] lg:top-[3px] lg:left-[-109px] lg:max-w-[275px] xl:left-[-107px] xl:max-w-[408px] 2xl:left-[-3px] 2xl:max-w-[408px]">
                    <Image src={heroImg01} alt="Application dashboard interface" className="rounded-xl dark:hidden" />
                    <Image
                      src={heroImg01Dark}
                      alt="Application dashboard interface"
                      className="hidden rounded-xl dark:block"
                    />
                  </figure>
                </RevealAnimation>
                {/* expenses div  */}
                <RevealAnimation delay={0.4}>
                  <div className="absolute top-[-4px] right-[-104px] w-full max-w-[200px] max-[376px]:top-[-6px] max-[376px]:right-[-43px] sm:max-w-[333px] md:top-[-6px] md:right-[-85px] lg:top-[-111px] lg:right-[5px] xl:top-[-111px] xl:right-[75px]">
                    <div className="dark:bg-background-8 flex-1 space-y-2 rounded-xl bg-white p-4 text-left">
                      <div className="text-tagline-2 text-secondary dark:text-accent flex items-center justify-start gap-2">
                        <span className="bg-ns-green dark:bg-background-9 flex size-[18px] items-center justify-center rounded-full p-1">
                          <UpArrowIcon />
                        </span>
                        Expenses
                      </div>
                      <div className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                        $ <NumberAnimation number={2321} speed={2000} interval={200} rooms={4} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
                {/* nearest img  */}
                <RevealAnimation delay={0.5} direction="right">
                  <figure className="shadow-2 absolute hidden max-w-[231px] overflow-hidden rounded-[10px] md:top-[52px] md:right-[-207px] md:block lg:top-[-12px] lg:right-1.5 xl:top-[-4px] xl:right-[76px] 2xl:-top-12 2xl:right-[-53px]">
                    <Image
                      src={heroImg06}
                      alt="Decorative interface element"
                      className="size-full object-cover dark:hidden"
                    />
                    <Image
                      src={heroImg06Dark}
                      alt="Decorative interface element"
                      className="hidden size-full object-cover dark:block"
                    />
                  </figure>
                </RevealAnimation>
                {/* customers img  */}
                <RevealAnimation delay={0.6} direction="right" offset={80}>
                  <figure className="shadow-2 absolute top-[164px] right-[-83px] w-full max-w-[222px] overflow-hidden rounded-[10px] max-[376px]:right-[-67px] md:top-[287px] md:right-[-247px] lg:top-[129px] lg:right-[8px] xl:top-[187px] 2xl:top-[189px] 2xl:right-[-98px]">
                    <Image
                      src={heroImg07}
                      alt="Decorative interface element"
                      className="size-full object-cover dark:hidden"
                    />
                    <Image
                      src={heroImg07Dark}
                      alt="Decorative interface element"
                      className="hidden size-full object-cover dark:block"
                    />
                  </figure>
                </RevealAnimation>
                {/* credit limit img  */}
                <RevealAnimation delay={0.7} direction="right" offset={120}>
                  <figure className="shadow-2 absolute top-[234px] right-[-88px] w-full max-w-[189px] max-[376px]:right-[-71px] md:top-[366px] md:right-[-313px] md:max-w-[288px] lg:top-[206px] lg:right-[6px] lg:max-w-[225px] xl:top-[266px] xl:right-[7px] xl:max-w-[288px] 2xl:right-[-167px]">
                    <figure className="finance-intro-badge dark:bg-background-6 space-y-2 rounded-xl bg-white p-4">
                      <figcaption className="flex justify-between gap-2">
                        <span className="text-tagline-1 dark:text-accent font-normal"> Credit limit </span>
                        <span className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                          $
                          <NumberAnimation
                            number={53224}
                            speed={2000}
                            interval={200}
                            rooms={5}
                            heightSpaceRatio={2.5}
                          />
                        </span>
                      </figcaption>
                      <Progress />
                    </figure>
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

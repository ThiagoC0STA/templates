import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import avatar39 from '@public/images/ns-avatar-39.png';
import multilingualImage from '@public/images/ns-img-523.png';
import playIcon from '@public/images/ns-img-552.svg';
import icon553 from '@public/images/ns-img-553.svg';
import Image from 'next/image';
import TypewriterAnimation from '../animation/TypewriterAnimation';
import FeaturesWave from './FeaturesWave';
import IntegrationCircle from './IntegrationCircle';

const Features = () => {
  return (
    <section className="bg-ns-ivory py-[80px] md:py-[120px] lg:py-[176px]">
      <div className="main-container">
        <div className="space-y-[76px]">
          <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
            {/* content  */}
            <div className="space-y-5 text-center lg:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-white text-secondary bg-white font-medium">Features</span>
              </RevealAnimation>

              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2
                    id="services-heading"
                    className="mx-auto max-w-[450px] text-center lg:mx-0 lg:max-w-[505px] lg:text-left">
                    Powerful <span className="text-ns-linen">AI voice </span> tools built for everyone
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto max-w-[400px] text-center lg:mx-0 lg:text-left">
                    From creators to enterprises, NextSaaS helps you produce high-quality voiceover without the studio.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="mt-auto mb-0 flex w-full items-center justify-center md:w-auto">
                <div className="mx-auto w-[90%] text-center md:w-auto lg:text-right">
                  <LinkButton href="/features" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                    Explore features
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* cards  */}
          <div className="space-y-4 sm:space-y-2">
            {/* card (one - three) */}
            <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-2 md:gap-y-0">
              {/* card one  */}
              <RevealAnimation delay={0.1}>
                <div className="relative h-[350px] w-full max-w-[642px] space-y-[98px] overflow-hidden rounded-4xl bg-white p-8 md:p-[42px] lg:h-[450px]">
                  <div className="space-y-1">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">API integration</h3>
                    <p className="max-w-[300px]">Connect NextSaaS with your tools and automate voice workflows.</p>
                  </div>

                  {/* logo circle  */}
                  <div className="absolute top-[180px] left-1/2 -z-10 -translate-x-1/2">
                    <div className="w-[1300px]">
                      <IntegrationCircle />
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              <div className="flex w-full max-w-[640px] flex-col items-center justify-center gap-y-4 sm:gap-y-2">
                {/* card two  */}
                <RevealAnimation delay={0.2}>
                  <div className="w-full shrink-0 space-y-1 rounded-4xl bg-white p-8 lg:h-[221px] lg:p-[42px]">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">Video editor + subtitle Generator</h3>
                    <p className="max-w-[230px]">Add voice, visuals, and subtitles all in one place.</p>
                  </div>
                </RevealAnimation>

                {/* card three  */}
                <RevealAnimation delay={0.3}>
                  <div className="relative w-full shrink-0 space-y-1 overflow-hidden rounded-4xl bg-white p-8 lg:h-[221px] lg:p-[42px]">
                    <h3 className="text-heading-5 text-secondary/80 relative z-20 font-normal">
                      Multilingual & multi-accent voices
                    </h3>
                    <p>100+ languages and regional accents.</p>

                    {/* bg img  */}
                    <RevealAnimation delay={0.4} direction="right" offset={100}>
                      <figure className="absolute top-[-120px] right-[-205px] h-[328px] w-[479px] rotate-6 overflow-hidden">
                        <Image
                          src={multilingualImage}
                          alt="multilingual & multi-accent voices"
                          className="size-full"
                          width={479}
                          height={328}
                        />
                      </figure>
                    </RevealAnimation>
                  </div>
                </RevealAnimation>
              </div>
            </div>

            {/* card (four - six) */}
            <div className="grid grid-cols-12 items-center justify-center gap-x-4 gap-y-4 lg:gap-x-2 lg:gap-y-0">
              {/* card four  */}
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex h-[450px] flex-col items-start justify-between rounded-4xl bg-white p-8 md:p-[42px] xl:w-[317px]">
                    <div className="space-y-1">
                      <h3 className="text-heading-5 text-secondary/80 font-normal">Text to speech</h3>
                      <p>Convert your script into ultra realistic speech.</p>
                    </div>

                    <div className="bg-background-12 flex h-[230px] w-full flex-col justify-between rounded-xl p-4 xl:max-w-[233px]">
                      <TypewriterAnimation className="text-secondary/40 text-tagline-2">
                        Describe the text you want to create, in any voice.
                      </TypewriterAnimation>

                      <div className="flex items-center justify-end text-right">
                        <LinkButton
                          href="/pricing"
                          btnClass="btn-sm-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                          Get started
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              {/* card five  */}
              <RevealAnimation delay={0.5}>
                <div className="relative col-span-12 flex h-[450px] flex-col items-center justify-between overflow-hidden rounded-4xl bg-white p-8 md:col-span-6 md:p-[42px] lg:col-span-4 xl:col-span-3 xl:w-[317px]">
                  {/* bg gradient img  */}
                  <RevealAnimation delay={0.6} direction="left" offset={100}>
                    <figure className="pointer-events-none absolute top-[-188px] left-[-190px] z-10 size-[400px] rotate-[-75deg] select-none">
                      <Image
                        src={multilingualImage}
                        alt="voice cloning"
                        className="size-full object-cover"
                        width={400}
                        height={400}
                      />
                    </figure>
                  </RevealAnimation>

                  <div className="relative z-20 space-y-1">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">Voice cloning</h3>
                    <p>Create a custom voice from just a few audio samples.</p>
                  </div>

                  <div className="flex h-auto w-full flex-col justify-between space-y-2.5 rounded-xl p-4 max-sm:items-center md:max-w-[233px] lg:h-[166px]">
                    {/* item one  */}
                    <RevealAnimation delay={0.5}>
                      <div className="ml-[25px] flex items-center justify-end gap-x-2">
                        <div className="bg-background-12 flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">06:18</span>
                          <figure>
                            <Image src={playIcon} alt="play icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={avatar39}
                            alt="voice cloning"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>

                    {/* item two  */}
                    <RevealAnimation delay={0.5}>
                      <div className="mr-[25px] flex flex-row-reverse items-center justify-start gap-x-2">
                        <div className="bg-background-12 flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">06:18</span>
                          <figure>
                            <Image src={playIcon} alt="play icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={icon553}
                            alt="voice cloning"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>
                    {/* item three  */}
                    <RevealAnimation delay={0.6}>
                      <div className="ml-[25px] flex items-center justify-end gap-x-2">
                        <div className="bg-background-12 flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">06:18</span>
                          <figure>
                            <Image src={playIcon} alt="play icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={avatar39}
                            alt="voice cloning"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>
                    {/* item four  */}

                    <RevealAnimation delay={0.6}>
                      <div className="mr-[25px] flex flex-row-reverse items-center justify-start gap-x-2">
                        <div className="bg-background-12 flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">06:18</span>
                          <figure>
                            <Image src={playIcon} alt="play icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={icon553}
                            alt="voice cloning"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>
                  </div>
                </div>
              </RevealAnimation>

              {/* card six  */}
              <RevealAnimation delay={0.6}>
                <div className="col-span-12 h-[450px] w-full space-y-[74px] rounded-4xl bg-white pt-[42px] lg:col-span-4 lg:max-w-[500px] xl:col-span-6 xl:max-w-[642px]">
                  <div className="space-y-1 px-[42px]">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">AI voice changer</h3>
                    <p>Transform any voice into a professional-sounding tone.</p>
                  </div>

                  {/* mic and wave   */}
                  <div className="space-y-[54px] pb-[42px] text-center">
                    {/* mic  */}
                    <span className="bg-secondary inline-block size-[94px] shrink-0 rounded-full px-7 py-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="47" viewBox="0 0 39 47" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.69089 10.3204C8.69089 4.62062 13.3115 2.60618e-09 19.0113 2.0051e-09C24.7111 1.40402e-09 29.3318 4.62062 29.3318 10.3204L29.3318 19.0113C29.3318 24.7111 24.7111 29.3318 19.0113 29.3318C13.3115 29.3318 8.69089 24.7111 8.69089 19.0113L8.69089 10.3204ZM15.0611 12.9877L16.7717 12.56C18.2422 12.1924 19.7805 12.1924 21.2509 12.56L22.9615 12.9877C23.8347 13.206 24.7194 12.6751 24.9377 11.802C25.1559 10.9289 24.6251 10.0442 23.752 9.82591L22.0414 9.39825C20.052 8.9009 17.9707 8.9009 15.9813 9.39825L14.2707 9.82591C13.3976 10.0442 12.8667 10.9289 13.085 11.802C13.3033 12.6751 14.188 13.206 15.0611 12.9877ZM16.2675 20.5572L16.7783 20.387C18.2278 19.9038 19.7949 19.9038 21.2443 20.387L21.7551 20.5572C22.6089 20.8418 23.5317 20.3804 23.8163 19.5266C24.1009 18.6728 23.6395 17.75 22.7857 17.4654L22.2749 17.2951C20.1565 16.589 17.8662 16.589 15.7477 17.2951L15.2369 17.4654C14.3831 17.75 13.9217 18.6728 14.2063 19.5266C14.4909 20.3804 15.4138 20.8418 16.2675 20.5572Z"
                          fill="white"
                        />
                        <path
                          d="M1.62954 17.3818C2.52951 17.3818 3.25908 18.1114 3.25908 19.0113C3.25908 27.711 10.3116 34.7636 19.0113 34.7636C27.7111 34.7636 34.7636 27.711 34.7636 19.0113C34.7636 18.1114 35.4931 17.3818 36.3931 17.3818C37.2931 17.3818 38.0227 18.1114 38.0227 19.0113C38.0227 28.9621 30.3777 37.1272 20.6409 37.9538L20.6409 42.8092C21.1111 42.871 21.5787 42.9598 22.0414 43.0755L23.752 43.5031C24.6251 43.7214 25.1559 44.6061 24.9377 45.4792C24.7194 46.3523 23.8347 46.8832 22.9615 46.6649L21.2509 46.2372C20.5157 46.0534 19.7635 45.9615 19.0113 45.9615C18.2591 45.9615 17.507 46.0534 16.7717 46.2372L15.0611 46.6649C14.188 46.8832 13.3033 46.3523 13.085 45.4792C12.8667 44.6061 13.3976 43.7214 14.2707 43.5031L15.9813 43.0755C16.4439 42.9598 16.9115 42.871 17.3818 42.8092L17.3818 37.9538C7.64494 37.1272 3.05423e-09 28.9621 2.00486e-09 19.0113C1.90996e-09 18.1114 0.729571 17.3818 1.62954 17.3818Z"
                          fill="white"
                        />
                      </svg>
                    </span>

                    {/* wave  */}
                    <FeaturesWave />
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="md:mt-4 lg:mt-6 xl:mt-[30px]">
      <div className="relative mx-auto max-h-[940px] max-w-[1860px] overflow-hidden pt-[170px] pb-[80px] sm:pt-[190px] sm:pb-[100px] md:rounded-[30px] md:pt-[210px] lg:pt-[220px] lg:pb-[200px] xl:rounded-[50px]">
        <video
          className="absolute top-0 left-0 size-full min-h-[100%] scale-[1.1] object-cover object-center"
          autoPlay={true}
          muted={true}
          loop={true}>
          <source src="/video/getty-watch.mp4" type="video/mp4" />
          <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
          <track
            src="descriptions/lawyer-hero-video-desc.vtt"
            kind="descriptions"
            srcLang="en"
            label="English Descriptions"
          />
          Your browser does not support the video tag.
        </video>
        <div className="main-container">
          <div className="space-y-3 text-center max-lg:max-w-[500px] md:space-y-5 md:text-left">
            <RevealAnimation delay={0.1}>
              <span className="text-tagline-2 bg-accent/10 text-primary-50 dark:text-ns-green inline-block rounded-full px-5 py-1.5 font-medium backdrop-blur-[18px]">
                Keep an eye on your finances
              </span>
            </RevealAnimation>
            <div className="space-y-2.5 md:space-y-4">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[666px] leading-[1.2]">
                  <span className="hero-text-gradient hero-text-color-2 block">
                    Enhance productivity with quick time tracking.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60 max-w-[580px]">
                  Stay focused and make every minute count with our intuitive time tracking solution. Whether
                  you&apos;re managing a team or working solo, quick time tracking helps you identify where your time
                  goes, eliminate
                </p>
              </RevealAnimation>
              <ul className="mt-8 flex flex-col flex-wrap items-start gap-x-9 gap-y-3 sm:flex-row md:mt-[54px] md:items-center">
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span className="bg-accent/20 inline-flex size-[18px] items-center justify-center rounded-full">
                      <CheckIcon className="dark:fill-accent fill-white" />
                    </span>
                    <span className="text-accent/60 text-tagline-2"> Automated time tracking </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span className="bg-accent/20 inline-flex size-[18px] items-center justify-center rounded-full">
                      <CheckIcon className="dark:fill-accent fill-white" />
                    </span>
                    <span className="text-accent/60 text-tagline-2"> In-depth productivity reports </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span className="bg-accent/20 inline-flex size-[18px] items-center justify-center rounded-full">
                      <CheckIcon className="dark:fill-accent fill-white" />
                    </span>
                    <span className="text-accent/60 text-tagline-2"> Effortless project management </span>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
          <ul className="mt-12 flex flex-col items-center justify-center gap-y-4 md:mt-14 md:flex-row md:items-start md:justify-start md:gap-x-4 lg:mb-[100px]">
            <RevealAnimation delay={0.7} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/pricing"
                  className="btn btn-green hover:btn-white dark:hover:btn-accent btn-lg md:btn-xl mx-auto block w-[90%] border-0 sm:mx-0 md:inline-block md:w-auto">
                  Try it free
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.9} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/signup"
                  className="btn btn-lg md:btn-xl dark:btn-transparent btn-dark bg-accent/20 hover:btn-green mx-auto block w-[90%] sm:mx-0 md:inline-block md:w-auto dark:border">
                  Watch now
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

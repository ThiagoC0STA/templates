import step1Img from '@public/images/ns-img-300.png';
import step2Img from '@public/images/ns-img-301.png';
import step3Img from '@public/images/ns-img-302.png';
import step4Img from '@public/images/ns-img-303.png';
import gradient9Img from '@public/images/ns-img-501.png';
import gradient32Img from '@public/images/ns-img-520.png';
import gradient33Img from '@public/images/ns-img-521.png';
import gradient34Img from '@public/images/ns-img-522.png';
import step2DarkImg from '@public/images/ns-img-dark-200.png';
import step3DarkImg from '@public/images/ns-img-dark-201.png';
import step4DarkImg from '@public/images/ns-img-dark-202.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface StepCard {
  id: number;
  title: string;
  description: string;
  gradientSrc: StaticImageData;
  stepImg: StaticImageData;
  stepDarkImg?: StaticImageData;
  maxDescriptionWidth: string;
}

const stepCards: StepCard[] = [
  {
    id: 1,
    title: 'Smart Trade Automation',
    description: 'Automate your trades using rules and triggers you define.',
    gradientSrc: gradient32Img,
    stepImg: step1Img,
    maxDescriptionWidth: 'max-w-[281px]',
  },
  {
    id: 2,
    title: 'Real-Time Risk Analytics',
    description: 'Get notified instantly about volatility, exposure, and risks.',
    gradientSrc: gradient33Img,
    stepImg: step2Img,
    stepDarkImg: step2DarkImg,
    maxDescriptionWidth: 'max-w-[250px]',
  },
  {
    id: 3,
    title: 'Multi-Device Access',
    description: 'Multi-Trade options available on the go—web, desktop, or mobile.',
    gradientSrc: gradient34Img,
    stepImg: step3Img,
    stepDarkImg: step3DarkImg,
    maxDescriptionWidth: 'max-w-[250px]',
  },
  {
    id: 4,
    title: 'Learning Hub for Beginners',
    description: 'Access beginner-friendly tutorials, courses, and demo accounts.',
    gradientSrc: gradient9Img,
    stepImg: step4Img,
    stepDarkImg: step4DarkImg,
    maxDescriptionWidth: 'max-w-[280px]',
  },
];

const Steps = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        className="bg-background-2 dark:bg-background-5 relative py-16 md:py-20 lg:py-[100px]"
        aria-label="Hero section">
        <div className="main-container">
          <div className="grid grid-cols-12 items-start justify-items-center gap-y-14 xl:gap-[60px]">
            <div className="col-span-12 lg:sticky lg:top-28 lg:col-span-6">
              <div className="space-y-10 text-center md:space-y-14 lg:text-left">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 className="mx-auto w-full xl:mx-0 xl:max-w-[479px]">Your edge in the forex market</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p>Powerful tools designed to help you trade efficiently and confidently.</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton
                      href="/features"
                      className="btn dark:btn-transparent btn-secondary btn-md hover:btn-green mx-auto w-[90%] md:mx-0 md:w-auto">
                      Explore all features
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <StackCardWrapper
                topOffset="11vh"
                gap="24px"
                initDelay={100}
                className="order-2 w-full flex-none sm:order-1 sm:flex-1">
                {stepCards.map((step, index) => (
                  <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
                    <StackCardItem>
                      <div className="relative z-20 mx-auto flex w-full max-w-full items-center justify-center overflow-hidden rounded-[20px] p-2 sm:mx-0 sm:max-w-[483px]">
                        <figure className="pointer-events-none absolute -top-[99%] -left-[88%] -z-10 size-[1000px] rotate-[307deg] opacity-50 select-none">
                          <Image src={step.gradientSrc} alt="step" />
                        </figure>
                        <div className="relative z-10 w-full max-w-full space-y-6 rounded-[14px] bg-white p-8 sm:max-w-[467px] dark:bg-black">
                          <div className="space-y-1">
                            <p className="text-heading-5 text-secondary dark:text-accent">{step.title}</p>
                            <p className={`${step.maxDescriptionWidth} w-full`}>{step.description}</p>
                          </div>
                          <figure className="w-full max-w-[385px] overflow-hidden rounded-2xl">
                            {step.stepDarkImg ? (
                              <>
                                <Image
                                  src={step.stepImg}
                                  alt="step"
                                  className="block md:max-h-[300px] md:min-h-[300px] dark:hidden"
                                />
                                <Image
                                  src={step.stepDarkImg}
                                  alt="step"
                                  className="hidden md:max-h-[300px] md:min-h-[300px] dark:block"
                                />
                              </>
                            ) : (
                              <Image src={step.stepImg} alt="step" className="md:max-h-[300px] md:min-h-[300px]" />
                            )}
                          </figure>
                        </div>
                      </div>
                    </StackCardItem>
                  </RevealAnimation>
                ))}
              </StackCardWrapper>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Steps;

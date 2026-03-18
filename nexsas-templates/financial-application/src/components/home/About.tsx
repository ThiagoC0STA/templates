import aboutDataIntegration1Image from '@public/images/ns-img-57.png';
import aboutDataIntegration2Image from '@public/images/ns-img-58.svg';
import aboutDataIntegration3Image from '@public/images/ns-img-59.svg';
import aboutDataSolution1Image from '@public/images/ns-img-60.svg';
import aboutDataSolution2Image from '@public/images/ns-img-61.svg';
import aboutDataSolution3Image from '@public/images/ns-img-62.svg';
import aboutDataIntegration1DarkImage from '@public/images/ns-img-dark-35.png';
import aboutDataIntegration2DarkImage from '@public/images/ns-img-dark-36.svg';
import aboutDataIntegration3DarkImage from '@public/images/ns-img-dark-37.svg';
import aboutDataSolution1DarkImage from '@public/images/ns-img-dark-38.svg';
import aboutDataSolution2DarkImage from '@public/images/ns-img-dark-39.svg';
import aboutDataSolution3DarkImage from '@public/images/ns-img-dark-40.svg';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import AboutFeaturesList from './AboutFeaturesList';

const About = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-12 py-28 sm:gap-[200px] sm:py-[120px] lg:grid-cols-2">
          <div className="mx-auto max-lg:order-1">
            {/*Integration Images*/}
            <div className="relative z-10 inline-block">
              <RevealAnimation delay={0.3} offset={100}>
                <figure className="max-w-full md:max-w-[358px]">
                  <Image
                    src={aboutDataIntegration1Image}
                    alt="aboaut-data-integration"
                    className="rounded-[20px] max-sm:w-[250px] dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration1DarkImage}
                    alt="aboaut-data-integration"
                    className="hidden rounded-[20px] max-sm:w-[250px] dark:inline-block"
                  />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.4} direction="right" offset={100} useSpring={true} duration={2}>
                <figure className="absolute -top-12 -right-20 hidden rounded-2xl max-sm:w-[200px] sm:-top-[90px] sm:-right-[200px] sm:inline-block lg:-right-[150px] xl:-right-[200px]">
                  <Image
                    src={aboutDataIntegration2Image}
                    alt="aboaut-data-integration"
                    className="block size-full object-cover dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration2DarkImage}
                    alt="aboaut-data-integration"
                    className="hidden size-full object-cover dark:inline-block"
                  />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.5} direction="left" offset={100} useSpring={true} duration={2}>
                <figure className="absolute -right-20 bottom-12 -z-10 hidden overflow-hidden rounded-2xl max-sm:w-[130px] sm:-right-[200px] sm:bottom-[85px] sm:inline-block lg:-right-[150px] xl:-right-[200px]">
                  <Image
                    src={aboutDataIntegration3Image}
                    alt="about-data-integration"
                    className="block size-full object-cover dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration3DarkImage}
                    alt="about-data-integration"
                    className="hidden size-full object-cover dark:inline-block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>

          {/*Integration Data*/}
          <div className="pt-5 text-center max-lg:order-0 sm:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2 mb-5">Data integrations</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">A clear vision is essential for understanding wealth dynamics.</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mb-8">
                A clear vision is essential for understanding wealth dynamics because it provides direction, purpose,
                and clarity in navigating financial growth and sustainability.
              </p>
            </RevealAnimation>

            <AboutFeaturesList />

            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/integration"
                  className="integration-button btn btn-lg md:btn-xl btn-secondary hover:btn-primary dark:btn-accent mx-auto inline-block w-[90%] md:mx-0 md:w-auto">
                  Started Your Journey
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-[112px] py-28 lg:grid-cols-2">
          {/*Integration Data*/}
          <div className="pt-5 text-center max-lg:order-1 sm:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2 mb-5">Strong Solutions</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">Ensure strong solutions are available at all times</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mb-8">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
                though it looks like nothing.
              </p>
            </RevealAnimation>

            <AboutFeaturesList />

            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/about"
                  className="solution-button btn btn-lg md:btn-xl btn-secondary hover:btn-primary dark:btn-accent mx-auto inline-block w-[90%] md:mx-0 md:w-auto">
                  Started Your Journey
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          <div className="max-lg:order-0">
            {/*Integration Images*/}
            <div className="relative left-1/2 z-10 inline-block -translate-x-1/2 max-sm:pt-[200px] sm:pt-[230px]">
              <RevealAnimation delay={0.3} offset={100} useSpring={true} duration={2}>
                <figure className="ml-0 overflow-hidden rounded-2xl max-sm:w-[300px] sm:ml-16 lg:ml-0 xl:ml-16">
                  <Image
                    src={aboutDataSolution1Image}
                    alt="about-data-integration"
                    className="block size-full object-cover dark:hidden"
                  />
                  <Image
                    src={aboutDataSolution1DarkImage}
                    alt="about-data-integration"
                    className="hidden size-full object-cover dark:inline-block"
                  />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.4} offset={100} direction="up" useSpring={true} duration={2}>
                <figure className="absolute top-0 left-0 overflow-hidden rounded-[20px]">
                  <Image
                    src={aboutDataSolution2Image}
                    alt="about-data-integration"
                    className="block size-full object-cover dark:hidden"
                  />
                  <Image
                    src={aboutDataSolution2DarkImage}
                    alt="about-data-integration"
                    className="hidden size-full object-cover dark:inline-block"
                  />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.4} offset={100} direction="right" useSpring={true} duration={2}>
                <figure className="absolute top-[150px] -right-[50px] -z-10 overflow-hidden rounded-2xl max-sm:w-[150px] sm:-right-[150px] lg:-right-[50px] xl:-right-[150px]">
                  <Image
                    src={aboutDataSolution3Image}
                    alt="about-data-integration "
                    className="block size-full object-cover dark:hidden"
                  />
                  <Image
                    src={aboutDataSolution3DarkImage}
                    alt="about-data-integration "
                    className="hidden size-full object-cover dark:inline-block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import stepImg01 from '@public/images/ns-img-192.png';
import stepImg02 from '@public/images/ns-img-193.png';
import stepImg03 from '@public/images/ns-img-194.png';
import stepImg04 from '@public/images/ns-img-195.png';
import gradient9 from '@public/images/ns-img-501.png';
import gradient32 from '@public/images/ns-img-520.png';
import gradient33 from '@public/images/ns-img-521.png';
import gradient34 from '@public/images/ns-img-522.png';
import stepImg02Dark from '@public/images/ns-img-dark-131.png';
import stepImg03Dark from '@public/images/ns-img-dark-132.png';
import stepImg04Dark from '@public/images/ns-img-dark-133.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const GetStarted = () => {
  return (
    <section className="relative py-[50px] md:py-[80px] lg:py-[100px]" aria-label="Hero section">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-y-12 xl:gap-[60px]">
          <div className="col-span-12 lg:sticky lg:top-28 xl:col-span-6">
            <div className="space-y-7 text-center xl:text-left">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="mx-auto w-full xl:mx-0 xl:max-w-[629px]">What makes us stand out</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="xl:max-w-[544px]">
                    What distinguishes us is our commitment to empowering bold founders, dynamic teams, and innovative
                    entrepreneurs.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="w-full">
                  <LinkButton
                    href="/pricing"
                    className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent w-[85%] md:w-auto">
                    Get started now
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6">
            <StackCardWrapper
              topOffset="13vh"
              gap="24px"
              initDelay={100}
              className="mx-auto max-w-[820px] xl:mx-0 xl:max-w-full">
              {/* Card one */}
              <StackCardItem>
                <div className="relative z-20 mx-auto flex w-full max-w-full items-center justify-center overflow-hidden rounded-[20px] p-2 sm:mx-0 sm:max-w-[465px]">
                  {/* gradient border img */}
                  <figure className="pointer-events-none absolute top-[-66%] left-[-52%] z-[-1] w-[600px] rotate-[-41deg] select-none md:top-[-99%] md:-left-[103%] md:w-[900px] xl:w-[1050px]">
                    <Image src={gradient32} alt="gradient-border" className="h-full w-full object-cover" />
                  </figure>
                  <figure className="space-y-6 rounded-xl bg-white p-8 dark:bg-black">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Innovative ideas</h5>
                      <p className="max-w-[250px]">Built with modern business challenges in mind</p>
                    </figcaption>
                    <figure className="w-full max-w-[385px]">
                      <Image src={stepImg01} alt="step" className="w-full md:max-h-[300px] md:min-h-[300px]" />
                    </figure>
                  </figure>
                </div>
              </StackCardItem>

              {/* Card two */}
              <StackCardItem>
                <div className="relative z-20 flex w-full max-w-full items-center justify-center overflow-hidden rounded-[20px] p-2 sm:max-w-[465px]">
                  {/* gradient border img */}
                  <figure className="pointer-events-none absolute top-[-76%] left-[-62%] z-[-1] w-[600px] rotate-[-41deg] select-none md:top-[-111%] md:left-[-103%] md:w-[900px] xl:w-[1050px]">
                    <Image src={gradient33} alt="gradient-border" className="h-full w-full object-cover" />
                  </figure>
                  <figure className="space-y-6 rounded-xl bg-white p-8 dark:bg-black">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Top-rated features</h5>
                      <p className="max-w-[250px]">Only what you need, nothing you don&apos;t</p>
                    </figcaption>
                    <div className="w-full max-w-[400px] overflow-hidden rounded-2xl">
                      <Image
                        src={stepImg02}
                        alt="step"
                        className="w-full md:max-h-[300px] md:min-h-[300px] dark:hidden"
                      />
                      <Image
                        src={stepImg02Dark}
                        alt="step"
                        className="hidden w-full md:max-h-[300px] md:min-h-[300px] dark:block"
                      />
                    </div>
                  </figure>
                </div>
              </StackCardItem>

              {/* Card three */}
              <StackCardItem>
                <div className="relative z-20 flex w-full max-w-full items-center justify-center overflow-hidden rounded-[20px] p-2 sm:max-w-[465px]">
                  {/* gradient border img */}
                  <figure className="pointer-events-none absolute top-[-75%] left-[-65%] z-[-1] w-[600px] rotate-[-41deg] select-none md:top-[-111%] md:left-[-103%] md:w-[900px] xl:w-[1050px]">
                    <Image src={gradient34} alt="gradient-border" className="h-full w-full object-cover" />
                  </figure>
                  <figure className="space-y-6 rounded-xl bg-white p-8 dark:bg-black">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Beautiful interface</h5>
                      <p className="max-w-[250px]">Designed to impress, built to perform</p>
                    </figcaption>
                    <div className="w-full max-w-[400px] overflow-hidden rounded-2xl">
                      <Image
                        src={stepImg03}
                        alt="step"
                        className="w-full md:max-h-[300px] md:min-h-[300px] dark:hidden"
                      />
                      <Image
                        src={stepImg03Dark}
                        alt="step"
                        className="hidden w-full md:max-h-[300px] md:min-h-[300px] dark:block"
                      />
                    </div>
                  </figure>
                </div>
              </StackCardItem>

              {/* Card four */}
              <StackCardItem>
                <div className="relative z-20 flex w-full max-w-full items-center justify-center overflow-hidden rounded-[20px] p-2 sm:max-w-[465px]">
                  {/* gradient border img */}
                  <figure className="pointer-events-none absolute top-[-66%] left-[-30%] z-[-1] w-[600px] rotate-[245deg] select-none max-[376px]:left-[-40%] md:top-[-97%] md:left-[-60%] md:w-[900px] lg:left-[-48%] xl:w-[1050px]">
                    <Image src={gradient9} alt="gradient-border" className="h-full w-full object-cover" />
                  </figure>
                  <figure className="space-y-6 rounded-xl bg-white p-8 dark:bg-black">
                    <figcaption className="space-y-2">
                      <h5 className="text-heading-5 text-secondary dark:text-accent">Simple solutions</h5>
                      <p className="max-w-[250px]">No fluff, just functionality</p>
                    </figcaption>
                    <div className="w-full max-w-[400px] overflow-hidden rounded-2xl">
                      <Image
                        src={stepImg04}
                        alt="step"
                        className="w-full md:max-h-[300px] md:min-h-[300px] dark:hidden"
                      />
                      <Image
                        src={stepImg04Dark}
                        alt="step"
                        className="hidden w-full md:max-h-[300px] md:min-h-[300px] dark:block"
                      />
                    </div>
                  </figure>
                </div>
              </StackCardItem>
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

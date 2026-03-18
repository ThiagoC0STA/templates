'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Steps = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });

  return (
    <section
      className="bg-background-3 dark:bg-background-7 py-16 md:py-[90px] lg:py-[100px]"
      aria-label="Application Steps">
      <div className="main-container">
        <div className="space-y-14">
          <div
            ref={ref}
            className="progress-container flex flex-col items-start justify-center gap-[62px] max-lg:px-5 lg:flex-row xl:justify-normal">
            {/* step one  */}
            <RevealAnimation delay={0.2}>
              <div className="mx-auto w-full space-y-3 md:max-w-[90%] lg:max-w-[388px]" aria-label="Step 1">
                <div className="progress-bar bg-stroke-2 dark:bg-stroke-6 relative h-[2px] w-full">
                  <div className="progress-line bg-ns-green absolute top-0 left-0 h-full w-[25%]" />
                </div>

                <p className="text-tagline-2 text-primary-500">01</p>

                <div className="space-y-2">
                  <h2 className="text-heading-5">Apply online.</h2>
                  <p className="w-full max-w-[260px]">Start your application in minutes—no paperwork required.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* step two  */}
            <RevealAnimation delay={0.3}>
              <div className="mx-auto w-full space-y-3 md:max-w-[90%] lg:max-w-[388px]" aria-label="Step 2">
                <div className="progress-bar bg-stroke-2 dark:bg-stroke-6 relative h-[2px] w-full">
                  <div className="progress-line bg-ns-green absolute top-0 left-0 h-full w-[0%]" />
                </div>

                <p className="text-tagline-2 text-primary-500">02</p>

                <div className="space-y-2">
                  <h2 className="text-heading-5">Get approved.</h2>
                  <p className="w-full max-w-[260px]">
                    Our team reviews your application and offers a personalized loan solution.
                  </p>
                </div>
              </div>
            </RevealAnimation>
            {/* step three  */}
            <RevealAnimation delay={0.4}>
              <div className="mx-auto w-full space-y-3 md:max-w-[90%] lg:max-w-[388px]" aria-label="Step 3">
                <div className="progress-bar bg-stroke-2 dark:bg-stroke-6 relative h-[2px] w-full">
                  <div className="progress-line bg-ns-green absolute top-0 left-0 h-full w-[0%]" />
                </div>

                <p className="text-tagline-2 text-primary-500">03</p>

                <div className="space-y-2">
                  <h2 className="text-heading-5">Close with confidence.</h2>
                  <p className="w-full max-w-[260px]">We handle the coordination, documents, and closing logistics.</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.5}>
            <div className="text-center lg:text-start">
              <LinkButton
                href="/process"
                className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md w-[85%] md:w-[40%] lg:w-auto"
                aria-label="Start your application">
                Start your application
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Steps;

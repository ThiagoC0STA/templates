import roundImage from '@public/images/ns-img-73.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Progress from './Progress';

const FeatureV3 = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 overflow-hidden py-[75px] md:py-[100px] lg:py-[150px]">
      <div className="main-container flex flex-col items-center gap-y-14 md:gap-y-20 lg:flex-row lg:gap-[100px]">
        <div className="relative flex w-full justify-center md:flex-1 lg:w-auto lg:justify-start">
          <RevealAnimation delay={0.2} offset={200}>
            <figure className="max-w-[400px] overflow-hidden lg:max-w-[450px]">
              <Image src={roundImage} alt="Finance Hero" className="size-full" width={450} height={450} priority />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} offset={100} direction="right">
            <figure className="shadow-1 dark:bg-background-9 absolute right-[1%] bottom-24 max-h-[101px] min-h-[100px] min-w-[288px] space-y-2 overflow-hidden rounded-[12px] bg-white p-4 md:right-[10%] lg:right-0">
              <figcaption className="flex justify-between gap-2">
                <span className="text-tagline-1 dark:text-accent font-normal"> Today&apos;s Revenue </span>
                <span className="text-secondary dark:text-accent flex items-center gap-1 text-lg leading-[1.5] font-medium">
                  $
                  <NumberAnimation number={53224} speed={1000} interval={180} rooms={5} heightSpaceRatio={2.5} />
                </span>
              </figcaption>
              <Progress />
            </figure>
          </RevealAnimation>
        </div>
        <div className="mx-auto flex max-w-[550px] flex-col items-center text-center md:flex-1 lg:mx-0 lg:max-w-full lg:items-start lg:text-left">
          <div className="mb-6 space-y-3 text-left">
            <RevealAnimation delay={0.1}>
              <h2>What makes our security software stand out</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Take control of your finances with us and experience the confidence that comes with smart money
                management. Whether you&apos;re looking to budget better
              </p>
            </RevealAnimation>
          </div>
          <ul className="mb-14 flex w-full flex-col justify-start gap-y-2.5">
            <RevealAnimation delay={0.3}>
              <li className="flex items-center gap-3 py-1.5 lg:py-2.5">
                <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="dark:fill-secondary fill-white"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-medium">
                  Comprehensive antivirus
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <li className="flex items-center gap-3 py-1.5 lg:py-2.5">
                <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="dark:fill-secondary fill-white"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-medium">
                  One-click system cleanup
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="flex items-center gap-3 py-1.5 lg:py-2.5">
                <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="dark:fill-secondary fill-white"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-medium">
                  Encrypted cloud backup
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="flex items-center gap-3 py-1.5 lg:py-2.5">
                <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    className="shrink-0">
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      className="dark:fill-secondary fill-white"
                    />
                  </svg>
                </span>
                <span className="sm:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-medium">
                  Identity theft protection
                </span>
              </li>
            </RevealAnimation>
          </ul>
          <RevealAnimation delay={0.7}>
            <div className="w-full">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary dark:btn-accent dark:hover:btn-white-dark lg:btn-xl btn-lg hover:btn-white w-[85%] lg:w-auto">
                Free download
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeatureV3;

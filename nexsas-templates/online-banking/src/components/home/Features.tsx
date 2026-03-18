import feature1 from '@public/images/ns-img-80.png';
import feature1Dark from '@public/images/ns-img-dark-54.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../home/Progress';
import LinkButton from '../ui/button/LinkButton';

const Features = () => {
  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="lp:gap-[100px] grid grid-cols-12 items-center gap-y-16 lg:gap-[70px] xl:gap-[90px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="text-center lg:text-left">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="mx-auto max-w-[587px] lg:mx-0">More than 10 years experience in this industry</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="mx-auto max-w-[500px] lg:mx-0 xl:max-w-full">
                    At NextSaaS, We leverage AI and strategic insight to enhance business performance. Partner with us
                    to unlock your potential.
                  </p>
                </RevealAnimation>
              </div>
              <div className="mt-9 flex flex-col justify-start gap-8 sm:flex-row lg:flex-col xl:flex-row xl:items-center">
                <RevealAnimation delay={0.3}>
                  <div className="bg-background-1 dark:bg-background-6 flex-1 space-y-3 rounded-2xl p-6 xl:max-w-[288px]">
                    <div className="bg-ns-yellow mx-auto flex w-20 items-center justify-center rounded-full px-7 py-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                          stroke="#1A1A1C"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 4L12 14.01L9 11.01"
                          stroke="#1A1A1C"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-secondary dark:text-accent text-heading-6 flex items-center justify-center gap-0.5 text-center font-normal">
                      <NumberAnimation number={60} speed={2000} interval={200} rooms={2} heightSpaceRatio={2.6}>
                        60
                      </NumberAnimation>
                      % Project completed
                    </p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <div className="bg-background-1 dark:bg-background-6 flex-1 space-y-3 rounded-2xl p-6 xl:max-w-[288px]">
                    <div className="bg-ns-green mx-auto flex w-20 items-center justify-center rounded-full px-7 py-3.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                        <path
                          d="M7.5 22H4.5C3.96957 22 3.46086 21.7893 3.08579 21.4142C2.71071 21.0391 2.5 20.5304 2.5 20V13C2.5 12.4696 2.71071 11.9609 3.08579 11.5858C3.46086 11.2107 3.96957 11 4.5 11H7.5M14.5 9V5C14.5 4.20435 14.1839 3.44129 13.6213 2.87868C13.0587 2.31607 12.2956 2 11.5 2L7.5 11V22H18.78C19.2623 22.0055 19.7304 21.8364 20.0979 21.524C20.4654 21.2116 20.7077 20.7769 20.78 20.3L22.16 11.3C22.2035 11.0134 22.1842 10.7207 22.1033 10.4423C22.0225 10.1638 21.8821 9.90629 21.6919 9.68751C21.5016 9.46873 21.2661 9.29393 21.0016 9.17522C20.7371 9.0565 20.4499 8.99672 20.16 9H14.5Z"
                          stroke="#1A1A1C"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-secondary dark:text-accent text-heading-6 flex items-center justify-center gap-1 text-center font-normal">
                      <NumberAnimation
                        number={71}
                        speed={2000}
                        interval={200}
                        rooms={2}
                        heightSpaceRatio={2.6}></NumberAnimation>
                      Satisfied clients
                    </p>
                  </div>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.5}>
                <div className="mt-14">
                  <LinkButton
                    href="/about"
                    className="btn btn-md btn-secondary hover:btn-primary dark:btn-transparent mx-auto w-[90%] md:mx-0 md:w-auto">
                    Learn More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div>
              <figure className="relative">
                <RevealAnimation delay={0.6} offset={100}>
                  <figure className="mx-auto w-full max-w-[300px] sm:max-w-[500px] xl:mx-0">
                    <Image src={feature1} alt="features" className="w-full dark:hidden" />
                    <Image src={feature1Dark} alt="features" className="hidden w-full dark:block" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.9} offset={100} direction="right" useSpring duration={2}>
                  <figure
                    data-progress-item=""
                    data-progress-value={88}
                    data-progress-duration={2}
                    className="lp:top-3/4 lp:-translate-y-3/4 lp:left-[60%] dark:bg-background-6 absolute top-[75%] left-[7%] z-[1] max-h-[101px] min-h-[100px] w-full max-w-[200px] min-w-[288px] space-y-2 rounded-xl bg-white p-4 sm:max-w-[288px]">
                    <figcaption className="flex justify-between gap-2">
                      <span className="text-tagline-1 dark:text-accent font-normal"> Today&apos;s Revenue </span>
                      <span className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                        <span className="font-inherit"> $ </span>
                        <NumberAnimation
                          number={53224}
                          speed={2000}
                          interval={200}
                          rooms={5}
                          heightSpaceRatio={2.5}></NumberAnimation>
                      </span>
                    </figcaption>
                    <Progress />
                  </figure>
                </RevealAnimation>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

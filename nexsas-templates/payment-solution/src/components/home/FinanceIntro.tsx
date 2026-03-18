import { CheckIcon } from '@/icons';
import roundImage from '@public/images/ns-img-73.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../home/Progress';
import LinkButton from '../ui/button/LinkButton';

const FinanceIntro = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 overflow-hidden py-10 md:py-20 2xl:py-[120px]">
      <div className="main-container flex flex-col-reverse items-center gap-y-10 lg:flex-row lg:gap-24">
        <div className="relative flex w-full justify-start md:flex-1 lg:w-auto">
          <RevealAnimation delay={0.1} direction="up" offset={100}>
            <figure>
              <Image src={roundImage} alt="Finance Hero" className="h-auto w-full lg:max-w-[450px]" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100} useSpring={true} duration={2}>
            <figure className="shadow-1 dark:bg-background-6 absolute right-0 bottom-24 max-h-[101px] min-h-[100px] min-w-[288px] space-y-2 overflow-hidden rounded-[12px] bg-white p-4">
              <figcaption className="flex justify-between gap-2">
                <span className="text-tagline-1 dark:text-accent font-normal"> Today&apos;s Revenue </span>
                <p className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                  <span className="font-inherit"> $ </span>
                  <NumberAnimation
                    number={53224}
                    speed={1500}
                    interval={180}
                    rooms={5}
                    heightSpaceRatio={2.5}
                    className="text-secondary dark:text-accent text-lg leading-[1.5] font-medium">
                    53,224
                  </NumberAnimation>
                </p>
              </figcaption>
              <Progress duration={2} />
            </figure>
          </RevealAnimation>
        </div>
        <div className="flex flex-col items-center md:flex-1 md:items-start lg:items-start lg:text-left">
          <RevealAnimation delay={0.1}>
            <h2 className="mb-3">Take control of your finances with us</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mb-6">
              Take control of your finances with us and experience the confidence that comes with smart money
              management. Whether you&apos;re looking to budget better
            </p>
          </RevealAnimation>
          <ul className="mb-14 space-y-2.5">
            <RevealAnimation delay={0.3}>
              <li className="text-tagline-1 dark:text-accent flex items-center gap-4 font-normal">
                <span className="bg-secondary dark:bg-accent flex size-[18px] items-center justify-center rounded-full">
                  <CheckIcon />
                </span>
                Methods for recording accounting entries
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <li className="text-tagline-1 dark:text-accent flex items-center gap-4 font-normal">
                <span className="bg-secondary dark:bg-accent flex size-[18px] items-center justify-center rounded-full">
                  <CheckIcon />
                </span>
                Statements of cash flow
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="text-tagline-1 dark:text-accent flex items-center gap-4 font-normal">
                <span className="bg-secondary dark:bg-accent flex size-[18px] items-center justify-center rounded-full">
                  <CheckIcon />
                </span>
                Statements of cash flow
              </li>
            </RevealAnimation>
          </ul>
          <RevealAnimation delay={0.6}>
            <div className="w-full md:w-auto">
              <LinkButton
                href="/about"
                className="btn btn-secondary btn-lg md:btn-xl hover:btn-primary dark:btn-accent text-tagline-1 mx-auto w-[90%] font-medium md:mx-0 md:w-auto">
                <span>Get started</span>
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FinanceIntro;

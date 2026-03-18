import services4Image from '@public/images/ns-img-48.png';
import balanceImage from '@public/images/ns-img-51.svg';
import services4DarkImage from '@public/images/ns-img-dark-27.png';
import balanceDarkImage from '@public/images/ns-img-dark-30.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Progress from './Progress';

const ServiceCardThree = () => {
  return (
    <div className="main-container">
      <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-[100px]">
        <div className="col-span-12 xl:col-span-6">
          <div className="relative mx-auto w-full max-w-[595px] xl:mx-0">
            <RevealAnimation delay={0.5} direction="left" offset={100}>
              <figure className="shadow-1 dark:bg-background-6 absolute bottom-10 left-2.5 z-[1] max-h-[101px] min-h-[100px] min-w-[288px] space-y-2 rounded-xl bg-white p-4 xl:-left-12">
                <figcaption className="flex justify-between gap-2">
                  <span className="text-tagline-1 dark:text-accent font-normal"> Today&apos;s Revenue </span>
                  <span className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                    <span className="font-inherit"> $ </span>
                    <NumberAnimation number={53224} speed={2500} interval={140} rooms={5} />
                  </span>
                </figcaption>
                <Progress />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.2} direction="up" offset={100}>
              <figure className="mx-auto max-h-[995px] w-full max-w-[413px] overflow-hidden rounded-[20px] xl:mx-0">
                <Image src={services4Image} alt="services-4" className="size-full object-cover dark:hidden" priority />
                <Image
                  src={services4DarkImage}
                  alt="services-4"
                  className="hidden size-full object-cover dark:block"
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.5} direction="right" offset={100}>
              <figure className="shadow-9 absolute right-0 -bottom-8 z-[1] hidden overflow-hidden rounded-xl sm:block xl:right-20 xl:bottom-10">
                <Image src={balanceImage} alt="balance" className="h-full w-full dark:hidden" />
                <Image src={balanceDarkImage} alt="balance" className="hidden h-full w-full dark:block" />
              </figure>
            </RevealAnimation>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <div className="text-center xl:text-left">
            <div className="mb-14 space-y-3">
              <RevealAnimation delay={0.1}>
                <h3 className="mx-auto max-w-[509px] xl:mx-0">Sales strategy and management techniques</h3>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <p className="mx-auto max-w-[465px] xl:mx-0">
                  Sales strategy and management techniques are essential components for driving business growth and
                  achieving revenue targets.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div>
                <LinkButton
                  href="/services/sales-strategy-and-management-techniques"
                  className="btn btn-secondary btn-md dark:btn-accent hover:btn-primary">
                  Read More
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCardThree.displayName = 'ServiceCardThree';
export default ServiceCardThree;

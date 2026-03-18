import services1Image from '@public/images/ns-img-45.png';
import services1DarkImage from '@public/images/ns-img-dark-24.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ServiceCardOne = () => {
  return (
    <div className="main-container xl:pb-20">
      <div className="grid grid-cols-12 items-center justify-center gap-y-14 xl:justify-start xl:gap-[100px]">
        <div className="col-span-12 xl:col-span-6">
          <RevealAnimation delay={0.4} direction="right" offset={50}>
            <figure className="mx-auto max-h-[480px] max-w-[595px] xl:mx-0">
              <Image src={services1Image} alt="services-1" className="h-full w-full object-fill dark:hidden" priority />
              <Image
                src={services1DarkImage}
                alt="services-1"
                className="hidden h-full w-full object-fill dark:block"
                priority
              />
            </figure>
          </RevealAnimation>
        </div>

        <div className="col-span-12 xl:col-span-6">
          <div className="text-center xl:text-left">
            <div className="mb-14 space-y-3">
              <RevealAnimation delay={0.5}>
                <h3 className="mx-auto max-w-[509px] xl:mx-0">Monitor and analyze conversions effectively</h3>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <p className="mx-auto max-w-[465px] xl:mx-0">
                  Monitoring and analyzing conversions effectively is essential for understanding how users interact
                  with your digital platforms
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/services/monitor-and-analyze-conversions-effectively"
                  className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md">
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

ServiceCardOne.displayName = 'ServiceCardOne';
export default ServiceCardOne;

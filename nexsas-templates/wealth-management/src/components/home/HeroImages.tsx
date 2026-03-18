import HeroImageTop from '@public/images/ns-img-262.png';
import HeroImageCenter from '@public/images/ns-img-263.png';
import HeroImageRight from '@public/images/ns-img-264.png';
import HeroImageBottom from '@public/images/ns-img-265.png';
import HeroImageTopDark from '@public/images/ns-img-dark-176.png';
import HeroImageCenterDark from '@public/images/ns-img-dark-177.png';
import HeroImageRightDark from '@public/images/ns-img-dark-178.png';
import HeroImageBottomDark from '@public/images/ns-img-dark-179.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative z-0 ml-auto h-[650px] w-full max-w-[724px]">
      <RevealAnimation delay={0.1} offset={100} useSpring={true} duration={2} direction="up">
        <figure className="absolute left-[40px] z-1 w-[200px] rotate-[8deg] max-sm:top-[10px] sm:left-0 md:top-5 lg:top-0 lg:w-[273px]">
          <Image src={HeroImageTop} alt="hero-image" className="w-full rounded-[20px] dark:hidden" />
          <Image src={HeroImageTopDark} alt="hero-image" className="hidden w-full rounded-[20px] dark:block" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <figure className="absolute top-[150px] left-0 -z-1 w-[350px] max-w-full md:left-[10px] lg:left-[100px] lg:w-[370px] xl:left-[135px] xl:w-[408px]">
          <Image src={HeroImageCenter} alt="hero-image" className="w-full rounded-[20px] dark:hidden" />
          <Image src={HeroImageCenterDark} alt="hero-image" className="hidden w-full rounded-[20px] dark:block" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.3} offset={100} useSpring={true} duration={2} direction="right">
        <figure className="md:[250px] lp:right-[-20px] shadow-2 absolute top-[250px] right-0 z-1 w-[150px] max-w-full rotate-[-15deg] overflow-hidden rounded-[20px] xl:right-[25px] xl:w-[280px]">
          <Image src={HeroImageRight} alt="hero-image" className="w-full dark:hidden" />
          <Image src={HeroImageRightDark} alt="hero-image" className="hidden w-full dark:block" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.4} offset={100} useSpring={true} duration={2} direction="left">
        <figure className="absolute bottom-[-20px] left-[2px] z-1 w-[600px] max-w-full sm:-bottom-[60px] sm:-left-[45px] md:w-[357px]">
          <Image src={HeroImageBottom} alt="hero-image" className="w-full rounded-[20px] dark:hidden" />
          <Image src={HeroImageBottomDark} alt="hero-image" className="hidden w-full rounded-[20px] dark:block" />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;

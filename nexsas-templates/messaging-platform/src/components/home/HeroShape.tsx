import heroShape1 from '@public/images/ns-img-15.png';
import heroShape2 from '@public/images/ns-img-16.png';
import heroShape3 from '@public/images/ns-img-17.png';
import heroShape4 from '@public/images/ns-img-18.png';
import heroShape5 from '@public/images/ns-img-19.png';
import heroShape6 from '@public/images/ns-img-20.png';
import heroShape7 from '@public/images/ns-img-21.png';
import heroShape8 from '@public/images/ns-img-22.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroShape = () => {
  return (
    <>
      <RevealAnimation delay={0.1}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[14%] left-[8%] -z-10 h-[50px] w-[50px] rounded-full rounded-br-none p-[3px] md:top-[22%] md:left-[19%] xl:top-[14%] xl:left-[19%]"
          data-parallax-value="1.8"
          data-parallax-x={1}
          data-parallax-y="0.5">
          <Image src={heroShape1} alt="Hero shape 1" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[50%] left-[0%] -z-10 hidden h-[50px] w-[50px] rounded-full rounded-br-none p-[3px] md:top-[34%] md:left-[16%] md:inline-block xl:top-[41%] xl:left-[22%]"
          data-parallax-value="2.2"
          data-parallax-x={-1}
          data-parallax-y={1}>
          <Image src={heroShape2} alt="Hero shape 2" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[34%] right-[1%] -z-10 hidden h-[50px] w-[50px] rounded-full rounded-bl-none p-[3px] md:top-[43%] md:right-[4%] md:inline-block xl:top-[12%] xl:right-[22%]"
          data-parallax-value="1.4"
          data-parallax-x="0.7"
          data-parallax-y={-1}>
          <Image src={heroShape3} alt="Hero shape 3" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.4}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[20%] right-[4%] -z-10 h-[50px] w-[50px] rounded-full rounded-bl-none p-[3px] md:top-[22%] md:right-[20%] xl:top-[22%] xl:right-[9%]"
          data-parallax-value="1.9"
          data-parallax-x={1}
          data-parallax-y="-0.7">
          <Image src={heroShape4} alt="Hero shape 4" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[49%] right-[3%] -z-10 hidden h-[50px] w-[50px] rounded-full rounded-bl-none p-[3px] md:top-[34%] md:right-[10%] md:inline-block xl:top-[45%] xl:right-[11%]"
          data-parallax-value="1.6"
          data-parallax-x="-0.8"
          data-parallax-y={1}>
          <Image src={heroShape5} alt="Hero shape 5" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[20%] left-[1%] -z-10 h-[50px] w-[50px] rounded-full rounded-br-none p-[3px] md:top-[18%] md:left-[8%] xl:top-[57%] xl:left-[18%]"
          data-parallax-value="1.7"
          data-parallax-x={1}
          data-parallax-y="0.8">
          <Image src={heroShape6} alt="Hero shape 6" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.7}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[32%] left-[0%] -z-10 hidden h-[50px] w-[50px] rounded-full rounded-br-none p-[3px] md:top-[42%] md:left-[3%] md:inline-block xl:top-[29%] xl:left-[8%]"
          data-parallax-value="1.5"
          data-parallax-x={-1}
          data-parallax-y={-1}>
          <Image src={heroShape7} alt="Hero shape 7" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.8}>
        <figure
          className="bg-background-4 dark:bg-accent/20 parallax-effect absolute top-[13%] right-[10%] -z-10 h-[50px] w-[50px] rounded-full rounded-bl-none p-[3px] md:top-[18%] md:right-[8%] xl:top-[57%] xl:right-[18%]"
          data-parallax-value="1.3"
          data-parallax-x="0.5"
          data-parallax-y={-1}>
          <Image src={heroShape8} alt="Hero shape 8" className="h-full w-full" />
        </figure>
      </RevealAnimation>
    </>
  );
};

export default HeroShape;

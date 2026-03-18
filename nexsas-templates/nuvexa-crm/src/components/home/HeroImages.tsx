import heroImg01 from '@public/images/ns-img-248.png';
import heroImg02 from '@public/images/ns-img-249.png';
import heroImg03 from '@public/images/ns-img-250.svg';
import heroImg04 from '@public/images/ns-img-251.png';
import heroImg05 from '@public/images/ns-img-252.png';
import heroImg06 from '@public/images/ns-img-253.png';
import heroImg07 from '@public/images/ns-img-254.png';
import heroImg08 from '@public/images/ns-img-255.png';
import heroImg01Dark from '@public/images/ns-img-dark-164.png';
import heroImg02Dark from '@public/images/ns-img-dark-165.png';
import heroImg04Dark from '@public/images/ns-img-dark-166.png';
import heroImg05Dark from '@public/images/ns-img-dark-167.png';
import heroImg06Dark from '@public/images/ns-img-dark-168.png';
import heroImg07Dark from '@public/images/ns-img-dark-169.png';
import heroImg08Dark from '@public/images/ns-img-dark-170.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative top-4 sm:top-0">
      {/* no code  */}
      <RevealAnimation delay={0.1} duration={2} useSpring={true}>
        <figure className="absolute top-[-259px] right-[-297px] hidden w-[168px] rotate-[8deg] overflow-hidden rounded-2xl md:block lg:top-[-57px] lg:right-[325px] xl:top-[-104px] xl:right-[400px] xl:w-[198px] 2xl:w-[250px]">
          <Image src={heroImg01} alt="CRM dashboard visualization" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg01Dark}
            alt="CRM dashboard visualization"
            className="hidden size-full object-cover dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* badge  */}
      <RevealAnimation delay={0.2} duration={2} useSpring={true}>
        <figure className="absolute top-[-376px] right-[-34px] w-[89px] overflow-hidden md:top-[-381px] md:right-[-49px] md:w-[103px] lg:top-[-194px] lg:right-[418px] lg:rotate-[26deg]">
          <Image src={heroImg03} alt="CRM feature card" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      {/* assign  */}
      <RevealAnimation delay={0.3} duration={2} useSpring={true}>
        <figure className="absolute top-[-245px] right-[131px] hidden w-[135.5px] rotate-[21.709deg] overflow-hidden rounded-2xl md:block lg:top-[-175px] lg:right-[221px] xl:right-[236px] xl:w-[158.5px]">
          <Image src={heroImg04} alt="CRM analytics view" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg04Dark}
            alt="CRM analytics view"
            className="hidden size-full object-cover dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* balance  */}
      <RevealAnimation delay={0.4} duration={2} useSpring={true}>
        <figure className="absolute top-[-296px] right-[-22px] hidden w-[202px] overflow-hidden rounded-2xl sm:block md:top-[-370px] md:right-[117px] md:rotate-[-13.54deg] lg:top-[-385px] lg:right-[104px] lg:w-[309px] lg:rotate-[-26.54deg]">
          <Image src={heroImg02} alt="CRM customer profile" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg02Dark}
            alt="CRM customer profile"
            className="hidden size-full object-cover dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* profit  */}
      <RevealAnimation delay={0.5} duration={2} useSpring={true}>
        <figure className="shadow-8 absolute top-[-301px] right-[-257px] z-10 hidden w-[195px] overflow-hidden rounded-2xl sm:block md:top-[-379px] md:right-[-313px] md:rotate-[4.292deg] lg:top-[-168px] lg:right-2 lg:rotate-[-21.708deg] xl:top-[-157px]">
          <Image src={heroImg05} alt="CRM data visualization" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg05Dark}
            alt="CRM data visualization"
            className="hidden size-full object-cover dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* growth  */}
      <RevealAnimation delay={0.6} duration={2} useSpring={true}>
        <figure className="absolute top-[-154px] right-[-7px] hidden w-[188px] overflow-hidden rounded-2xl sm:block md:top-[-113px] md:right-[103px] md:rotate-[-11.506deg] lg:top-[86px] lg:right-[234px] lg:z-30 lg:w-[250px] xl:right-[256px] xl:w-[300px] 2xl:w-[333px]">
          <Image src={heroImg06} alt="CRM sales pipeline view" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg06Dark}
            alt="CRM sales pipeline view"
            className="hidden size-full object-cover dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* balances */}
      <RevealAnimation delay={0.7} duration={2} useSpring={true}>
        <figure className="absolute top-[-325px] right-[-99px] w-[194px] overflow-hidden rounded-2xl md:top-[-320px] md:w-[179px] lg:-top-4 lg:right-[51px] lg:rotate-[20.435deg]">
          <Image src={heroImg07} alt="CRM activity feed" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg07Dark}
            alt="CRM activity feed"
            className="hidden size-full object-cover dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* total saving  */}
      <RevealAnimation delay={0.8} duration={2} useSpring={true}>
        <figure className="absolute top-[-144px] right-[-299px] hidden w-[215px] overflow-hidden rounded-2xl sm:block md:top-[-118px] md:right-[-322px] md:rotate-[14.66deg] lg:top-[267px] lg:right-[110px] lg:w-[309px]">
          <Image src={heroImg08} alt="CRM reporting interface" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg08Dark}
            alt="CRM reporting interface"
            className="hidden size-full object-cover dark:inline-block"
          />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;

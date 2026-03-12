import heroImg01Image from '@public/images/ns-img-86.png';
import heroImg02Image from '@public/images/ns-img-87.png';
import heroImg03Image from '@public/images/ns-img-88.png';
import heroImg04Image from '@public/images/ns-img-89.png';
import heroImg01DarkImage from '@public/images/ns-img-dark-59.png';
import heroImg02DarkImage from '@public/images/ns-img-dark-60.png';
import heroImg03DarkImage from '@public/images/ns-img-dark-61.png';
import heroImg04DarkImage from '@public/images/ns-img-dark-62.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import AvatarGroup from './AvatarGroup';

const Hero = () => {
  return (
    <section
      className="bg-[url('/images/ns-img-85.png')] bg-left bg-no-repeat pt-[140px] pb-[120px] md:pt-[160px] lg:bg-top-right lg:pt-[200px] lg:pb-[150px] xl:pt-[230px] xl:pb-[200px]"
      aria-label="Hero section">
      <div className="main-container">
        <div className="flex h-[396px] flex-col sm:flex-row 2xl:gap-[100px]">
          {/* hero text  */}
          <div className="text-center md:w-full lg:max-w-[570px] lg:text-left xl:max-w-[595px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-white mb-5">Keep an eye on your finances</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="mb-4">Cloud solutions for business success</h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mb-10 md:mb-14 lg:max-w-[440px] xl:max-w-[570px]">
                Empower your business with NextSaaS—your all-in-one cloud-based software designed for performance,
                automation, and growth.
              </p>
            </RevealAnimation>

            {/* hero btns */}
            <ul className="mb-9 flex flex-col items-center gap-4 md:flex-row md:justify-center lg:justify-start">
              <li className="w-full sm:w-auto">
                <RevealAnimation delay={0.3} direction="left" offset={50}>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-white w-[90%] md:w-auto">
                    Get started
                  </LinkButton>
                </RevealAnimation>
              </li>
              <li className="w-full sm:w-auto">
                <RevealAnimation delay={0.4} direction="left" offset={50}>
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-white dark:btn-transparent btn-xl hover:btn-primary w-[90%] md:w-auto">
                    14-Days Free Trial
                  </LinkButton>
                </RevealAnimation>
              </li>
            </ul>

            <AvatarGroup />
          </div>

          {/* hero image  */}
          <div className="relative" aria-hidden="true">
            <RevealAnimation delay={0.3} useSpring={true} duration={2}>
              <figure className="absolute top-0 left-0 z-[1] hidden w-[408px] overflow-hidden rounded-[20px] lg:block">
                <Image
                  src={heroImg01Image}
                  alt="Hero img 1"
                  className="size-full object-cover dark:hidden"
                  width={408}
                  height={408}
                  priority
                />
                <Image
                  src={heroImg01DarkImage}
                  alt="Hero img 1"
                  className="hidden size-full object-cover dark:inline-block"
                  width={408}
                  height={408}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.4} useSpring={true} duration={2}>
              <figure className="absolute top-[275px] left-0 z-[2] hidden w-[408px] overflow-hidden rounded-[20px] lg:block">
                <Image
                  src={heroImg02Image}
                  alt="Hero img 2"
                  className="size-full object-cover dark:hidden"
                  width={408}
                  height={408}
                  priority
                />
                <Image
                  src={heroImg02DarkImage}
                  alt="Hero img 2"
                  className="hidden size-full object-cover dark:inline-block"
                  width={408}
                  height={408}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.5} useSpring={true} duration={2}>
              <figure className="lp:block relative top-[43px] left-[358px] z-[3] hidden w-[273px] rotate-[-20deg] overflow-hidden">
                <Image
                  src={heroImg03Image}
                  alt="Hero img 3"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg03DarkImage}
                  alt="Hero img 3"
                  className="hidden size-full object-cover dark:inline-block"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.6} useSpring={true} duration={2}>
              <figure className="shadow-4 lp:block relative top-[-115px] left-[401px] z-[4] hidden w-[273px] rotate-[5deg] overflow-hidden">
                <Image
                  src={heroImg04Image}
                  alt="Hero img 4"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg04DarkImage}
                  alt="Hero img 4"
                  className="hidden size-full object-cover dark:inline-block"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.7} useSpring={true} duration={2}>
              <figure className="shadow-4 lp:block relative top-[-310px] left-[450px] z-[3] hidden w-[273px] rotate-[5deg] overflow-hidden">
                <Image
                  src={heroImg04Image}
                  alt="Hero img 5"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg04DarkImage}
                  alt="Hero img 5"
                  className="hidden size-full object-cover dark:inline-block"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import hero from '@public/images/ns-img-199.jpg';
import gradient14 from '@public/images/ns-img-506.png';
import heroDark from '@public/images/ns-img-dark-137.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section
      className="relative pt-[150px] pb-20 sm:pt-[160px] sm:pb-[100px] md:pt-[180px] md:pb-[130px] lg:pt-[234px] xl:pb-[200px]"
      aria-label="Hero section">
      <div className="main-container space-y-[50px] md:space-y-[80px] lg:space-y-[100px]">
        <div className="space-y-10 text-center md:space-y-14">
          <div className="relative z-20 space-y-2 sm:space-y-4">
            <RevealAnimation delay={0.1}>
              <h1 className="mx-auto max-w-[450px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-full">
                Integrated risk management software
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto w-full max-w-[500px] md:max-w-[630px] xl:max-w-[802px]">
                NextSaaS helps organizations identify, analyze, and mitigate risks with a powerful, unified platform.
                From policy oversight to advanced analytics—manage risk across the enterprise, all in one place.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="relative z-20">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary btn-xl hover:btn-primary dark:btn-accent mx-auto w-[90%] md:w-auto"
                aria-label="Get started with NextSaaS">
                Get started now
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <div className="relative z-10">
          <RevealAnimation delay={0.5}>
            <div className="absolute -top-[50%] left-1/2 -z-10 -translate-x-1/2 lg:-top-[35%]">
              {/* hero bg gradient  */}
              <figure className="pointer-events-none mx-auto flex size-[350px] items-center justify-center select-none min-[425px]:size-[400px] sm:size-[550px] md:size-[650px] lg:size-[700px] xl:size-[897px]">
                <Image src={gradient14} alt="Decorative gradient background" className="h-full w-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
          <div>
            {/* hero main img  */}
            <RevealAnimation delay={0.5}>
              <figure className="mx-auto w-full max-w-[450px] overflow-hidden rounded-xl opacity-0 sm:max-w-[500px] md:max-w-[600px] md:rounded-[20px] lg:max-w-[800px] xl:max-w-[1170px]">
                <Image
                  src={hero}
                  alt="NextSaaS risk management platform interface"
                  className="size-full object-cover dark:hidden"
                />
                <Image
                  src={heroDark}
                  alt="NextSaaS risk management platform interface"
                  className="hidden size-full object-cover dark:block"
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

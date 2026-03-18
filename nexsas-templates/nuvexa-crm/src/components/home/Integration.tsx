import integrationImg from '@public/images/ns-img-259.png';
import gradient22Img from '@public/images/ns-img-510.png';
import integrationImgDark from '@public/images/ns-img-dark-174.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Integration = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 py-[60px] lg:py-[100px]">
      <div className="lp:px-0 mx-auto max-w-[1440px] px-5">
        <div className="bg-secondary dark:bg-background-8 relative space-y-[40px] overflow-hidden rounded-4xl pt-[100px] lg:space-y-[70px]">
          {/* bg img  */}
          <RevealAnimation delay={0.1} offset={200} direction="up">
            <figure className="pointer-events-none absolute top-[-73%] left-[-45%] size-[1790px] overflow-hidden select-none md:top-[-120%] md:left-[-99%] lg:top-[-85%] lg:left-[-70%] xl:top-[-73%] xl:left-[-45%]">
              <Image src={gradient22Img} alt="bg" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="relative z-10 space-y-14">
            <div className="mx-auto max-w-[610px] space-y-5 px-5 text-center sm:px-0">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-blur text-ns-green">Integration</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2 className="text-accent">Boost productivity with 50+ integrations.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="text-accent/60">
                    Seamlessly connect your favorite tools and platforms without the usual hassle. Our solution is
                    designed to make
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="text-center">
                <LinkButton
                  href="/integration"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-xl text-primary-500 hover:btn-primary">
                  See it in action
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.6}>
            <div className="relative z-10 flex items-center justify-center">
              <figure className="mx-auto w-full max-w-[300px] max-[376px]:max-w-full md:max-w-[500px] lg:max-w-[850px]">
                <Image src={integrationImg} className="size-full object-cover dark:hidden" alt="integration-img" />
                <Image
                  src={integrationImgDark}
                  alt="integration-img"
                  className="hidden size-full object-cover dark:inline-block"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;

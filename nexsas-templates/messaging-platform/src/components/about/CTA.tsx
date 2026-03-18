import gradientImg from '@public/images/ns-img-499.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTAV3 from '../shared/cta/CTAV3';

const CTA = () => {
  return (
    <section className="mx-auto max-w-[320px] py-[80px] min-[425px]:max-w-[350px] min-[475px]:max-w-[450px] sm:max-w-[600px] md:max-w-[700px] md:py-[100px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
      <RevealAnimation delay={0.1}>
        <div className="bg-secondary dark:bg-background-6 relative overflow-hidden rounded-[20px] sm:rounded-[32px]">
          {/* bg gradient  */}
          <RevealAnimation delay={0.1} offset={200} direction="left">
            <figure className="pointer-events-none absolute -top-[100%] -left-[7%] size-[850px] rotate-[275deg] select-none sm:-top-[35%]">
              <Image src={gradientImg} alt="cta-bg" className="w-[50%] sm:w-full" />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <CTAV3
              className="relative z-10 p-10 min-[475px]:p-14 sm:p-20 lg:p-[100px]"
              badgeClass="badge-yellow text-ns-yellow"
              ctaHeading="Get started with industry-leading cyber security"
              description="No hidden fees. no steep learning curves. Just a platform built for your growth."
              descriptionClass="text-accent/60"
              btnClass="btn-primary hover:btn-accent btn-md md:w-auto w-full border-0"
              ctaBtnText="Started free today"
              badgeText="Get started"
              inputFieldClass="bg-accent/10 border border-accent/20 shadow-1 ring-[0.7px] ring-accent/20 focus:ring-1 focus:ring-primary-600 placeholder:text-accent/60 block outline-none text-white placeholder:font-normal md:w-[371px] w-[270px] max-[376px]:w-[250px] "
            />
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;

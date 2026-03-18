import Gradient18 from '@public/images/ns-img-510.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="relative py-[50px] lg:py-0">
      <div className="relative z-10 mx-auto w-full max-md:px-5 min-[475px]:max-w-[450px] sm:max-w-[600px] md:max-w-[700px] lg:-mb-14 lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="bg-secondary dark:bg-background-8 relative z-10 overflow-hidden rounded-2xl px-6 py-[50px] sm:px-0 lg:rounded-4xl lg:py-[76px]">
          <RevealAnimation delay={0.1} direction="left" offset={100}>
            <figure className="absolute top-[-83%] left-[-132%] -z-10 max-w-[700px] rotate-[276deg] max-[376px]:left-[-152%] md:top-[-77%] md:left-[-73%] lg:left-[-51%] xl:-top-[65%] xl:left-[-39%] 2xl:-left-[34%]">
              <Image src={Gradient18} alt="cta-bg.png" />
            </figure>
          </RevealAnimation>
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-green">Get started</span>
            </RevealAnimation>
            <div className="space-y-6">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="mx-auto max-w-[280px] text-white sm:max-w-[500px] lg:max-w-[830px]">
                    Control all devices from one dashboard!
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-accent/60 max-md:px-2">
                    Join thousands of businesses securing their mobile ecosystems with NextSaaS.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/pricing"
                    className="btn btn-primary btn-md hover:btn-white mx-auto w-[85%] border-0 md:mx-0 md:w-auto">
                    Book a demo
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

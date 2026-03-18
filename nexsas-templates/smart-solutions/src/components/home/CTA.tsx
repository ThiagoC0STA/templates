import gradient43 from '@public/images/ns-img-531.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="relative z-20">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-8 relative space-y-6 overflow-hidden rounded-4xl py-[76px]">
            {/* bg img  */}
            <RevealAnimation delay={0.3} direction="left">
              <figure className="pointer-events-none absolute -top-[88%] -left-[65%] size-[500px] opacity-80 select-none max-[376px]:-top-[80%] md:-top-[78%] md:-left-[35%] lg:-top-[71%] lg:-left-[28%] xl:-top-[84%] xl:-left-[27%] xl:size-[700px] 2xl:-left-[26%]">
                <Image src={gradient43} className="h-full w-full object-cover" alt="NextSass" />
              </figure>
            </RevealAnimation>
            {/* cta content  */}
            <div className="mx-2 text-center sm:mx-0">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-blur mb-5" id="cta-badge">
                  Get started
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="mx-auto mb-3 max-w-[649px] text-white">Ready to transform your workflow?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-accent/60">Download NextSaaS and start making smarter decisions today.</p>
              </RevealAnimation>
            </div>
            {/* cta btn  */}
            <RevealAnimation delay={0.5}>
              <div className="text-center">
                <LinkButton
                  href="/pricing"
                  className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent w-[85%] border-0 md:w-auto"
                  aria-label="Get started with NextSaaS">
                  Get started now
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;

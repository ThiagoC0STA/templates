import gradient10 from '@public/images/ns-img-502.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section aria-label="Call to Action" className="relative top-12 z-20">
      <div className="mx-auto max-w-[1400px] max-lg:px-5">
        <div className="bg-secondary relative overflow-hidden rounded-4xl px-4 py-[76px] sm:px-0 dark:bg-black">
          {/* bg left  */}
          <RevealAnimation delay={0.2}>
            <figure className="pointer-events-none absolute top-[-155px] left-[-141px] size-[280px] rotate-180 select-none md:size-[300px] lg:size-[400px]">
              <Image src={gradient10} alt="Decorative gradient background" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="mx-auto max-w-[649px] space-y-8 text-center md:w-full">
            <div className="space-y-2">
              <RevealAnimation delay={0.2}>
                <h2 className="text-white" id="cta-heading">
                  Ready to take the first step?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60">
                  Get a custom quote, check your eligibility, or talk to a real expert—today.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <div>
                <LinkButton
                  href="/login"
                  className="btn btn-primary btn-lg hover:btn-white dark:hover:btn-secondary mx-auto w-[90%] border-0 md:mx-0 md:w-auto">
                  Start application
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          {/* bg-right  */}
          <RevealAnimation delay={0.2}>
            <figure className="pointer-events-none absolute top-[-132px] right-[-160px] size-[280px] rotate-180 select-none md:size-[300px] lg:size-[350px]">
              <Image src={gradient10} alt="Decorative gradient background" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;

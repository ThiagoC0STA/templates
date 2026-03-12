import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';

export const Services = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container text-center">
        {/* Tagline Badge */}
        <RevealAnimation delay={0.1}>
          <BadgeDefault text="services" className="mb-4" />
        </RevealAnimation>

        {/* Content Section */}
        <div className="text-center max-md:space-y-1.5 md:space-y-3">
          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium">
              Smart AI Services for{' '}
              <span className="font-instrument-serif text-background-13/50 italic">
                Future growth!
              </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              OptimAI helps you generate content, automate tasks, brainstorm ideas, and accelerate
              your
              <br className="hidden md:block" />
              work — all from one intuitive dashboard.
            </p>
          </RevealAnimation>
        </div>

        {/* Button */}
        <RevealAnimation delay={0.4}>
          <div className="mt-10 inline-block text-center md:mt-14">
            <LinkPrimary href="/services">Explore all services</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

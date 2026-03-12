import gradient15 from '@/public/images/gradient/opai-15.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import Image from 'next/image';

const ProcessTestimonial = () => {
  return (
    <section className="py-14 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-14">
        <div className="space-y-4 text-center md:pb-5">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="Testimonial" />
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
              People love{' '}
              <span className="font-instrument-serif text-background-13/30 italic">
                Using Nexsas
              </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Hear from real users who have transformed their workflows with Nexsas.
              <br className="hidden md:block" />
              Their stories of productivity, creativity, and efficiency.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.1}>
          <div className="relative space-y-8 overflow-hidden rounded-xl bg-white p-10.5">
            <figure className="absolute -top-20 -right-28 size-[280px]">
              <Image src={gradient15} alt="" className="h-full w-full object-cover" />
            </figure>
            <h3 className="font-instrument-serif text-is-heading-4 text-background-13/90">
              Case in Point
            </h3>
            <div className="space-y-2">
              <p className="font-inter-tight text-tagline-3 text-background-13/60">
                &ldquo;Nexsas cut our email creation time by 80% and helped automate 60% of our
                support tickets - in just 3 weeks.&rdquo; -
              </p>
              <p className="font-inter-tight text-background-13 text-xl">
                John Doe, CEO of Company XYZ
              </p>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <LinkPrimary href="#">View All reviews</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProcessTestimonial;

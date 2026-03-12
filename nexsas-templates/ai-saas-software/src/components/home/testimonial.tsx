import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import Image from 'next/image';
import TestimonialStars from './testimonial-star';

const Testimonial = () => {
  return (
    <section className="py-14 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-14">
        {/* Content Section */}
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

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Stat Card 1 */}
              <RevealAnimation delay={0.1}>
                <div
                  className="relative h-[397px] w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-7 md:p-10.5"
                  style={{ backgroundImage: "url('/images/opai-img-141.jpg')" }}
                >
                  <div className="absolute -bottom-20 left-0 z-5 h-[194px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_10.91%,rgba(255,255,255,0.31)_76.79%)] blur-[45px]" />
                  <div className="relative z-10 flex h-full flex-col justify-end gap-1 sm:gap-2">
                    <h3 className="font-instrument-serif text-is-heading-4 text-background-6 flex items-center">
                      <NumberAnimation
                        number={1259}
                        speed={2000}
                        interval={200}
                        rooms={4}
                        heightSpaceRatio={2.9}
                      />
                      +
                    </h3>
                    <p className="font-inter-tight text-tagline-3 text-background-13/60">
                      Satisfied clients and counting!
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              {/* Testimonial Card - Sofia Patel */}
              <RevealAnimation delay={0.2}>
                <div className="bg-background-8 flex h-[397px] w-full flex-col justify-between rounded-xl p-7 md:p-10.5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <TestimonialStars className="fill-background-6!" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                        Their innovative and strategic approach has transformed our operations. With
                        their creative solutions, we gain new insights that enhance our outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <figure className="size-12 overflow-hidden rounded-full">
                      <Image
                        src="/images/opai-avatar-img-01.png"
                        alt="Sofia Patel"
                        width={48}
                        height={48}
                        className="size-full object-cover"
                      />
                    </figure>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-instrument-serif text-is-heading-6 text-background-6">
                        Sofia Patel
                      </h4>
                      <p className="font-inter-tight text-tagline-3 text-background-13/60">
                        Data Scientist
                      </p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Testimonial Card - Liam Thompson */}
            <RevealAnimation delay={0.1}>
              <div className="bg-background-8 flex min-h-[300px] w-full flex-col justify-between rounded-xl p-7 md:p-10.5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <TestimonialStars className="fill-background-6!" />
                  </div>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                    Innovative, strategic, and results-driven—exactly what we needed. Their creative
                    approaches consistently provide new insights.
                  </p>
                </div>
                <div className="space-y-2">
                  <figure className="size-12 overflow-hidden rounded-full">
                    <Image
                      src="/images/opai-avatar-img-02.png"
                      alt="Liam Thompson"
                      width={48}
                      height={48}
                      className="size-full object-cover"
                    />
                  </figure>
                  <div className="space-y-0.5">
                    <h4 className="font-instrument-serif text-is-heading-6 text-background-6">
                      Liam Thompson
                    </h4>
                    <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="flex flex-col gap-8 sm:flex-row">
              {/* Testimonial Card - Ethan Garcia */}
              <RevealAnimation delay={0.3}>
                <div className="bg-background-8 flex h-[300px] w-full flex-col justify-between rounded-xl p-7 md:p-10.5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-0.5">
                      <TestimonialStars className="fill-background-6! gap-0.5" />
                    </div>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                      Visionary, focused, and just what we were looking for.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <figure className="size-12 overflow-hidden rounded-full">
                      <Image
                        src="/images/opai-avatar-img-03.png"
                        alt="Ethan Garcia"
                        width={48}
                        height={48}
                        className="size-full object-cover"
                      />
                    </figure>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-instrument-serif text-is-heading-6 text-background-6">
                        Ethan Garcia
                      </h4>
                      <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal">
                        Product Designer
                      </p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              {/* Stat Card 2 */}
              <RevealAnimation delay={0.4}>
                <div className="bg-background-8 relative h-[300px] w-full overflow-hidden rounded-xl p-7 md:p-10.5">
                  <figure className="absolute -top-[43%] -right-[34%] z-0 size-full -rotate-1">
                    <Image
                      src="/images/gradient/opai-15.png"
                      alt="gradient-img"
                      width={400}
                      height={400}
                      className="size-full object-cover"
                    />
                  </figure>
                  <div className="relative z-10 flex h-full flex-col justify-end gap-1 sm:gap-2">
                    <h3 className="font-instrument-serif text-is-heading-4 text-background-6 flex items-center">
                      <NumberAnimation
                        number={85}
                        speed={2000}
                        interval={200}
                        rooms={2}
                        heightSpaceRatio={2.9}
                        showPercentage
                      />
                    </h3>
                    <p className="font-inter-tight text-tagline-3 text-background-13/60">
                      Ai resolution
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Stat Card 3 - Full Width */}
            <RevealAnimation delay={0.1}>
              <div
                className="relative h-[397px] w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-7 md:p-10.5"
                style={{ backgroundImage: "url('/images/opai-img-142.jpg')" }}
              >
                <div className="absolute -bottom-20 left-0 z-5 h-[194px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_10.91%,rgba(255,255,255,0.31)_76.79%)] blur-[45px]" />
                <div className="relative z-10 flex h-full flex-col justify-end gap-1 sm:gap-2">
                  <h3 className="font-instrument-serif text-is-heading-4 text-background-6 flex items-center">
                    <NumberAnimation
                      number={257}
                      speed={2000}
                      interval={200}
                      rooms={3}
                      heightSpaceRatio={2.9}
                    />
                    +
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                    AI specialists driving innovation
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

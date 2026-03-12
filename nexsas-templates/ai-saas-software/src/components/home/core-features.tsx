import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';

export const CoreFeatures = ({ btnClass }: { btnClass?: string }) => {
  return (
    <section className="py-13 md:py-20 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-14">
        <div className="space-y-3 text-center md:pb-4">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="Core features" />
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium max-md:leading-[1.2]">
                Everything you need{' '}
                <span className="font-instrument-serif text-background-13/30 italic">
                  to create <br className="hidden md:block" />
                  smarter, faster
                </span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60">
                Unlock a powerful suite of AI tools designed to elevate your content,
                <br className="hidden md:block" />
                streamline your workflow, and keep your data secure.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Image Container with Feature Cards */}
        <RevealAnimation delay={0.1}>
          <div className="relative grid w-full grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-[url('/images/opai-img-138.jpg')] bg-cover bg-center bg-no-repeat p-4 md:grid-cols-2 md:p-8 lg:grid-cols-4">
            <RevealAnimation delay={0.1}>
              <figure className="overflow-hidden rounded-xl">
                <Image
                  src="/images/opai-img-126.jpg"
                  alt="Core Features"
                  width={600}
                  height={400}
                  className="size-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="flex flex-col justify-between rounded-xl bg-white p-10.5">
                <h3 className="font-instrument-serif text-is-heading-5 text-background-13/80">
                  AI text generator
                </h3>
                <p className="font-inter-tight text-tagline-2 text-background-13/50">
                  From product descriptions to essays, generate human-like writing instantly.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <figure className="overflow-hidden rounded-xl">
                <Image
                  src="/images/opai-avatar-img-125.jpg"
                  alt="Core Features"
                  width={600}
                  height={400}
                  className="size-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-col justify-between rounded-xl bg-white p-10.5">
                <h3 className="font-instrument-serif text-is-heading-5 text-background-13/80">
                  Analytics & reports
                </h3>
                <p className="font-inter-tight text-tagline-2 text-background-13/50">
                  Track performance, engagement, and trends.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <div className="bg-background-4 flex flex-col justify-between rounded-xl p-10.5">
                <h3 className="font-instrument-serif text-is-heading-5 text-white/80">
                  AI Image generator
                </h3>
                <p className="font-inter-tight text-tagline-2 text-white/50">
                  Convert prompts into stunning visuals using advanced models.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <figure className="overflow-hidden rounded-xl">
                <Image
                  src="/images/opai-img-127.jpg"
                  alt="Core Features"
                  width={600}
                  height={400}
                  className="size-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <div className="bg-background-4 flex flex-col justify-between rounded-xl p-10.5">
                <h3 className="font-instrument-serif text-is-heading-5 text-white/80">
                  Podcast & video scripts
                </h3>
                <p className="font-inter-tight text-tagline-2 text-white/50">
                  Create compelling narratives with AI-powered structure.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <figure className="overflow-hidden rounded-xl">
                <Image
                  src="/images/opai-avatar-img-128.jpg"
                  alt="Core Features"
                  width={600}
                  height={400}
                  className="size-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </figure>
            </RevealAnimation>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <div className={cn('mt-10 flex justify-center', btnClass)}>
            <LinkPrimary href="/features">Explore all features</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

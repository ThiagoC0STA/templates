import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      className={cn(
        'relative h-screen overflow-hidden pt-[120px] pb-[100px] lg:h-[150vh] lg:pt-[200px] xl:h-[180vh] xl:pt-[235px]'
      )}
    >
      {/* Background image */}
      <figure className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/opai-img-123.jpg"
          alt="bg-img"
          fill
          className="size-full bg-cover bg-center bg-no-repeat object-cover object-top"
          priority
          fetchPriority="high"
        />
      </figure>

      <div className="main-container space-y-19">
        <div className="space-y-1.5 text-center md:space-y-3">
          <RevealAnimation delay={0.1}>
            <h1
              className={cn(
                'text-manrope-heading-3 text-background-13/90 font-medium',
                'md:text-manrope-heading-2 lg:text-manrope-heading-1'
              )}
            >
              Supercharge your{' '}
              <span
                className={cn(
                  'text-background-13/90 font-normal italic max-lg:leading-[1.1]',
                  'text-is-heading-3 md:text-is-heading-2 lg:text-is-heading-1'
                )}
              >
                workflow <br className="hidden lg:block" />
                with Nexsas
              </span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-tagline-1 text-background-13/60 font-normal">
              An all-in-one AI SaaS platform for content creation, automation, and productivity
              <br className="hidden lg:block" /> built for creators, teams, and businesses.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="mt-14 inline-block text-center">
              <LinkPrimary href="/pricing">Try for free</LinkPrimary>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <figure className="overflow-hidden rounded-[18px] ring-8 ring-white/50 backdrop-blur-[47px]">
            <Image
              src="/images/opai-img-124.jpg"
              alt="hero"
              width={1200}
              height={675}
              className="shadow-4 size-full rounded-xl object-cover"
              sizes="(max-width: 1290px) 100vw, 1290px"
            />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
}

'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import Image from 'next/image';
import { useEffect, useState, type FC } from 'react';

const CTA_IMAGES = [
  { src: '/images/opai-avatar-img-26.png', alt: 'cta' },
  { src: '/images/opai-avatar-img-27.png', alt: 'cta' },
  { src: '/images/opai-avatar-img-28.png', alt: 'cta' },
  { src: '/images/opai-avatar-img-29.png', alt: 'cta' },
  { src: '/images/opai-avatar-img-30.png', alt: 'cta' },
] as const;

const SLIDER_INTERVAL_MS = 2500;

function getSlideStyle(
  slideIndex: number,
  activeIndex: number,
  total: number
): React.CSSProperties {
  const offset = (slideIndex - activeIndex + total) % total;

  const base: React.CSSProperties = {
    zIndex: 0,
    border: '4px solid var(--color-background-1)',
    borderRadius: '8px',
    filter: 'blur(4px)',
    width: '180px',
    height: '180px',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%) scale(0.7)',
  };

  if (offset === 0) {
    return {
      ...base,
      zIndex: 10,
      filter: 'none',
      transform: 'translate(-50%, -50%) scale(1)',
      border: '4px solid white',
      boxShadow: '0 0 15x #000',
      borderRadius: '11px',
      width: '200px',
      height: '200px',
    };
  }

  if (offset === 1) {
    return {
      ...base,
      zIndex: 5,
      transform: 'translate(-50%, -50%) scale(1) translateX(185px) translateY(40px) rotate(20deg)',
    };
  }

  if (offset === total - 1) {
    return {
      ...base,
      zIndex: 5,
      transform:
        'translate(-50%, -50%) scale(1) translateX(-185px) translateY(40px) rotate(-20deg)',
    };
  }

  // Back slides (offset 2, 3 when total is 5)
  const sign = offset <= total / 2 ? 1 : -1;
  return {
    ...base,
    zIndex: 1,
    opacity: 0,
    transform: `translate(-50%, -50%) scale(0.87) translateX(${sign * 350}px) translateY(140px) rotate(${sign * 50}deg)`,
  };
}

const CTA: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CTA_IMAGES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, SLIDER_INTERVAL_MS);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="bg-background-8 overflow-hidden py-20 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-8">
        <RevealAnimation delay={0.1}>
          <div
            id="fancy-slider"
            className="items-top relative flex h-[200px] justify-center max-sm:scale-70 sm:h-[280px]"
          >
            {CTA_IMAGES.map((img, i) => (
              <figure
                key={img.src}
                className="absolute transition-all duration-700 ease-in-out"
                style={getSlideStyle(i, activeIndex, total)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={200}
                  className="h-full w-full rounded-lg object-cover"
                />
              </figure>
            ))}
          </div>
        </RevealAnimation>

        <div className="mt-16 space-y-3">
          <RevealAnimation delay={0.1}>
            <h2 className="text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 text-center font-medium max-md:leading-[1.2]">
              Ready to accelerate Your
              <span className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/60 font-normal italic max-md:leading-[1.1]">
                <br className="hidden lg:block" />
                workflow with AI?
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-tagline-2 text-background-13/50 mx-auto w-full max-w-[320px] text-center">
              Take the first step towards a more efficient and productive workflow.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <LinkPrimary href="/pricing">Try for free</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;

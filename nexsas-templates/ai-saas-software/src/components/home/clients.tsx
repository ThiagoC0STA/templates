import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

const rowOneClientImgData = [
  '/images/icons/scapic-with-black-text.svg',
  '/images/icons/notion-with-black-text.svg',
  '/images/icons/lattice-with-black-text.svg',
  '/images/icons/hotjar-with-black-text.svg',
  '/images/icons/discord-with-black-text.svg',
  '/images/icons/dropbox-with-black-text.svg',
] as const;

const rowTwoClientImgData = [
  '/images/icons/stripe-with-black-text.svg',
  '/images/icons/spotify-with-black-text.svg',
  '/images/icons/outreach-with-black-text.svg',
  '/images/icons/asana-with-black-text.svg',
  '/images/icons/squarespace-with-black-text.svg',
] as const;

export function Clients() {
  return (
    <section className="py-12 sm:pt-20 md:py-20 lg:py-22 xl:py-25">
      <RevealAnimation delay={0.1}>
        <div className="main-container space-y-6 lg:space-y-8">
          <div className="flex flex-wrap items-center justify-evenly gap-x-6 gap-y-6 sm:justify-center lg:gap-x-14 lg:gap-y-8">
            {rowOneClientImgData.map((src: string) => (
              <figure key={src} className="max-md:scale-90 max-sm:scale-70">
                <Image src={src} alt="Client logo" width={120} height={40} className="w-fit" />
              </figure>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-evenly gap-x-6 gap-y-6 sm:justify-center lg:gap-x-14 lg:gap-y-8">
            {rowTwoClientImgData.map((src: string) => (
              <figure key={src} className="max-md:scale-90 max-sm:scale-70">
                <Image src={src} alt="Client logo" width={120} height={40} className="w-fit" />
              </figure>
            ))}
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
}

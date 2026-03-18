import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroAvatar = () => {
  return (
    <div className="relative z-[20]">
      <div className="mb-[50px] flex flex-row items-center justify-center gap-4 max-[400px]:flex-col md:mb-[100px]">
        <div className="flex -space-x-3.5">
          <RevealAnimation delay={0.3} direction="right" offset={50}>
            <figure>
              <Image
                className="inline-block size-12 rounded-full bg-[#98AAC3] ring-2 ring-white max-[400px]:size-10 dark:ring-black"
                src={avatar1}
                alt="Avatar 1"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.4} direction="right" offset={50}>
            <figure>
              <Image
                className="inline-block size-12 rounded-full bg-[#98AAC3] ring-2 ring-white max-[400px]:size-10 dark:ring-black"
                src={avatar2}
                alt="Avatar 1"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={50}>
            <figure>
              <Image
                className="inline-block size-12 rounded-full bg-[#98AAC3] ring-2 ring-white max-[400px]:size-10 dark:ring-black"
                src={avatar3}
                alt="Avatar 1"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.6} direction="right" offset={50}>
            <div className="text-secondary/80 dark:text-accent/80 text-tagline-3 inline-flex size-12 items-center justify-center rounded-full bg-white font-medium ring-2 ring-white max-[400px]:size-10 dark:bg-black dark:ring-black">
              99+
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.7} direction="left" offset={50}>
          <div className="text-left max-[400px]:text-center">
            <p className="text-tagline-2 text-accent font-medium">Trusted by 20k+</p>
            <p className="text-tagline-3 text-accent/60 font-normal">Customers across the globe</p>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default HeroAvatar;

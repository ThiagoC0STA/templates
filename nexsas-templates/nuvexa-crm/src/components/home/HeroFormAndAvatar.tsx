import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroFormAndAvatar = () => {
  return (
    <div className="space-y-8">
      {/* cta form  */}
      <RevealAnimation delay={0.4}>
        <form action="#" method="post" className="flex flex-col items-center justify-start gap-3 md:flex-row">
          <input
            type="email"
            name="email"
            id="userEmail"
            placeholder="Enter your email"
            required={true}
            className="text-accent placeholder:text-accent/80 border-primary-300 bg-primary-400 h-[52px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none md:w-[80%] lg:max-w-[296px] xl:max-w-[340px]"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn btn-md hover:btn-secondary btn-white h-[52px] w-full md:w-auto xl:!hidden"
            aria-label="Get started with our CRM">
            <span>Get started</span>
          </button>
          <button
            type="submit"
            className="btn btn-xl btn-white-v2 hover:btn-primary hover:border-primary-300 !hidden h-[52px] xl:!inline-block"
            aria-label="Get started with our CRM">
            <span>Get started</span>
          </button>
        </form>
      </RevealAnimation>
      {/* avatar group  */}

      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          <RevealAnimation delay={0.5}>
            <Image
              className="ring-primary-500 bg-ns-yellow inline-block size-9 rounded-full ring-2"
              src={avatar1Img}
              alt="Customer avatar"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <Image
              className="ring-primary-500 bg-ns-red inline-block size-9 rounded-full ring-2"
              src={avatar2Img}
              alt="Customer avatar"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <Image
              className="ring-primary-500 bg-ns-green inline-block size-9 rounded-full ring-2"
              src={avatar3Img}
              alt="Customer avatar"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div
              className="ring-primary-500 text-accent bg-primary-400 text-tagline-3 inline-flex size-9 items-center justify-center rounded-full font-medium ring-2"
              aria-label="More than 99 additional customers">
              99+
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.9}>
          <div>
            <p className="text-tagline-2 text-accent font-medium">Trusted by 20k+</p>
            <p className="text-tagline-3 text-accent/60">Customers Across the globe</p>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

HeroFormAndAvatar.displayName = 'HeroFormAndAvatar';
export default HeroFormAndAvatar;

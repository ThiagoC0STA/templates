import gradient26 from '@public/images/ns-img-514.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import HeroQR from './HeroQR';

const Hero = () => {
  return (
    <section className="pt-[90px] xl:pb-[100px]">
      <div className="mx-auto max-w-[600px] overflow-hidden md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="bg-background-4 dark:bg-background-9 dark:border-background-8 relative z-10 mt-4 overflow-hidden rounded-4xl border-white pt-[100px] pb-[100px] sm:border-[10px] md:pt-[150px]">
          {/* bg gradient img  */}
          <RevealAnimation delay={0.1} offset={200} direction="up" instant>
            <figure className="pointer-events-none absolute top-[-350px] right-[-300px] size-[600px] overflow-hidden select-none sm:top-[-611px] sm:right-[-466px] sm:size-[1000px] lg:top-[-584px] xl:top-[-900px] xl:right-[-600px] xl:size-[1434px]">
              <Image src={gradient26} alt="hero-bg-gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="mb-8 space-y-5 text-center sm:mb-10 md:mb-14">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Fast transactions</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h1 className="mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[600px] xl:max-w-[902px]">
                  Smart, fast &amp; reliable POS for your business
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[350px] sm:max-w-[500px] xl:max-w-full">
                  The all-in-one Point of Sale (POS) solution to streamline sales, manage inventory, and grow your
                  business effortlessly.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="mb-14 flex items-center justify-center md:mb-[100px]">
            <RevealAnimation delay={0.4}>
              <form className="flex w-full max-w-[300px] flex-col items-center gap-3 sm:max-w-[500px] sm:flex-row">
                <input
                  aria-label="Email address"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="bg-background-1 dark:bg-background-6 shadow-1 placeholder:text-secondary/50 placeholder:text-tagline-1 focus:ring-primary-500 text-secondary/60 border-stroke-3 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent h-12 w-full max-w-[340px] flex-1 rounded-full border px-5 py-3 font-normal placeholder:font-normal focus:ring-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg h-12 w-full sm:w-auto">
                  <span>Get a free quote</span>
                </button>
              </form>
            </RevealAnimation>
          </div>
          <HeroQR />
        </div>
      </div>
    </section>
  );
};

export default Hero;

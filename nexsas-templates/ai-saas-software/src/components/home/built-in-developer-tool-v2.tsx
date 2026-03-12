import opaiImg130 from '@/public/images/opai-img-130.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/reveal-animation';

const BuiltInDeveloperToolV2 = () => {
  return (
    <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-auto">
      <div className="relative h-full min-h-[500px] overflow-hidden rounded-xl bg-white px-10.5 pt-10.5 pb-8">
        <RevealAnimation delay={0.5} duration={0.8} offset={70} direction="right">
          <div className="border-stroke-1/11 bg-background-13/3 absolute top-9.5 -right-22.5 z-1 size-full max-h-[404px] min-h-[404px] max-w-[574px] rounded-md border p-6" />
        </RevealAnimation>
        <RevealAnimation delay={0.6} duration={0.9} direction="right" offset={80}>
          <div className="border-stroke-1/11 bg-background-13/3 absolute top-15.5 -right-16 z-2 size-full max-h-[407px] min-h-[407px] max-w-[552px] rounded-md border p-6 sm:-right-10 md:-right-16.5" />
        </RevealAnimation>
        <RevealAnimation delay={0.7} duration={0.9} direction="right" offset={80}>
          <figure className="absolute top-21.5 -right-12 z-3 max-h-[384px] min-h-[384px] max-w-[596px] overflow-hidden rounded-md sm:-right-14 sm:w-full md:-right-11 md:w-full lg:-right-9.5">
            <Image
              src={opaiImg130}
              alt="Built-in developer tools"
              width={596}
              height={384}
              className="size-full object-cover"
            />
          </figure>
        </RevealAnimation>
        <div className="absolute bottom-8 left-11 z-10">
          <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
            Built-in developer tools
          </h2>
        </div>
        <div className="absolute -bottom-10 left-0 z-5 h-[194px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_10.91%,rgba(255,255,255,0.31)_76.79%)] blur-[45px] backdrop-blur-[55px]" />
      </div>
    </div>
  );
};

export default BuiltInDeveloperToolV2;

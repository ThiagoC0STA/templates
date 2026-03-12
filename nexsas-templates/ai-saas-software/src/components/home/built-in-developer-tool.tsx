import opaiImg129 from '@/public/images/opai-img-129.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/reveal-animation';

const BuiltInDeveloperTool = () => {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="relative h-full overflow-hidden rounded-xl bg-white px-4 pt-4 pb-4 max-md:h-[353px] md:px-10.5 md:pt-10.5 md:pb-8">
        <RevealAnimation delay={0.3} duration={1.2}>
          <div className="border-stroke-1/11 bg-background-13/3 absolute top-7 -right-20 z-1 size-full max-h-[208px] min-h-[208px] max-w-[552px] rounded-md border p-6 md:-right-10 lg:-right-4" />
        </RevealAnimation>
        <RevealAnimation delay={0.4} duration={1.2}>
          <div className="border-stroke-1/11 bg-background-13/3 absolute top-12.5 -right-12 z-2 size-full max-h-[208px] min-h-[208px] max-w-[574px] rounded-md border p-6 md:-right-7 lg:-right-4" />
        </RevealAnimation>
        <RevealAnimation delay={0.5} duration={1.2}>
          <figure className="absolute top-17.5 -right-66 z-3 max-h-[194px] min-h-[194px] max-w-[596px] overflow-hidden rounded-md sm:-right-4 md:-right-65 lg:-right-4">
            <Image src={opaiImg129} alt="Custom APIs" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <div className="absolute bottom-8 left-11 z-10">
            <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
              Built-in developer tools
            </h2>
          </div>
        </RevealAnimation>
        <div className="absolute -bottom-25 left-0 z-5 h-[194px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_10.91%,rgba(255,255,255,0.31)_76.79%)] blur-[45px] backdrop-blur-[55px]" />
      </div>
    </div>
  );
};

export default BuiltInDeveloperTool;

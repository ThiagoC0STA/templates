import vactor09 from '@/public/images/vactor-shape/vactor-09.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/reveal-animation';

const BrowseTemplate = () => {
  return (
    <div className="min-h-[404px] rounded-xl bg-white/30 p-2 backdrop-blur-[30px]">
      <div className="bg-background-7 relative flex h-full flex-col justify-between space-y-8 overflow-hidden rounded-lg p-7 md:p-10.5">
        {/* gradient */}
        <RevealAnimation delay={0.3} direction="right" offset={100}>
          <div className="pointer-events-none absolute -top-[50%] -right-[50%] z-5 size-[378px]">
            <div
              className="absolute h-full w-full rounded-[378.023px] blur-[56.56px]"
              style={{
                background: 'linear-gradient(90deg, #ee9ca7 0%, #ffdde1 100%)',
              }}
            />
            <div
              className="absolute top-3 left-3 h-[70%] w-[70%] rounded-[42.896px] blur-[32.785px]"
              style={{
                background: 'linear-gradient(90deg, #f2709c 0%, #ff9472 100%)',
              }}
            />
          </div>
        </RevealAnimation>

        <div className="font-instrument-serif text-is-heading-4 text-black">03</div>

        <div className="bg-background-6 border-stroke-3/11 relative z-10 rounded-xl border p-2">
          <div className="relative z-10">
            <div className="w-full rounded-lg border border-white/3 bg-white/5 px-4 py-2 font-normal text-white/90 backdrop-blur-[32px]">
              <Image
                src={vactor09}
                alt="AI Image"
                width={200}
                height={80}
                className="size-full object-cover px-4 py-2"
              />
            </div>
            <div className="pointer-events-none absolute top-0 right-4 h-[0.5px] w-10 rounded-full bg-radial-[circle,#FFFFFF_0%,#FFFFFF00_100%] opacity-30 transition-all duration-500 ease-out" />
          </div>
        </div>
        <div>
          <h3 className="font-instrument-serif text-is-heading-5 text-black">Browse results</h3>
          <p className="font-inter-tight text-tagline-2 text-background-13/50 max-w-[250px]">
            View drafts, edit with ease, or export to your favorite tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowseTemplate;

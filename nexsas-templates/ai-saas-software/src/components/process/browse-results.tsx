import vactor09 from '@/public/images/vactor-shape/vactor-09.svg';
import Image from 'next/image';

const BULLETS = [
  'View and compare generated drafts',
  'Edit inline or refine with new prompts',
  'Export to your favorite tools',
  'Iterate until you get the right output',
];

const BrowseResults = () => {
  return (
    <div className="min-h-[404px] rounded-xl bg-white/30 p-2 backdrop-blur-[30px]">
      <div className="bg-background-7 relative flex h-full flex-col justify-between space-y-8 overflow-hidden rounded-lg p-7 md:p-10.5">
        <div className="pointer-events-none absolute -top-[50%] -right-[50%] z-5 size-[378px]">
          <div
            className="absolute h-full w-full rounded-full blur-[57px]"
            style={{
              background: 'linear-gradient(90deg, #ee9ca7 0%, #ffdde1 100%)',
            }}
          />
          <div
            className="absolute top-3 left-3 h-[70%] w-[70%] rounded-[43px] blur-[33px]"
            style={{
              background: 'linear-gradient(90deg, #f2709c 0%, #ff9472 100%)',
            }}
          />
        </div>

        <div className="font-instrument-serif text-is-heading-4 text-black">03</div>

        <div className="bg-background-6 border-stroke-3/11 relative z-10 rounded-xl border p-2">
          <div className="w-full rounded-lg border border-white/3 bg-white/5 px-4 py-2 font-normal text-white/90 backdrop-blur-[32px]">
            <Image src={vactor09} alt="AI" className="size-full object-cover px-4 py-2" />
          </div>
        </div>

        <div>
          <h3 className="font-instrument-serif text-is-heading-5 text-black">Browse results</h3>
          <p className="font-inter-tight text-tagline-2 text-background-13/50 max-w-[250px]">
            View drafts, edit with ease, or export to your favorite tools.
          </p>
        </div>

        <ul className="space-y-2">
          {BULLETS.map((b) => (
            <li
              key={b}
              className="font-inter-tight text-tagline-2 text-background-13/50 before:bg-background-13 relative pl-4 before:absolute before:top-1/2 before:left-0 before:size-2 before:-translate-y-1/2 before:rounded-full before:content-['']"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseResults;

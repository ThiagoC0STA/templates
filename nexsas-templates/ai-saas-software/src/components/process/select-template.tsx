import opaiImg31 from '@/public/images/opai-img-31.png';
import opaiImg32 from '@/public/images/opai-img-32.png';
import opaiImg33 from '@/public/images/opai-img-33.png';
import opaiImg34 from '@/public/images/opai-img-34.png';
import Image from 'next/image';

const BULLETS = [
  'Wide range of AI-optimized templates',
  'Customizable structure for every need',
  'Easy start with blank or guided options',
  'Designed for rapid creative workflows',
];

const SelectTemplate = () => {
  return (
    <div className="min-h-[404px] rounded-xl bg-white/30 p-2 backdrop-blur-[30px]">
      <div className="bg-background-7 relative flex h-full flex-col justify-between space-y-8 overflow-hidden rounded-lg p-7 md:p-10.5">
        <div className="font-instrument-serif text-is-heading-4 text-black">01</div>

        <div className="relative z-0 flex items-end justify-center -space-x-4">
          <figure className="h-full max-h-24.5 w-full max-w-20.5 -translate-y-3 -rotate-20 overflow-hidden rounded-[4px]">
            <Image src={opaiImg31} alt="" className="size-full object-cover" />
          </figure>
          <figure className="h-full max-h-24.5 w-full max-w-20.5 rotate-20 overflow-hidden rounded-[4px]">
            <Image src={opaiImg32} alt="" className="size-full object-cover" />
          </figure>
          <figure className="relative z-10 h-full max-h-24.5 w-full max-w-20.5 -translate-y-7 -rotate-[8deg] overflow-hidden rounded-[4px]">
            <Image src={opaiImg33} alt="" className="size-full object-cover" />
          </figure>
          <figure className="h-full max-h-24.5 w-full max-w-20.5 rotate-19 overflow-hidden rounded-[4px]">
            <Image src={opaiImg34} alt="" className="size-full object-cover" />
          </figure>
        </div>

        <div>
          <h3 className="font-instrument-serif text-is-heading-5 text-black">Select a template</h3>
          <p className="font-inter-tight text-tagline-2 text-background-13/50 max-w-[250px]">
            Start fast with prebuilt structures or blank canvases.
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

export default SelectTemplate;

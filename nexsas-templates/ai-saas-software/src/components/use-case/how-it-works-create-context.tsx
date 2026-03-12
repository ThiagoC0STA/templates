'use client';

import { useTypewriter } from '@/src/hooks/use-typewriter';
import type { FC } from 'react';
import { useRef } from 'react';

const CreateContext: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useTypewriter(inputRef, {
    duration: 1.5,
    immediate: true,
    delay: 0.3,
  });

  return (
    <div className="min-h-[404px] rounded-xl bg-white p-2 backdrop-blur-[30px]">
      <div className="bg-background-7 flex h-full flex-col justify-between space-y-8 rounded-lg p-7 md:p-10.5">
        <div className="font-instrument-serif text-is-heading-4 text-black">2</div>

        <div className="bg-background-6 border-stroke-3/11 relative overflow-hidden rounded-xl border p-2">
          {/* gradient */}
          <div className="pointer-events-none absolute -top-[50%] -left-[10%] z-5 size-20">
            <div
              className="absolute h-full w-full rounded-[80.023px] blur-[16.56px]"
              style={{
                background: 'linear-gradient(90deg, #ee9ca7 0%, #ffdde1 100%)',
                opacity: 0.6,
              }}
            />
            <div
              className="absolute top-3 left-3 h-[70%] w-[70%] rounded-[42.896px] blur-[6.785px]"
              style={{
                background: 'linear-gradient(90deg, #f2709c 0%, #ff9472 100%)',
                opacity: 0.7,
              }}
            />
          </div>

          <div className="relative z-10">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your prompt"
              className="placeholder:text-tagline-3 text-tagline-3 font-inter-tight w-full rounded-lg border border-white/3 bg-white/5 px-4 py-2 font-normal text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:ring-1 focus:ring-white/10 focus:outline-none"
            />
            <div className="pointer-events-none absolute top-0 right-4 h-[0.5px] w-10 rounded-full bg-radial-[circle,#FFFFFF_0%,#FFFFFF00_100%] opacity-30 transition-all duration-500 ease-out" />
          </div>
        </div>
        <div>
          <h3 className="font-instrument-serif text-is-heading-5 text-black">Create context</h3>
          <p className="font-inter-tight text-tagline-2 text-background-13/50 max-w-[250px]">
            Add goals, keywords, or styles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateContext;

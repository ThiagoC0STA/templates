'use client';

import { useTypewriter } from '@/src/hooks/use-typewriter';
import { useRef } from 'react';

const BULLETS = [
  'Enter your prompt in plain language',
  'Add goals, tone, or specific keywords',
  'AI interprets and enriches your context',
  'One prompt powers multiple outputs',
];

const CreateContext = () => {
  const promptInputRef = useRef<HTMLInputElement>(null);

  useTypewriter(promptInputRef, {
    duration: 2,
    immediate: true,
    delay: 0.3,
  });

  return (
    <div className="min-h-[404px] rounded-xl bg-white/30 p-2 backdrop-blur-[30px]">
      <div className="bg-background-7 relative flex h-full flex-col justify-between space-y-8 overflow-hidden rounded-lg p-7 md:p-10.5">
        <div className="pointer-events-none absolute -top-[50%] -left-[10%] z-5 size-20">
          <div
            className="absolute h-full w-full rounded-[80px] blur-lg"
            style={{
              background: 'linear-gradient(90deg, #ee9ca7 0%, #ffdde1 100%)',
              opacity: 0.6,
            }}
          />
          <div
            className="absolute top-3 left-3 h-[70%] w-[70%] rounded-[43px] blur-[7px]"
            style={{
              background: 'linear-gradient(90deg, #f2709c 0%, #ff9472 100%)',
              opacity: 0.7,
            }}
          />
        </div>

        <div className="font-instrument-serif text-is-heading-4 text-black">02</div>

        <div className="bg-background-6 border-stroke-3/11 relative overflow-hidden rounded-xl border p-2">
          <input
            ref={promptInputRef}
            type="text"
            placeholder="Enter your prompt"
            className="placeholder:text-tagline-3 text-tagline-3 font-inter-tight w-full rounded-lg border border-white/3 bg-white/5 px-4 py-2.5 font-normal text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:ring-1 focus:ring-white/10 focus:outline-none"
          />
        </div>

        <div>
          <h3 className="font-instrument-serif text-is-heading-5 text-black">Create context</h3>
          <p className="font-inter-tight text-tagline-2 text-background-13/50 max-w-[250px]">
            Add goals, keywords, or styles.
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

export default CreateContext;

'use client';

import { useRef } from 'react';
import { useTypewriter } from '../../hooks/use-typewriter';
import RevealAnimation from '../animation/reveal-animation';
import { SendMessageIcon } from '../shared/icon';

const CodeGenerationSupport = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useTypewriter(textRef, { duration: 2.5 });

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="h-full space-y-8">
        <div className="flex min-h-[230px] flex-col items-center justify-center rounded-xl bg-white px-10.5 pt-10.5 pb-8">
          <RevealAnimation delay={0.4}>
            <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
              JSON & mongoose schema outputs.
            </h2>
          </RevealAnimation>
        </div>
        <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-xl bg-[url('/images/opai-img-140.jpg')] bg-cover bg-center bg-no-repeat px-10.5 py-6">
          <div className="space-y-1 rounded bg-white p-2 md:space-y-2 md:p-4">
            <div className="flex flex-col gap-x-2">
              <p ref={textRef} className="font-inter-tight text-tagline-3 text-background-13/60">
                Support for your coding needs is just a click away!
              </p>

              <div className="self-end">
                <span className="flex w-full max-w-[60px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#F2709C_0%,#FF9472_100%)] px-5 py-2">
                  <SendMessageIcon />
                </span>
              </div>
            </div>
          </div>
          <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80 relative z-10">
            Code generation support
          </h2>
          <div className="absolute -bottom-20 left-0 z-5 h-[194px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_10.91%,rgba(255,255,255,0.31)_76.79%)] blur-[45px]" />
        </div>
      </div>
    </div>
  );
};

export default CodeGenerationSupport;

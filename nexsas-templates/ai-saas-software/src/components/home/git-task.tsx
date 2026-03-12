'use client';

import React from 'react';
import Connector from './connector';

const GitTask: React.FC = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="relative h-full overflow-hidden rounded-xl bg-white px-1 pt-10.5 pb-8 max-md:min-h-[309px] md:px-10.5">
        <div className="features-integration-pill relative -top-2 mx-auto h-21 w-full max-w-[324px] translate-y-1/2 md:top-1/5">
          {/* Pills */}

          <div className="absolute top-1/2 left-0 h-7 -translate-y-1/2">
            <div className="border-stroke-1/11 bg-background-7 flex items-center justify-center gap-x-1 rounded-full border px-[14px] py-[5px]">
              <span className="bg-opai-blue h-2 w-2 rounded-full" />
              <span className="font-inter-tight text-tagline-4 text-background-13/60 font-normal">
                Sync
              </span>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 h-7 -translate-x-1/2">
            <div className="border-stroke-1/11 bg-background-7 flex w-24 items-center gap-x-1 rounded-full border px-[14px] py-[5px]">
              <span className="bg-opai-purple h-2 w-2 rounded-full" />
              <span className="font-inter-tight text-tagline-4 text-background-13/60 font-normal">
                Process
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 h-7 -translate-x-1/2">
            <div className="border-stroke-1/11 bg-background-7 flex w-24 items-center gap-x-1 rounded-full border px-[14px] py-1.5">
              <span className="bg-opai-purple h-2 w-2 rounded-full" />
              <span className="font-inter-tight text-tagline-4 text-background-13/60 font-normal">
                Flow
              </span>
            </div>
          </div>

          <div className="absolute top-1/2 right-0 h-7 -translate-y-1/2">
            <div className="border-stroke-1/11 bg-background-7 flex items-center gap-x-1 rounded-full border px-[14px] py-[5px]">
              <span className="bg-opai-purple h-2 w-2 rounded-full" />
              <span className="font-inter-tight text-tagline-4 text-background-13/60 font-normal">
                Grow
              </span>
            </div>
          </div>

          {/* Connectors */}

          <Connector
            className="absolute top-[20px] left-[65px] h-6 w-[52px]"
            viewBox="0 0 59 25"
            d="M0.832031 24.5H26.9087C34.1358 24.5 40.9781 21.2433 45.5355 15.6342L57.832 0.5"
            dotColor="#000000"
          />

          <Connector
            className="absolute top-[43px] left-[65px] h-6 w-[57px]"
            viewBox="0 0 59 32"
            d="M0.332031 0.5H24.87C32.9592 0.5 40.5041 4.57491 44.9399 11.3394L57.832 31"
            dotColor="#000000"
            delay={0.08}
          />

          <Connector
            className="absolute top-[19px] right-[69px] h-[55px] w-12"
            viewBox="0 0 59 56"
            d="M58.332 24.5H32.2553C25.0282 24.5 18.1859 21.2433 13.6286 15.6342L1.33203 0.5"
            dotColor="#000000"
            delay={0.16}
          />

          <Connector
            className="absolute top-[19px] right-[69px] h-[55px] w-12"
            viewBox="0 0 59 56"
            d="M58.832 24.5H34.2941C26.2049 24.5 18.66 28.5749 14.2242 35.3394L1.33203 55"
            dotColor="#000000"
            delay={0.24}
          />
        </div>

        <div className="absolute bottom-8 left-11 z-10">
          <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
            Automate git tasks
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GitTask;

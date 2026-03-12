'use client';

import opaiImg31 from '@/public/images/opai-img-31.png';
import opaiImg32 from '@/public/images/opai-img-32.png';
import opaiImg33 from '@/public/images/opai-img-33.png';
import opaiImg34 from '@/public/images/opai-img-34.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import type { FC } from 'react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SelectTemplate: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLElement | null>(null);
  const img2Ref = useRef<HTMLElement | null>(null);
  const img3Ref = useRef<HTMLElement | null>(null);
  const img4Ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const images = [img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current].filter(
        Boolean
      ) as HTMLElement[];

      if (images.length !== 4) return;

      const initialPositions = [
        { x: 170, y: 0, rotation: 0 },
        { x: 10, y: 0, rotation: 0 },
        { x: -40, y: 0, rotation: 0 },
        { x: -170, y: 0, rotation: 0 },
      ];

      const finalPositions = [
        { x: 0, y: -12, rotation: -20 },
        { x: 0, y: 0, rotation: 20 },
        { x: 0, y: -28, rotation: -8 },
        { x: 0, y: 0, rotation: 19 },
      ];

      images.forEach((img, index) => {
        gsap.set(img, {
          x: initialPositions[index].x,
          y: initialPositions[index].y,
          rotation: initialPositions[index].rotation,
          transformOrigin: '50% 50%',
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          once: true,
        },
      });

      images.forEach((img, index) => {
        tl.to(
          img,
          {
            x: finalPositions[index].x,
            y: finalPositions[index].y,
            rotation: finalPositions[index].rotation,
            duration: 1.5,
            ease: 'power3.out',
          },
          0
        );
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div className="min-h-[404px] rounded-xl bg-white p-2 backdrop-blur-[30px]">
      <div className="bg-background-7 flex h-full flex-col justify-between space-y-8 rounded-lg p-7 md:p-10.5">
        <div className="font-instrument-serif text-is-heading-4 text-black">01</div>

        <div
          ref={containerRef}
          className="how-its-work-images-container relative z-0 flex items-end justify-center -space-x-4"
        >
          <figure
            ref={img1Ref}
            className="how-its-work-image-1 h-full max-h-24.5 w-full max-w-20.5 overflow-hidden rounded-[4px]"
          >
            <Image src={opaiImg31} alt="Template" className="size-full object-cover" />
          </figure>
          <figure
            ref={img2Ref}
            className="how-its-work-image-2 h-full max-h-24.5 w-full max-w-20.5 overflow-hidden rounded-[4px]"
          >
            <Image src={opaiImg32} alt="Template" className="size-full object-cover" />
          </figure>
          <figure
            ref={img3Ref}
            className="how-its-work-image-3 relative z-10 h-full max-h-24.5 w-full max-w-20.5 overflow-hidden rounded-[4px]"
          >
            <Image src={opaiImg33} alt="Template" className="size-full object-cover" />
          </figure>
          <figure
            ref={img4Ref}
            className="how-its-work-image-4 h-full max-h-24.5 w-full max-w-20.5 overflow-hidden rounded-[4px]"
          >
            <Image src={opaiImg34} alt="Template" className="size-full object-cover" />
          </figure>
        </div>
        <div>
          <h3 className="font-instrument-serif text-is-heading-5 text-black">Select a template</h3>
          <p className="font-inter-tight text-tagline-2 text-background-13/50 max-w-[250px]">
            Start fast with prebuilt structures or blank canvases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectTemplate;

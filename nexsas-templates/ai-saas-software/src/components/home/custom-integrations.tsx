'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../animation/reveal-animation';

gsap.registerPlugin(ScrollTrigger);

const CustomIntegrations = () => {
  const list1Ref = useRef<HTMLDivElement | null>(null);
  const list2Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const list1 = list1Ref.current;
    const list2 = list2Ref.current;
    if (!list1 || !list2) return;

    let maxProgress = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: list1,
        start: 'top 85%',
        end: 'bottom 30%',
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > maxProgress) maxProgress = self.progress;
          tl.progress(maxProgress);
        },
        onLeave: () => {
          maxProgress = 1;
          tl.progress(1);
        },
        onLeaveBack: () => {
          tl.progress(maxProgress);
        },
      },
    });

    tl.from(
      list1,
      {
        opacity: 0.1,
        x: 400,
        y: -70,
        duration: 9,
        delay: 0.5,
        ease: 'sine.out',
      },
      '+=0.6'
    ).from(
      list2,
      {
        opacity: 0.1,
        x: 450,
        y: 70,
        duration: 9.5,
        ease: 'sine.out',
      },
      '-=1.5'
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });

  const integrations = [
    {
      icon: '/images/icons/shopify.svg',
      name: 'Shopify',
      description: 'Connect your e-commerce store seamlessly',
    },
    {
      icon: '/images/icons/stripe.svg',
      name: 'Stripe',
      description: 'Secure payment processing integration',
    },
    {
      icon: '/images/icons/slack.svg',
      name: 'Slack',
      description: 'Team communication and notifications',
    },
    {
      icon: '/images/icons/github.svg',
      name: 'GitHub',
      description: 'Version control and code management',
    },
    {
      icon: '/images/icons/zapier.svg',
      name: 'Zapier',
      description: 'Automate workflows across platforms',
    },
    {
      icon: '/images/icons/notion.svg',
      name: 'Notion',
      description: 'Sync data with your workspace tools',
    },
  ];

  return (
    <div className="col-span-12 md:col-span-6">
      <div className="relative flex min-h-[309px] flex-col justify-between overflow-hidden rounded-xl bg-[url('/images/opai-img-139.jpg')] bg-cover bg-center bg-no-repeat pt-10.5 pb-8 pl-5 md:pl-10.5">
        <div className="-mr-2 space-y-2 pb-3.5">
          <div ref={list1Ref} className="grid grid-cols-3 gap-2">
            {integrations.slice(0, 3).map((item) => (
              <div key={item.name} className="space-y-1 rounded bg-white p-2 md:space-y-2 md:p-4">
                <div className="flex items-center gap-x-2">
                  <figure className="size-6 p-1">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="size-full object-cover"
                    />
                  </figure>
                  <figcaption className="font-inter-tight text-tagline-4 text-background-13/80">
                    {item.name}
                  </figcaption>
                </div>
                <p className="font-inter-tight text-background-13/60 max-w-[125px] text-[10px] leading-[15px] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div ref={list2Ref} className="grid grid-cols-3 gap-2">
            {integrations.slice(3, 6).map((item) => (
              <div key={item.name} className="space-y-1 rounded bg-white p-2 md:space-y-2 md:p-4">
                <div className="flex items-center gap-x-2">
                  <figure className="size-6 p-1">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="size-full object-cover"
                    />
                  </figure>
                  <figcaption className="font-inter-tight text-tagline-4 text-background-13/80">
                    {item.name}
                  </figcaption>
                </div>
                <p className="font-inter-tight text-background-13/60 max-w-[125px] text-[10px] leading-[15px] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <RevealAnimation delay={0.2}>
          <div className="relative z-10">
            <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
              API access for custom integrations
            </h2>
          </div>
        </RevealAnimation>

        <div className="absolute -bottom-23 left-0 z-5 h-[194px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_90.91%,rgba(255,255,255,0.41)_86.79%)] blur-[45px]" />
      </div>
    </div>
  );
};

export default CustomIntegrations;

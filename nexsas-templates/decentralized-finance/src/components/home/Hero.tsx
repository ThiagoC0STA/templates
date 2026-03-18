'use client';

import { cn } from '@/utils/cn';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import heroImage from '@public/images/ns-img-304.png';
import gradient37 from '@public/images/ns-img-525.png';
import heroImageDark from '@public/images/ns-img-dark-203.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface CTAButton {
  id: number;
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  delay: number;
}

interface AvatarUser {
  id: number;
  image: StaticImageData;
  alt: string;
  bgColor: string;
  delay: number;
}

const ctaButtons: CTAButton[] = [
  {
    id: 1,
    text: 'Start for free',
    href: '/pricing',
    variant: 'primary',
    delay: 0.3,
  },
  {
    id: 2,
    text: 'Explore the platform',
    href: '/services',
    variant: 'secondary',
    delay: 0.4,
  },
];

const avatarUsers: AvatarUser[] = [
  {
    id: 1,
    image: avatar1,
    alt: 'User Avatar 1',
    bgColor: 'bg-ns-yellow',
    delay: 0.5,
  },
  {
    id: 2,
    image: avatar2,
    alt: 'User Avatar 2',
    bgColor: 'bg-ns-red',
    delay: 0.6,
  },
  {
    id: 3,
    image: avatar3,
    alt: 'User Avatar 3',
    bgColor: 'bg-ns-green',
    delay: 0.7,
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[150px] lg:pt-[180px]">
      <div className="main-container">
        {/* Hero Content */}

        <div className="relative z-20">
          <div className="mb-14 space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="mx-auto max-w-[400px] sm:max-w-[600px] md:max-w-[804px]">
                <span className="hero-text-gradient hero-text-color-1 block">
                  Secure, scalable, 100% decentralized.
                </span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[390px] sm:max-w-[560px] md:max-w-full">
                NextSaaS brings you borderless, trustless finance—powered by DeFi. Access global tools with zero
                middlemen and full control.
              </p>
            </RevealAnimation>
          </div>
          {/* CTA Buttons */}
          <ul className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {ctaButtons.map((button) => (
              <li key={button.id} className="w-full text-center sm:w-auto sm:text-left">
                <RevealAnimation delay={button.delay} direction="left" offset={50}>
                  <Link
                    href={button.href}
                    className={cn(
                      'btn btn-xl w-[90%] sm:w-auto',
                      button.variant === 'primary'
                        ? 'btn-primary hover:btn-secondary dark:hover:btn-accent'
                        : 'btn-white dark:btn-white-dark hover:btn-primary',
                    )}>
                    <span>{button.text}</span>
                  </Link>
                </RevealAnimation>
              </li>
            ))}
          </ul>

          {/* User Avatars & Stats */}
          <div>
            <div className="flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-4">
              <div className="flex -space-x-3.5">
                {avatarUsers.map((user) => (
                  <RevealAnimation key={user.id} delay={user.delay} direction="right" offset={50}>
                    <Image
                      src={user.image}
                      alt={user.alt}
                      width={48}
                      height={48}
                      className={cn('inline-block size-10 rounded-full ring-2 ring-white sm:size-12', user.bgColor)}
                    />
                  </RevealAnimation>
                ))}

                <RevealAnimation delay={0.8} direction="right" offset={50}>
                  <div className="dark:text-accent text-secondary/80 bg-background-3 dark:bg-background-6 text-tagline-3 inline-flex size-10 items-center justify-center rounded-full font-medium ring-2 ring-white sm:size-12">
                    99+
                  </div>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.9} direction="right" offset={50}>
                <div className="text-center sm:text-left">
                  <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Join 36,000+</p>
                  <p className="text-tagline-3">Use NextSaaS for smarter decisions.</p>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Hero Images */}
        <div className="relative z-30 mt-14">
          {/* Background Gradient */}
          <RevealAnimation delay={1.2} instant>
            <figure
              className={cn(
                'pointer-events-none absolute z-[-1] size-[300px] rotate-90 overflow-hidden select-none md:size-[600px] lg:size-[800px]',
                'left-[45px] max-[376px]:left-[25px] sm:left-[78px] lg:left-[116px] xl:left-[198px]',
                'top-[-81px] sm:top-[-136px] lg:top-[-157px]',
              )}>
              <Image src={gradient37} alt="Background gradient" className="size-full object-cover" priority />
            </figure>
          </RevealAnimation>

          {/* Main Hero Image */}
          <RevealAnimation delay={1}>
            <figure className="mx-auto w-full max-w-[1251px]">
              <Image
                src={heroImage}
                alt="NextSaaS Hero Dashboard"
                className="size-full object-cover dark:hidden"
                priority
              />
              <Image
                src={heroImageDark}
                alt="NextSaaS Hero Dashboard Dark Mode"
                className="hidden size-full object-cover dark:block"
                priority
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
      {/* Decorative Background Lines */}
      <RevealAnimation delay={0.3} direction="up" instant>
        <div
          className={cn(
            'absolute top-0 left-0 z-10 hidden h-full w-full md:block',
            // Left vertical line
            'before:absolute before:top-0 before:left-[110px] before:z-10 before:h-[100%] before:w-px before:content-[""]',
            'before:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] dark:before:bg-[linear-gradient(180deg,#1B232F_0%,#13171E_100%)]',
            // Right vertical line
            'after:absolute after:top-0 after:right-[110px] after:z-10 after:h-[100%] after:w-px after:content-[""]',
            'after:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] dark:after:bg-[linear-gradient(180deg,#1B232F_0%,#13171E_100%)]',
          )}>
          <div
            className={cn(
              'bg-stroke-1 dark:bg-stroke-5 absolute top-[106px] h-px w-[100%]',
              // Left diamond
              'before:bg-stroke-1 dark:before:bg-stroke-5 before:absolute before:h-2 before:w-2 before:content-[""]',
              'before:ring-background-2 before:-top-1 before:left-[106px] before:z-20 before:rotate-45 before:ring-8 dark:before:ring-black',
              // Right diamond
              'after:bg-stroke-1 dark:after:bg-stroke-5 after:absolute after:h-2 after:w-2 after:content-[""]',
              'after:ring-background-2 after:-top-1 after:right-[106px] after:z-20 after:rotate-[-45deg] after:ring-8 dark:after:ring-black',
            )}
          />
        </div>
      </RevealAnimation>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;

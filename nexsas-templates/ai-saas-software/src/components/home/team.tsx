import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import { TeamCard } from '@/src/components/shared/ui/card';
import type { TeamMember } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { FC } from 'react';

const Team: FC = () => {
  const members = getMarkDownData<TeamMember>('src/data/team', false, 'order');

  return (
    <section className="py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-14">
        {/* Content Section */}
        <div className="text-center md:pb-6">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="Meet the team" className="mb-4" />
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
              The minds{' '}
              <span className="font-instrument-serif text-background-13/30 italic">
                Behind Nexsas
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Our team brings together deep expertise in AI, design, and technology to build
              <br className="hidden md:block" />
              tools that empower your creativity and productivity.
            </p>
          </RevealAnimation>
        </div>

        {/* Teams grid */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          {members?.map((member, index) => (
            <RevealAnimation key={member?.slug} delay={0.1 + (index % 3) * 0.1}>
              <TeamCard
                name={member?.name ?? ''}
                role={member?.role ?? ''}
                imageSrc={member?.image ?? ''}
                imageAlt={`${member?.name}, ${member?.role}`}
                href={`/team/${member?.slug}`}
              />
            </RevealAnimation>
          ))}
        </div>

        {/* Button */}
        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <LinkPrimary href="/team">Meet our experts</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Team;

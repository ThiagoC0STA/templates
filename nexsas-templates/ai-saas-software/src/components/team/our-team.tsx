import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { TeamCard } from '@/src/components/shared/ui/card';
import type { TeamMember } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { FC } from 'react';

const OurTeam: FC = () => {
  const members = getMarkDownData<TeamMember>('src/data/team', false, 'order');

  return (
    <section className="pt-32 pb-13 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 xl:pt-44 xl:pb-36 2xl:pt-48 2xl:pb-44">
      <div className="main-container space-y-10 md:space-y-14">
        <div className="space-y-4 text-center md:pb-6">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="Meet the team" />
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
      </div>
    </section>
  );
};

export default OurTeam;

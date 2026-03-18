import { ITeamMember } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinks from '../shared/SocialLinks';

const teams: ITeamMember[] = getMarkDownData<ITeamMember & { [key: string]: unknown }>(
  'src/data/team',
  false,
  'name',
).slice(0, 6);

const Team = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container space-y-10 md:space-y-[70px]">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our team</span>
          </RevealAnimation>
          <div className="mx-auto max-w-[620px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Our innovative, dynamic and talented team</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a
                unique blend of expertise
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-items-center gap-y-8 sm:gap-x-8">
          {teams.map((member, index) => (
            <RevealAnimation key={member.slug} delay={0.4 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="group dark:bg-background-9 relative z-10 max-w-[408px] overflow-hidden rounded-[20px] bg-white p-3">
                  <figure className="mx-auto max-w-[408px] overflow-hidden">
                    <Link href={`/team/${member.slug}`}>
                      <Image
                        src={member.userImg}
                        loading="lazy"
                        width={600}
                        height={600}
                        quality={100}
                        alt={`${member.name} - team member`}
                        className="dark:bg-background-5 h-full w-full rounded-2xl bg-[#F5F5F7] object-cover"
                      />
                    </Link>
                  </figure>
                  <div className="shadow-1 dark:bg-background-8 ease-team-ease-1 absolute bottom-7 left-1/2 z-20 mx-auto w-[calc(100%-44px)] max-w-[384px] -translate-x-1/2 cursor-pointer space-y-3 rounded-xl bg-white p-6 transition-all duration-[400ms] sm:bottom-5 lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                    <div className="text-center">
                      <Link href={`/team/${member.slug}`}>
                        <h3 className="text-heading-5 text-secondary dark:text-accent font-normal">{member.name}</h3>
                      </Link>
                      <p className="text-tagline-2 text-secondary/40 dark:text-accent/40 font-normal">{member.role}</p>
                    </div>
                    <SocialLinks social={member.social} />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import opai15 from '@/public/images/gradient/opai-15.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import { footerData } from '@/src/data/footer';
import Image from 'next/image';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
export interface TeamDetailsContentProps {
  member: { data: Record<string, unknown>; content: string };
}

const TeamDetailsContent: FC<TeamDetailsContentProps> = ({ member }) => {
  const data = member?.data ?? {};
  const name = (data?.name as string) ?? '';
  const role = (data?.role as string) ?? '';
  const heroImage = data?.heroImage as string;
  const email = (data?.email as string) ?? '';
  const emailHref = email ? `mailto:${email}` : '';
  const phone = (data?.phone as string) ?? '';
  const phoneHref =
    (data?.phoneHref as string) ?? (phone ? `tel:${phone.replaceAll(/\D/g, '')}` : '');

  return (
    <section className="pt-28 pb-13 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 xl:pt-44 xl:pb-36 2xl:pt-48 2xl:pb-44">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[850px] rounded-xl">
          <RevealAnimation delay={0.1} instant>
            <div
              className="bg-[] relative mx-auto flex h-[350px] w-full items-end overflow-hidden rounded-t-xl bg-cover bg-center px-8 py-[42px] md:h-[650px] lg:h-[700px] xl:h-[922px]"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div>
                <h2 className="font-instrument-serif text-is-heading-6 font-normal text-white/90">
                  {name}
                </h2>
                <p className="font-inter-tight text-tagline-3 font-normal text-white/50">{role}</p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="relative w-full max-w-full overflow-hidden rounded-b-xl bg-black p-6 lg:p-[42px]">
              <div className="pointer-events-none absolute -top-144 -right-117 rotate-180 select-none">
                <Image src={opai15} alt="Mia" className="h-full w-full object-cover" />
              </div>

              <div className="flex flex-col items-center justify-between gap-x-4 gap-y-6 md:flex-row md:gap-y-0">
                <div className="border-stroke-3/18 basis-1/2 space-y-4 border-b pr-4 pb-4 md:border-r md:border-b-0 md:pb-0">
                  <div className="space-y-1">
                    <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                      {role}
                    </p>
                    <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">
                      {name}
                    </h2>
                  </div>
                  <p className="font-inter-tight text-tagline-3 mr-5 font-normal text-white/60 lg:mr-0">
                    Leading with expertise in AI, technology, and team collaboration to deliver
                    impact for our customers.
                  </p>
                </div>

                <div className="w-full space-y-5.5 md:basis-1/2">
                  <div className="space-y-2">
                    <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">
                      Contact information
                    </h2>
                    <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                      {phoneHref && (
                        <a href={phoneHref} className="block hover:underline">
                          {phone}
                        </a>
                      )}
                      {emailHref && (
                        <a href={emailHref} className="block hover:underline">
                          {email}
                        </a>
                      )}
                    </p>
                  </div>
                  <SocialIcons links={footerData.social} iconClassName="stroke-white" />
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.1}>
          <div className="team-details">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{member?.content ?? ''}</ReactMarkdown>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TeamDetailsContent;

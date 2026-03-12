import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

export interface DetailsContentProps {
  useCase: { data: Record<string, unknown>; content: string };
}

const DetailsContent: FC<DetailsContentProps> = ({ useCase }) => {
  const data = useCase?.data ?? {};
  const title = (data?.title as string) ?? '';
  const description = (data?.description as string) ?? '';
  const image = (data?.image as string) ?? '';
  const industry = (data?.industry as string) ?? '';
  const projectType = (data?.projectType as string) ?? '';
  const completionDate = (data?.completionDate as string) ?? '';

  return (
    <section className="pt-28 md:pt-36 lg:pt-44 xl:pt-48 2xl:pt-55">
      <div className="main-container space-y-10 md:space-y-12 lg:space-y-17.5">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="font-instrument-serif text-background-13/90 text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center max-md:leading-[1.2]">
              {title}
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[400px] text-center">
              {description}
            </p>
          </RevealAnimation>
        </div>

        <div className="use-case-details-info">
          {image && (
            <RevealAnimation delay={0.3}>
              <figure>
                <Image
                  src={image}
                  alt={title || 'Use case'}
                  width={1200}
                  height={700}
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
          )}

          <RevealAnimation delay={0.1}>
            <div className="flex flex-col items-center justify-between gap-5 bg-white p-11 md:flex-row md:gap-2 lg:gap-10.5">
              <div className="text-center">
                <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
                  Industry:
                </h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/50">{industry}</p>
              </div>
              <div className="bg-stroke-3/25 h-px w-17 md:h-17 md:w-px" />
              <div className="text-center">
                <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
                  Project type:
                </h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/50">
                  {projectType}
                </p>
              </div>
              <div className="bg-stroke-3/25 h-px w-17 md:h-17 md:w-px" />
              <div className="text-center">
                <h2 className="font-instrument-serif text-is-heading-5 text-background-13/80">
                  Completion date:
                </h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/50">
                  {completionDate}
                </p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <div className="use-case-details-info">
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>
                {useCase?.content ?? ''}
              </ReactMarkdown>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;

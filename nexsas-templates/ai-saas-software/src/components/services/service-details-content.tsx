import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

export interface ServiceDetailsContentProps {
  service: { data: Record<string, unknown>; content: string };
}

const ServiceDetailsContent: FC<ServiceDetailsContentProps> = ({ service }) => {
  const data = service?.data ?? {};
  const ctaText = (data?.ctaText as string) ?? 'Get started';
  const ctaHref = (data?.ctaHref as string) ?? '/contact';

  return (
    <section className="pt-32 pb-18 md:pt-37 md:pb-24 lg:pt-42 lg:pb-28 xl:pt-47 xl:pb-36 2xl:pt-50 2xl:pb-44">
      <div className="main-container">
        <div className="details-info">
          <RevealAnimation delay={0.1}>
            <div>
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{service?.content ?? ''}</ReactMarkdown>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="inline-block w-auto text-center">
              <LinkPrimary href={ctaHref}>{ctaText}</LinkPrimary>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsContent;

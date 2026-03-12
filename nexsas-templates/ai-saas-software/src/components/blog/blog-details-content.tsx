import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import { footerData } from '@/src/data/footer';
import Image from 'next/image';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

export interface BlogDetailsContentProps {
  blog: { data: Record<string, unknown>; content: string };
}

const formatDisplayDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const BlogDetailsContent: FC<BlogDetailsContentProps> = ({ blog }) => {
  const data: Record<string, unknown> = blog?.data ?? {};
  const title = (data?.title as string) ?? '';
  const titleItalic = data?.titleItalic as string | undefined;
  const author = (data?.author as string) ?? '';
  const authorImage = (data?.authorImage as string) ?? '';
  const publishDate = (data?.publishDate as string) ?? '';
  const readTime = (data?.readTime as string) ?? '';
  const heroImages = data?.heroImages as string[] | undefined;
  const thumbnail = (data?.thumbnail as string) ?? '';
  const defaultSecondHero = '/images/opai-img-133.jpg';

  const heroFirst = heroImages?.[0] ?? thumbnail;
  const heroSecond = heroImages?.[1] ?? defaultSecondHero;

  return (
    <section className="pt-32 pb-18 md:pt-37 md:pb-24 lg:pt-42 lg:pb-28 xl:pt-47 xl:pb-36 2xl:pt-50 2xl:pb-44">
      <div className="main-container">
        <div className="flex flex-col gap-8 pb-8 md:flex-row">
          <RevealAnimation delay={0.1} direction="left">
            <figure className="h-[400px] w-full overflow-hidden rounded-lg md:h-[750px]">
              <Image
                src={heroFirst}
                alt={title || 'Blog'}
                width={800}
                height={750}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.1} direction="right">
            <figure className="h-[400px] w-full overflow-hidden rounded-lg md:h-[750px]">
              <Image
                src={heroSecond}
                alt={title || 'Blog'}
                width={800}
                height={750}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
        </div>

        <div className="mx-auto max-w-[1050px]">
          <div className="space-y-4" data-opai-animate>
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 mt-8 font-medium max-md:leading-[1.1]">
                {titleItalic ? (
                  <>
                    {title?.replace?.(titleItalic, '')?.trim() ?? title}{' '}
                    <span className="font-instrument-serif text-background-13/30 italic">
                      {titleItalic}
                    </span>
                  </>
                ) : (
                  title
                )}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="flex items-center gap-3">
                <figure className="size-12 overflow-hidden rounded-full">
                  <Image
                    src={authorImage}
                    alt={author}
                    width={48}
                    height={48}
                    className="size-full object-cover"
                  />
                </figure>

                <div className="flex flex-col gap-0.5">
                  <h4 className="font-inter-tight text-tagline-3 font-medium text-black">
                    {author}
                  </h4>
                  <time
                    dateTime={publishDate}
                    className="text-tagline-4 text-background-13/60 flex items-center gap-x-2 font-normal"
                  >
                    {formatDisplayDate(publishDate)}
                    <span className="bg-background-6/60 size-1.5 rounded-full" />
                    <span className="font-inter-tight text-tagline-4 text-background-13/60">
                      reading time {readTime}
                    </span>
                  </time>
                </div>
              </div>
            </RevealAnimation>
          </div>

          <div className="mt-14 md:mt-[70px]">
            <RevealAnimation delay={0.1}>
              <div className="blog-details">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{blog?.content ?? ''}</ReactMarkdown>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="mt-[70px]">
                <div className="bg-stroke-3/25 my-6 h-px w-full" />
                <div className="space-y-4">
                  <h4 className="font-inter-tight text-tagline-2 text-background-13/90 font-semibold">
                    Share this post
                  </h4>
                  <div>
                    <SocialIcons links={footerData.social} iconClassName="stroke-background-13" />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;

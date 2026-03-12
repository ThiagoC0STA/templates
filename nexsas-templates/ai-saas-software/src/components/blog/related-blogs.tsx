import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BlogCard } from '@/src/components/shared/ui/card';
import type { BlogPost } from '@/src/interface';
import type { FC } from 'react';

interface RelatedBlogsProps {
  posts: BlogPost[];
  currentSlug: string;
  relatedSlugs?: string[];
  limit?: number;
}

const RelatedBlogs: FC<RelatedBlogsProps> = ({ posts, currentSlug, relatedSlugs, limit = 3 }) => {
  const slugToPost = new Map(posts?.map((p) => [p?.slug, p]) ?? []);
  const related = relatedSlugs?.length
    ? relatedSlugs
        .filter((s) => s !== currentSlug && slugToPost.has(s))
        .map((s) => slugToPost.get(s)!)
        .slice(0, limit)
    : (posts?.filter((p) => p?.slug !== currentSlug).slice(0, limit) ?? []);

  if (related.length === 0) return null;

  return (
    <section className="py-14 md:py-20 lg:py-24 xl:py-26 2xl:py-28">
      <div className="main-container space-y-8 md:space-y-14">
        <div className="space-y-3 text-center max-md:pb-4">
          <RevealAnimation delay={0.1}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
              Related{' '}
              <span className="font-instrument-serif text-background-13/30 italic">articles</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              More insights on AI, design, and productivity.
            </p>
          </RevealAnimation>
        </div>

        <div className="columns-1 gap-x-8 *:mb-14 *:break-inside-avoid md:columns-2 lg:columns-3 [&>*:first-child_figure]:h-[420px] [&>*:nth-child(6n)_figure]:h-[420px] [&>*:nth-child(6n+1)_figure]:h-[420px] [&>*:nth-child(6n+3)_figure]:h-[520px]">
          {related?.map((blog, index) => (
            <RevealAnimation key={blog?.slug} delay={0.1 + index * 0.1}>
              <BlogCard
                title={blog?.title}
                href={`/blog/${blog?.slug}`}
                imageSrc={blog?.thumbnail}
                imageAlt={blog?.title}
                date={blog?.publishDate}
                readTime={blog?.readTime}
                tags={blog?.tags}
              />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import { BlogCard } from '@/src/components/shared/ui/card';
import type { BlogPost } from '@/src/interface';
import type { FC } from 'react';

interface BlogProps {
  posts?: BlogPost[];
}

const Blog: FC<BlogProps> = ({ posts = [] }) => {
  const displayPosts = posts.length > 0 ? posts.slice(0, 6) : [];
  return (
    <section className="py-14 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-8 md:space-y-14">
        {/* Content Section */}
        <div className="space-y-4 text-center max-md:pb-4">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="Blog" />
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
              Stay ahead{' '}
              <span className="font-instrument-serif text-background-13/30 italic">
                with AI insights
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

        {/* Blogs grid */}
        <div className="columns-1 gap-x-8 *:mb-14 *:break-inside-avoid md:columns-2 lg:columns-3 [&>*:first-child_figure]:h-[420px] [&>*:nth-child(6n)_figure]:h-[420px] [&>*:nth-child(6n+1)_figure]:h-[420px] [&>*:nth-child(6n+3)_figure]:h-[520px]">
          {displayPosts?.length > 0
            ? displayPosts?.map((post, index) => (
                <RevealAnimation key={post?.slug} delay={0.1 + index * 0.1}>
                  <BlogCard
                    title={post?.title}
                    href={`/blog/${post?.slug}`}
                    imageSrc={post?.thumbnail}
                    imageAlt={post?.title}
                    date={post?.publishDate}
                    readTime={post?.readTime}
                    tags={post?.tags}
                  />
                </RevealAnimation>
              ))
            : null}
        </div>

        {/* Button */}
        <RevealAnimation delay={0.1}>
          <div className="flex justify-center max-md:mt-3">
            <LinkPrimary href="/blog">Explore our resource</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;

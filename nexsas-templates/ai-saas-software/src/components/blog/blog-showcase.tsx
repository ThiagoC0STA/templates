import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { BlogCard } from '@/src/components/shared/ui/card';
import type { BlogPost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { FC } from 'react';

const BlogShowcase: FC = () => {
  const blogs = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');

  return (
    <section className="pt-32 pb-14 md:pt-37 md:pb-24 lg:pt-42 lg:pb-28 xl:pt-47 xl:pb-36 2xl:pt-50 2xl:pb-44">
      <div className="main-container space-y-8 md:space-y-14">
        <div className="text-center max-md:pb-4">
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

        <div className="columns-1 gap-x-8 *:mb-14 *:break-inside-avoid md:columns-2 lg:columns-3 [&>*:first-child_figure]:h-[420px] [&>*:nth-child(6n)_figure]:h-[420px] [&>*:nth-child(6n+1)_figure]:h-[420px] [&>*:nth-child(6n+3)_figure]:h-[520px]">
          {blogs?.map((blog, index) => (
            <RevealAnimation key={blog?.slug} delay={0.1 + index * 0.1}>
              <BlogCard
                title={blog.title}
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

export default BlogShowcase;

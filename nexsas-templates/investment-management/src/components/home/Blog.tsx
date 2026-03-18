import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';
const blogs: IBlogPost[] = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(5, 8);

const Blog = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan inline-block">Journal</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>
                Thoughts &amp; <span className="text-primary-500">ideas</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[492px]">
                &nbsp;A collection of thoughts, experiments, and insights around design, technology, and creativity.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-14">
          <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-8 xl:items-center">
            {/* blog one  */}
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <BlogCardV4 blog={blogs[0]} />
              </div>
            </RevealAnimation>

            <div className="col-span-12 space-y-8 lg:col-span-7 xl:col-span-6">
              {/* blog two  */}
              <RevealAnimation delay={0.5}>
                <BlogCardV5 blog={blogs[1]} />
              </RevealAnimation>
              {/* blog three */}

              <RevealAnimation delay={0.6}>
                <BlogCardV5 blog={blogs[2]} />
              </RevealAnimation>
            </div>
          </div>
          <div className="text-center">
            <RevealAnimation delay={0.7}>
              <LinkButton
                href="/blog"
                className="btn btn-secondary btn-md dark:btn-transparent hover:btn-white dark:hover:btn-accent mx-auto w-[85%] md:mx-0 md:w-auto">
                View all
              </LinkButton>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

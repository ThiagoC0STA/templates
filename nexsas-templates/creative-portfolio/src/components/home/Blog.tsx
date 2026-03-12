import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';
import LinkButton from '../ui/button/LinkButton';

const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(7, 10);

const Blog = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Journal</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Thoughts &amp; ideas</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[492px]">
                A collection of thoughts, experiments, and insights around design, technology, and creativity.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-8">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <BlogCardV2 blog={blogs[0]} className="dark:bg-background-8 bg-white" />
              </div>
            </RevealAnimation>

            <div className="col-span-12 space-y-8 lg:col-span-7 xl:col-span-6">
              <RevealAnimation delay={0.6}>
                <BlogCardV3 blog={blogs[1]} className="dark:bg-background-8 bg-white" />
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <BlogCardV3 blog={blogs[2]} className="dark:bg-background-8 bg-white" />
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.8}>
            <div className="mt-10 flex justify-center md:mt-14">
              <LinkButton
                href="/blog"
                className="btn btn-secondary btn-md dark:btn-transparent dark:border-stroke-7 hover:btn-primary dark:hover:btn-white inline-block w-[90%] md:w-auto">
                Visit our blog
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Blog;

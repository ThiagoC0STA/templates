import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';
import LinkButton from '../ui/button/LinkButton';

const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(2, 5);

const Blog = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-5 py-20 sm:py-24 lg:py-[100px]">
        <div className="main-container">
          <div className="mb-10 space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Education &amp; Insights</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Level up your trading knowledge</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[492px]">
                  A collection of thoughts, experiments, and insights around design, technology, and creativity.
                </p>
              </RevealAnimation>
            </div>
          </div>
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
          <RevealAnimation delay={0.6}>
            <div className="mt-14 flex justify-center">
              <LinkButton
                href="/blog"
                className="btn btn-secondary dark:btn-transparent btn-md hover:btn-green mx-auto w-[90%] md:mx-0 md:w-auto">
                Explore the Learning Hub
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Blog;

import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';
import BlogCardV2 from '../shared/card/BlogCardV2';
import LinkButton from '../ui/button/LinkButton';
const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(7, 10);

const Blog = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 py-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[814px]">Smart reads for smarter businesses</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[550px]">
              Explore practical tips, industry insights, and success stories to help your business scale with
              confidence.
            </p>
          </RevealAnimation>
        </div>
        <div>
          <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-x-8 xl:items-center">
            {/* blog one  */}

            <RevealAnimation delay={0.4}>
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <BlogCardV1 blog={blogs[0]} className="dark:bg-background-8 bg-white" />
              </div>
            </RevealAnimation>

            <div className="col-span-12 space-y-8 lg:col-span-7 xl:col-span-6">
              <RevealAnimation delay={0.5}>
                <BlogCardV2 blog={blogs[1]} className="dark:bg-background-8 bg-white" />
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <BlogCardV2 blog={blogs[2]} className="dark:bg-background-8 bg-white" />
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.7}>
            <div className="mt-10 flex justify-center md:mt-14">
              <LinkButton
                href="/blog"
                className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-white inline-block w-[85%] md:w-auto">
                Explore our blog
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Blog.displayName = 'Blog';
export default Blog;

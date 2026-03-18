import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';
import LinkButton from '../ui/button/LinkButton';
const blogsData: IBlogPost[] = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(12, 15);

const Blog = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Blog</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Informed investors are confident.</h2>
            </RevealAnimation>
          </div>
          <div className="space-y-14">
            <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-x-8 xl:items-center">
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <RevealAnimation delay={0.3}>
                  <BlogCardV2 blog={blogsData[0]} className="dark:bg-background-8 bg-white" />
                </RevealAnimation>
              </div>
              <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                <div className="space-y-8 lg:space-y-[38px] xl:space-y-8">
                  <RevealAnimation delay={0.4}>
                    <BlogCardV3 blog={blogsData[1]} className="dark:bg-background-8 bg-white" />
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <BlogCardV3 blog={blogsData[2]} className="dark:bg-background-8 bg-white" />
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <RevealAnimation delay={0.6}>
              <div className="text-center">
                <LinkButton
                  href="/blog"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-md dark:btn-transparent hover:btn-primary">
                  View our blog
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

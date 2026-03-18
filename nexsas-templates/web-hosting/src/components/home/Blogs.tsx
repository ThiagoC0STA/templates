import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCard from '../shared/card/BlogCard';

const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(2, 5);

const Blogs = () => {
  return (
    <section className="py-14 md:py-20 xl:py-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Blog</span>
          </RevealAnimation>

          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Our recent news &amp; insights</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[738px]">
                Our recent news and insights highlight the latest developments, achievements, and thought leadership
                shaping our journey forward. From product innovations and strategic partnerships to industry trends
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <RevealAnimation key={blog.slug} delay={0.4 + index * 0.1}>
              <BlogCard blog={blog} />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Blogs.displayName = 'Blogs';
export default Blogs;

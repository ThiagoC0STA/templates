import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
const blogs: IBlogPost[] = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(5, 8);

const Blog = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[80px] md:py-[100px] lg:py-[150px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2>Learn defi, step by step</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>New to defi? we've got you covered with beginner-friendly guides and insights.</p>
          </RevealAnimation>
        </div>
        <div className="mb-14 grid grid-cols-12 items-start gap-y-6 md:gap-8">
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <article>
                <div className="dark:bg-background-6 scale-100 overflow-hidden rounded-[20px] bg-white transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px]">
                  <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
                    <Image
                      src={blogs[0]?.thumbnail}
                      width={409}
                      height={250}
                      alt="Illustration representing electronic prescription in finance sector"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="space-y-6 p-6">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-green mr-1">
                        <Link href={`/blog?category=${blogs[0]?.tag.toLowerCase()}`}>{blogs[0]?.tag}</Link>
                      </span>
                      <span rel="author" className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blogs[0]?.author}
                      </span>
                      <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
                      <time
                        dateTime="2025-03-20"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blogs[0]?.publishDate}
                      </time>
                    </div>
                    <div>
                      <h3 className="sm:text-heading-5 text-heading-6 mb-2 font-normal">
                        <Link
                          href={`/blog/${blogs[0].slug}`}
                          aria-label="Read more about electronic prescription in finance sector">
                          {blogs[0]?.title}
                        </Link>
                      </h3>
                      <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 font-normal">
                        {blogs[0]?.description}
                      </p>
                    </div>
                    <div className="flex justify-start md:block">
                      <LinkButton
                        href={`/blog/${blogs[0].slug}`}
                        className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent dark:hover:text-secondary w-full sm:w-auto"
                        aria-label="Read full article about electronic prescription">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <article>
                <div className="dark:bg-background-6 scale-100 overflow-hidden rounded-[20px] bg-white transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px]">
                  <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
                    <Image
                      src={blogs[1]?.thumbnail}
                      width={409}
                      height={250}
                      alt="Illustration representing electronic prescription in finance sector"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="space-y-6 p-6">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-green mr-1">
                        <Link href={`/blog?category=${blogs[1]?.tag.toLowerCase()}`}>{blogs[1]?.tag}</Link>
                      </span>
                      <span rel="author" className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blogs[1]?.author}
                      </span>
                      <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
                      <time
                        dateTime="2025-03-20"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blogs[1]?.publishDate}
                      </time>
                    </div>
                    <div>
                      <h3 className="sm:text-heading-5 text-heading-6 mb-2 font-normal">
                        <Link
                          href={`/blog/${blogs[1].slug}`}
                          aria-label="Read more about electronic prescription in finance sector">
                          {blogs[1]?.title}
                        </Link>
                      </h3>
                      <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 font-normal">
                        {blogs[1]?.description}
                      </p>
                    </div>
                    <div className="flex justify-start md:block">
                      <LinkButton
                        href={`/blog/${blogs[1].slug}`}
                        className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent dark:hover:text-secondary w-full sm:w-auto"
                        aria-label="Read full article about electronic prescription">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <article>
                <div className="dark:bg-background-6 scale-100 overflow-hidden rounded-[20px] bg-white transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px]">
                  <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
                    <Image
                      src={blogs[2]?.thumbnail}
                      width={409}
                      height={250}
                      alt="Illustration representing electronic prescription in finance sector"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="space-y-6 p-6">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-green mr-1">
                        <Link href={`/blog?category=${blogs[2]?.tag.toLowerCase()}`}>{blogs[2]?.tag}</Link>
                      </span>
                      <span rel="author" className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blogs[2]?.author}
                      </span>
                      <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
                      <time
                        dateTime="2025-03-20"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blogs[2]?.publishDate}
                      </time>
                    </div>
                    <div>
                      <h3 className="sm:text-heading-5 text-heading-6 mb-2 font-normal">
                        <Link
                          href={`/blog/${blogs[2].slug}`}
                          aria-label="Read more about electronic prescription in finance sector">
                          {blogs[2]?.title}
                        </Link>
                      </h3>
                      <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 font-normal">
                        {blogs[2]?.description}
                      </p>
                    </div>
                    <div className="flex justify-start md:block">
                      <LinkButton
                        href={`/blog/${blogs[2].slug}`}
                        className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent dark:hover:text-secondary w-full sm:w-auto"
                        aria-label="Read full article about electronic prescription">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6}>
          <div className="text-center">
            <LinkButton
              href="/blog"
              className="btn btn-md hover:btn-primary dark:btn-transparent btn-white"
              aria-label="Explore the blog">
              Explore the blog
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;

'use client';

import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import Pagination from '../shared/Pagination';
import LinkButton from '../ui/button/LinkButton';

interface BlogPaginationWrapperProps {
  blogs: IBlogPost[];
}

const BlogPaginationWrapper = ({ blogs }: BlogPaginationWrapperProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1510, behavior: 'smooth' });
  };

  return (
    <>
      {/* Blog grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
        {currentBlogs?.map((blog, index) => (
          <RevealAnimation key={blog?.slug} delay={0.3 + index * 0.1}>
            <div>
              <article>
                <div
                  className={cn(
                    'bg-background-1 dark:bg-background-6 relative scale-100 overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px]',
                  )}>
                  <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
                    <Image
                      src={blog?.thumbnail}
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
                        <Link href={`/blog?category=${blog?.tag.toLowerCase()}`}>{blog?.tag}</Link>
                      </span>
                      <span rel="author" className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blog?.author}
                      </span>
                      <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
                      <time
                        dateTime="2025-03-20"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                        {blog?.publishDate}
                      </time>
                    </div>
                    <div>
                      <h3 className="sm:text-heading-5 text-heading-6 mb-2 font-normal">
                        <Link
                          href={`/blog/${blog.slug}`}
                          aria-label="Read more about electronic prescription in finance sector">
                          {blog?.title}
                        </Link>
                      </h3>
                      <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 font-normal">
                        {blog?.description}
                      </p>
                    </div>
                    <div className="flex justify-start md:block">
                      <LinkButton
                        href={`/blog/${blog.slug}`}
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
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.6}>
            <div>
              <Pagination
                totalItems={blogs.length}
                itemsPerPage={blogsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                className="mt-14"
              />
            </div>
          </RevealAnimation>
        </div>
      )}
    </>
  );
};

BlogPaginationWrapper.displayName = 'BlogPaginationWrapper';
export default BlogPaginationWrapper;

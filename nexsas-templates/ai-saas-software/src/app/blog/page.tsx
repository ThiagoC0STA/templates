import BlogShowcase from '@/src/components/blog/blog-showcase';
import FeaturedBlog from '@/src/components/blog/featured-blog';
import CTA from '@/src/components/shared/cta';
import type { BlogPost } from '@/src/interface';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - AI SaaS Software || Nexsas',
};

const page = () => {
  const allPosts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');

  return (
    <>
      <FeaturedBlog posts={allPosts} />
      <BlogShowcase />
      <CTA />
    </>
  );
};

export default page;

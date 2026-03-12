import BlogDetailsContent from '@/src/components/blog/blog-details-content';
import RelatedBlogs from '@/src/components/blog/related-blogs';
import CTA from '@/src/components/shared/cta';
import type { BlogPost } from '@/src/interface';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getMarkDownData<BlogPost>('src/data/blog');
  return posts?.map((post) => ({ slug: post?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = getMarkDownContent('src/data/blog', slug);
    const title = (blog?.data?.title as string) ?? 'Blog';
    const description = (blog?.data?.description as string) ?? undefined;
    return buildMetadata(`${title} - AI SaaS Software || Nexsas`, description, `/blog/${slug}`);
  } catch {
    return buildMetadata('Blog Details - AI SaaS Software || Nexsas', undefined, `/blog/${slug}`);
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let blog;
  try {
    blog = getMarkDownContent('src/data/blog', slug);
  } catch {
    notFound();
  }

  const allPosts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');
  const relatedSlugs = (blog?.data?.related as string[] | undefined) ?? undefined;

  return (
    <>
      <BlogDetailsContent blog={blog} />
      <RelatedBlogs posts={allPosts} currentSlug={slug} relatedSlugs={relatedSlugs} limit={3} />
      <CTA />
    </>
  );
};

export default page;

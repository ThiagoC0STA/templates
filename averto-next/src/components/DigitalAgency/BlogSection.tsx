import Link from 'next/link';
import {BlogData, IBlog} from '@/constant/DigitalAgency/blog';

interface BlogProps {
  data: BlogData;
}

const BlogSection: React.FC<BlogProps> = ({ data: blogData }) => {
  return (
    <section className="blog-area">
      <div className="blog-area-inner section-spacing">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{blogData?.section?.subtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{blogData?.section?.title}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href={blogData?.section?.buttonUrl || '#'}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href={blogData?.section?.buttonUrl || '#'}>
                  {blogData?.section?.buttonText}
                </Link>
                <Link className="t-btn t-btn-circle" href={blogData?.section?.buttonUrl || '#'}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="blogs-wrapper-box fade-anim" suppressHydrationWarning={true}>
          <div className="container">
            <div className="blogs-wrapper">
              {blogData?.posts?.map((post:IBlog, idx) => (
                <article
                  key={post?.id}
                  className="blog-1 fade-anim"
                  data-delay={(0.3 + idx * 0.15).toFixed(2)}
                  data-direction="right"
                  suppressHydrationWarning={true}
                >
                  <div className="thumb">
                    <span className="tag">{post?.tag}</span>
                    <Link href={post?.url || '#'}>
                      <img src={post?.image} alt={post?.title} />
                    </Link>
                  </div>
                  <div className="content-wrapper">
                    <div className="content">
                      <div className="meta">
                        <span className="date">{post?.date}</span>
                      </div>
                      <h2 className="title">
                        <Link href={post?.url || '#'}>
                          {post?.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

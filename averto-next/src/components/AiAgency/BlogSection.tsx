import Link from "next/link";
import { BlogData } from "@/constant/AiAgency/blog";

interface BlogSectionProps {
  data: BlogData;
}

const BlogSection: React.FC<BlogSectionProps> = ({ data: blogData }) => {
  return (
    <div className="blog-area-4">
      <div className="container">
        <div className="blog-area-4-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{blogData?.subtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{blogData?.title}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={blogData?.button?.href || "#"}
                >
                  <i className={blogData?.button?.iconClass}></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={blogData?.button?.href || "#"}
                >
                  {blogData?.button?.text}
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={blogData?.button?.href || "#"}
                >
                  <i className={blogData?.button?.iconClass}></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="blogs-wrapper-box">
            <div className="blogs-wrapper">
              {blogData?.blogs?.map((blog, index) => (
                <article
                  className="blog-4 fade-anim"
                  key={index}
                  data-delay={`0.${30 + index * 15}`}
                  data-direction="right"
                  suppressHydrationWarning={true}
                >
                  <div className="thumb">
                    <Link href={blog?.link || "#"}>
                      <img src={blog?.image} alt="blog image" />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="tag">{blog?.tag}</span>
                      <span className="date">{blog?.date}</span>
                    </div>
                    <h2 className="title">
                      <Link href={blog?.link || "#"}>{blog?.title}</Link>
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

import Link from "next/link";
import { BlogData } from "@/constant/MarketingAgency/blog";

interface BlogProps {
  data: BlogData;
  all?: boolean;
}
const BlogSection: React.FC<BlogProps> = ({ all, data: blogData }) => {
  const blogPosts = all ? blogData?.blogs : blogData?.blogs?.slice(0, 3);

  return (
    <section className="blog-area-5">
      <div className="container">
        <div className="blog-area-5-inner section-spacing">
          {!all && (
            <div className="section-header">
              <div
                className="section-title-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{blogData?.subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{blogData?.title}</h2>
                </div>
              </div>

              <div
                className="btn-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={blogData?.cta?.url || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={blogData?.cta?.url || "#"}
                  >
                    {blogData?.cta?.text}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={blogData?.cta?.url || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="blogs-wrapper-box">
            <div className="blogs-wrapper">
              {blogPosts?.map((blog) => (
                <article
                  key={blog?.id}
                  className="blog-5 fade-anim"
                  suppressHydrationWarning={true}
                >
                  <div className="thumb">
                    <Link href={blog?.url || "#"}>
                      <img src={blog?.image} alt={blog?.title} loading="lazy" />
                    </Link>
                  </div>
                  <div className="content">
                    <span className="tag">
                      <i className="fa-solid fa-tag"></i>
                      {blog?.tag}
                    </span>
                    <h2 className="title">
                      <Link href={blog?.url || "#"}>{blog?.title}</Link>
                    </h2>
                    <div className="meta">
                      <span className="time">
                        <i className="fa-regular fa-clock"></i>
                        {blog?.readTime}
                      </span>
                      <span className="date">
                        <i className="fa-regular fa-calendar-days"></i>
                        {blog?.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {all && (
            /* Optional static pagination */
            <div className="blog-area-6">
              <div className="pagination fade-anim">
                <Link href="#">
                  <img src="/assets/imgs/icon/icon-12.webp" alt="left" />
                </Link>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Link href="#" key={n} className={n === 1 ? "active" : ""}>
                    {n}
                  </Link>
                ))}
                <Link href="#">
                  <img src="/assets/imgs/icon/icon-13.webp" alt="right" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

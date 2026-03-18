import React from "react";
import Link from "next/link";
import { BlogData } from "@/constant/DesignAgency/blog/BlogGridData";

interface BlogGridProps {
  data: BlogData[];
  all?: boolean;
}
const BlogGridSection: React.FC<BlogGridProps> = ({
  all,
  data: blogListData,
}) => {
  const displayBlogData = all ? blogListData : blogListData.slice(0, 3);
  return (
    <div className="blog-area-6">
      <div className="container">
        <div className="blog-area-6-inner section-spacing">
          <div className="blogs-wrapper-box fade-anim">
            <div className="blogs-wrapper">
              {displayBlogData?.map((post: BlogData, index: number) => (
                <article
                  className="blog-2 fade-anim"
                  suppressHydrationWarning={true}
                  key={post?.id}
                  data-delay={`${0.3 + index * 0.15}`}
                  data-direction="right"
                >
                  <div className="thumb">
                    <div className="tags">
                      {post?.tags?.map((tag: string, i: number) => (
                        <span key={i} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={post?.href || "#"}>
                      <img src={post?.image} alt={post?.title} />
                    </Link>
                  </div>
                  <div className="content-wrapper">
                    <div className="content">
                      <h2 className="title">
                        <Link href={post?.href || "#"}>{post?.title}</Link>
                      </h2>
                    </div>
                    <div className="btn-wrapper">
                      <Link
                        className="t-btn t-btn-circle"
                        href={post?.href || "#"}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Optional static pagination */}
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
      </div>
    </div>
  );
};
export default BlogGridSection;

import React from "react";
import Link from "next/link";
import { IBlogList } from "@/constant/AiAgency/blog/BlogGridData";

interface BlogGridProps {
  data: IBlogList[];
}
const BlogGridSection: React.FC<BlogGridProps> = ({ data: blogListData }) => {
  return (
    <div className="blog-area-6 blog-area-4 section-spacing">
      <div className="container">
        <div className="blog-area-4-inner">
          <div className="blogs-wrapper">
            {blogListData?.map((blog, index) => (
              <article
                className="blog-4 fade-anim"
                key={index}
                data-delay={`0.${30 + index * 15}`}
                data-direction="right"
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

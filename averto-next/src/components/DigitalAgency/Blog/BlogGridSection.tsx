import React from "react";
import Link from "next/link";
import { IBlogList } from "@/constant/DigitalAgency/blog/BlogGridData";

interface BlogGridProps {
  data: IBlogList[];
}
const BlogGridSection:React.FC<BlogGridProps> = ({data:blogListData}) => {
  return (
    <div className="blog-area-6">
      <div className="container">
        <div className="blog-area-6-inner section-spacing">
          <div className="blogs-wrapper-box fade-anim">
            <div className="blogs-wrapper">
              {blogListData?.map((blog:IBlogList, idx:number) => (
                <article className="blog-6 fade-anim" key={idx}>
                  <div className="thumb">
                    <span className="tag">{blog?.tag}</span>
                    <Link href={blog?.url}>
                      <img src={blog?.image} alt={blog?.title} />
                    </Link>
                  </div>
                  <div className="content-wrapper">
                    <div className="content">
                      <div className="meta">
                        <span className="date">{blog?.date}</span>
                      </div>
                      <h2 className="title">
                        <Link href={blog?.url}>{blog?.title}</Link>
                      </h2>
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

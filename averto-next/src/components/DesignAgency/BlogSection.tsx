import React from "react";
import Link from "next/link";
import {BlogData, IBlogPost} from "@/constant/DesignAgency/blog";

interface BlogProps {
  data: BlogData;
  all?: boolean;
}

const BlogSection:React.FC<BlogProps> = ({all,data:blogData}) => {
  const displayBlogData = all ? blogData?.posts : blogData?.posts.slice(0, 3);
  return (
    <section className="blog-area-2">
      <div className="container">
        <div className="blog-area-2-inner section-spacing">
          {/* Header */}
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
                  href={blogData?.buttonLink || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={blogData?.buttonLink || "#"}
                >
                  {blogData?.buttonText}
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={blogData?.buttonLink || "#"}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="blog-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="container">
              <div className="blog-wrapper">
                {displayBlogData?.map((post:IBlogPost, index:number) => (
                  <article
                    className="blog-2 fade-anim"
                    suppressHydrationWarning={true}
                    key={post?.id}
                    data-delay={`${0.3 + index * 0.15}`}
                    data-direction="right"
                  >
                    <div className="thumb">
                      <div className="tags">
                        {post?.tags?.map((tag:string, i:number) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

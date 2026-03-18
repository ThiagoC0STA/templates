"use client";
import React, { useState } from "react";
import Link from "next/link";

import { BlogData } from "@/constant/CreativeAgency/blog";

interface BlogProps {
  data:BlogData;
}
const BlogSection:React.FC<BlogProps> = ({data:blogData}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { sectionTitle, blogs } = blogData;

  return (
    <section className="blog-area-3 pin-on-bottom">
      <div className="container">
        <div className="blog-area-3-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  ( {sectionTitle.subtitle} )
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{sectionTitle.title}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim"> 
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href="/creative-agency/blog">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href="/creative-agency/blog">
                  Blogs & News
                </Link>
                <Link className="t-btn t-btn-circle" href="/creative-agency/blog">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="blogs-wrapper-box">
            <div className="blogs-wrapper blog-hover-active">
              {blogs.map((blog, index) => (
                <article
                  key={blog?.id}
                  className={`blog-3 fade-anim ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className="tag">&#47;&#47; {blog?.tag}</span>
                  <h2 className="title">
                    <Link href="/creative-agency/blog-details">{blog?.title}</Link>
                  </h2>
                  <div className="meta">
                    <span className="date">{blog.date}</span>
                  </div>
                  <div className="thumb">
                    <Link href="/creative-agency/blog-details">
                      <img src={blog?.image} alt={blog?.title} />
                    </Link>
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

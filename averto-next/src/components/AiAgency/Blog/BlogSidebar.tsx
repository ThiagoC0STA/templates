import {
  authorInfo,
  IRecentBlog,
  ISocialLink,
  popularTags,
  recentBlogs,
} from "@/constant/AiAgency/blog/sidebarData";
import Link from "next/link";
import React from "react";

const BlogSidebar: React.FC = () => {
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar-box fade-anim">
        {/* Author Info Box */}
        <div className="author-info">
          <div className="thumb">
            <img src={authorInfo?.image} alt="Author" />
          </div>
          <div className="content">
            <h3 className="name">{authorInfo?.name}</h3>
            <span className="designation">{authorInfo?.designation}</span>
            <p className="text">{authorInfo?.text}</p>
            <div className="social-links">
              {authorInfo?.socialLinks.map(
                (link: ISocialLink, index: number) => (
                  <Link href={link?.url} key={index}>
                    <i className={`fa-brands ${link?.icon}`}></i>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Search Bar Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Search bar</h3>
        <div className="search-wrapper">
          <form action="#" className="search-form">
            <div className="input-field">
              <input type="text" placeholder="Search anything" />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Recent Blogs Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Recent blogs</h3>
        <div className="blogs-wrapper">
          {recentBlogs.map((blog: IRecentBlog, idx: number) => (
            <article className="blog" key={idx}>
              <div className="thumb">
                <a href={blog?.url}>
                  <img src={blog?.image} alt="Recent Blog" />
                </a>
              </div>
              <div className="content-wrapper">
                <div className="content">
                  <div className="meta">
                    <span className="date">{blog?.date}</span>
                  </div>
                  <h2 className="title">
                    <a href={blog?.url}>{blog?.title}</a>
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Popular Tags Box */}
      <div className="blog-sidebar-box fade-anim">
        <h3 className="title-box">Popular tags</h3>
        <div className="tags-wrapper">
          {popularTags.map((tag: string, idx: number) => (
            <Link href="/ai-agency/blog" key={idx}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;

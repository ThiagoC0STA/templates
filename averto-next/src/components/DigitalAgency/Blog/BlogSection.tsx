import { IBlog } from "@/constant/DigitalAgency/blog/blogData";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";


interface BlogSectionProps {
  data: IBlog[];
}
const BlogSection = ({data:blogData}:BlogSectionProps) => {
  return (
    <section className="blog-area-7">
      <div className="container">
        <div className="work-area-7-inner section-spacing">
          <div className="section-content-wrapper">
            <div className="main-content">
              <div className="blogs-wrapper-box fade-anim">
                <div className="blogs-wrapper-main">
                  {blogData?.map((post) => (
                    <article className="blog fade-anim" key={post?.id}>
                      <div className="thumb">
                        <span className="tag">{post?.tag}</span>
                        <Link href={post?.url}>
                          <img src={post?.image} alt="blog" />
                        </Link>
                      </div>
                      <div className="content-wrapper">
                        <div className="content">
                          <div className="meta">
                            <span className="date">{post?.date}</span>
                            <span className="comments">{post?.comments} Comments</span>
                          </div>
                          <h2 className="title">
                            <Link href={post?.url}>{post?.title}</Link>
                          </h2>
                          <div className="text">{post?.text}</div>
                          <Link className="t-btn t-btn-primary" href={post?.url}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

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

            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

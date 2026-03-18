"use client";
import { useState } from "react";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";

interface Comment {
  avatar: string;
  date: string;
  name: string;
  rating: number;
  message: string;
}

interface Quote {
  text: string;
  author: string;
}

interface Section {
  title: string;
  content: string[];
  gallery?: string[];
  quote?: Quote;
}

interface Post {
  title: string;
  date: string;
  introText: string;
  category: string;
  coverImage: string;
  sections: Section[];
  tags: string[];
}

interface FormData {
  Name: string;
  Email: string;
  Website: string;
  Message: string;
  Remember: boolean;
}

interface BlogSingleProps {
  post: Post;
  comments: Comment[];
}

const BlogSingle = ({ post, comments }: BlogSingleProps) => {
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Email: "",
    Website: "",
    Message: "",
    Remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { Name, Email, Website, Message, Remember } = formData;

    // Field-specific alerts
    if (!Name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!Email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    if (!Website.trim()) {
      alert("Please provide your website link.");
      return;
    }

    if (!Message.trim()) {
      alert("Please write a message.");
      return;
    }

    if (!Remember) {
      alert("You must check the box to save your info.");
      return;
    }

    // Form submitted successfully

    // Reset form
    setFormData({
      Name: "",
      Email: "",
      Website: "",
      Message: "",
      Remember: false,
    });
  };

  return (
    <section className="blog-area-7">
      <div className="container">
        <div className="work-area-7-inner section-spacing">
          <div className="section-content-wrapper">
            <div className="main-content">
              <div className="blog-details-wrapper fade-anim">
                <article className="blog-details">
                  <h2 className="title main">{post?.title}</h2>
                  <div className="meta">
                    <span className="date">{post?.date}</span>
                    <span className="comments">
                      {comments?.length} Comments
                    </span>
                  </div>
                  <div className="text-wrapper">
                    <p className="text main">{post?.introText}</p>
                  </div>
                  <div className="thumb main">
                    <span className="tag">{post?.category}</span>
                    <img src={post?.coverImage} alt="blog" />
                  </div>

                  {post?.sections.map((section, index) => (
                    <div className="details-info" key={index}>
                      <h3 className="title">{section?.title}</h3>
                      <div className="text-wrapper">
                        {section?.content.map((para, i) => (
                          <p className="text" key={i}>
                            {para}
                          </p>
                        ))}
                      </div>
                      {section?.gallery && (
                        <div className="gallery-wrapper">
                          {section?.gallery.map((img, i) => (
                            <img key={i} src={img} alt="gallery" />
                          ))}
                        </div>
                      )}
                      {section?.quote && (
                        <div className="quote-text">
                          <p className="text">&ldquo;{section?.quote?.text}&rdquo;</p>
                          <span className="name">{section?.quote?.author}</span>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="tags-and-share">
                    <div className="tags-wrapper">
                      <span className="title">Tags:</span>
                      <div className="tags">
                        {post?.tags?.map((tag, index) => (
                          <Link key={index} href="#">
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="social-wrapper">
                      <p className="title">Share:</p>
                      <div className="social-links">
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="details-info">
                    <h3 className="title">
                      Comments ({String(comments?.length || 0).padStart(2, "0")}
                      )
                    </h3>
                    <div className="comments-wrapper">
                      {comments?.map((comment, index) => (
                        <div className="comment-box" key={index}>
                          <div className="thumb">
                            <img src={comment?.avatar} alt="commenter" />
                          </div>
                          <div className="content">
                            <span className="date">{comment?.date}</span>
                            <h3 className="name">{comment?.name}</h3>
                            <div className="ratings">
                              {[...Array(comment?.rating)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                              ))}
                            </div>
                            <p className="text">&ldquo;{comment?.message}&rdquo;</p>
                            <div className="comment-action">
                              <button>
                                <img
                                  src="/assets/imgs/icon/icon-25.webp"
                                  alt="icon"
                                />
                                Useful
                              </button>
                              <button>
                                <img
                                  src="/assets/imgs/icon/icon-26.webp"
                                  alt="icon"
                                />
                                Not useful
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="comment-wrap">
                    <h3 className="title">Leave a comment</h3>
                    <p className="text">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="comment-formwrap">
                        <div className="comment-formfield">
                          <h3 className="title">Full name</h3>
                          <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            placeholder="Write your name"
                          />
                        </div>
                        <div className="comment-formfield">
                          <h3 className="title">Your email</h3>
                          <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            placeholder="Write your email"
                          />
                        </div>
                        <div className="comment-formfield website">
                          <h3 className="title">Website link</h3>
                          <input
                            type="text"
                            name="Website"
                            value={formData.Website}
                            onChange={handleChange}
                            placeholder="Give your website link"
                          />
                        </div>
                        <div className="comment-formfield message">
                          <h3 className="title">Any message</h3>
                          <input
                            type="text"
                            name="Message"
                            value={formData.Message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                          />
                        </div>
                      </div>
                      <div className="note-text">
                        <input
                          type="checkbox"
                          id="note"
                          name="Remember"
                          checked={formData.Remember}
                          onChange={handleChange}
                        />
                        <label htmlFor="note">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <div className="submit-btn">
                        <button type="submit" className="t-btn t-btn-primary">
                          Post Comments
                        </button>
                      </div>
                    </form>
                  </div>
                </article>
              </div>
            </div>

            {/* Sidebar */}
            <BlogSidebar />
            {/* End Sidebar */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSingle;

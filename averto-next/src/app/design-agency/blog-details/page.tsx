import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import BlogSingle from "@/components/DesignAgency/Blog/BlogSingle";
import FooterSection from "@/components/DesignAgency/FooterSection";
import Header from "@/components/DesignAgency/common/Header";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";

// all data
import {
  blogSingleData,
  comments,
} from "@/constant/DesignAgency/blog/blogSingleData";
import footerData from "@/constant/DesignAgency/footer";

export const metadata:Metadata = {
  title: "Blog Details || Averto - Creative Digital Agency NextJS Template",
  description:
    "Read detailed insights and expert articles on web development, Next.js, design trends, and digital strategies from Averto. Dive deep into each blog post crafted for developers and agencies.",
  keywords: [
    "Averto blog details",
    "NextJS blog post",
    "web development article",
    "agency blog details",
    "developer insights",
    "NextJS SEO blog",
    "blog post template",
    "creative agency article",
    "frontend development tips",
    "digital strategy blog",
    "startup blog post",
    "detailed blog content",
    "technology article",
    "responsive blog page",
    "Averto blog template",
    "NextJS article page",
    "professional blog design",
    "blog post layout",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Blog Details Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <div className="body-design-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-design-agency">
            <Breadcrumb
              title="BLOGS"
              subTitle="Details"
              pageName="BLOGS DETAILS"
            />
            <BlogSingle post={blogSingleData} comments={comments} />
          </div>
        </main>
        <div className="body-design-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;

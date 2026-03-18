import { ReactElement } from "react";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import BlogSingle from "@/components/MarketingAgency/Blog/BlogSingle";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data
import { blogSingleData, comments } from "@/constant/MarketingAgency/blog/blogSingleData";
import footerData from "@/constant/MarketingAgency/footer";

export const metadata = {
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
      <div className="body-marketing-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-marketing-agency">
            <Breadcrumb
              title="BLOGS"
              subTitle="Details"
              pageName="BLOGS DETAILS"
            />
            <BlogSingle post={blogSingleData} comments={comments} />
          </div>
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;

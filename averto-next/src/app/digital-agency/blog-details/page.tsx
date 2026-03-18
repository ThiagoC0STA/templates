import { ReactElement } from "react";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import BlogSingle from "@/components/DigitalAgency/Blog/BlogSingle";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";


// all data 
import { blogSingleData, comments } from "@/constant/DigitalAgency/blog/blogSingleData";
import footerData from "@/constant/DigitalAgency/footer";

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
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="BLOGS"
            subTitle="Details"
            pageName="BLOGS DETAILS"
          />
          <BlogSingle post={blogSingleData} comments={comments} />
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

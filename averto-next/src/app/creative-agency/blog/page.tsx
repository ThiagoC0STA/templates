import { Metadata } from "next";
import { ReactElement } from "react";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";
import BlogSection from "@/components/CreativeAgency/Blog/BlogSection";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import Header from "@/components/CreativeAgency/common/Header";
import Footer from "@/components/CreativeAgency/Footer";

// all data
import blogData from "@/constant/CreativeAgency/blog/blogData";

export const metadata: Metadata = {
  title: "Blog || Averto - Creative Digital Agency NextJS Template",
  description:
    "Stay updated with the latest insights, design trends, and development news from the Averto team. Our blog covers topics in web design, Next.js development, digital strategy, and agency best practices.",
  keywords: [
    "Averto blog",
    "NextJS blog template",
    "web design blog",
    "agency updates",
    "developer insights",
    "modern blog design",
    "NextJS articles",
    "UI/UX blog",
    "creative agency blog",
    "frontend development blog",
    "Averto template blog",
    "technology articles",
    "NextJS SEO blog",
    "responsive blog layout",
    "digital agency news",
    "design inspiration",
    "blog page template",
    "startup blog",
    "NextJS blog page",
    "developer tips and tricks",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Blog Page",
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
            subTitle="Standard"
            pageName="BLOGS STANDARD"
          />
          <BlogSection data={blogData}/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;

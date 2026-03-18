import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import BlogGridSection from "@/components/DesignAgency/Blog/BlogGridSection";
import FooterSection from "@/components/DesignAgency/FooterSection";
import Header from "@/components/DesignAgency/common/Header";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";

// all data
import blogData from "@/constant/DesignAgency/blog/BlogGridData";
import footerData from "@/constant/DesignAgency/footer";

export const metadata: Metadata = {
  title: "Blog Grid || Averto - Creative Digital Agency NextJS Template",
  description:
    "Explore a modern blog grid layout showcasing the latest articles, design trends, and development insights from Averto. Perfect for agencies and startups looking for an engaging blog format.",
  keywords: [
    "Averto blog grid",
    "NextJS blog listing",
    "blog grid layout",
    "agency blog design",
    "modern blog page",
    "responsive blog grid",
    "NextJS blog template",
    "digital agency blog",
    "frontend blog layout",
    "creative blog design",
    "startup blog grid",
    "blog post grid",
    "web development blog",
    "SEO friendly blog",
    "blog overview page",
    "NextJS blog listing page",
    "Averto template blog",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Blog Grid Page",
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
            <Breadcrumb title="BLOGS" subTitle="Grid" pageName="BLOGS GRID" />
            <BlogGridSection all={true} data={blogData} />
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

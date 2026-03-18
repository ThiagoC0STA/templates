import { ReactElement } from "react";
import type { Metadata } from "next";
import Header from "@/components/MarketingAgency/common/Header";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import AboutSection from "@/components/MarketingAgency/AboutSection";
import VideoSection from "@/components/MarketingAgency/About/VideoSection";
import BrandSection from "@/components/MarketingAgency/BrandSection";
import TeamsSection from "@/components/MarketingAgency/TeamSection";
import TextSliderSection from "@/components/MarketingAgency/TextSliderSection";
import BlogSection from "@/components/MarketingAgency/BlogSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// component data
import aboutData from "@/constant/MarketingAgency/about";
import videoData from "@/constant/MarketingAgency/About/video";
import brandData from "@/constant/MarketingAgency/brand";
import teamData from "@/constant/MarketingAgency/team";
import textSliderData from "@/constant/MarketingAgency/textSlider";
import blogData from "@/constant/MarketingAgency/blog";
import footerData from "@/constant/MarketingAgency/footer";

export const metadata: Metadata = {
  title: "About Us || Averto - Creative Digital Agency NextJS Template",
  description:
    "Explore the About Us page of Averto – a modern, high-performance agency template built with Next.js. Meet the team, learn our mission, and discover why Averto is trusted by creative professionals and businesses.",
  keywords: [
    "Averto About Us",
    "NextJS about page",
    "agency template",
    "digital agency",
    "creative team template",
    "business website template",
    "responsive NextJS template",
    "modern agency design",
    "SEO friendly template",
    "professional web agency",
    "agency team page",
    "company profile",
    "NextJS clean UI",
    "startup website",
    "web design agency",
    "agency portfolio",
    "fast NextJS website",
    "customizable template",
    "about page design",
    "Averto template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "About Page",
  },
};

const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <div className="body-marketing-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-marketing-agency">
            <Breadcrumb
              title="ABOUT"
              subTitle="Agency"
              pageName="ABOUT AGENCY"
            />
            <AboutSection data={aboutData} />
          </div>
          <VideoSection data={videoData} />
          <div className="body-marketing-agency">
            <BrandSection data={brandData} />
            <TeamsSection data={teamData} />
            <TextSliderSection data={textSliderData} />
            <BlogSection data={blogData} />
          </div>
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;

import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import AboutSection from "@/components/DesignAgency/AboutSection";
import VideoSection from "@/components/DesignAgency/About/VideoSection";
import BrandSection from "@/components/DesignAgency/BrandSection";
import TeamsSection from "@/components/DesignAgency/TeamSection";
import TextSliderSection from "@/components/DesignAgency/TextSliderSection";
import BlogSection from "@/components/DesignAgency/BlogSection";
import FooterSection from "@/components/DesignAgency/FooterSection";
import Header from "@/components/DesignAgency/common/Header";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";

// component data
import aboutData from "@/constant/DesignAgency/about";
import videoData from "@/constant/DesignAgency/About/video";
import brandData from "@/constant/DesignAgency/brand";
import teamData from "@/constant/DesignAgency/team";
import textSliderData from "@/constant/DesignAgency/text-slider";
import blogData from "@/constant/DesignAgency/blog";
import footerData from "@/constant/DesignAgency/footer";

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
      <div className="body-design-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-design-agency">
            <Breadcrumb
              title="ABOUT"
              subTitle="Agency"
              pageName="ABOUT AGENCY"
            />
            <AboutSection data={aboutData} />
          </div>
          <VideoSection data={videoData} />
          <div className="body-design-agency">
            <BrandSection data={brandData} brandSix={true} />
            <TeamsSection data={teamData} />
          <TextSliderSection data={textSliderData} />
          <BlogSection data={blogData} />
          </div>
        </main>
        <div className="body-design-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;

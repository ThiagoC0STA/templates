import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import AboutSection from "@/components/CreativeAgency/AboutSection";
import VideoSection from "@/components/CreativeAgency/About/VideoSection";
import BrandSection from "@/components/CreativeAgency/BrandSection";
import TeamsSection from "@/components/CreativeAgency/TeamSection";
import TextSliderSection from "@/components/CreativeAgency/TextSliderSection";
import BlogSection from "@/components/CreativeAgency/BlogSection";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/common/Header";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// component data
import aboutData from "@/constant/CreativeAgency/about";
import videoData from "@/constant/CreativeAgency/About/video";
import brandData from "@/constant/CreativeAgency/brands";
import teamData from "@/constant/CreativeAgency/teams";
import textSliderData from "@/constant/CreativeAgency/textSlider";
import blogData from "@/constant/CreativeAgency/blog";

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
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb title="ABOUT" subTitle="Agency" pageName="ABOUT AGENCY" />
          <AboutSection type="v2" data={aboutData} />
          <VideoSection data={videoData} />
          <BrandSection data={brandData} />
          <TeamsSection data={teamData} />
          <TextSliderSection data={textSliderData} />
          <BlogSection data={blogData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;

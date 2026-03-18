import { Metadata } from "next";
import { ReactElement } from "react";
import Header from "@/components/DigitalAgency/Header";
import AboutSection from "@/components/DigitalAgency/AboutSection";
import AwardsSection from "@/components/DigitalAgency/AwardsSection";
import BlogSection from "@/components/DigitalAgency/BlogSection";
import BrandSection from "@/components/DigitalAgency/BrandSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import HeroSection from "@/components/DigitalAgency/HeroSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ServiceSection from "@/components/DigitalAgency/ServiceSection";
import TeamsSection from "@/components/DigitalAgency/TeamsSection";
import TestimonialSection from "@/components/DigitalAgency/TestimonialSection";
import TextSliderSection from "@/components/DigitalAgency/TextSliderSection";
import WorkSection from "@/components/DigitalAgency/WorkSection";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// all data
import aboutData from "@/constant/DigitalAgency/about";
import heroData from "@/constant/DigitalAgency/hero";
import brandData from "@/constant/DigitalAgency/brand";
import processData from "@/constant/DigitalAgency/process";
import serviceData from "@/constant/DigitalAgency/service";
import workData from "@/constant/DigitalAgency/work";
import teamData from "@/constant/DigitalAgency/teams";
import textSliderData from "@/constant/DigitalAgency/textSlider";
import awardsData from "@/constant/DigitalAgency/awards";
import blogData from "@/constant/DigitalAgency/blog";
import footerData from "@/constant/DigitalAgency/footer";

export const metadata: Metadata = {
  title: "Digital Agency || Averto - Creative Digital Agency NextJS Template",
  description:
    "Averto Digital Agency template features a modern and dynamic homepage designed for digital agencies. Showcase your services, team, projects, and client success with a fast, SEO-friendly Next.js setup.",
  keywords: [
    "Averto digital agency",
    "NextJS digital agency template",
    "digital agency homepage",
    "modern digital agency website",
    "digital marketing agency",
    "responsive digital agency site",
    "SEO optimized digital agency",
    "creative digital services",
    "NextJS startup template",
    "professional digital agency",
    "agency services showcase",
    "digital projects portfolio",
    "team showcase",
    "frontend development",
    "digital marketing website",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Digital Agency Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-digital-agency">
      <Header />
      <SmoothScroll>
        <main>
          <HeroSection data={heroData} />
          <BrandSection data={brandData} />
          <AboutSection data={aboutData} />
          <ProcessSection data={processData} />
          <ServiceSection data={serviceData} />
          <WorkSection data={workData} />
          <TestimonialSection />
          <TeamsSection data={teamData} />
          <TextSliderSection data={textSliderData} />
          <AwardsSection data={awardsData} />
          <BlogSection data={blogData} />
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

import { ReactElement } from "react";
import { Metadata } from "next";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";
import AboutSection from "@/components/DesignAgency/AboutSection";
import AwardsSection from "@/components/DesignAgency/AwardsSection";
import BlogSection from "@/components/DesignAgency/BlogSection";
import BrandSection from "@/components/DesignAgency/BrandSection";
import FooterSection from "@/components/DesignAgency/FooterSection";
import HeaderSection from "@/components/DesignAgency/HeaderSection";
import HeroSection from "@/components/DesignAgency/HeroSection";
import InfoSection from "@/components/DesignAgency/InfoSection";
import ProcessSection from "@/components/DesignAgency/ProcessSection";
import ServiceSection from "@/components/DesignAgency/ServiceSection";
import TeamSection from "@/components/DesignAgency/TeamSection";
import TestimonialSection from "@/components/DesignAgency/TestimonialSection";
import WorkSection from "@/components/DesignAgency/WorkSection";

// all data 
import headerData from "@/constant/DesignAgency/header";
import  heroData  from "@/constant/DesignAgency/hero";
import brandData from "@/constant/DesignAgency/brand";
import  aboutData  from "@/constant/DesignAgency/about";
import processData  from "@/constant/DesignAgency/process";
import  serviceData  from "@/constant/DesignAgency/service";
import workData  from "@/constant/DesignAgency/work";
import testimonialData from "@/constant/DesignAgency/testimonial";
import teamData from "@/constant/DesignAgency/team";
import infoData from "@/constant/DesignAgency/info";
import awardData from "@/constant/DesignAgency/awards";
import blogData from "@/constant/DesignAgency/blog";
import footerData from "@/constant/DesignAgency/footer";

export const metadata:Metadata = {
  title: "Design Agency || Averto - Creative Digital Agency NextJS Template",
  description:
    "Averto Design Agency template offers a sleek and modern homepage layout tailored for design agencies. Highlight your portfolio, services, and creative expertise with fast performance and SEO-friendly structure.",
  keywords: [
    "Averto design agency",
    "NextJS design agency template",
    "design agency homepage",
    "modern design website",
    "creative design portfolio",
    "digital design agency",
    "responsive design agency site",
    "SEO optimized design agency",
    "NextJS startup template",
    "professional design agency",
    "design services showcase",
    "agency landing page",
    "creative project showcase",
    "frontend development",
    "design firm website",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Design Agency Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-design-agency">
      <HeaderSection data={headerData}/>
      <SmoothScroll>
        <main>
          <HeroSection data={heroData}/>
          <BrandSection data={brandData}/>
          <AboutSection data={aboutData}/>
          <ProcessSection data={processData}/>
          <ServiceSection data={serviceData}/>
          <WorkSection data={workData}/>
          <TestimonialSection data={testimonialData}/>
          <TeamSection data={teamData}/>
          <InfoSection data={infoData}/>
          <AwardsSection data={awardData}/>
          <BlogSection data={blogData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

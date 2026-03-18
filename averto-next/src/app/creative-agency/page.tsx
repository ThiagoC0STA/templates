import { ReactElement } from "react";
import type { Metadata } from "next";
import Header from "@/components/CreativeAgency/Header";
import BlogSection from "@/components/CreativeAgency/BlogSection";
import Footer from "@/components/CreativeAgency/Footer";
import Testimonial from "@/components/CreativeAgency/Testimonial";
import BrandSection from "@/components/CreativeAgency/BrandSection";
import TeamSection from "@/components/CreativeAgency/TeamSection";
import ServiceSection from "@/components/CreativeAgency/ServicesSection";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import AboutSection from "@/components/CreativeAgency/AboutSection";
import Hero from "@/components/CreativeAgency/HeroSection";
import WorkSection from "@/components/CreativeAgency/WorkSection";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// constant data
import headerData from "@/constant/CreativeAgency/header";
import heroData from "@/constant/CreativeAgency/hero";
import aboutData from '@/constant/CreativeAgency/about';
import processData from '@/constant/CreativeAgency/process';
import servicesData from "@/constant/CreativeAgency/services";
import workData from "@/constant/CreativeAgency/work";
import teamsData from "@/constant/CreativeAgency/teams";
import testimonialsData from "@/constant/CreativeAgency/brands";
import testimonialData from "@/constant/CreativeAgency/testimonial";
import  blogData  from "@/constant/CreativeAgency/blog";

export const metadata: Metadata = {
  title: "Creative Agency || Averto - Creative Digital Agency NextJS Template",
  description:
    "Welcome to Averto Creative Agency template — a stylish and modern Next.js homepage designed for creative agencies. Showcasing portfolio, services, team, and innovative projects with performance and SEO in mind.",
  keywords: [
    "Averto creative agency",
    "NextJS creative agency template",
    "creative agency homepage",
    "modern agency website",
    "portfolio showcase",
    "creative services",
    "digital agency template",
    "NextJS startup template",
    "responsive agency website",
    "SEO optimized agency site",
    "agency team page",
    "design portfolio",
    "creative project showcase",
    "frontend development",
    "agency landing page",
    "professional agency template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Creative Agency Page",
  },
};

const CreativeAgencyPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-creative-agency">
      <Header data={headerData}/>
      <SmoothScroll>
        <main>
          <Hero data={heroData}/>
          <AboutSection data={aboutData}/>
          <ProcessSection data={processData}/>
          <ServiceSection data={servicesData}/>
          <WorkSection data={workData}/>
          <TeamSection data={teamsData}/>
          <BrandSection data={testimonialsData}/>
          <Testimonial data={testimonialData}/>
          <BlogSection data={blogData}/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default CreativeAgencyPage;
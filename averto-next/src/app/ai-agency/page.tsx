import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/AiAgency/Header";
import AboutSection from "@/components/AiAgency/AboutSection";
import AboutTwoSection from "@/components/AiAgency/AboutTwoSection";
import BlogSection from "@/components/AiAgency/BlogSection";
import FooterSection from "@/components/AiAgency/FooterSection";
import HeroSection from "@/components/AiAgency/HeroSection";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import ServiceSection from "@/components/AiAgency/ServiceSection";
import TeamSection from "@/components/AiAgency/TeamSection";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import WorkSection from "@/components/AiAgency/WorkSection";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

export const metadata: Metadata = {
  title: "AI Agency || Averto - Creative Digital Agency NextJS Template",
  description:
    "Averto AI Agency Home – a futuristic Next.js template designed for AI startups, tech companies, and digital innovators. Experience cutting-edge design, blazing performance, and pixel-perfect UI optimized for AI-driven services.",
  keywords: [
    "AI agency website",
    "NextJS AI template",
    "Averto AI agency",
    "artificial intelligence startup",
    "machine learning web template",
    "AI business template",
    "NextJS for AI companies",
    "modern AI agency design",
    "responsive AI website",
    "AI services landing page",
    "creative AI agency",
    "technology company website",
    "NextJS tech template",
    "high-performance agency site",
    "AI SaaS landing page",
    "innovative business website",
    "startup agency template",
    "Averto NextJS template",
    "AI agency UI kit",
    "futuristic web design template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "AI Agency Home",
  },
};

// all data 
import heroData from "@/constant/AiAgency/hero";
import textSliderData from "@/constant/AiAgency/text-slider";
import aboutTwoData from "@/constant/AiAgency/about2";
import aboutData from "@/constant/AiAgency/about";
import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";
import blogData from "@/constant/AiAgency/blog";
import footerData from "@/constant/AiAgency/footer";


const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-ai-agency">
      <Header />
      <SmoothScroll>
        <main>
          <HeroSection data={heroData}/>
          <TextSliderSection data={textSliderData}/>
          <AboutTwoSection data={aboutTwoData}/>
          <AboutSection data={aboutData}/>
          <ServiceSection />
          <WorkSection />
          <TeamSection />
          <ProcessSection data={processData}/>
          <TestimonialSlider data={testimonialData}/>
          <BlogSection data={blogData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

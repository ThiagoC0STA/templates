import { ReactElement } from "react";
import { Metadata } from "next";

import Header from "@/components/MarketingAgency/Header";
import AboutSection from "@/components/MarketingAgency/AboutSection";
import BlogSection from "@/components/MarketingAgency/BlogSection";
import BrandSection from "@/components/MarketingAgency/BrandSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import HeroSection from "@/components/MarketingAgency/HeroSection";
import ServiceSection from "@/components/MarketingAgency/ServiceSection";
import TeamSection from "@/components/MarketingAgency/TeamSection";
import TestimonialsSection from "@/components/MarketingAgency/TestimonialSection";
import WorkSection from "@/components/MarketingAgency/WorkSection";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

export const metadata:Metadata = {
  title: "Marketing Agency || Averto - Creative Digital Agency NextJS Template",
  description:
    "Averto Marketing Agency template offers a powerful and modern homepage designed for marketing firms and agencies. Showcase your campaigns, services, team, and client success with SEO optimization and fast performance.",
  keywords: [
    "Averto marketing agency",
    "NextJS marketing template",
    "marketing agency homepage",
    "digital marketing website",
    "SEO optimized marketing site",
    "responsive marketing agency",
    "marketing campaigns showcase",
    "client testimonials",
    "professional marketing template",
    "startup marketing website",
    "marketing services",
    "agency landing page",
    "creative marketing agency",
    "performance marketing",
    "frontend development",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Marketing Agency Page",
  },
};

// all data 
import heroData from "@/constant/MarketingAgency/hero";
import aboutData from "@/constant/MarketingAgency/about";
import serviceData from "@/constant/MarketingAgency/service";
import  workData from "@/constant/MarketingAgency/work";
import testimonialData from "@/constant/MarketingAgency/testimonial";
import brandsData from "@/constant/MarketingAgency/brand";
import teamData from "@/constant/MarketingAgency/team";
import blogData from "@/constant/MarketingAgency/blog";
import footerData from "@/constant/MarketingAgency/footer";

const Home = ():ReactElement => {
  return (
    <div className="body-wrapper body-marketing-agency">
      <Header />
      <SmoothScroll>
        <main>
          <HeroSection data={heroData}/>
          <AboutSection data={aboutData}/>
          <ServiceSection data={serviceData}/>
          <WorkSection data={workData}/>
          <TestimonialsSection data={testimonialData}/>
          <BrandSection data={brandsData}/>
          <TeamSection data={teamData}/>
          <BlogSection data={blogData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

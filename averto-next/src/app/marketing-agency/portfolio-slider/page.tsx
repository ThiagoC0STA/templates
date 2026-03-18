import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import WorkSection from "@/components/MarketingAgency/WorkSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import TestimonialsSection from "@/components/MarketingAgency/TestimonialSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data 
import workData from "@/constant/MarketingAgency/work";
import testimonialData from "@/constant/MarketingAgency/testimonial";
import footerData from "@/constant/MarketingAgency/footer";

export const metadata:Metadata = {
  title: "Portfolio Slider || Averto - Creative Digital Agency NextJS Template",
  description:
    "Display your projects in an interactive and sleek slider format with the Averto Portfolio Slider template. Perfect for creative professionals who want a dynamic, responsive, and SEO-friendly presentation of their work.",
  keywords: [
    "Averto portfolio slider",
    "NextJS portfolio slider template",
    "creative portfolio slider",
    "responsive portfolio slider",
    "SEO optimized portfolio slider",
    "digital agency portfolio slider",
    "startup portfolio showcase",
    "interactive project slider",
    "professional portfolio slider",
    "modern portfolio presentation",
    "frontend developer portfolio",
    "creative work slider",
    "NextJS project slider",
    "slider based portfolio",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Slider Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <div className="body-marketing-agency">
      <Header />
      </div>
      <SmoothScroll>
        <main>
        <div className="body-marketing-agency">
          <Breadcrumb
            title="AGENCY"
            subTitle="Portfolio Slider"
            pageName="AGENCY PORTFOLIO"
          />
        </div>
          <WorkSection data={workData}/>
          
        <div className="body-marketing-agency">
          <TestimonialsSection type="v2" data={testimonialData}/>
        </div>
        </main>
        <div className="body-marketing-agency">
        <FooterSection data={footerData}/>
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;

import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import WorkSection from "@/components/DesignAgency/WorkSection";
import FooterSection from "@/components/DesignAgency/FooterSection";
import TestimonialSection from "@/components/DesignAgency/TestimonialSection";
import Header from "@/components/DesignAgency/common/Header";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";
import { ReactElement } from "react";
import { Metadata } from "next";

// all data
import workData from "@/constant/DesignAgency/work";
import testimonialData from "@/constant/DesignAgency/testimonial";
import footerData from "@/constant/DesignAgency/footer";

export const metadata: Metadata = {
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
      <div className="body-design-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-design-agency">
            <Breadcrumb
              title="AGENCY"
              subTitle="portf. Slider"
              pageName="AGENCY PORTFOLIO"
            />
            <WorkSection data={workData} />
            <TestimonialSection data={testimonialData} />
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

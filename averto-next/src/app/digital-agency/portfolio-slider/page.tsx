import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import WorkSection from "@/components/DigitalAgency/WorkSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import TestimonialSection from "@/components/DigitalAgency/TestimonialSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// all data 
import workData from "@/constant/DigitalAgency/work";
import footerData from "@/constant/DigitalAgency/footer";

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
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="AGENCY"
            subTitle="Portfolio Slider"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkSection pageInnerSlider={true} data={workData}/>
          <TestimonialSection className="page-portfolio-3" />
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

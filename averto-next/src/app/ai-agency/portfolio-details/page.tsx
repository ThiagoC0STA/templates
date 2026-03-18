import { ReactElement } from "react";
import { Metadata } from "next";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import Header from "@/components/AiAgency/common/Header";
import FooterSection from "@/components/AiAgency/FooterSection";
import PortfolioDetails from "@/components/AiAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/AiAgency/PortfolioDetails/PortfolioSliderSection";
import  portfolioSliderData from "@/constant/AiAgency/PortfolioDetails/portfolio-data";

// all data 
import portfolioDetailsData from "@/constant/AiAgency/PortfolioDetails/portfolio-details-data";
import footerData from "@/constant/AiAgency/footer";

export const metadata: Metadata = {
  title: "Portfolio Details || Averto - Creative Digital Agency NextJS Template",
  description:
    "Dive into detailed case studies and project insights with the Averto Portfolio Details template. Perfect for showcasing your creative process, technologies used, and impactful results with SEO and performance in mind.",
  keywords: [
    "Averto portfolio details",
    "NextJS portfolio details template",
    "project case study",
    "detailed portfolio page",
    "creative project insights",
    "responsive portfolio details",
    "SEO optimized project page",
    "digital agency portfolio details",
    "startup project showcase",
    "professional portfolio layout",
    "frontend developer case study",
    "technology showcase",
    "creative process display",
    "modern portfolio details page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Details Page",
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
            subTitle="Portfolio details"
            pageName="PORTFOLIO DETAILS"
          />
          <PortfolioDetails data={portfolioDetailsData}/>
          <PortfolioSliderSection data={portfolioSliderData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

import { ReactElement } from "react";
import { Metadata } from "next";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import Header from "@/components/DesignAgency/common/Header";
import FooterSection from "@/components/DesignAgency/FooterSection";
import PortfolioDetails from "@/components/DesignAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/DesignAgency/PortfolioDetails/PortfolioSliderSection";

// all data 
import portfolioDetailsData from "@/constant/DesignAgency/PortfolioDetails/portfolio-details-data";
import  portfolioSliderData from "@/constant/DesignAgency/PortfolioDetails/portfolio-data";
import footerData from "@/constant/DesignAgency/footer";

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
      <div className="body-design-agency">
      <Header />
      </div>
      <SmoothScroll>
        <main>
        <div className="body-design-agency">
          <Breadcrumb
            title="AGENCY"
            subTitle="Port. details"
            pageName="PORTFOLIO DETAILS"
          />
          <PortfolioDetails data={portfolioDetailsData}/>
          <PortfolioSliderSection data={portfolioSliderData}/>
        </div>
        </main>
        <div className="body-design-agency">
        <FooterSection data={footerData}/>
      </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;

import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/MarketingAgency/common/Header";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import PortfolioDetails from "@/components/MarketingAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/MarketingAgency/PortfolioDetails/PortfolioSliderSection";
import portfolioSliderData from "@/constant/MarketingAgency/PortfolioDetails/portfolio-data";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";
import FooterSection from "@/components/MarketingAgency/FooterSection";

// all data
import portfolioDetailsData from "@/constant/MarketingAgency/PortfolioDetails/portfolio-details-data";
import footerData from "@/constant/MarketingAgency/footer";

export const metadata: Metadata = {
  title:
    "Portfolio Details || Averto - Creative Digital Agency NextJS Template",
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
      <div className="body-marketing-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-marketing-agency">
            <Breadcrumb
              title="AGENCY"
              subTitle="Portfolio details"
              pageName="PORTFOLIO DETAILS"
            />
            <PortfolioDetails data={portfolioDetailsData} />
            <PortfolioSliderSection data={portfolioSliderData} />
          </div>
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;

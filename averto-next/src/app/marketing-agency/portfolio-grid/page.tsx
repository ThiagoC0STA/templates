import { Metadata } from "next";
import { ReactElement } from "react";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import WorkSection from "@/components/MarketingAgency/WorkTwoSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data
import workData from "@/constant/MarketingAgency/workTwo";
import footerData from "@/constant/MarketingAgency/footer";

export const metadata: Metadata = {
  title: "Portfolio Grid || Averto - Creative Digital Agency NextJS Template",
  description:
    "Showcase your projects in a clean and organized grid layout with the Averto Portfolio Grid template. Designed for creative professionals to display work with a modern, responsive, and SEO-friendly Next.js structure.",
  keywords: [
    "Averto portfolio grid",
    "NextJS portfolio grid template",
    "creative portfolio grid",
    "responsive portfolio layout",
    "SEO optimized portfolio grid",
    "digital agency portfolio grid",
    "startup portfolio showcase",
    "project gallery",
    "professional portfolio grid",
    "modern portfolio display",
    "frontend developer portfolio",
    "creative work grid",
    "NextJS project grid",
    "grid based portfolio",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Grid Page",
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
          <Breadcrumb
            title="AGENCY"
            subTitle="Portfolio Grid"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkSection pageInner={true} type={7} data={workData} />
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;

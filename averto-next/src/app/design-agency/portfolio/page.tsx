import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import WorkSection from "@/components/DesignAgency/WorkTwoSection";
import FooterSection from "@/components/DesignAgency/FooterSection";
import Header from "@/components/DesignAgency/common/Header";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";

// all data
import workData from "@/constant/DesignAgency/workTwo";
import footerData from "@/constant/DesignAgency/footer";

export const metadata: Metadata = {
  title: "Portfolio || Averto - Creative Digital Agency NextJS Template",
  description:
    "Showcase your creative work and projects with the Averto Portfolio template. Designed to highlight your skills, case studies, and achievements with a modern, responsive, and SEO-friendly Next.js layout.",
  keywords: [
    "Averto portfolio page",
    "NextJS portfolio template",
    "creative portfolio website",
    "project showcase",
    "responsive portfolio design",
    "SEO optimized portfolio",
    "digital agency portfolio",
    "startup portfolio",
    "professional portfolio layout",
    "case studies showcase",
    "frontend developer portfolio",
    "creative work display",
    "NextJS personal portfolio",
    "modern portfolio website",
    "portfolio landing page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Page",
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
              subTitle="Portfolio"
              pageName="AGENCY PORTFOLIO"
            />
            <WorkSection type={6} pageInner={true} data={workData} />
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

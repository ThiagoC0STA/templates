import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/DesignAgency/common/Header";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import TeamSection from "@/components/DesignAgency/TeamSection";
import ProcessSection from "@/components/DesignAgency/ProcessSection";
import BrandSection from "@/components/DesignAgency/BrandSection";
import SmoothScroll from "@/components/DesignAgency/Animation/SmoothScroll";
import FooterSection from "@/components/DesignAgency/FooterSection";

// all data
import teamData from "@/constant/DesignAgency/team";
import brandData from "@/constant/DesignAgency/brand";
import processData from "@/constant/DesignAgency/process";
import footerData from "@/constant/DesignAgency/footer";

export const metadata: Metadata = {
  title: "Team || Averto - Creative Digital Agency NextJS Template",
  description:
    "Meet the talented professionals behind your agency with the Averto Team template. Perfect for showcasing team members, their roles, and expertise in a modern, responsive, and SEO-friendly layout.",
  keywords: [
    "Averto team page",
    "NextJS team template",
    "agency team showcase",
    "team member profiles",
    "responsive team layout",
    "SEO optimized team page",
    "digital agency team",
    "startup team introduction",
    "professional team presentation",
    "team expertise",
    "business team template",
    "modern team page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Team Page",
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
              subTitle="Members"
              pageName="AGENCY MEMBERS"
            />
            <TeamSection all={true} data={teamData} />
            <ProcessSection type="v2" data={processData} />
            <BrandSection type="v2" data={brandData}/>
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

import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import TeamSection from "@/components/MarketingAgency/TeamSection";
import ProcessSection from "@/components/MarketingAgency/ProcessSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data
import teamData from "@/constant/MarketingAgency/team";
import processData from "@/constant/MarketingAgency/process";
import footerData from "@/constant/MarketingAgency/footer";

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
      <div className="body-marketing-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-marketing-agency">
            <Breadcrumb
              title="AGENCY"
              subTitle="Members"
              pageName="AGENCY MEMBERS"
            />
            <TeamSection all={true} data={teamData} />
            <ProcessSection data={processData} />
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

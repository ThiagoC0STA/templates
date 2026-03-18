import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import TeamSection from "@/components/DigitalAgency/TeamsSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";


// all data 
import teamData from "@/constant/DigitalAgency/teams";
import processData from "@/constant/DigitalAgency/process";
import footerData from "@/constant/DigitalAgency/footer";


export const metadata:Metadata = {
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
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="AGENCY"
            subTitle="Members"
            pageName="AGENCY MEMBERS"
          />
          <TeamSection all={true} data={teamData}/>
          <ProcessSection processSix={true} data={processData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

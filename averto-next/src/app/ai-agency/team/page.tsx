import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import TeamSection from "@/components/AiAgency/TeamTwoSection";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import FooterSection from "@/components/AiAgency/FooterSection";
import Header from "@/components/AiAgency/common/Header";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";


// all data 
import teamData from "@/constant/AiAgency/teamTwo";
import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";
import footerData from "@/constant/AiAgency/footer";



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
          <ProcessSection data={processData}/>
          <TestimonialSlider type="v2" data={testimonialData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;

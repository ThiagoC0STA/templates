import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import ServiceSection from "@/components/AiAgency/ServiceSection";
import ChooseUsSection from "@/components/AiAgency/common/ChooseUsSection";
import TestimonialSection from "@/components/AiAgency/TestimonialSection";
import FooterSection from "@/components/AiAgency/FooterSection";
import Header from "@/components/AiAgency/common/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";
import chooseUsData from "@/constant/AiAgency/common/choose-us";
import footerData from "@/constant/AiAgency/footer";

export const metadata: Metadata = {
  title: "Services || Averto - Creative Digital Agency NextJS Template",
  description:
    "Showcase your agency’s wide range of services with the Averto Services template. Designed to present offerings clearly and attractively, optimized for performance and SEO in Next.js.",
  keywords: [
    "Averto services page",
    "NextJS services template",
    "agency services overview",
    "service offerings",
    "responsive services layout",
    "SEO optimized services page",
    "digital agency services",
    "startup services showcase",
    "professional service presentation",
    "service features",
    "business services template",
    "modern services page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Services Page",
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
            subTitle="Services"
            pageName="AGENCY SERVICES"
          />
          <ServiceSection />
          <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
          <ProcessSection data={processData}/>
          <TestimonialSection type="v2" data={testimonialData}/>
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default Home;

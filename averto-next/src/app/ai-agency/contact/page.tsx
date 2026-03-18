import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/AiAgency/common/ChooseUsSection";
import ContactMetaSection from "@/components/AiAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/AiAgency/Contact/ContactSection";
import Header from "@/components/AiAgency/common/Header";
import FooterSection from "@/components/AiAgency/FooterSection";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data
import footerData from "@/constant/AiAgency/footer";
import contactData from "@/constant/AiAgency/Contact/contact";
import chooseUsData from "@/constant/AiAgency/common/choose-us";

export const metadata: Metadata = {
  title: "Contact || Averto - Creative Digital Agency NextJS Template",
  description:
    "Get in touch with the Averto team. Whether you have questions, project inquiries, or want to collaborate, our contact page makes it easy to connect.",
  keywords: [
    "Averto contact page",
    "NextJS contact template",
    "agency contact",
    "business contact page",
    "get in touch",
    "contact form NextJS",
    "digital agency contact",
    "startup contact page",
    "professional contact page",
    "customer support",
    "contact details",
    "business inquiries",
    "NextJS contact form",
    "responsive contact page",
    "contact us",
    "contact page template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Contact Page",
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
            subTitle="Contact"
            pageName="AGENCY CONTACT"
          />
          <ContactMetaSection />
          <ContactSection data={contactData} />
          <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default Home;

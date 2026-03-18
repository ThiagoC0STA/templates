import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/CreativeAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/CreativeAgency/common/ChooseUsSection";
import ContactMetaSection from "@/components/CreativeAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/CreativeAgency/Contact/ContactSection";
import Header from "@/components/CreativeAgency/common/Header";
import Footer from "@/components/CreativeAgency/Footer";
import SmoothScroll from "@/components/CreativeAgency/Animation/SmoothScroll";

// all data 
import contactData from "@/constant/CreativeAgency/Contact/contact";
import chooseUsData from "@/constant/CreativeAgency/common/choose-us";

export const metadata:Metadata = {
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
          <ContactSection data={contactData}/>
          <ChooseUsSection chooseUSTwo={true} data={chooseUsData}/>
        </main>
        <Footer/>

      </SmoothScroll>
    </div>
  );
};
export default Home;

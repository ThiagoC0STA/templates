import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FaqSection from "@/components/AiAgency/Faq/FaqSection";
import ContactSection from "@/components/AiAgency/Contact/ContactSection";
import FooterSection from "@/components/AiAgency/FooterSection";
import Header from "@/components/AiAgency/common/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data
import footerData from "@/constant/AiAgency/footer";
import contactData from "@/constant/AiAgency/Contact/contact";
import faqData from "@/constant/AiAgency/faq/faq-data";

export const metadata: Metadata = {
  title: "FAQ || Averto - Creative Digital Agency NextJS Template",
  description:
    "Find answers to frequently asked questions about Averto, our Next.js templates, and services. Get quick support and clear information to help you make the most of our agency solutions.",
  keywords: [
    "Averto FAQ page",
    "NextJS FAQ template",
    "agency frequently asked questions",
    "customer support FAQ",
    "digital agency FAQ",
    "startup FAQ page",
    "common questions",
    "template support",
    "NextJS support page",
    "responsive FAQ design",
    "professional FAQ layout",
    "help and support",
    "template information",
    "client questions",
    "FAQ page design",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "FAQ Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb title="AGENCY" subTitle="FAQ’s" pageName="AGENCY FAQ’s" />
          <FaqSection data={faqData} />
          <ContactSection data={contactData} />
          <FaqSection type={2} imageSrc={2} data={faqData} />
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default Home;

export interface IServiceTab {
  id: string;
  title: string;
  number: string;
  icon: string;
  desc: string;
  features: string[];
};

export interface ISlider {
  id: number;
  text: string;
  link: string;
};

export interface ServiceData {
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  navTabs: IServiceTab[];
  sliderItems: ISlider[];
};
 
 const serviceData:ServiceData = {
  subtitle: "Our Unique Services",
  buttonText: "Our Services",
  buttonLink: "/marketing-agency/services",
  navTabs: [
    {
      id: "home",
      title: "Marketing Campaigns",
      number: "/01",
      icon: "/assets/imgs/icon/icon-10.webp",
      desc: "Our tailored digital marketing campaigns utilize data driven strategies to increase brand visibility, engagement.",
      features: [
        "Data-Driven Strategy",
        "Multi-Platform Approach",
        "Targeted Audience Segmentation",
        "Conversion Rate Optimization (CRO)",
      ],
    },
    {
      id: "profile",
      title: "Content Creation",
      number: "/02",
      icon: "/assets/imgs/icon/icon-28.webp",
      desc: "At Averto, we specialize in delivering high-quality, engage, and purpose-driven content tailored to your brand’s needs.",
      features: [
        "Social Media Content",
        "Diverse Content Formats",
        "Engaging and Informative Content",
        "Enhances Audience Engagement",
      ],
    },
    {
      id: "contact",
      title: "Email Marketing",
      number: "/03",
      icon: "/assets/imgs/icon/icon-29.webp",
      desc: "Email marketing is a powerful digital marketing strategy that involves sending targeted messages directly to a group of people through email.",
      features: [
        "Promotional Emails",
        "B2B Email Marketing",
        "Rich Media, Broadcast Emails",
        "Transactional, Event-Driven Emails",
      ],
    },
    {
      id: "disabled",
      title: "SEO & SEM Optimization",
      number: "/04",
      icon: "/assets/imgs/icon/icon-30.webp",
      desc: "SEO (Search Engine Optimization) and SEM (Search Engine Marketing) are two pillars of digital marketing, and both play a crucial role in driving traffic to websites",
      features: [
        "On-Page, Off-Page SEO",
        "SEO Audits and Reporting",
        "Paid Search Advertising",
        "SEM Analytics and Reporting",
      ],
    },
    {
      id: "five",
      title: "Social Media Marketing",
      number: "/05",
      icon: "/assets/imgs/icon/icon-31.webp",
      desc: "Social Media Marketing (SMM) encompasses a range of services designed to enhance a brand’s presence, engage with audiences, and drive business growth",
      features: [
        "Influencer Marketing",
        "Social Media Strategy",
        "Social Media Advertising",
        "Content Creation & Management",
      ],
    },
  ],
  sliderItems: [
    {
      id: 1,
      text: "GET OUR SERVICES",
      link: "/marketing-agency/contact",
    },
    {
      id: 2,
      text: "EXPERIENCE SUCCESS WITH US",
      link: "/marketing-agency/contact",
    },
    {
      id: 3,
      text: "BOOST YOUR BRAND WITH US",
      link: "/marketing-agency/contact",
    },
    {
      id: 4,
      text: "LET'S GROW TOGETHER",
      link: "/marketing-agency/contact",
    },
  ],
};

export default serviceData;
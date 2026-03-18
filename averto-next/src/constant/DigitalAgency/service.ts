export interface IService {
  id: number;
  title: string;
  number: string;
  image: string;
  description: string;
  detailsLink: string;
  items: string[];
  itemLink: string;
}

export interface ServiceData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  services: IService[];
}
const serviceData = {
    sectionSubtitle: "Our Services",
    sectionTitle: "What we offer to you",
    viewAllText: "See All Services",
    viewAllLink: "/digital-agency/services",
    services: [
      {
        id: 1,
        title: "Design",
        number: "(01)",
        image: "/assets/imgs/shape/shape-6.webp",
        description:
          "We offer you a comprehensive range of digital marketing services designed to help your business thrive in the digital landscape.",
        detailsLink: "/digital-agency/contact",
        items: [
          "1. Graphic Design",
          "2. Branding and Identity",
          "3. Web and Digital Design",
        ],
        itemLink: "/digital-agency/service-details",
      },
      {
        id: 2,
        title: "Development",
        number: "(02)",
        image: "/assets/imgs/shape/shape-7.webp",
        description:
          "We offer you a comprehensive range of digital marketing services designed to help your business thrive in the digital landscape.",
        detailsLink: "/digital-agency/contact",
        items: [
          "1. E-commerce Development",
          "2. Custom Website Development",
          "3. Responsive Web Development",
        ],
        itemLink: "/digital-agency/service-details",
      },
      {
        id: 3,
        title: "Marketing",
        number: "(03)",
        image: "/assets/imgs/shape/shape-8.webp",
        description:
          "We offer you a comprehensive range of digital marketing services designed to help your business thrive in the digital landscape.",
        detailsLink: "/digital-agency/contact",
        items: [
          "1. Technical SEO",
          "2. On-page optimization",
          "3. SEO audits and analysis",
        ],
        itemLink: "/digital-agency/service-details",
      },
    ],
  };
  
  export default serviceData;
  
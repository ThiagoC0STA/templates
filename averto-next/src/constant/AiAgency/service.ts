export interface ServiceSectionData {
  subtitle: string;
  title: string;
  exploreLink: string;
}

export interface Service {
  id: string;
  title: string;
  projectsAvailable: number;
  projectsDone: number;
  image: string;
  description: string;
  detailLink: string;
}

export const serviceSectionData: ServiceSectionData = {
  subtitle: "Our Services",
  title: "Our Best AI Solutions",
  exploreLink: "/ai-agency/services",
};

export const servicesData: Service[] = [
  {
    id: "data-analytics",
    title: "AI-Powered Data Analytics",
    projectsAvailable: 34,
    projectsDone: 20,
    image: "/assets/imgs/gallery/image-17.webp",
    description:
      "Our team of AI experts, data scientists, and creative technologists work collaboratively to develop customized AI models that solve complex challenges, streamline operations, and enhance user experiences.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "chatbots",
    title: "AI Chatbots & Assistants",
    projectsAvailable: 41,
    projectsDone: 28,
    image: "/assets/imgs/gallery/image-47.webp",
    description:
      "Artificial Intelligence (AI) chatbots and virtual assistants have now widely revolutionized how businesses interact with customers and streamline operations.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "predictive-modeling",
    title: "Predictive AI Modeling",
    projectsAvailable: 28,
    projectsDone: 18,
    image: "/assets/imgs/gallery/image-46.webp",
    description:
      "Predictive AI modeling leverages advanced algorithms and machine learning techniques to analyze historical data, identify patterns, and forecast future outcomes.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "ux-ui",
    title: "AI-Enhanced UX/UI Design",
    projectsAvailable: 69,
    projectsDone: 39,
    image: "/assets/imgs/gallery/image-45.webp",
    description:
      "AI is transforming the field of UX/UI design, enabling designers to create user interfaces and experiences that are not only visually appealing but also highly intuitive and personalized.",
    detailLink: "/ai-agency/service-details",
  },
];

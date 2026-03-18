export interface IProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessData {
  sectionSubtitle: string;
  sectionTitle: string;
  ctaText: string;
  ctaLink: string;
  steps: IProcessStep[];
}

const processData:ProcessData = {
    sectionSubtitle: "Our Strategy",
    sectionTitle: "Our work process",
    ctaText: "Contact Us",
    ctaLink: "/digital-agency/contact",
    steps: [
      {
        id: 1,
        number: "01",
        title: "Discovery & Research",
        description:
          "We start by understanding your business goals, target market, and competitors. We create a customized roadmap",
        image: "/assets/imgs/icon/icon-1.webp",
      },
      {
        id: 2,
        number: "02",
        title: "Design & Development",
        description:
          "Our creative team brings your brand to life with innovative design concepts. We bring the designs to life with development",
        image: "/assets/imgs/icon/icon-2.webp",
      },
      {
        id: 3,
        number: "03",
        title: "Launch & Support",
        description:
          "We continue to provide supports, monitor performance, & make necessary change to ensure ongoing success",
        image: "/assets/imgs/icon/icon-3.webp",
      },
    ],
  };
  
  export default processData;
  
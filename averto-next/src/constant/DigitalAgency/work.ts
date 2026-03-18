
export interface IProject {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link: string;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: IProject[];
}

const workData:WorkData = {
    sectionSubtitle: "Our Portfolio",
    sectionTitle: "Selected works",
    viewAllText: "See All Works",
    viewAllLink: "/digital-agency/portfolio",
    projects: [
      {
        id: 1,
        title: "Brand identity overhaul for Luxe Co.",
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/project/project-1.webp",
        link: "/digital-agency/portfolio-details",
      },
      {
        id: 2,
        title: "E-Commerce platform design for shopy",
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/project/project-2.webp",
        link: "/digital-agency/portfolio-details",
      },
      {
        id: 3,
        title: "Mobile app design for FitPro agency",
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/project/project-3.webp",
        link: "/digital-agency/portfolio-details",
      },
      {
        id: 4,
        title: "Digital Ad campaign for FlexWear",
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/project/project-4.webp",
        link: "/digital-agency/portfolio-details",
      },
    ],
  };
  
  export default workData;
  
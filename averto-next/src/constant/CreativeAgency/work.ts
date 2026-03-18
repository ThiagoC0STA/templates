export interface Project {
  tag: string;
  title: string;
  year: string;
  category: string;
  image: string;
  link: string;
}

export interface WorkData {
  sectionTitle: string;
  projects: Project[];
}
const workData: WorkData = {
  sectionTitle: "Featured Work",
  projects: [
    {
      tag: "Voyage Collective",
      title: "Building Connections through Campaign",
      year: "2020",
      category: "BRANDING DESIGN // 3D MOTION",
      image: "/assets/imgs/project/project-5.webp",
      link: "/creative-agency/portfolio-details",
    },
    {
      tag: "LUMERA STUDIOS",
      title: "Shaping the bold future",
      year: "2022",
      category: "BRANDING DESIGN // 3D MOTION",
      image: "/assets/imgs/project/project-23.webp",
      link: "/creative-agency/portfolio-details",
    },
    {
      tag: "VERVE DIGITAL",
      title: "Crafting limitless ideas",
      year: "2023",
      category: "UI UX DESIGN // WEB DESIGN",
      image: "/assets/imgs/project/project-24.webp",
      link: "/creative-agency/portfolio-details",
    },
    {
      tag: "LUMERA STUDIOS",
      title: "Alma Brava Haven Rebrand",
      year: "2024",
      category: "PRODUCT DESIGN // BRANDING",
      image: "/assets/imgs/project/project-25.webp",
      link: "/creative-agency/portfolio-details",
    },
    {
      tag: "CLARITY VENTURES",
      title: "Harmony Website Design",
      year: "2025",
      category: "WEB DESIGN // DEVELOPMENT",
      image: "/assets/imgs/project/project-6.webp",
      link: "/creative-agency/portfolio-details",
    },
  ],
};

export default workData;

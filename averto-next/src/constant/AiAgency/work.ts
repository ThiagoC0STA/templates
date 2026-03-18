export interface WorkSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface PortfolioItem {
  title: string;
  tags: string[];
  image: string;
  link: string;
}

export const workSectionContent: WorkSectionContent = {
  subtitle: "OUR PORTFOLIO",
  title: "Portfolio of AI Excellence",
  completedProjects: "150+",
  projectsText: "Completed Projects",
  exploreLink: "/portfolio",
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "NexGen Chatbot",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-7.webp",
    link: "/ai-agency/portfolio-details",
  },
  {
    title: "Cognitech Creations",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-20.webp",
    link: "/ai-agency/portfolio-details",
  },
  {
    title: "Synthesized Solutions",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-21.webp",
    link: "/ai-agency/portfolio-details",
  },
  {
    title: "NovaMind Studio",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-22.webp",
    link: "/ai-agency/portfolio-details",
  },
  {
    title: "NexGen Chatbot",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-7.webp",
    link: "/ai-agency/portfolio-details",
  },
  {
    title: "Cognitech Creations",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-20.webp",
    link: "/ai-agency/portfolio-details",
  },
  {
    title: "Synthesized Solutions",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-21.webp",
    link: "/ai-agency/portfolio-details",
  },
  {
    title: "NovaMind Studio",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-22.webp",
    link: "/ai-agency/portfolio-details",
  },
];
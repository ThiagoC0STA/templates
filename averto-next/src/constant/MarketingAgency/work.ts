export interface IWorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
}
export interface WorkData {
  subtitle: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  works: IWorkItem[];
}

export const workData: WorkData = {

  subtitle: "Our Portfolio",
  title: "Selected recent works",
  buttonText: "Our Portfolio",
  buttonLink: "/marketing-agency/portfolio",
  works: [
    {
      id: 1,
      title: "Revitalize",
      description: "The Wellness Brand Makeover",
      image: "/assets/imgs/project/project-8.webp",
      link: "/marketing-agency/portfolio-details",
      tag: "Campaign",
    },
    {
      id: 2,
      title: "Revitalize",
      description: "The Wellness Brand Makeover",
      image: "/assets/imgs/project/project-9.webp",
      link: "/marketing-agency/portfolio-details",
      tag: "Campaign",
    },
    {
      id: 3,
      title: "Revitalize",
      description: "The Wellness Brand Makeover",
      image: "/assets/imgs/project/project-10.webp",
      link: "/marketing-agency/portfolio-details",
      tag: "Campaign",
    },
    {
      id: 4,
      title: "Revitalize",
      description: "The Wellness Brand Makeover",
      image: "/assets/imgs/project/project-11.webp",
      link: "/marketing-agency/portfolio-details",
      tag: "Campaign",
    },
    {
      id: 5,
      title: "Revitalize",
      description: "The Wellness Brand Makeover",
      image: "/assets/imgs/project/project-19.webp",
      link: "/marketing-agency/portfolio-details",
      tag: "Campaign",
    },
  ],
};
export default workData;
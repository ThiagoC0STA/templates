export interface IService {
  id: number;
  title: string;
  number: string;
  link: string;
  shapeImage: string;
  thumb: string;
  thumb2: string;
  description: string;
}

export interface ServiceData {
  subtitle: string;
  title: string;
  services: IService[];
}
const serviceData: ServiceData = {
  subtitle: "OUR SERVICES",
  title: "Covering the whole spectrum",
  services: [
    {
      id:1,
      title: "UI/UX Design",
      number: "//001",
      link: "/design-agency/service-details",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/gallery/image-32.webp",
      thumb2: "/assets/imgs/gallery/image-33.webp",
      description:
        "Lectus aliquam tincidunt netus sit nunc orci placerat gravida fusce sed amet",
    },
    {
      id:2,
      title: "Motion Design",
      number: "//002",
      link: "/design-agency/service-details",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/gallery/image-37.webp",
      thumb2: "/assets/imgs/gallery/image-38.webp",
      description:
        "Lectus aliquam tincidunt netus sit nunc orci placerat gravida fusce sed amet",
    },
    {
      id:3,
      title: "App Design",
      number: "//003",
      link: "/design-agency/service-details",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/gallery/image-39.webp",
      thumb2: "/assets/imgs/gallery/image-40.webp",
      description:
        "Lectus aliquam tincidunt netus sit nunc orci placerat gravida fusce sed amet",
    },
    {
      id:4,
      title: "Branding Design",
      number: "//004",
      link: "/design-agency/service-details",
      shapeImage: "/assets/imgs/shape/shape-40.webp",
      thumb: "/assets/imgs/gallery/image-41.webp",
      thumb2: "/assets/imgs/gallery/image-42.webp",
      description:
        "Lectus aliquam tincidunt netus sit nunc orci placerat gravida fusce sed amet",
    },
  ],
};
export default serviceData;


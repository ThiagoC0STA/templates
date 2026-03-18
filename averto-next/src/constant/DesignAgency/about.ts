export interface IFeatures {
  icon: string;
  text: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  features: IFeatures[];
}
const aboutData: AboutData = {
  subtitle: "OUR COMPANY",
  title: "We believe in the power of creativity to transform brands.",
  description:
    "Through bold design, captivating visuals, and strategic thinking, we bring these stories to life.",
  image: "/assets/imgs/gallery/image-10.webp",
  link: "/design-agency/about",
  buttonText: "Know More",
  features: [
    {
      icon: "/assets/imgs/icon/icon-8.webp",
      text: "Transform idea into powerful shape",
    },
    {
      icon: "/assets/imgs/icon/icon-9.webp",
      text: "Creativity fuels that everything we do",
    },
  ],
};
export default aboutData;

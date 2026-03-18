
export interface IStatItem {
  number: number;
  label: string;
}

export interface InfoData {
  shapeImage1: string;
  shapeImage2: string;
  subtitle: string;
  title: string;
  description: string;
  contactLink: string;
  stats: IStatItem[];
}
const infoData:InfoData = {
  shapeImage1: "/assets/imgs/shape/shape-15.webp",
  shapeImage2: "/assets/imgs/shape/shape-53.webp",
  subtitle: "OUR EXPERIENCE",
  title: "In numeric way",
  description:
    "Always striving to bring cutting-edge ideas to life, from the initial concept phase to the final launch.",
  contactLink: "/design-agency/contact",
  stats: [
    { number: 47, label: "Trusted clients" },
    { number: 75, label: "Total projects" },
    { number: 24, label: "Designers" },
    { number: 33, label: "Developers" },
  ],
};

export default infoData;

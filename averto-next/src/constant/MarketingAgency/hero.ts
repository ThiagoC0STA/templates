export interface ISocialLinks {
  socialLinks: {
    href: string;
    icon: string;
    active?: boolean;
  }[];
}
export interface IHeroData extends ISocialLinks {
  subtitle: string;
  titleParts: {
    text: string;
    highLight: boolean;
  }[];
  description: string;
  buttonLink: string;
  buttonText: string;
  backgroundShapes: string[];
}
const heroData: IHeroData = {
  socialLinks: [
    { href: "#", icon: "fa-brands fa-instagram" },
    { href: "#", icon: "fa-brands fa-behance", active: true },
    { href: "#", icon: "fa-brands fa-twitter" },
  ],
  subtitle: "Our strategies that drive",
  titleParts: [
    { text: "Impact and ", highLight: false },
    { text: "Growth", highLight: true },
  ],
  description: "Marketing Digital Agency since 1987",
  buttonLink: "/marketing-agency/services",
  buttonText: "Explore Services",
  backgroundShapes: [
    "/assets/imgs/shape/shape-27.webp",
    "/assets/imgs/shape/shape-28.webp",
    "/assets/imgs/shape/shape-31.webp",
    "/assets/imgs/shape/shape-54.webp",
  ],
};

export default heroData;

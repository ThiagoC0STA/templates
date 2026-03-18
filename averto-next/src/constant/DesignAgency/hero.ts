export interface SocialLink {
  href: string;
  image: string;
  activeStatus: boolean;
}

export interface HeroData {
  titleChange: string[];
  marqueeText: string;
  description: string;
  socials: SocialLink[];
  circleTextImg: string;
  circleIconImg: string;
  mainImage: string;
  buttonLink: string;
}

 
 const heroData:HeroData = {
  titleChange: ["STUDIO", "DESIGN"],
  marqueeText: "CREATIVE DESIGN AGENCY",
  description:
    "From concept to execution beautiful design has the power to captivate audiences.",
  socials: [
    { href: "#", image: "/assets/imgs/icon/icon-5.webp", activeStatus: false },
    { href: "#", image: "/assets/imgs/icon/icon-6.webp", activeStatus: true },
    { href: "#", image: "/assets/imgs/icon/icon-7.webp", activeStatus: false },
  ],
  circleTextImg: "/assets/imgs/shape/shape-12.webp",
  circleIconImg: "/assets/imgs/shape/shape-13.webp",
  mainImage: "/assets/imgs/gallery/image-9.webp",
  buttonLink: "/design-agency/about",
};

export default heroData;

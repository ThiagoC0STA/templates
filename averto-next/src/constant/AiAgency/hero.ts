export interface IBrand {
  image: string;
}

export interface HeroData {
  bgImage: string;
  shape1: string;
  shape2: string;
  titleSpanOne: string;
  titleText: string;
  titleSpanTwo: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  brandTitle: string;
  brands: IBrand[];
}

const heroData: HeroData = {
    bgImage: "/assets/imgs/shape/shape-22.webp",
    shape1: "/assets/imgs/shape/shape-20.webp",
    shape2: "/assets/imgs/shape/shape-21.webp",
    titleSpanOne: "Innovating",
    titleText: "the Future of AI with",
    titleSpanTwo: "Averto",
    subtitle: "Focusing on how Averto AI is pushing boundaries in design and innovation",
    primaryBtnText: "Get Started",
    primaryBtnLink: "/ai-agency/contact",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/ai-agency/contact",
    brandTitle: "300+ Trusted Clients Over Worldwide",
    brands: [
      { image: "/assets/imgs/brand/brand-10.webp" },
      { image: "/assets/imgs/brand/brand-11.webp" },
      { image: "/assets/imgs/brand/brand-12.webp" },
      { image: "/assets/imgs/brand/brand-13.webp" },
      { image: "/assets/imgs/brand/brand-14.webp" },
      { image: "/assets/imgs/brand/brand-10.webp" },
      { image: "/assets/imgs/brand/brand-11.webp" },
      { image: "/assets/imgs/brand/brand-12.webp" },
      { image: "/assets/imgs/brand/brand-13.webp" },
      { image: "/assets/imgs/brand/brand-14.webp" },
    ],
  };  
  
  export default heroData;
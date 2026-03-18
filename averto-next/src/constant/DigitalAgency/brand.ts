export interface IBrand {
  img: string;
}

export interface BrandData {
  title: string;
  counter: {
    value: number;
    suffix: string;
  };
  brands: IBrand[];
}

const brandData: BrandData = {
  title: "Trusted by Leading Brands",
  counter: {
    value: 1.2,
    suffix: "k",
  },
  brands: [
    { img: "/assets/imgs/brand/brand-1.webp" },
    { img: "/assets/imgs/brand/brand-2.webp" },
    { img: "/assets/imgs/brand/brand-3.webp" },
    { img: "/assets/imgs/brand/brand-1.webp" },
    { img: "/assets/imgs/brand/brand-2.webp" },
    { img: "/assets/imgs/brand/brand-3.webp" },
    { img: "/assets/imgs/brand/brand-1.webp" },
    { img: "/assets/imgs/brand/brand-2.webp" },
    { img: "/assets/imgs/brand/brand-3.webp" },
    { img: "/assets/imgs/brand/brand-1.webp" },
    { img: "/assets/imgs/brand/brand-2.webp" },
    { img: "/assets/imgs/brand/brand-3.webp" },
  ],
};

export default brandData;

export interface Brand {
  id: number;
  image: string;
}

export interface BrandsData {
  title: string;
  brands: Brand[];
}


const brandsData:BrandsData = {
    title: "300+ Trusted Clients Over Worldwide",
    brands: [
      { id: 1, image: "/assets/imgs/brand/brand-15.webp" },
      { id: 2, image: "/assets/imgs/brand/brand-16.webp" },
      { id: 3, image: "/assets/imgs/brand/brand-17.webp" },
      { id: 4, image: "/assets/imgs/brand/brand-18.webp" },
      { id: 5, image: "/assets/imgs/brand/brand-19.webp" },
      { id: 6, image: "/assets/imgs/brand/brand-15.webp" },
      { id: 7, image: "/assets/imgs/brand/brand-16.webp" },
      { id: 8, image: "/assets/imgs/brand/brand-17.webp" },
      { id: 9, image: "/assets/imgs/brand/brand-18.webp" },
      { id: 10, image: "/assets/imgs/brand/brand-19.webp" },
    ],
  };
  
  export default brandsData;
  
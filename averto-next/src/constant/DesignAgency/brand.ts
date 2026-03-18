export interface Brand {
  image: string;
}

export interface BrandData {
  title: string;
  brands: Brand[];
}


const brandData:BrandData = {
    title: '300+ Trusted Partner All Over The World',
    brands: [
      { image: '/assets/imgs/brand/brand-4.webp' },
      { image: '/assets/imgs/brand/brand-5.webp' },
      { image: '/assets/imgs/brand/brand-6.webp' },
      { image: '/assets/imgs/brand/brand-7.webp' },
      { image: '/assets/imgs/brand/brand-4.webp' },
      { image: '/assets/imgs/brand/brand-5.webp' },
      { image: '/assets/imgs/brand/brand-6.webp' },
      { image: '/assets/imgs/brand/brand-7.webp' },
      { image: '/assets/imgs/brand/brand-4.webp' },
      { image: '/assets/imgs/brand/brand-5.webp' },
      { image: '/assets/imgs/brand/brand-6.webp' },
      { image: '/assets/imgs/brand/brand-7.webp' },
      { image: '/assets/imgs/brand/brand-4.webp' },
      { image: '/assets/imgs/brand/brand-5.webp' },
      { image: '/assets/imgs/brand/brand-6.webp' },
      { image: '/assets/imgs/brand/brand-7.webp' },
    ],
  };
  export default brandData;
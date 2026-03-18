export interface IButtons {
  href: string;
  style: string;
  icon?: string;
  label?: string;
}

export interface IGallery {
  src: string;
  alt: string;
}

export interface IServiceData {
  subtitle: string;
  title: string;
  description: string;
  buttons: IButtons[];
  services: string[];
  gallery: IGallery[];
}

const serviceData: IServiceData = {
  subtitle: "Our Services",
  title: "Overview of Web design and improvements",
  description:
    "Averto, a digital agency crafted by a dedicated team of creatives champions the essence of simplicity and elegance.",
  buttons: [
    {
      href: "/ai-agency/contact",
      style: "t-btn t-btn-circle",
      icon: "fa-solid fa-arrow-right",
    },
    {
      href: "/ai-agency/contact",
      style: "t-btn t-btn-primary",
      label: "Get Started",
    },
    {
      href: "/ai-agency/contact",
      style: "t-btn t-btn-circle",
      icon: "fa-solid fa-arrow-right",
    },
  ],
  services: [
    "UI/UX Design",
    "Branding",
    "Content Production",
    "User Interface Design",
    "Modern Animation",
    "Brand Identity",
    "User Interface",
    "User Experience",
    "Responsive Design",
  ],
  gallery: [
    {
      src: "/assets/imgs/gallery/image-52.webp",
      alt: "Gallery Image 1",
    },
    {
      src: "/assets/imgs/gallery/image-53.webp",
      alt: "Gallery Image 2",
    },
  ],
};

export default serviceData;

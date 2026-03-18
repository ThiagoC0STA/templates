
export interface IFooterLink {
  name: string;
  href: string;
}

export interface FooterData {
  backgroundImage: string;
  logo: string;
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
  };
  companyLinks: IFooterLink[];
  solutionsLinks: IFooterLink[];
  instagramImages: string[];
  copyright: {
    year: number | string;
    text: string;
    link: string;
  };
  socialLinks: IFooterLink[];
}

const footerData: FooterData = {
  newsletter: {
    title: "Subscribe our newsletter",
    subtitle: "Join us today, get updated everyday",
    placeholder: "Enter your email...",
    buttonText: "Subscribe",
  },
  companyLinks: [
    { name: "About Us", href: "#" },
    { name: "Our Blogs", href: "#" },
    { name: "Our Works", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  solutionsLinks: [
    { name: "Our Services", href: "#" },
    { name: "Design", href: "#" },
    { name: "Development", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Digital SEO", href: "#" },
  ],
  instagramImages: [
    "/assets/imgs/gallery/image-4.webp",
    "/assets/imgs/gallery/image-5.webp",
    "/assets/imgs/gallery/image-6.webp",
    "/assets/imgs/gallery/image-7.webp",
  ],
  backgroundImage: "/assets/imgs/gallery/image-8.webp",
  logo: "/assets/imgs/logo/logo-light.png",
  socialLinks: [
    { name: "FB", href: "#" },
    { name: "LN", href: "#" },
    { name: "IN", href: "#" },
    { name: "BE", href: "#" },
  ],
  copyright: {
    year: 2025,
    text: "Pixavation",
    link: "https://themeforest.net/user/pixavation",
  },
};

export default footerData;

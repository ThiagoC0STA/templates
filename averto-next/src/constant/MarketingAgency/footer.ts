export interface IFooterCTA {
  subtitle: string;
  title: string;
  url: string;
  buttonText: string;
}

export interface IFooterLogo {
  src: string;
  url: string;
}

export interface IFooterSocial {
  icon: string;
  url: string;
}

export interface IFooterLink {
  label: string;
  url: string;
}

export interface IFooterWidget {
  title: string;
  links: IFooterLink[];
}

export interface IFooterContact {
  title: string;
  phone: string;
  address: string;
}

export interface IFooterCopyright {
  text: string;
  author: string;
  url: string;
  links: IFooterLink[];
}

export interface IFooterData {
  backgroundImage: string;
  cta: IFooterCTA;
  logo: IFooterLogo;
  description: string;
  socials: IFooterSocial[];
  company: IFooterWidget;
  useful: IFooterWidget;
  contact: IFooterContact;
  copyright: IFooterCopyright;
}

const footerData: IFooterData = {
  backgroundImage: "/assets/imgs/shape/shape-42.webp",
  cta: {
    subtitle: "GET IN TOUCH",
    title: "LET’S CONNECT",
    url: "/marketing-agency/contact",
    buttonText: "Contact Us",
  },
  logo: {
    src: "/assets/imgs/logo/logo-2-light.png",
    url: "/marketing-agency/",
  },
  description: "We place great emphasis on designers, artists, and brands.",
  socials: [
    { icon: "fa-brands fa-facebook-f", url: "#" },
    { icon: "fa-brands fa-twitter", url: "#" },
    { icon: "fa-brands fa-linkedin-in", url: "#" },
  ],
  company: {
    title: "Company",
    links: [
      { label: "About Us", url: "/marketing-agency/about" },
      { label: "Our portfolio", url: "#" },
      { label: "Our services", url: "#" },
      { label: "Careers", url: "#" },
    ],
  },
  useful: {
    title: "Useful Links",
    links: [
      { label: "Blog grid", url: "#" },
      { label: "Blog standard", url: "#" },
      { label: "Blog details", url: "/marketing-agency/blog-details" },
      { label: "Contact us", url: "/marketing-agency/contact" },
    ],
  },
  contact: {
    title: "Contact Us",
    phone: "888 054 7860",
    address: "410 Sandtown,\nCalifornia 56044, USA",
  },
  copyright: {
    text: "Copyright © 2025",
    author: "Pixavation",
    url: "https://themeforest.net/user/pixavation",
    links: [{ label: "Terms & Conditions", url: "#" }],
  },
};

export default footerData;

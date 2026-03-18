export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface FooterData {
  bgImage: string;
  cta: {
    title: string;
    buttonText: string;
    buttonLink: string;
    iconClass: string;
  };
  logo: string;
  logoLink: string;
  navLinks: FooterLink[];
  socialLinks: SocialLink[];
  copyright: {
    text: string;
    linkText: string;
    linkHref: string;
    navItems: FooterLink[];
  };
}

const footerData: FooterData = {
  bgImage: "/assets/imgs/shape/shape-46.webp",
  cta: {
    title: "Transform Your Brand with <br>AI-Powered insights",
    buttonText: "Let’s Start",
    buttonLink: "/ai-agency/contact",
    iconClass: "fa-solid fa-arrow-right",
  },
  logo: "/assets/imgs/logo/logo-4-light.png",
  logoLink: "/ai-agency",
  navLinks: [
    { label: "About", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Contact", href: "#" },
  ],
  socialLinks: [
    { icon: "fa-brands fa-instagram", href: "#" },
    { icon: "fa-brands fa-facebook-f", href: "#" },
    { icon: "fa-brands fa-behance", href: "#" },
    { icon: "fa-brands fa-linkedin-in", href: "#" },
  ],
  copyright: {
    text: "Powered by",
    linkText: "pixavation",
    linkHref: "https://themeforest.net/user/pixavation",
    navItems: [
      { label: "Blogs", href: "#" },
      { label: "Terms & conditions", href: "#" },
      { label: "FAQ’s", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
};

export default footerData;
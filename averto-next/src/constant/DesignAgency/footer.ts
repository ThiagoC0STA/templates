export interface IFooterCTA {
  subtitle: string;
  title: string;
  btnText: string;
  href: string;
  icon: string;
}

export interface IFooterSocial {
  icon: string;
  href: string;
}

export interface IFooterLink {
  label: string;
  href: string;
}

export interface IFooterWidget {
  title: string;
  links?: IFooterLink[];
  contacts?: {
    phone?: {
      label: string;
      text: string;
      href: string;
    };
    address?: {
      label: string;
      lines: string[];
    };
  };
}

export interface IFooterCopyright {
  year: string;
  company: string;
  link: string;
  terms: IFooterLink;
}

export interface FooterData {
  cta: IFooterCTA;
  logo: string;
  description: string;
  social: IFooterSocial[];
  widgets: IFooterWidget[];
  copyright: IFooterCopyright;
}
const footerData:FooterData = {
  cta: {
    subtitle: "GET IN TOUCH",
    title: "LET’S CONNECT",
    btnText: "Contact Us",
    href: "/design-agency/contact",
    icon: "fa-solid fa-arrow-right",
  },
  logo: "/assets/imgs/logo/logo-2-light.png",
  description: "We place great emphasis on designers, artists, and brands.",
  social: [
    { icon: "fa-brands fa-facebook-f", href: "#" },
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-linkedin-in", href: "#" },
  ],
  widgets: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/design-agency/about" },
        { label: "Our portfolio", href: "/design-agency/portfolio" },
        { label: "Our services", href: "/design-agency/services" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Useful Links",
      links: [
        { label: "Blog grid", href: "/design-agency/blog-grid" },
        { label: "Blog standard", href: "/design-agency/blog-standard" },
        { label: "Blog details", href: "/design-agency/blog-details" },
        { label: "Contact us", href: "/design-agency/contact" },
      ],
    },
    {
      title: "Contact Us",
      contacts: {
        phone: {
          label: "Call Us",
          text: "888 054 7860",
          href: "tel:8880547860",
        },
        address: {
          label: "Location",
          lines: ["410 Sandtown,", "California 56044, USA"],
        },
      },
    },
  ],
  copyright: {
    year: "2025",
    company: "Pixavation",
    link: "https://themeforest.net/user/pixavation",
    terms: { label: "Terms & Conditions", href: "#" },
  },
};

export default footerData;

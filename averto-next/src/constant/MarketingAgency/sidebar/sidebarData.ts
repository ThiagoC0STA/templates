export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {
  logo: "/assets/imgs/logo/logo.png",
  menus: [
    {
      label: "Home",
      children: [
        { label: "Creative Agency", href: "/creative-agency" },
        { label: "Design Agency", href: "/design-agency" },
        { label: "Digital Agency", href: "/digital-agency" },
        { label: "AI Agency", href: "/ai-agency" },
        { label: "Marketing Agency", href: "/marketing-agency" },
        { label: "Digital Collective", href: "/digital-collective" },
        { label: "Marketing Agency V2", href: "/marketing-agency-v2" },
        { label: "Financial Advisor", href: "/financial-advisor" },
      ],
    },
    {
      label: "Pages",
      children: [
        { label: "About Us", href: "/marketing-agency/about" },
        {
          label: "Service",
          children: [
            { label: "Services", href: "/marketing-agency/services" },
            {
              label: "Service Details",
              href: "/marketing-agency/service-details",
            },
          ],
        },
        {
          label: "Portfolio Pages",
          children: [
            { label: "Portfolio", href: "/marketing-agency/portfolio" },
            { label: "Portfolio 02", href: "/marketing-agency/portfolio-02" },
            { label: "Portfolio 03", href: "/marketing-agency/portfolio-03" },
            {
              label: "Portfolio Details",
              href: "/marketing-agency/portfolio-details",
            },
          ],
        },
        { label: "Team", href: "/marketing-agency/team" },
        {
          label: "Blog Pages",
          children: [
            { label: "Blog", href: "/marketing-agency/blog" },
            { label: "Blog Grid", href: "/marketing-agency/blog-grid" },
            { label: "Blog Details", href: "/marketing-agency/blog-details" },
          ],
        },
        { label: "FAQ", href: "/marketing-agency/faq" },
        { label: "Contact", href: "/marketing-agency/contact" },
      ],
    },
    {
      label: "Portfolio",
      children: [
        { label: "Portfolio", href: "/marketing-agency/portfolio" },
        {
          label: "Portfolio Details",
          href: "/marketing-agency/portfolio-details",
        },
      ],
    },
    { label: "Contact Us", href: "/marketing-agency/contact" },
  ],
  closeIcon: "fas fa-times",
  title: "Hello There!",
  description:
    "We offer comprehensive range of services to help your business thrive.",
  cta: {
    text: "Let’s Connect",
    href: "/marketing-agency/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [
    "/assets/imgs/gallery/image-48.webp",
    "/assets/imgs/gallery/image-49.webp",
    "/assets/imgs/gallery/image-50.webp",
    "/assets/imgs/gallery/image-51.webp",
  ],
  contact: {
    phone: { text: "+2230 6965 119", href: "tel:+22306965119" },
    email: { text: "averto@gmail.com", href: "mailto:averto@gmail.com" },
    address: "Avenue de Roma 1588, Lisboa",
  },
  social: [
    { label: "FB", href: "#" },
    { label: "LN", href: "#" },
    { label: "IN", href: "#" },
    { label: "BE", href: "#" },
  ],
  footerLogo: "/assets/imgs/logo/logo-6.png",
};

export default sidebar;

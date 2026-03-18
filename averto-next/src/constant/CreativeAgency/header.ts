export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

export interface HeaderData {
  logo: string;
  menu: MenuItem[];
  offcanvasIcon: string;
}

const header: HeaderData = {
  logo: "/assets/imgs/logo/logo.png",
  menu: [
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
        { label: "About Us", href: "/creative-agency/about" },
        {
          label: "Service",
          children: [
            { label: "Services", href: "/creative-agency/services" },
            {
              label: "Service Details",
              href: "/creative-agency/service-details",
            },
          ],
        },
        {
          label: "Portfolio Pages",
          children: [
            { label: "Portfolio", href: "/creative-agency/portfolio" },
            {
              label: "Portfolio grid",
              href: "/creative-agency/portfolio-grid",
            },
            {
              label: "Portfolio Slider",
              href: "/creative-agency/portfolio-slider",
            },
            {
              label: "Portfolio Details",
              href: "/creative-agency/portfolio-details",
            },
          ],
        },
        { label: "Team", href: "/creative-agency/team" },
        {
          label: "Blog Pages",
          children: [
            { label: "Blog", href: "/creative-agency/blog" },
            { label: "Blog Grid", href: "/creative-agency/blog-grid" },
            { label: "Blog Details", href: "/creative-agency/blog-details" },
          ],
        },
        { label: "FAQ", href: "/creative-agency/faq" },
        { label: "Contact", href: "/creative-agency/contact" },
      ],
    },
    {
      label: "Portfolio",
      children: [
        { label: "Portfolio", href: "/creative-agency/portfolio" },
        { label: "Portfolio grid", href: "/creative-agency/portfolio-grid" },
        {
          label: "Portfolio Slider",
          href: "/creative-agency/portfolio-slider",
        },
        {
          label: "Portfolio Details",
          href: "/creative-agency/portfolio-details",
        },
      ],
    },
    { label: "Contact Us", href: "/creative-agency/contact" },
  ],
  offcanvasIcon: "/assets/imgs/icon/icon-4.webp",
};

export default header;

export interface MenuData {
  label: string;
  href?: string;
  children?: MenuData[];
}

export interface HeaderData {
  logo: string;
  offcanvasIcon: string;
  menu: MenuData[];
}

const headerData = {
  logo: "/assets/imgs/logo/logo.png",
  offcanvasIcon: "/assets/imgs/icon/bar.svg",
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
    { label: "About Us", href: "/design-agency/about" },
    {
      label: "Service",
      children: [
        { label: "Services", href: "/design-agency/services" },
        { label: "Service Details", href: "/design-agency/service-details" },
      ],
    },
    {
      label: "Pages",
      children: [
        { label: "About Us", href: "/design-agency/about" },
        {
          label: "Service",
          children: [
            { label: "Services", href: "/design-agency/services" },
            {
              label: "Service Details",
              href: "/design-agency/service-details",
            },
          ],
        },
        {
          label: "Portfolio Pages",
          children: [
            { label: "Portfolio", href: "/design-agency/portfolio" },
            { label: "Portfolio grid", href: "/design-agency/portfolio-grid" },
            {
              label: "Portfolio Slider",
              href: "/design-agency/portfolio-slider",
            },
            {
              label: "Portfolio Details",
              href: "/design-agency/portfolio-details",
            },
          ],
        },
        { label: "Team", href: "/design-agency/team" },
        {
          label: "Blog Pages",
          children: [
            { label: "Blog", href: "/design-agency/blog" },
            { label: "Blog Grid", href: "/design-agency/blog-grid" },
            { label: "Blog Details", href: "/design-agency/blog-details" },
          ],
        },
        { label: "FAQ", href: "/design-agency/faq" },
        { label: "Contact", href: "/design-agency/contact" },
      ],
    },
    {
      label: "Blog",
      children: [
        { label: "Blog", href: "/design-agency/blog" },
        { label: "Blog Grid", href: "/design-agency/blog-grid" },
        { label: "Blog Details", href: "/design-agency/blog-details" },
      ],
    },
    { label: "Contact", href: "/design-agency/contact" },
  ],
};

export default headerData;

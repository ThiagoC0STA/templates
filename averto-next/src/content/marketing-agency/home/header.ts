import Logo from "@/../public/assets/imgs/logo/logo.png";
import CreativeAgency from "@/../public/assets/imgs/home-page/1.png";
import DesignAgency from "@/../public/assets/imgs/home-page/2.png";
import DigitalAgency from "@/../public/assets/imgs/home-page/3.png";
import AiAgency from "@/../public/assets/imgs/home-page/4.png";
import MarketingAgency from "@/../public/assets/imgs/home-page/5.png";
import MegaMenuHome1 from "@/assets/images/mega-menu/mega-menu-home-1.png";
import MegaMenuHome2 from "@/assets/images/mega-menu/mega-menu-home-2.png";
import MegaMenuHome9 from "@/assets/images/mega-menu/mega-menu-home-9.png";
import { HeaderContent } from "@/types/marketing-agency/header";

export const headerContent: HeaderContent = {
  logo: {
    src: Logo,
    alt: "averto Logo",
    href: "/marketing-agency-v2",
  },
  navigation: [
    {
      id: "home",
      title: "Home",
      isMegaMenu: true,
      megaMenuItems: [
        {
          id: "creative-agency",
          title: "Creative Agency",
          image: CreativeAgency,
          alt: "mega-menu-home-1",
          href: "/creative-agency",
          isActive: false,
        },
        {
          id: "design-agency",
          title: "Design Agency",
          image: DesignAgency,
          alt: "mega-menu-home-2",
          href: "/design-agency",
          isActive: true,
        },
        {
          id: "digital-agency",
          title: "Digital Agency",
          image: DigitalAgency,
          alt: "mega-menu-home-3",
          href: "/digital-agency",
        },
        {
          id: "ai-agency",
          title: "AI Agency",
          image: AiAgency,
          alt: "mega-menu-home-4",
          href: "/ai-agency",
        },
        {
          id: "marketing-advisor",
          title: "Marketing Advisor",
          image: MarketingAgency,
          alt: "mega-menu-home-6",
          href: "/marketing-advisor",
        },
        {
          id: "digital-collective",
          title: "Digital Collective",
          image: MegaMenuHome1,
          alt: "mega-menu-home-1",
          href: "/digital-collective",
        },
        {
          id: "marketing-agency-v2",
          title: "Marketing Agency v2",
          image: MegaMenuHome2,
          alt: "mega-menu-home-8",
          href: "/marketing-agency-v2",
        },
        {
          id: "financial-advisor",
          title: "Financial Advisor",
          image: MegaMenuHome9,
          alt: "mega-menu-home-9",
          href: "/financial-advisor",
        },
      ],
    },
    {
      id: "pages",
      title: "Pages",
      sections: [
        {
          id: "service-section",
          title: "Service",
          items: [
            {
              id: "service-default",
              title: "Service Default",
              href: "/marketing-agency-v2/service",
            },
            {
              id: "service-grid",
              title: "Service Grid",
              href: "/marketing-agency-v2/service-grid",
            },
            {
              id: "service-details",
              title: "Service Details",
              href: "/marketing-agency-v2/service-details",
            },
          ],
        },
        {
          id: "portfolio-section",
          title: "Portfolio",
          items: [
            {
              id: "portfolio-default",
              title: "Portfolio Default",
              href: "/marketing-agency-v2/portfolio",
            },
            {
              id: "portfolio-masonry",
              title: "Portfolio Masonry",
              href: "/marketing-agency-v2/portfolio-masonry",
            },
            {
              id: "portfolio-details",
              title: "Portfolio Details",
              href: "/marketing-agency-v2/portfolio-details",
            },
          ],
        },
        {
          id: "team-section",
          title: "Team",
          items: [
            { id: "team", title: "Team", href: "/marketing-agency-v2/team" },
            {
              id: "team-details",
              title: "Team Details",
              href: "/marketing-agency-v2/team-details",
            },
          ],
        },
      ],
      subItems: [
        { id: "faq", title: "FAQ", href: "/marketing-agency-v2/faq" },
        // { id: "error-404", title: "Error 404", href: "/marketing-agency-v2/404" },
      ],
    },
    {
      id: "blog",
      title: "Blog",
      subItems: [
        {
          id: "blog-default",
          title: "Blog Default",
          href: "/marketing-agency-v2/blog",
        },
        {
          id: "blog-standard",
          title: "Blog Standard",
          href: "/marketing-agency-v2/blog-standard",
        },
        {
          id: "blog-grid",
          title: "Blog Grid",
          href: "/marketing-agency-v2/blog-grid",
        },
        {
          id: "blog-details",
          title: "Blog Details",
          href: "/marketing-agency-v2/blog-details",
        },
      ],
    },
    {
      id: "about-us",
      title: "About Us",
      href: "/marketing-agency-v2/about",
    },
    {
      id: "contact",
      title: "Contact",
      href: "/marketing-agency-v2/contact",
    },
  ],
  contactButton: {
    text: "Contact Us",
    href: "/marketing-agency-v2/contact",
    className: "common-btn square-btn",
  },
  currentYear: new Date().getFullYear(),
};

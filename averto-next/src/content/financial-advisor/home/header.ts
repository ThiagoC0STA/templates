import { HeaderContent } from "@/types/financial-advisor/header";
import Logo from "@/../public/assets/imgs/logo/logo.png";
import CreativeAgency from "@/../public/assets/imgs/home-page/1.png";
import DesignAgency from "@/../public/assets/imgs/home-page/2.png";
import DigitalAgency from "@/../public/assets/imgs/home-page/3.png";
import AiAgency from "@/../public/assets/imgs/home-page/4.png";
import MarketingAgency from "@/../public/assets/imgs/home-page/5.png";
import MegaMenuHome1 from "@/assets/images/mega-menu/mega-menu-home-1.png";
import MegaMenuHome2 from "@/assets/images/mega-menu/mega-menu-home-2.png";
import MegaMenuHome9 from "@/assets/images/mega-menu/mega-menu-home-9.png";

export const headerContent: HeaderContent = {
  logo: {
    image: Logo,
    alt: "averto Logo",
    href: "/financial-advisor",
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
          active: false,
        },
        {
          id: "design-agency",
          title: "Design Agency",
          image: DesignAgency,
          alt: "mega-menu-home-2",
          href: "/design-agency",
          active: true,
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
              href: "/financial-advisor/service",
            },
            {
              id: "service-grid",
              title: "Service Grid",
              href: "/financial-advisor/service-grid",
            },
            {
              id: "service-details",
              title: "Service Details",
              href: "/financial-advisor/service-details",
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
              href: "/financial-advisor/portfolio",
            },
            {
              id: "portfolio-masonry",
              title: "Portfolio Masonry",
              href: "/financial-advisor/portfolio-masonry",
            },
            {
              id: "portfolio-details",
              title: "Portfolio Details",
              href: "/financial-advisor/portfolio-details",
            },
          ],
        },
        {
          id: "team-section",
          title: "Team",
          items: [
            { id: "team", title: "Team", href: "/financial-advisor/team" },
            {
              id: "team-details",
              title: "Team Details",
              href: "/financial-advisor/team-details",
            },
            // { id: "testimonials", title: "Testimonials", href: "/financial-advisor/testimonials" },
          ],
        },
      ],
      subItems: [
        { id: "faq", title: "FAQ", href: "/financial-advisor/faq" },
        // { id: "error-404", title: "Error 404", href: "/financial-advisor/404" },
      ],
    },
    {
      id: "blog",
      title: "Blog",
      subMenuItems: [
        {
          id: "blog-default",
          title: "Blog Default",
          href: "/financial-advisor/blog",
        },
        {
          id: "blog-standard",
          title: "Blog Standard",
          href: "/financial-advisor/blog-standard",
        },
        {
          id: "blog-grid",
          title: "Blog Grid",
          href: "/financial-advisor/blog-grid",
        },
        {
          id: "blog-details",
          title: "Blog Details",
          href: "/financial-advisor/blog-details",
        },
      ],
    },
    {
      id: "about",
      title: "About",
      href: "/financial-advisor/about",
    },
    {
      id: "contact",
      title: "Contact",
      href: "/financial-advisor/contact",
    },
  ],
  searchPlaceholder: "Search here...",
  currentYear: new Date().getFullYear(),
};

import Logo from "@/../public/assets/imgs/logo/logo.png";
import CreativeAgency from "@/../public/assets/imgs/home-page/1.png";
import DesignAgency from "@/../public/assets/imgs/home-page/2.png";
import DigitalAgency from "@/../public/assets/imgs/home-page/3.png";
import AiAgency from "@/../public/assets/imgs/home-page/4.png";
import MarketingAgency from "@/../public/assets/imgs/home-page/5.png";
import MegaMenuHome1 from "@/assets/images/mega-menu/mega-menu-home-1.png";
import MegaMenuHome2 from "@/assets/images/mega-menu/mega-menu-home-2.png";
import MegaMenuHome9 from "@/assets/images/mega-menu/mega-menu-home-9.png";
import { StaticImageData } from "next/image";

export interface HomePage {
  name: string;
  href: string;
  image: StaticImageData;
  isActive?: boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Navigation {
  services: NavigationItem[];
  portfolio: NavigationItem[];
  team: NavigationItem[];
  blog: NavigationItem[];
  directLinks: NavigationItem[];
}

export interface HeaderButtons {
  letsTalk: string;
  search: string;
}

export interface Contact {
  id: string;
  title: string;
  value: string;
  href?: string;
  icon: string;
}

export interface SidebarData {
  logo: StaticImageData;
  closeIcon: string;
  description: string;
  contacts: Contact[];
  copyright: {
    brand: string;
    text: string;
  };
}

export interface HeaderContent {
  logo: StaticImageData;
  homePages: HomePage[];
  navigation: Navigation;
  buttons: HeaderButtons;
  sidebarData: SidebarData;
}

export const headerContent: HeaderContent = {
  logo: Logo,
  homePages: [
    {
      name: "Creative Agency",
      href: "/creative-agency",
      image: CreativeAgency,
      isActive: true,
    },
    {
      name: "Design Agency",
      href: "/design-agency",
      image: DesignAgency,
    },
    {
      name: "Digital Agency",
      href: "/digital-agency",
      image: DigitalAgency,
    },
    {
      name: "AI Agency",
      href: "/ai-agency",
      image: AiAgency,
    },
    {
      name: "Marketing Agency",
      href: "/marketing-agency",
      image: MarketingAgency,
    },
    {
      name: "Digital Collective",
      href: "/digital-collective",
      image: MegaMenuHome1,
    },
    {
      name: "Marketing Agency v2",
      href: "/marketing-agency-v2",
      image: MegaMenuHome2,
    },
    {
      name: "Financial Advisor",
      href: "/financial-advisor",
      image: MegaMenuHome9,
    },
  ],
  navigation: {
    services: [
      { name: "Service", href: "/digital-collective/service" },
      { name: "Service Details", href: "/digital-collective/service-details" },
    ],
    portfolio: [
      { name: "Portfolio Default", href: "/digital-collective/portfolio" },
      {
        name: "Portfolio Masonry",
        href: "/digital-collective/portfolio-masonry",
      },
      {
        name: "Portfolio Details",
        href: "/digital-collective/portfolio-details",
      },
    ],
    team: [
      { name: "Team", href: "/digital-collective/team" },
      { name: "Team Details", href: "/digital-collective/team-details" },
    ],
    blog: [
      { name: "Blog Default", href: "/digital-collective/blog" },
      { name: "Blog Standard", href: "/digital-collective/blog-standard" },
      { name: "Blog Grid", href: "/digital-collective/blog-grid" },
      { name: "Blog Details", href: "/digital-collective/blog-details" },
    ],
    directLinks: [
      { name: "About Us", href: "/digital-collective/about" },
      { name: "Contact", href: "/digital-collective/contact" },
      { name: "FAQ", href: "/digital-collective/faq" },
      // { name: "Error 404", href: "/digital-collective/404" },
    ],
  },
  buttons: {
    letsTalk: "Let's Talk",
    search: "Search",
  },
  sidebarData: {
    logo: Logo,
    closeIcon: "bi bi-x-lg",
    description:
      "Discover, Explore & Understanding The Product Description Maecenas ullamcorper eros libero, facilities tempore mi darius vel. Sed ut felid ligula. Pellentesque.",
    contacts: [
      {
        id: "1",
        title: "Contact Us 24/7",
        value: "+55 (9900) 666 22",
        href: "tel:+55990066622",
        icon: "bi bi-telephone",
      },
      {
        id: "2",
        title: "Contact Mail",
        value: "info.averto@demo.com",
        href: "mailto:info.averto@demo.com",
        icon: "bi bi-envelope",
      },
      {
        id: "3",
        title: "Contact Location",
        value: "18/2, Topkhana Road, Australia.",
        icon: "bi bi-geo-alt",
      },
    ],
    copyright: {
      brand: "@averto",
      text: ".Copyright © 2024",
    },
  },
};

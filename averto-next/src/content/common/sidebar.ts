import logoImage from "@/../public/assets/imgs/logo/logo-light.png";
import PhoneIconTwo from "@/icons/PhoneIconTwo";
import MailIconThree from "@/icons/MailIconThree";
import PinIconTwo from "@/icons/PinIconTwo";
import type { SidebarData } from "@/types/common/sidebar";

export const defaultSidebarData: SidebarData = {
  logo: {
    image: logoImage,
    alt: "averto",
    href: "/digital-collective",
  },
  closeIcon: "bi bi-x-lg",
  menus: [
    {
      id: "home",
      title: "Home",
      items: [
        { title: "Creative Agency", href: "/creative-agency" },
        { title: "Design Agency", href: "/design-agency" },
        { title: "Digital Agency", href: "/digital-agency" },
        { title: "AI Agency", href: "/ai-agency" },
        { title: "Marketing Agency", href: "/marketing-agency" },
        { title: "Digital Collective", href: "/digital-collective" },
        { title: "Marketing Agency V2", href: "/marketing-agency-v2" },
        { title: "Financial Advisor", href: "/financial-advisor" },
      ],
    },
    {
      id: "services",
      title: "Services",
      items: [
        { title: "Service Default", href: "/digital-collective/service" },
        { title: "Service Grid", href: "/digital-collective/service-grid" },
        {
          title: "Service Details",
          href: "/digital-collective/service-details",
        },
      ],
    },
    {
      id: "pages",
      title: "Pages",
      subMenus: [
        {
          title: "Service",
          items: [
            { title: "Service Default", href: "/digital-collective/service" },
            { title: "Service Grid", href: "/digital-collective/service-grid" },
            {
              title: "Service Details",
              href: "/digital-collective/service-details",
            },
          ],
        },
        {
          title: "Portfolio",
          items: [
            {
              title: "Portfolio Default",
              href: "/digital-collective/portfolio",
            },
            {
              title: "Portfolio Masonry",
              href: "/digital-collective/portfolio-masonry",
            },
            {
              title: "Portfolio Details",
              href: "/digital-collective/portfolio-details",
            },
          ],
        },
        {
          title: "Team",
          items: [
            { title: "Team", href: "/digital-collective/team" },
            { title: "Team Details", href: "/digital-collective/team-details" },
          ],
        },
      ],
      additionalItems: [
        { title: "FAQ", href: "/digital-collective/faq" },
        // { title: "Error 404", href: "/digital-collective/404" },
      ],
    },
  ],
  directNavItems: [
    { title: "About Us", href: "/digital-collective/about" },
    { title: "Contact", href: "/digital-collective/contact" },
  ],
  sidePanel: {
    description:
      "Discover, Explore & Understanding The Product Description Maecenas ullamcorper eros libero, facilities tempore mi darius vel. Sed ut felid ligula. Pellentesque.",
    contacts: [
      {
        icon: PhoneIconTwo,
        title: "Contact Us 24/7",
        value: "+55 (9900) 666 22",
        href: "tel:+55990066622",
      },
      {
        icon: MailIconThree,
        title: "Contact Mail",
        value: "info.averto@demo.com",
        href: "mailto:info.averto@demo.com",
      },
      {
        icon: PinIconTwo,
        title: "Contact Location",
        value: "18/2, Topkhana Road, Australia.",
        href: null,
      },
    ],
    copyright: {
      brand: "@averto",
      text: `.Copyright © ${new Date().getFullYear()}`,
    },
  },
};

export const marketingAgencyV2SidebarData: SidebarData = {
  logo: {
    image: logoImage,
    alt: "averto",
    href: "/marketing-agency-v2",
  },
  closeIcon: "bi bi-x-lg",
  menus: [
    {
      id: "home",
      title: "Home",
      items: [
        { title: "Creative Agency", href: "/creative-agency" },
        { title: "Design Agency", href: "/design-agency" },
        { title: "Digital Agency", href: "/digital-agency" },
        { title: "AI Agency", href: "/ai-agency" },
        { title: "Marketing Agency", href: "/marketing-agency" },
        { title: "Digital Collective", href: "/digital-collective" },
        { title: "Marketing Agency V2", href: "/marketing-agency-v2" },
        { title: "Financial Advisor", href: "/financial-advisor" },
      ],
    },
    {
      id: "services",
      title: "Services",
      items: [
        { title: "Service Default", href: "/marketing-agency-v2/service" },
        { title: "Service Grid", href: "/marketing-agency-v2/service-grid" },
        {
          title: "Service Details",
          href: "/marketing-agency-v2/service-details",
        },
      ],
    },
    {
      id: "pages",
      title: "Pages",
      subMenus: [
        {
          title: "Service",
          items: [
            { title: "Service Default", href: "/marketing-agency-v2/service" },
            {
              title: "Service Grid",
              href: "/marketing-agency-v2/service-grid",
            },
            {
              title: "Service Details",
              href: "/marketing-agency-v2/service-details",
            },
          ],
        },
        {
          title: "Portfolio",
          items: [
            {
              title: "Portfolio Default",
              href: "/marketing-agency-v2/portfolio",
            },
            {
              title: "Portfolio Masonry",
              href: "/marketing-agency-v2/portfolio-masonry",
            },
            {
              title: "Portfolio Details",
              href: "/marketing-agency-v2/portfolio-details",
            },
          ],
        },
        {
          title: "Team",
          items: [
            { title: "Team", href: "/marketing-agency-v2/team" },
            {
              title: "Team Details",
              href: "/marketing-agency-v2/team-details",
            },
          ],
        },
      ],
      additionalItems: [
        { title: "FAQ", href: "/marketing-agency-v2/faq" },
        // { title: "Error 404", href: "/marketing-agency-v2/404" },
      ],
    },
  ],
  directNavItems: [
    { title: "About Us", href: "/marketing-agency-v2/about" },
    { title: "Contact", href: "/marketing-agency-v2/contact" },
  ],
  sidePanel: {
    description:
      "Discover, Explore & Understanding The Product Description Maecenas ullamcorper eros libero, facilities tempore mi darius vel. Sed ut felid ligula. Pellentesque.",
    contacts: [
      {
        icon: PhoneIconTwo,
        title: "Contact Us 24/7",
        value: "+55 (9900) 666 22",
        href: "tel:+55990066622",
      },
      {
        icon: MailIconThree,
        title: "Contact Mail",
        value: "info.averto@demo.com",
        href: "mailto:info.averto@demo.com",
      },
      {
        icon: PinIconTwo,
        title: "Contact Location",
        value: "18/2, Topkhana Road, Australia.",
        href: null,
      },
    ],
    copyright: {
      brand: "@averto",
      text: `.Copyright © ${new Date().getFullYear()}`,
    },
  },
};
export const financialAdvisorSidebarData: SidebarData = {
  logo: {
    image: logoImage,
    alt: "averto",
    href: "/financial-advisor",
  },
  closeIcon: "bi bi-x-lg",
  menus: [
    {
      id: "home",
      title: "Home",
      items: [
        { title: "Creative Agency", href: "/creative-agency" },
        { title: "Design Agency", href: "/design-agency" },
        { title: "Digital Agency", href: "/digital-agency" },
        { title: "AI Agency", href: "/ai-agency" },
        { title: "Marketing Agency", href: "/marketing-agency" },
        { title: "Digital Collective", href: "/digital-collective" },
        { title: "Marketing Agency V2", href: "/marketing-agency-v2" },
        { title: "Financial Advisor", href: "/financial-advisor" },
      ],
    },
    {
      id: "services",
      title: "Services",
      items: [
        { title: "Service Default", href: "/financial-advisor/service" },
        { title: "Service Grid", href: "/financial-advisor/service-grid" },
        {
          title: "Service Details",
          href: "/financial-advisor/service-details",
        },
      ],
    },
    {
      id: "pages",
      title: "Pages",
      subMenus: [
        {
          title: "Service",
          items: [
            { title: "Service Default", href: "/financial-advisor/service" },
            { title: "Service Grid", href: "/financial-advisor/service-grid" },
            {
              title: "Service Details",
              href: "/financial-advisor/service-details",
            },
          ],
        },
        {
          title: "Portfolio",
          items: [
            {
              title: "Portfolio Default",
              href: "/financial-advisor/portfolio",
            },
            {
              title: "Portfolio Masonry",
              href: "/financial-advisor/portfolio-masonry",
            },
            {
              title: "Portfolio Details",
              href: "/financial-advisor/portfolio-details",
            },
          ],
        },
        {
          title: "Team",
          items: [
            { title: "Team", href: "/financial-advisor/team" },
            { title: "Team Details", href: "/financial-advisor/team-details" },
          ],
        },
      ],
      additionalItems: [
        { title: "FAQ", href: "/financial-advisor/faq" },
        // { title: "Error 404", href: "/financial-advisor/404" },
      ],
    },
  ],
  directNavItems: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  sidePanel: {
    description:
      "Discover, Explore & Understanding The Product Description Maecenas ullamcorper eros libero, facilities tempore mi darius vel. Sed ut felid ligula. Pellentesque.",
    contacts: [
      {
        icon: PhoneIconTwo,
        title: "Contact Us 24/7",
        value: "+55 (9900) 666 22",
        href: "tel:+55990066622",
      },
      {
        icon: MailIconThree,
        title: "Contact Mail",
        value: "info.averto@demo.com",
        href: "mailto:info.averto@demo.com",
      },
      {
        icon: PinIconTwo,
        title: "Contact Location",
        value: "18/2, Topkhana Road, Australia.",
        href: null,
      },
    ],
    copyright: {
      brand: "@averto",
      text: `.Copyright © ${new Date().getFullYear()}`,
    },
  },
};

export default defaultSidebarData;

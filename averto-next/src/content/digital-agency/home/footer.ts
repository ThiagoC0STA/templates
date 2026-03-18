import LogoLight from "@/assets/images/logo-light.svg";

export const footerContent = {
  topSection: {
    title: "Let's create something great!",
    description:
      "Ready to elevate your brand? Contact us today to start your journey towards digital excellence",
    buttons: {
      primary: {
        text: "Get Started",
        href: "/digital-collective/contact",
      },
      secondary: {
        text: "Schedule Meet",
        href: "/digital-collective/contact",
      },
    },
  },
  bodySection: {
    logo: LogoLight,
    description: "A multidisciplinary digital agency based in United Kingdom.",
    navigation: {
      services: {
        title: "Services",
        links: [
          { name: "Branding", href: "/digital-collective/service-details" },
          {
            name: "Product Design",
            href: "/digital-collective/service-details",
          },
          { name: "Development", href: "/digital-collective/service-details" },
          {
            name: "Digital Marketing",
            href: "/digital-collective/service-details",
          },
          {
            name: "Motion Graphics",
            href: "/digital-collective/service-details",
          },
        ],
      },
      quickLinks: {
        title: "Quick Links",
        links: [
          { name: "Home", href: "/digital-collective" },
          { name: "About Us", href: "/digital-collective/about" },
          { name: "Portfolio", href: "/digital-collective/portfolio" },
          { name: "Blog", href: "/digital-collective/blog" },
          { name: "Contact", href: "/digital-collective/contact" },
        ],
      },
      socialMedia: {
        title: "Follow Us",
        links: [
          { name: "Facebook", href: "#" },
          { name: "Twitter", href: "#" },
          { name: "Instagram", href: "#" },
          { name: "LinkedIn", href: "#" },
          { name: "Dribbble", href: "#" },
        ],
      },
      contactInfo: {
        title: "Contact Us",
        links: [
          { name: "hello@averto.com", href: "mailto:hello@averto.com" },
          { name: "+(405) 123-456", href: "tel:+405123456" },
        ],
      },
    },
  },
  bottomSection: {
    copyright: "Copyright 2024 averto. Inc.",
    location: "17 York Street London, United Kingdom W1W7AB",
  },
};

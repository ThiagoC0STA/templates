import logoLarge from "@/assets/images/logo-large.svg";
import { FooterContent } from "@/types/financial-advisor/footer";

export const footerContent: FooterContent = {
  brand: {
    logo: logoLarge,
    logoHref: "/financial-advisor",
    description: "Personalized Financial Planning & Investment Management",
    socialLinks: [
      {
        name: "Facebook",
        href: "#",
        icon: "fa-brands fa-facebook-f",
      },
      {
        name: "Twitter",
        href: "#",
        icon: "fa-brands fa-x-twitter",
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: "fa-brands fa-linkedin-in",
      },
      {
        name: "Instagram",
        href: "#",
        icon: "fa-brands fa-instagram",
      },
      {
        name: "Telegram",
        href: "#",
        icon: "fa-solid fa-paper-plane",
      },
    ],
  },
  navigationSections: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/financial-advisor" },
        { name: "About us", href: "/financial-advisor/about" },
        { name: "Portfolio", href: "/financial-advisor/portfolio-masonry" },
        { name: "Blog", href: "/financial-advisor/blog-standard" },
        { name: "Contact", href: "/financial-advisor/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "Financial Planning",
          href: "/financial-advisor/service-details",
        },
        {
          name: "Investment Management",
          href: "/financial-advisor/service-details",
        },
        {
          name: "Retirement Planning",
          href: "/financial-advisor/service-details",
        },
        { name: "Tax Planning", href: "/financial-advisor/service-details" },
        { name: "Estate Planning", href: "/financial-advisor/service-details" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms and Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "FAQ", href: "/financial-advisor/faq" },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter Signup",
    emailPlaceholder: "Enter your email address",
    agreementText: "I agree to the",
    privacyPolicyHref: "#",
    privacyPolicyText: "privacy policy",
  },
  bottom: {
    copyrightText: "Copyright {year} averto. Inc.",
    currentYear: new Date().getFullYear(),
  },
};

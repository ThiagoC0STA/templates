"use client";
import { useState } from "react";
import Sidebar from "@/components/AiAgency/SideBar/SideBar";
import Link from "next/link";
import useStickyHeader from "@/Hook/useStickyHeader";

// --- TYPE DEFINITIONS ---
interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}
interface HeaderData {
  logo: {
    href: string;
    src: string;
    alt: string;
  };
  menuItems: MenuItem[];
  cta: {
    href: string;
    label: string;
  };
}

// --- TYPED DATA OBJECT ---
const headerData: HeaderData = {
  logo: {
    href: "/ai-agency",
    src: "/assets/imgs/logo/logo.png",
    alt: "Site Logo",
  },
  menuItems: [
    {
      title: "Home",
      children: [
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
    { title: "About Us", href: "/ai-agency/about" },
    {
      title: "Service",
      children: [
        { title: "Services", href: "/ai-agency/services" },
        { title: "Service Details", href: "/ai-agency/service-details" },
      ],
    },
    {
      title: "Pages",
      children: [
        { title: "About Us", href: "/ai-agency/about" },
        {
          title: "Service",
          children: [
            { title: "Services", href: "/ai-agency/services" },
            { title: "Service Details", href: "/ai-agency/service-details" },
          ],
        },
        {
          title: "Portfolio Pages",
          children: [
            { title: "Portfolio", href: "/ai-agency/portfolio" },
            { title: "Portfolio grid", href: "/ai-agency/portfolio-grid" },
            { title: "Portfolio Slider", href: "/ai-agency/portfolio-slider" },
            {
              title: "Portfolio Details",
              href: "/ai-agency/portfolio-details",
            },
          ],
        },
        { title: "Team", href: "/ai-agency/team" },
        {
          title: "Blog Pages",
          children: [
            { title: "Blog", href: "/ai-agency/blog" },
            { title: "Blog Grid", href: "/ai-agency/blog-grid" },
            { title: "Blog Details", href: "/ai-agency/blog-details" },
          ],
        },
        { title: "FAQ", href: "/ai-agency/faq" },
        { title: "Contact", href: "/ai-agency/contact" },
      ],
    },
    {
      title: "Blog",
      children: [
        { title: "Blog", href: "/ai-agency/blog" },
        { title: "Blog Grid", href: "/ai-agency/blog-grid" },
        { title: "Blog Details", href: "/ai-agency/blog-details" },
      ],
    },
    { title: "Contact", href: "/ai-agency/contact" },
  ],
  cta: {
    href: "/ai-agency/contact",
    label: "Let’s Connect",
  },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const renderMenu = (items: MenuItem[]): JSX.Element[] =>
    items.map((item, index) => (
      <li
        key={index}
        className={item?.children ? "menu-item-has-children" : ""}
      >
        <Link href={item?.href || "#0"}>{item?.title}</Link>
        {item?.children && (
          <ul className="dp-menu">{renderMenu(item?.children)}</ul>
        )}
      </li>
    ));

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-4">
        <div className="header-main header-sticky">
          <div className="container">
            <div className="header-area-4-inner">
              <div className="header-logo">
                <Link href={headerData?.logo?.href}>
                  <img
                    src={headerData?.logo?.src}
                    alt={headerData?.logo?.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>

              <div className="header-nav pos-center">
                <nav className="main-menu d-none d-xl-block">
                  <ul className="flex space-x-6">
                    {renderMenu(headerData?.menuItems)}
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <Link
                  href={headerData?.cta?.href}
                  className="t-btn t-btn-primary bg-active"
                >
                  {headerData?.cta?.label}
                </Link>
              </div>

              <div className="header-offcanvas d-xl-none">
                <button
                  className="side-toggle"
                  onClick={handleSidebar}
                  aria-label="Toggle Sidebar"
                >
                  <img src="/assets/imgs/icon/icon-4.webp" alt="Toggle" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

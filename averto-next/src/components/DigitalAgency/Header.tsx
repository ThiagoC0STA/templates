"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/components/DigitalAgency/SideBar/SideBar";
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
  siteCategory: string;
  menuItems: MenuItem[];
  socialLinks: {
    title: string;
    href: string;
  }[];
  officeLocations: {
    title: string;
    href: string;
  }[];
  offcanvasIconSrc: string;
}

// --- TYPED DATA OBJECT ---
const headerData: HeaderData = {
  logo: {
    href: "/digital-agency/",
    src: "/assets/imgs/logo/logo.png",
    alt: "Site Logo",
  },
  siteCategory: "DIGITAL AGENCY ®",
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
    { title: "About", href: "/digital-agency/about" },
    {
      title: "Service",
      children: [
        { title: "Services", href: "/digital-agency/services" },
        { title: "Service Details", href: "/digital-agency/service-details" },
      ],
    },
    { title: "Contacts", href: "/digital-agency/contact" },
  ],
  socialLinks: [
    { title: "Linkedin", href: "#" },
    { title: "Twitter", href: "#" },
    { title: "Instagram", href: "#" },
  ],
  officeLocations: [{ title: "New York, US", href: "#" }],
  offcanvasIconSrc: "/assets/imgs/icon/icon-4.webp",
};

const Header = () => {
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
      <header className="header-area">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-inner">
              <div className="header-logo">
                <Link href={headerData.logo.href}>
                  <img
                    src={headerData.logo.src}
                    alt={headerData.logo.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>

              <div className="site-category d-none d-md-inline-block">
                {headerData.siteCategory}
              </div>

              <div className="header-nav d-none d-xl-inline-block">
                <nav className="main-menu">
                  <ul>{renderMenu(headerData.menuItems)}</ul>
                </nav>
              </div>

              <div className="social-links d-none d-md-inline-block">
                <ul>
                  {headerData.socialLinks.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="office-location d-none d-md-inline-block">
                <ul>
                  {headerData.officeLocations.map((loc, i) => (
                    <li key={i}>
                      <Link href={loc.href}>{loc.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="header-offcanvas">
                <button
                  className="side-toggle"
                  onClick={handleSidebar}
                  aria-label="Toggle Sidebar"
                >
                  <img src={headerData?.offcanvasIconSrc} alt="Menu Icon" />
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

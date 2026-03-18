"use client";
import Link from "next/link";
import Sidebar from "@/components/DigitalAgency/SideBar/SideBar";
import React, { ReactNode, useState } from "react";
import useStickyHeader from "@/Hook/useStickyHeader";

interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}

interface HeaderData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  menuItems: MenuItem[];
  cta: {
    href: string;
    label: string;
  };
}

const headerData: HeaderData = {
  logo: {
    src: "/assets/imgs/logo/logo.png",
    alt: "Site Logo",
    href: "/digital-agency",
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
    { title: "About Us", href: "/digital-agency/about" },
    {
      title: "Service",
      children: [
        { title: "Services", href: "/digital-agency/services" },
        { title: "Service Details", href: "/digital-agency/service-details" },
      ],
    },
    {
      title: "Pages",
      children: [
        { title: "About Us", href: "/digital-agency/about" },
        {
          title: "Service",
          children: [
            { title: "Services", href: "/digital-agency/services" },
            {
              title: "Service Details",
              href: "/digital-agency/service-details",
            },
          ],
        },
        {
          title: "Portfolio Pages",
          children: [
            { title: "Portfolio", href: "/digital-agency/portfolio" },
            { title: "Portfolio Grid", href: "/digital-agency/portfolio-grid" },
            {
              title: "Portfolio Slider",
              href: "/digital-agency/portfolio-slider",
            },
            {
              title: "Portfolio Details",
              href: "/digital-agency/portfolio-details",
            },
          ],
        },
        { title: "Team", href: "/digital-agency/team" },
        {
          title: "Blog Pages",
          children: [
            { title: "Blog", href: "/digital-agency/blog" },
            { title: "Blog Grid", href: "/digital-agency/blog-grid" },
            { title: "Blog Details", href: "/digital-agency/blog-details" },
          ],
        },
        { title: "FAQ", href: "/digital-agency/faq" },
        { title: "Contact", href: "/digital-agency/contact" },
      ],
    },
    {
      title: "Blog",
      children: [
        { title: "Blog", href: "/digital-agency/blog" },
        { title: "Blog Grid", href: "/digital-agency/blog-grid" },
        { title: "Blog Details", href: "/digital-agency/blog-details" },
      ],
    },
    { title: "Contact", href: "/digital-agency/contact" },
  ],
  cta: {
    href: "/digital-agency/contact",
    label: "Let’s Connect",
  },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const renderMenu = (items: MenuItem[]): ReactNode[] =>
    items?.map((item, i) => (
      <li key={i} className={item?.children ? "menu-item-has-children" : ""}>
        {item?.href ? (
          <Link href={item?.href}>{item?.title}</Link>
        ) : (
          <Link href="#0">{item?.title}</Link>
        )}
        {item?.children && (
          <ul className="dp-menu">{renderMenu(item?.children)}</ul>
        )}
      </li>
    ));

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-2">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-2-inner">
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
                  <ul>{renderMenu(headerData?.menuItems)}</ul>
                </nav>
              </div>
              <div className="header-button">
                <div className="t-btn-group">
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-primary"
                  >
                    {headerData?.cta?.label}
                  </Link>
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="header-offcanvas d-xl-none">
                <button className="side-toggle" onClick={handleSidebar}>
                  <i className="fa-solid fa-bars"></i>
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
